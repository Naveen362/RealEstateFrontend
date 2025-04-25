import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const navigate = useNavigate();

  const changedatafn = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitdatafn = (e) => {
    e.preventDefault();

    if (!data.name || !data.email || !data.password || !data.role) {
      toast.warning("Please fill in all fields");
      return;
    }

    axios
      .post("https://realestatebackend-5fuh.onrender.com/api/auth/register", data)
      .then((res) => {
        toast.success(res.data.message);
        setData({ name: "", email: "", password: "", role: "" });
        navigate("/login");
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || err.message);
        console.error(err);
      });
  };

  return (
    <>
    <h1 style={{fontSize:"50px"}} className='text-center mb-3 pt-2'>🏡RealEstatePro</h1>
    <div className="container min-vh-90 d-flex justify-content-center align-items-center">
      
      <div
        className="card p-5 shadow w-100 rounded-5 text-white"
        style={{
          maxWidth: "500px",
          background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        }}
      >
        <h1 className="text-center mb-4 text-white">Registration Form</h1>
        <form onSubmit={submitdatafn} >
          <div className="mb-3">
            <label className="form-label text-dark">Full Name</label>
            <input
              type="text"
              className="form-control border-success"
              placeholder="Enter your name"
              required
              name="name"
              value={data.name}
              onChange={changedatafn}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Email</label>
            <input
              type="email"
              className="form-control border-success"
              placeholder="Enter your email"
              required
              name="email"
              value={data.email}
              onChange={changedatafn}
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-dark">Password</label>
            <input
              type="password"
              className="form-control border-success"
              placeholder="Enter your password"
              required
              name="password"
              value={data.password}
              onChange={changedatafn}
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-dark">Role</label>
            <select
              className="form-select"
              required
              name="role"
              value={data.role}
              onChange={changedatafn}
            >
              <option value="" disabled>
                -- Select Role --
              </option>
              <option value="buyer">Buyer</option>
              <option value="owner">Owner</option>
            </select>
          </div>

          <button type="submit" className="btn btn-success fw-bold w-100">
            Register
          </button>

          <div className="mt-3 d-flex justify-content-between">
            <Link to="/login" className="text-danger text-decoration-underline">
              Already have an account?
            </Link>
            <a
              href="https://chat.openai.com/"
              className="text-white text-decoration-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Need Help?
            </a>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default Registration;
