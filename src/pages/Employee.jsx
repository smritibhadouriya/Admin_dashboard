import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Belownav from '../components/belownav';

const Employee = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-stone-100">
      {/* Top Navbar for medium+ screens */}
      <div className="hidden md:block">
        <Navbar />
      </div>

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 md:ml-60 mt-16 md:mt-24">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Employee Details</h1>

        <div className="flex gap-4 mb-6">
          <button
            onClick={() => navigate('level1')}
            className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl transition duration-300"
          >
            Level 1
          </button>
          <button
            onClick={() => navigate('level2')}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl transition duration-300"
          >
            Level 2
          </button>
          <button
            onClick={() => navigate('level3')}
            className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-xl transition duration-300"
          >
            Level 3
          </button>
        </div>

        {/* Nested Route Content */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <Outlet />
        </div>
      </div>

      {/* Bottom Navigation for mobile */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-50">
        <Belownav />
      </div>
    </div>
  );
};

export default Employee;
