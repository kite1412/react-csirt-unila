import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { LOGIN_PATH } from "../utils/paths";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to={LOGIN_PATH} />;
  }

  // Otherwise, render the protected content
  return <Outlet />;
}
