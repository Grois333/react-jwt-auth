import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Dashboard = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
        // also should be GET request
        //method: "POST",
        method: "GET",
        headers: { jwt_token: localStorage.token }
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  const logout = async e => {
    e.preventDefault();
    try {
      localStorage.removeItem("token");
      setAuth(false);
      toast.success("Logout successfully");
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>

      <button style={{marginLeft:'80%'}} onClick={e => logout(e)} className="btn btn-primary my-4">
        Logout
      </button>

      <h1 className="mt-5 text-center">Dashboard</h1>
      <h2 className="text-center">Welcome {name}</h2>
    </div>
  );
};

export default Dashboard;
