import React from 'react';
import Sidebar from '../../components/adminsidebar'; // Import the Sidebar component
import Navbar from '../../components/navbar'; // Import the Navbar component

function AdminHome() {
  return (
    <div >
        <Navbar/>
        <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-gray-100 p-8 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Welcome, Admin!</h2>
          <p className="text-gray-700 mb-6">We're delighted to have you here. Take a look at the powerful tools and insights at your disposal.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            
          </div>
        </div>
      </main>
    </div>
    </div>
  );
}

export default AdminHome;
