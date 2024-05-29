import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../instance/axiosInstance';
import Navbar from '../../components/userNavbar';
import Sidebar from '../../components/usersidebar';

function AddStudentForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axiosInstance.get(`/profile?id=${id}`);
        setUserData(response.data.userdata);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [id]);
  
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex">
        <Sidebar id={id}/>
        <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Student Details</h2>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Username</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                value={userData.username || ''}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                value={userData.email || ''}
                readOnly
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Phone Number</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                value={userData.phonenumber || ''}
                readOnly
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddStudentForm;
