import React from 'react';
import { Link } from 'react-router-dom';
import LandingImage from '../assets/landingImage.png';

function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-100 relative">
      <img src={LandingImage} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover z-0" />
      <div className="flex items-center justify-center h-full z-10 ">
        <div className="h-[20rem] flex items-center h-max-w-md mx-auto  shadow-lg rounded-lg overflow-hidden relative top-36 backdrop-blur-sm border border-white">
          <div className="py-4 px-6  ">
            <h1 className="text-2xl font-bold text-center mb-12">Welcome to Course Portal</h1>
            <div className=" gap-10 flex items-center justify-center flex-col">
              <div className="relative z-10 w-3/4">
                <Link to="/admin/login" className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg block text-center">Admin Login</Link>
              </div>
              <div className="relative z-10 w-3/4">
                <Link to="/user/login" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg block text-center">User Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
