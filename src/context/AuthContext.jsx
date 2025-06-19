import { createContext, useState, useEffect } from "react";
import { useAuthRedux } from "../hooks/useAuthRedux";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const { user, isAuthenticated, loginUser, logoutUser, status } =
    useAuthRedux();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if authentication is still in progress
    if (status !== "loading") {
      setLoading(false);
    }
  }, [status]);

  // This wrapper maintains the original context API interface
  // but delegates to Redux under the hood
  const login = async (username, password) => {
    return await loginUser(username, password);
  };

  const logout = async () => {
    return await logoutUser();
  };

  const value = {
    currentUser: user,
    login,
    logout,
    isAuthenticated,
    isAdmin: user?.role === "admin",
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
