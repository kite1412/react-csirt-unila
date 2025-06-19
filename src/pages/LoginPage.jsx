import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login, resetAuthStatus } from "../store/auth-slice";
import ContentVerticalPadding from "../layout/ContentVerticalPadding";
import unilaLogo from "../assets/unilaLogo.svg";
import debug from "../utils/debug";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, status, error, isAuthenticated } = useSelector(
    (state) => state.auth
  );

  // Use useEffect to handle redirection for authenticated users
  useEffect(() => {
    if (isAuthenticated) {
      if (user?.role === "admin") {
        debug.log("Admin user authenticated, redirecting to dashboard");
        navigate("/dashboard");
      } else {
        debug.log("Regular user authenticated, redirecting to home");
        navigate("/");
      }
    }

    // Cleanup function to reset auth status when component unmounts
    return () => {
      dispatch(resetAuthStatus());
    };
  }, [isAuthenticated, navigate, user, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    debug.log("Form submitted");

    // Validate form inputs
    if (!username.trim()) {
      setFormError("Username is required");
      return;
    }

    if (!password.trim()) {
      setFormError("Password is required");
      return;
    }

    // Clear previous validation errors
    setFormError("");

    // Dispatch login action
    dispatch(login({ username, password }));
  };

  return (
    <ContentVerticalPadding>
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
          <div className="flex flex-col items-center mb-8">
            <img
              src={unilaLogo}
              alt="Unila Logo"
              className="w-20 h-20 mb-4"
            />
            <h1 className="text-2xl font-bold text-center">
              CSIRT Universitas Lampung
            </h1>
            <p className="text-gray-600 mt-2 text-center">
              Sign in to access your account
            </p>
          </div>

          {/* Form validation error */}
          {formError && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {formError}
            </div>
          )}

          {/* Redux auth error */}
          {status === "failed" && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="flex flex-col gap-4 text-black">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
            <div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-gradient-to-r from-black to-[#3b82f6] text-white font-medium rounded-md py-2 px-4 
                  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "Signing in..." : "Sign in"}
              </button>
            </div>
            <div className="text-center text-sm mt-4">
              <p>
                Don't have an account?{" "}
                <Link
                  to="/register"
                  className="font-medium text-blue-600 hover:text-blue-500"
                >
                  Register here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </ContentVerticalPadding>
  );
}
