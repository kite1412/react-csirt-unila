import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { LOGIN_PATH } from "../utils/paths";

export default function ProtectedRoute() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  // If user is not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to={LOGIN_PATH} />;
  }

  // Otherwise, render the protected content
  return <Outlet />;
}
