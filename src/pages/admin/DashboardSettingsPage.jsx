import React from 'react';

export default function DashboardSettingsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      
      <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Site Configuration</h2>
        
        <div className="space-y-4">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">General Settings</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Site Name</span>
              <span className="text-gray-800 font-medium">CSIRT Universitas Lampung</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600">Environment</span>
              <span className="text-gray-800 font-medium">Production</span>
            </div>
          </div>
          
          <div className="border-b border-gray-200 pb-4">
            <h3 className="text-lg font-medium text-gray-800 mb-2">Email Configuration</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">From Email</span>
              <span className="text-gray-800 font-medium">csirt@unila.ac.id</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600">Email Service</span>
              <span className="text-gray-800 font-medium">Not Configured</span>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Security Settings</h3>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Two-Factor Authentication</span>
              <span className="text-gray-800 font-medium">Disabled</span>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-gray-600">Session Timeout</span>
              <span className="text-gray-800 font-medium">24 hours</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-blue-700">
              Settings management will be implemented in future versions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
