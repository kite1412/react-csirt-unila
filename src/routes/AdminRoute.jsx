import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { LOGIN_PATH } from "../utils/paths";

export default function AdminRoute() {
  const { isAuthenticated, isAdmin } = useAuth();

  // If user is not authenticated or not an admin, redirect to login page
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to={LOGIN_PATH} />;
  }

  // Otherwise, render the protected admin content
  return <Outlet />;
}
