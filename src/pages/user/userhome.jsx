import React, { useState, useEffect } from 'react';
import Navbar from '../../components/userNavbar';
import axiosInstance from '../../instance/axiosInstance';
import CourseCard from '../../components/coursecard';
import banner from '../../assets/bannerImage.jpg';

function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axiosInstance.get('/userhome');
        console.log(response.data);
        setCourses(response.data.courses);
      } catch (error) {
        console.error('Error fetching courses:', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 relative">
      <Navbar />
      <img src={banner} alt="" className="w-full h-full object-cover relative" />
      <div className="absolute top-30 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-3xl font-bold mb-4 text-black">Opportunity begins with Education</h1>
      </div>
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center mt-8 mb-6">Courses</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {courses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      </div>
      <footer className="bg-[#173f59] text-white py-4 mt-auto">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Course Portal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
