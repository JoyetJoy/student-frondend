import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../instance/axiosInstance';
import Sidebar from '../../components/adminsidebar'; // Import the Sidebar component
import Navbar from '../../components/navbar'; // Import the Navbar component

function AddCourseForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await axiosInstance.post('/admin/addcourse', data);
      navigate('/admin/courses'); // Navigate to the courses list after successful submission
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  return (
    <div >
        <Navbar/>
        <div className="min-h-screen flex">
      <Sidebar />
      <div className="flex-1 flex items-center justify-center bg-gray-100 p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Add New Course</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Course Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                {...register('coursename', { required: 'Course name is required' })}
              />
              {errors.coursename && <span className="text-red-500 text-sm">{errors.coursename.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                {...register('description', { required: 'Description is required' })}
              ></textarea>
              {errors.description && <span className="text-red-500 text-sm">{errors.description.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Duration (in hours)</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                {...register('duration', {
                  required: 'Duration is required',
                })}
              />
              {errors.duration && <span className="text-red-500 text-sm">{errors.duration.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Fees</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="number"
                {...register('fees', { required: 'Fees is required' })}
              />
              {errors.fees && <span className="text-red-500 text-sm">{errors.fees.message}</span>}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Instructor</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                {...register('instructor', { required: 'Instructor name is required' })}
              />
              {errors.instructor && <span className="text-red-500 text-sm">{errors.instructor.message}</span>}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
            >
              Add Course
            </button>
          </form>
        </div>
      </div>
      </div>
    </div>
  );
}

export default AddCourseForm;
