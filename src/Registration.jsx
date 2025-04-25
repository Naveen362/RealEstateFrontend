import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Registration = () => {
    const [data,setData]=useState({name:"",email:"",password:"",role:""})
    const changedatafn=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitdatafn=(e)=>{
      e.preventDefault();
      
        axios.post("https://realestatebackend-5fuh.onrender.com/api/auth/register",data).then((res)=>{toast.success(res.data.message);setData({name:"",email:"",password:"",role:""})}).catch((err)=>toast.error(err.message))
      
      
    }
  return (
    <div className="container mt-3 d-flex justify-content-center py-5 rounded" style={{ borderRadius: "30px" }}>
      <div className="card p-5 shadow w-100 rounded-5" style={{ maxWidth: "500px",background:"linear-gradient(135deg, #89f7fe, #66a6ff)"}}>
        <h1 className="text-center mb-3">Registration Form</h1>
        <form onSubmit={submitdatafn}>
          <div className="mb-3">
            <label className="form-label" >Full Name</label>
            <input type="text" className="form-control border-success text-succeess" placeholder="Enter your name" required name="name" value={data.name} onChange={changedatafn}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control border-success" placeholder="Enter your email" required name="email" value={data.email} onChange={changedatafn}/>
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control border-success outline-secondary" placeholder="Enter your password" required name="password" value={data.password} onChange={changedatafn}/>
          </div>

          <div className='mb-3'>
            <label className="form-label">Role</label>
            <input type="text" className='form-control border-success' required name="role" value={data.role} onChange={changedatafn}/>
          </div>

          <button type="submit" className="btn btn-success w-100">Register</button>
          <div className='mt-3 d-flex justify-content-between'>
           <Link to="/login" className='text-dark'>Already have account ?</Link>
           <a href="https://chatgpt.com/">For Any help?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
