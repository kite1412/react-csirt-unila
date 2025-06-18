import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Check if user is already logged in from localStorage
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });
  const [loading, setLoading] = useState(true);

  // Effect to persist user in localStorage
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("user", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("user");
    }
    setLoading(false);
  }, [currentUser]);
  // Simple login function - In a real app, this would call an API
  const login = (email, password) => {
    console.log("Login function called with:", email, password);    try {
      // For demo purposes, "admin@example.com" with password "admin" logs in as admin
      if ((email === "admin@example.com" || email === "admin@gmail.com") && password === "admin") {
        const user = { email, role: "admin" };
        console.log("Admin login successful:", user);
        setCurrentUser(user);
        return { success: true, user };
      }
      // Regular users can login with any email and password "password"
      else if (password === "password") {
        const user = { email, role: "public" };
        console.log("Public user login successful:", user);
        setCurrentUser(user);
        return { success: true, user };
      }

      console.log("Login failed: Invalid credentials");
      return { success: false, message: "Invalid email or password" };
    } catch (error) {
      console.error("Error in login function:", error);
      return { success: false, message: "An error occurred during login" };
    }
  };

  // Logout function
  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const value = {
    currentUser,
    login,
    logout,
    isAuthenticated: !!currentUser,
    isAdmin: currentUser?.role === "admin",
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
