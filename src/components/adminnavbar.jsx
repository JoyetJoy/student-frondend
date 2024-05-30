import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import { jwtDecode } from "jwt-decode";

const Navbar = () => {
const navigate = useNavigate();

  const logOut = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    if (token) {
      const payload = jwtDecode(token);
      if (payload.role == "admin"){
        localStorage.removeItem("jwt");
        navigate('/admin/login')
      } else{
        localStorage.removeItem("jwt");
        navigate('/user/login')
      }
      }
}

  return (
    <div className="w-full h-20 flex flex-row items-center bg-[#173f59]">
      <div className="w-80 h-full flex items-center justify-center text-white text-xl ">
        STUDENTS
      </div>
      <div className="w-3/5 h-10 flex items-center ">
      </div>
      <div className="h-full w-2/6 flex items-center justify-end gap-[10%] pr-10">
        <div className="text-xl text-white">
          <Link to="/admin/adminhome">Home</Link>
        </div>
      
        <div className="text-white" onClick={logOut}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
