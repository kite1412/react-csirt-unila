import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGIN_PATH } from "../utils/paths";

export default function AdminRoute() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";

  // If user is not authenticated or not an admin, redirect to login page
  if (!isAuthenticated || !isAdmin) {
    return <Navigate to={LOGIN_PATH} />;
  }

  // Otherwise, render the protected admin content
  return <Outlet />;
}
