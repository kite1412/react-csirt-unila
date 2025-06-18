import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import ContentVerticalPadding from "../layout/ContentVerticalPadding";
import unilaLogo from "../assets/unilaLogo.svg";
import debug from "../utils/debug";
import { loginWithEmailPassword } from "../utils/authUtils";

export default function LoginPage() {  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login, isAuthenticated, currentUser } = useAuth();
  const navigate = useNavigate();
  // Use useEffect to handle redirection for authenticated users
  useEffect(() => {
    if (isAuthenticated) {
      if (currentUser?.role === "admin") {
        debug.log("Admin user authenticated, redirecting to dashboard");
        navigate("/dashboard");
      } else {
        debug.log("Regular user authenticated, redirecting to home");
        navigate("/");
      }
    }
  }, [isAuthenticated, navigate, currentUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    debug.log("Form submitted");

    // Validate form inputs
    if (!email.trim()) {
      setError("Email is required");
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      return;
    }

    // Start loading state and clear previous errors
    setIsLoading(true);
    setError("");    try {
      // Use the utility function to handle login
      const result = loginWithEmailPassword(login, email, password);

      if (result.success) {
        debug.log("Login successful");
        if (result.user?.role === "admin") {
          debug.log("Admin user logged in, redirecting to dashboard");
          navigate("/dashboard");
        } else {
          debug.log("Regular user logged in, redirecting to home");
          navigate("/");
        }
      } else {
        debug.warn("Login failed:", result.message);
        setError(result.message || "Invalid email or password");
      }
    } catch (error) {
      debug.error("Unexpected error during login:", error);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}{" "}
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="flex flex-col gap-4 text-black">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <div className="">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
              </div>{" "}
            </div>
            <div className="flex items-center justify-end">
              <button
                type="button"
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>{" "}
            <div>
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-black to-[#3b82f6] text-white font-medium rounded-md py-2 px-4 
                  hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                  disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </div>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 mb-1">Demo credentials:</p>
            <p className="text-sm text-gray-600 mb-1">
              <strong>Regular user:</strong> any email with password "password"
            </p>
            <p className="text-sm text-gray-600">
              <strong>Admin:</strong> admin@example.com with password "admin"
            </p>
          </div>
        </div>
      </div>
    </ContentVerticalPadding>
  );
}
