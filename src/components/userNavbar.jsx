import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import {jwtDecode} from "jwt-decode"; // Named import

const Navbar = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      const payload = jwtDecode(token); // Corrected function call
      if (payload.role === "user") {
        setId(payload.userId);
      }
    }
  }, []);

  const logOut = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("jwt");
    if (token) {
      const payload = jwtDecode(token); // Corrected function call
      localStorage.removeItem("jwt");
      if (payload.role === "admin") {
        navigate('/admin/login');
      } else {
        navigate('/user/login');
      }
    }
  };

  return (
    <div className="w-full h-20 flex flex-row items-center bg-[#173f59]">
      <div className="w-80 h-full flex items-center justify-center text-white font-semibold text-xl">
        STUDENTS
      </div>
      <div className="w-3/5 h-10">
        <input
          className="w-4/5 h-full border rounded flex items-center p-5"
          placeholder="Search..."
        />
      </div>
      <div className="h-full w-2/6 flex items-center justify-end gap-[10%] pr-10">
        <div className="text-xl text-white">
          <Link to="/user/userhome">Home</Link>
        </div>
        <div className="text-xl text-white">
          <Link to={`/user/account/${id}`}>Account</Link>
        </div>
        <div className="text-white" onClick={logOut}>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
