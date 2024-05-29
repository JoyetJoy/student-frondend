import React from 'react';

function CourseCard({ course }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
      <h2 className=" w-full flex justify-center text-2xl font-bold mb-2">{course.Coursename}</h2>
      <p className="text-gray-700 mb-2"><strong>About</strong> </p>
      <textarea
        className="w-full p-2 mb-2 border rounded resize-none"
        value={course.Description}
        readOnly
      />
      <p className="text-gray-700 mb-2"><strong>Duration:</strong> {course.Duration}</p>
      <p className="text-gray-700 mb-2"><strong>Fees:</strong> {course.Fees}</p>
      <p className="text-gray-700 mb-2"><strong>Instructor:</strong> {course.Instructor}</p>
    </div>
  );
}

export default CourseCard;
