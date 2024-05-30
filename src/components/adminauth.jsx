import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();

  const [authenticated, setAuthenticate] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      try {
        const token = localStorage.getItem("jwt");

        if (token) {
          const payload = jwtDecode(token);
          if (payload.role == "admin") {
            setAuthenticate(true);
          } 
        } else {
          setAuthenticate(false);
          navigate("/", { replace: true });
        }
      } catch (error) {
        setAuthenticate(false);
        console.log("Error in check auth", error);
      }
    };

    checkAuth();
  }, []);

  return authenticated && <Outlet />;
}

export default Layout;
