import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Login.css";
import axios from 'axios';
import { toast } from 'react-toastify';
export const Login = () => {
    const [data,setData]=useState({email:"",password:""});
    const navigate=useNavigate();
    const handleformdatafn=(e)=>{
          e.preventDefault();
          axios.post("https://realestatebackend-5fuh.onrender.com/api/auth/login", data)
  .then((res) => {
    console.log("Response Data:", res.data);  // Check the API response
    if (!res.data.token) {
      toast.error("Token not received!");
      return;
    }
    localStorage.setItem("token", res.data.token);
    toast.success("Logged in Successfully");
    setData({ email: "", password: "" });
    navigate("/");
  })
  .catch((err) => toast.error(err.message));

    }
  return (
    <div style={{ backgroundColor: '#f0fff0', color: '#556b2f', minHeight: '100vh' }}>
      <h1 style={{fontSize:"50px"}} className='text-center pt-5'><i className="bi-house" /> RealEstatePro</h1>
    <div className="container mx-auto" style={{ maxWidth: "500px", marginTop: "70px" }}>
      <div 
        className="card p-4 shadow-lg rounded-4"
        style={{ background: "linear-gradient(90deg, #1e3a8a, #00d4ff)", border: "none" }}
      >
        {/* Stylish Gradient Header */}
        <h1
          className="text-center fw-bold"
          style={{
            background: "linear-gradient(90deg, #00d4ff, #ffffff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "2.5rem",
            textShadow: "0px 0px 8px rgba(0, 212, 255, 0.6)"
          }}
        >
          LOGIN PAGE
        </h1>

        <div>
          <form onSubmit={handleformdatafn}>
            {/* Email Field */}
            <div>
              <label className="form-label ms-2 mt-3 fs-4 text-white">Email</label>
              <input 
                type="email"  name="email" value={data.email} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} required
                className="form-control mb-2 input-field" 
                placeholder="Enter your Email . . . . xyz@gmail.com"
              />
            </div>

            {/* Password Field */}
            <div>
              <label className="form-label ms-2 mt-3 fs-4 text-white">Password</label>
              <input required
                type="password" name="password" value={data.password} onChange={(e)=>setData({...data,[e.target.name]:e.target.value})}
                className="form-control mb-2 input-field" 
                placeholder="Enter Your Password ..."
              />
            </div>

            {/* Login Button */}
            <button type="submit" className="btn btn-gradient bg-warning bg-opacity-10 w-100 my-3">
              Login
            </button>

            {/* Links */}
            <div className="d-flex justify-content-between my-2">
              <Link to="/register" className="text-light fw-bold">
                NOT REGISTERED YET?
              </Link>
              <a href="#" className="text-light fw-bold">For any Support?</a>
            </div>
          </form>
        </div>
      </div>
    </div></div>
  );
};
