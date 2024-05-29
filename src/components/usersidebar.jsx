import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../instance/axiosInstance';

function Sidebar({ id }) {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);
  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      // Perform delete request to backend
      await axiosInstance.delete(`/deleteprofile/${id}`);
      // Set delete success state to true
      setDeleteSuccess(true);
      // Show success message for 1 second then navigate to login
      setTimeout(() => {
        setDeleteSuccess(false);
        navigate('/user/login');
      }, 1000);
    } catch (error) {
      // Handle error, e.g., show an error message
      alert('Failed to delete profile');
      console.error('Error deleting profile:', error);
    }
  };

  return (
    <aside className="w-64 bg-[#173f59] text-white flex flex-col border border-gray-600">
      <nav className="flex-1 px-2 space-y-2 font-semibold text-xl">
        <Link to={`/user/account/${id}`} className="block px-4 py-2 rounded hover:bg-blue-700">Profile</Link>
        <hr className="border-white" />
        <Link to={`/user/editprofile/${id}`} className="block px-4 py-2 rounded hover:bg-blue-700">Edit Profile</Link>
        <hr className="border-white" />
        <button onClick={() => setShowConfirmation(true)} className="block px-4 py-2 rounded hover:bg-blue-700">Delete Profile</button>
        <hr className="border-white" />
      </nav>
      {showConfirmation && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className='text-black'>Are you sure you want to delete your profile?</p>
            <div className="mt-4">
              <button onClick={() => setShowConfirmation(false)} className="bg-gray-500 text-white px-4 py-2 rounded mr-2">Cancel</button>
              <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
            </div>
          </div>
        </div>
      )}
      {deleteSuccess && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <p className='text-black'>Profile deleted successfully</p>
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;
