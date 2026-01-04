import { useState } from "react";

function AdminLogin() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-200">
      <div className="h-[500px] w-[800px] shadow-lg flex rounded-md overflow-hidden">
        
        {/* Left Panel */}
        <div className="bg-neutral-800 h-full w-1/2 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-28 w-28 text-white opacity-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3l7 4v5c0 4.97-3.05 9.56-7 11-3.95-1.44-7-6.03-7-11V7l7-4z"
            />
          </svg>
        </div>

        {/* Right Panel */}
        <div className="bg-white h-full w-1/2 flex flex-col justify-center px-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Admin Login
          </h2>

          <p className="text-sm text-gray-500 mb-8">
            Enter your credentials to access the admin panel
          </p>

          <div className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@example.com"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-neutral-800"
              />
            </div>

            <button
              className="w-full bg-neutral-800 text-white py-2 rounded-md font-medium hover:bg-neutral-900 transition"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLogin;
