import { useSelector, useDispatch } from "react-redux";
import { login, logout, register, resetAuthStatus } from "../store/auth-slice";

export const useAuthRedux = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, token, status, error } = useSelector(
    (state) => state.auth
  );

  // Login function
  const loginUser = async (username, password) => {
    try {
      const resultAction = await dispatch(login({ username, password }));
      if (login.fulfilled.match(resultAction)) {
        return { success: true, user: resultAction.payload.user };
      } else {
        return {
          success: false,
          message: resultAction.payload || "Login failed",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "An error occurred during login",
      };
    }
  };

  // Register function
  const registerUser = async (username, email, password) => {
    try {
      const resultAction = await dispatch(
        register({ username, email, password })
      );
      if (register.fulfilled.match(resultAction)) {
        return {
          success: true,
          message: "Registration successful",
        };
      } else {
        return {
          success: false,
          message: resultAction.payload || "Registration failed",
        };
      }
    } catch (error) {
      return {
        success: false,
        message: error.message || "An error occurred during registration",
      };
    }
  };

  // Logout function
  const logoutUser = async () => {
    try {
      await dispatch(logout());
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.message || "An error occurred during logout",
      };
    }
  };

  // Clear auth status
  const clearAuthStatus = () => {
    dispatch(resetAuthStatus());
  };

  return {
    user,
    isAuthenticated,
    token,
    status,
    error,
    isAdmin: user?.role === "admin",
    loginUser,
    registerUser,
    logoutUser,
    clearAuthStatus,
  };
};
