import React from 'react'
import { Link } from 'react-router-dom'
import picture1 from "./assets/picture1.jpg";
import picture2 from "./assets/picture2.jpeg";
import picture3 from "./assets/picture3.jpeg";
import picture4 from "./assets/picture5.jpeg";
import picture5 from "./assets/pic.jpg";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useOutletContext } from "react-router-dom";
const pictures = [picture1, picture2, picture3, picture4, picture5];

const HOMESINGLE = () => {
  const { user } = useOutletContext();
  return (
    <div>
      <div className='d-flex justify-content-between align-items-center'><h1>Welcome, {user?.name ??"...."}😊✨</h1> <Link className='btn btn-primary w-25 d-flex justify-content-center align-items-center' to="/addproperties">+ Add Sites</Link></div>
      <div className="bg-light m-5 text-center p-5 rounded-5 shadow mt-5">
        <h1 className="display-4 fw-bold">Find Your Dream🏡 Home</h1>
        <p className="lead text-muted">
          Search properties for sale and rent across India 
          <i className="bi-geo-alt-fill ms-1" />
          with RealEstatePro
        </p>
        <Link to="/agents">
          <button className="btn btn-primary px-4 py-2 mt-3">
            <i className="bi-building me-2" /> Explore Listings
          </button>
        </Link>
      </div>

      <div className="container my-5">
        <div className="row align-items-center">
          {/* Images Section */}
          <div className="col-12 col-lg-6 mb-4 mb-lg-0">
            <div
              className="d-flex gap-3 overflow-auto border rounded-5 shadow"
              style={{
                whiteSpace: 'nowrap',
                width: "100%",
                height: "650px",
                scrollSnapType: 'x mandatory',
              }}
            >
              <style>
                {`
                  div::-webkit-scrollbar {
                    display: none;
                  }
                `}
              </style>
              {pictures.map((pict, ind) => (
                <img
                  key={ind}
                  src={pict}
                  className="img-fluid rounded"
                  style={{
                    height: '650px',
                    objectFit: 'cover',
                    minWidth: '280px',
                  }}
                />
              ))}
            </div>
          </div>

          {/* About Section */}
          <div className="col-12 col-lg-6">
            <div className="p-4 rounded-4 bg-info bg-opacity-10 shadow-sm">
              <h2 className="text-center mb-4 fw-bold text-primary">
                <i className="bi-building-check me-2" /> About RealEstatePro
              </h2>
              <p className="text-muted text-center mb-4">
                RealEstatePro is a trusted and tech-driven real estate platform 
                that helps you discover your dream property with ease and confidence.
              </p>

              <ul className="list-group rounded-4">
                {[
                  { icon: '🔍', title: 'Verified Listings', desc: 'All properties are thoroughly verified for authenticity and quality.' },
                  { icon: '🌍', title: 'Pan-India Presence', desc: 'Find properties in 100+ cities — from metro cities to upcoming towns.' },
                  { icon: '⚙️', title: 'Smart Search Features', desc: 'Filter by location, price, type, and amenities.' },
                  { icon: '🤝', title: 'Experienced Agents', desc: 'Work with certified agents who support you every step of the way.' },
                  { icon: '💸', title: 'Affordable to Premium Options', desc: 'Explore listings for all budgets — from affordable apartments to luxury villas.' },
                  { icon: '📊', title: 'Transparent Pricing', desc: 'Clear property details and no hidden charges.' },
                  { icon: '📱', title: 'Mobile-Friendly Platform', desc: 'Enjoy a seamless experience across all devices.' },
                  { icon: '⏱️', title: '24/7 Customer Support', desc: 'Our dedicated team is here to help anytime.' },
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className={`list-group-item d-flex align-items-start ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-light'
                    } border-0 border-bottom border-info`}
                  >
                    <span className="me-3 fs-4">{item.icon}</span>
                    <div>
                      <strong className="text-dark">{item.title}:</strong>{' '}
                      <span className="text-secondary">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="container mt-5">
        <h2 className="mb-4">Why Choose Us?</h2>
        <div className="row text-center">
          <div className="col-md-4 shadow rounded-4 p-4">
            <i className="bi-house-door-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Verified Listings</h5>
            <p>All properties are verified to ensure 100% authenticity and quality.</p>
          </div>
          <div className="col-md-4 shadow rounded-4 p-4">
            <i className="bi-people-fill fs-1 text-primary"></i>
            <h5 className="mt-3">Expert Agents</h5>
            <p>Professional agents to help you find your dream home quickly.</p>
          </div>
          <div className="col-md-4 shadow rounded-4 p-4">
            <i className="bi-cash-coin fs-1 text-primary"></i>
            <h5 className="mt-3">Affordable Pricing</h5>
            <p>We offer properties that suit every budget and lifestyle.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HOMESINGLE;
