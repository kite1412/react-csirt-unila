import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import API from "../../utils/axiosConfig";

// Define API endpoint base URL
// const API_URL = "/auth";

// Async thunks for authentication actions
export const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      const response = await API.post(`auth/register`, {
        username,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await API.post(`auth/login`, {
        username,
        password,
      });

      // Store token in localStorage
      localStorage.setItem("token", response.data.token);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Login failed");
    }
  }
);

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await API.post(`auth/logout`);

      // Clear auth data from localStorage
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return null;
    } catch (error) {
      // Even if server logout fails, still perform local logout
      localStorage.removeItem("token");
      localStorage.removeItem("user");

      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

// Parse JWT token to extract user information
const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

// Get stored token and user data from localStorage
const token = localStorage.getItem("token");
let user = null;

// If token exists, extract user data
if (token) {
  const decodedToken = parseJwt(token);
  if (decodedToken) {
    user = {
      id: decodedToken.id,
      username: decodedToken.username,
      email: decodedToken.email,
      role: decodedToken.role || "user", // Default to "user" if role is not in token
    };
    localStorage.setItem("user", JSON.stringify(user));
  }
} else {
  // Try to get user from localStorage if token doesn't exist
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    user = JSON.parse(storedUser);
  }
}

// Initial state with persisted auth data
const initialState = {
  user: user,
  isAuthenticated: !!token,
  token: token,
  status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null,
};

// Create auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetAuthStatus: (state) => {
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // Register cases
      .addCase(register.pending, (state) => {
        state.status = "loading";
      })
      .addCase(register.fulfilled, (state) => {
        state.status = "succeeded";
        // Registration doesn't log the user in, it just creates the account
      })
      .addCase(register.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Login cases
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload.token;
        state.isAuthenticated = true;

        // Parse JWT token to get user info
        const decodedToken = parseJwt(action.payload.token);

        if (decodedToken) {
          state.user = {
            id: decodedToken.id,
            username: decodedToken.username,
            email: decodedToken.email,
            role: decodedToken.role || "user", // Default to "user" if role is not in token
          };

          // Store user info in localStorage
          localStorage.setItem("user", JSON.stringify(state.user));
        }
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })

      // Logout cases
      .addCase(logout.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logout.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      })
      .addCase(logout.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

        // Even if server logout fails, clear local state
        state.user = null;
        state.token = null;
        state.isAuthenticated = false;
      });
  },
});

export const { resetAuthStatus } = authSlice.actions;

export default authSlice.reducer;
