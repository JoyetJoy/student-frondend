// EditProfile.js

import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../../instance/axiosInstance';
import Navbar from '../../components/userNavbar';
import Sidebar from '../../components/usersidebar';

function EditProfile() {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});
  const [successMessage, setSuccessMessage] = useState('');
  const { id } = useParams();

  useEffect(() => {
    async function fetchUserData() {
      try {
        const response = await axiosInstance.get(`/profile?id=${id}`);
        const data = response.data.userdata;
        setUserData(data);
        setValue('username', data.username);
        setValue('email', data.email);
        setValue('phonenumber', data.phonenumber);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    }
    fetchUserData();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const response=await axiosInstance.put(`/updateprofile?id=${id}`, data);
      
      console.log(response);
      setSuccessMessage('Profile updated successfully');
      setTimeout(() => {
        setSuccessMessage('');
        navigate(`/user/account/${id}`);
      }, 2000); // Navigate after 2 seconds
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex">
        <Sidebar id={id}/>
        <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Edit Profile</h2>
            {successMessage && (
              <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
                <span className="block sm:inline">{successMessage}</span>
              </div>
            )}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Username</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  defaultValue={userData.username || ''}
                  {...register('username', { required: 'Username is required' })}
                />
                {errors.username && <span className="text-red-500 text-sm">{errors.username.message}</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="email"
                  defaultValue={userData.email || ''}
                  {...register('email', { required: 'Email is required' })}
                />
                {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  className="w-full p-2 border border-gray-300 rounded"
                  type="text"
                  defaultValue={userData.phonenumber || ''}
                  {...register('phonenumber', { required: 'Phone Number is required' })}
                />
                {errors.phonenumber && <span className="text-red-500 text-sm">{errors.phonenumber.message}</span>}
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile;
