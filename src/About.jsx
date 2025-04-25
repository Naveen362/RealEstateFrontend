// src/About.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function About() {
  return (
    <div className="container my-5">
      {/* Hero Section */}
      <div className="bg-light p-5 rounded-5 shadow text-center mb-5">
        <h1 className="display-4 fw-bold">
          <i className="bi-building-check me-2 text-primary" />
          About RealEstatePro
        </h1>
        <p className="lead text-muted">
          We’re committed to making your property journey smooth, transparent, and rewarding.
        </p>
        <Link to="/">
          <button className="btn btn-outline-primary mt-3">
            <i className="bi-house-door-fill me-2" />
            Back to Home
          </button>
        </Link>
      </div>

      {/* Mission & Vision */}
      <div className="row mb-5">
        <div className="col-md-6 ">
          <h3 className="fw-bold">Our Mission</h3>
          <p>
            To empower every home‑seeker with verified listings, smart search tools, and expert guidance so they can find their perfect property with confidence.
          </p>
        </div>
        <div className="col-md-6" >
          <h3 className="fw-bold">Our Vision</h3>
          <p>
            To become India’s most trusted real estate platform, bridging the gap between buyers, sellers, and agents with cutting‑edge technology and unmatched service.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="mb-5">
        <h3 className="fw-bold mb-4">Meet the Team</h3>
        <div className="row g-4">
          {[
            { name: 'Aisha Singh', role: 'Co‑Founder & CEO', icon: '👩‍💼' },
            { name: 'Rohan Mehta', role: 'Head of Product', icon: '👨‍💻' },
            { name: 'Priya Kumar', role: 'Lead Agent', icon: '👩‍💼' },
            { name: 'Vikram Patel', role: 'CTO', icon: '👨‍💻' },
          ].map((member, idx) => (
            <div key={idx} className="col-6 col-md-3 text-center">
              <div className="p-4 border rounded-4 shadow-sm h-100">
                <div className="fs-1 mb-3">{member.icon}</div>
                <h5 className="mb-1">{member.name}</h5>
                <p className="text-muted mb-0">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section */}
      <div className="mb-5">
        <h3 className="fw-bold mb-4 text-center">Our Core Values</h3>
        <div className="row text-center">
          {[
            { icon: '🤝', title: 'Integrity', desc: 'We uphold honesty & transparency in every listing.' },
            { icon: '🚀', title: 'Innovation', desc: 'We leverage tech to simplify property discovery.' },
            { icon: '🎯', title: 'Customer First', desc: 'Your needs drive every feature we build.' },
            { icon: '🏆', title: 'Excellence', desc: 'We strive for the highest quality in service.' },
          ].map((value, idx) => (
            <div key={idx} className="col-6 col-md-3 mb-4">
              <div className="p-3 bg-info bg-opacity-10 rounded-4 h-100">
                <div className="fs-2 mb-2">{value.icon}</div>
                <h6 className="fw-bold">{value.title}</h6>
                <p className="small text-secondary mb-0">{value.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <h4 className="fw-bold mb-3">Ready to Find Your Dream Home?</h4>
        <Link to="/agents">
          <button className="btn btn-primary btn-lg">
            <i className="bi-building me-2" />
            View Listings
          </button>
        </Link>
      </div>
    </div>
  );
}
