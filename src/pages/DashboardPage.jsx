import { useAuth } from "../context/useAuth";
import { Link } from "react-router-dom";
import { REPORT_PATH } from "../utils/paths";

export default function DashboardPage() {
  const { currentUser } = useAuth();

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Welcome back, {currentUser?.email}</p>
      </div>
      
      <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-yellow-700">
              This is a basic admin dashboard. Additional features will be implemented in future iterations.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Stats Overview */}
        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Users</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500 mt-2">Total registered users</p>
          </div>
          <div className="bg-green-50 p-6 rounded-lg border border-green-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Reports</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-500 mt-2">Incident reports submitted</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-lg border border-purple-100 shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Services</h3>
            <p className="text-3xl font-bold">3</p>
            <p className="text-sm text-gray-500 mt-2">Active services</p>
          </div>
        </div>
        
        {/* Quick Actions */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <ul className="space-y-3">
            <li>
              <Link 
                to="/dashboard/reports" 
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                </svg>
                View Incident Reports
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/users" 
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Manage Users
              </Link>
            </li>
            <li>
              <Link 
                to="/dashboard/settings" 
                className="text-blue-600 hover:underline flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
                Site Settings
              </Link>
            </li>
          </ul>
        </div>
        
        {/* Recent Reports */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 col-span-2">
          <h2 className="text-xl font-semibold mb-4">Recent Incident Reports</h2>
          <div className="overflow-hidden shadow rounded-lg border">
            <div className="px-4 py-5 sm:p-6">
              <div className="text-center py-4">
                <p className="text-gray-500 italic">No reports available yet</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* System Information */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">System Information</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Version</span>
              <span className="font-medium">1.0.0</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Update</span>
              <span className="font-medium">June 19, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status</span>
              <span className="font-medium text-green-600">Operational</span>
            </div>
          </div>
        </div>
        
        {/* Admin Account */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h2 className="text-xl font-semibold mb-4">Admin Account</h2>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Email</span>
              <span className="font-medium">{currentUser?.email}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Role</span>
              <span className="font-medium">{currentUser?.role}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Login</span>
              <span className="font-medium">June 19, 2025</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
