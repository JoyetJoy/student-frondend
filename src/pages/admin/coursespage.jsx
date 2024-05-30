import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axiosInstance from '../../instance/axiosInstance';
import Sidebar from '../../components/adminsidebar';
import Navbar from '../../components/adminnavbar';

function CoursesList() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {console.log('khjh');
        const response = await axiosInstance.get('/admin/courses');
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this course?");
    if (confirmed) {
      try {
        await axiosInstance.delete(`/admin/deletecourse/${id}`);
        setCourses(courses.filter(course => course._id !== id));
      } catch (error) {
        console.error('Error deleting course:', error);
      }
    }
  };

  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex">
        <Sidebar />
        <main className="flex-1 bg-gray-100 p-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Courses List</h2>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fees</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instructor</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map(course => (
                  <tr key={course._id}>
                    <td className="px-6 py-4 whitespace-nowrap">{course.Coursename}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <textarea
                        className="w-full p-2 border border-gray-300 rounded"
                        value={course.Description}
                        readOnly
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">{course.Duration} hours</td>
                    <td className="px-6 py-4 whitespace-nowrap">{course.Fees}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{course.Instructor}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <Link to={`/admin/editcourse/${course._id}`} className="text-blue-600 hover:underline mr-4">Edit</Link>
                      <button onClick={() => handleDelete(course._id)} className="text-red-600 hover:underline">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CoursesList;
