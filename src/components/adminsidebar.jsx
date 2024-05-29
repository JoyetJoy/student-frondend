import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-[#173f59] text-white  flex flex-col border border-gray    -600">
      <nav className="flex-1 px-2 space-y-2 font-semibold text-xl">
        <Link to="/admin/adminhome" className="block px-4 py-2 rounded hover:bg-blue-700 ">Home</Link>
        <hr className="border-white" />
        <Link to="/admin/courses" className="block px-4 py-2 rounded hover:bg-blue-700">Courses</Link>
        <hr className="border-white" />
        <Link to="/admin/addcourse" className="block px-4 py-2 rounded hover:bg-blue-700">Add Course</Link>
        <hr className="border-white" />
        
      </nav>
    </aside>
  );
}

export default Sidebar;
