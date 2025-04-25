import React, { useEffect, useState, useMemo, useRef } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const CardSite = ({ data }) => {
  const {
    _id,
    title,
    bathrooms,
    bedrooms,
    description,
    images,
    location,
    owner,
    price,
    squareFeet,
    type,
    updatedAt,
    amenities,
  } = data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // Pause on hover
  useEffect(() => {
    const el = carouselRef.current;
    const pause = () => clearInterval(carouselRef.current.timer);
    const resume = () => {
      carouselRef.current.timer = setInterval(() => {
        setCurrentIndex((i) => (i + 1) % images.length);
      }, 4000);
    };
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);
    return () => {
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [images.length]);

  const details = useMemo(
    () => [
      { label: "Location", value: location },
      { label: "Price", value: `$${price.toLocaleString()}` },
      { label: "Bedrooms", value: bedrooms },
      { label: "Bathrooms", value: bathrooms },
      { label: "Square Feet", value: squareFeet },
      { label: "Type", value: type },
      { label: "Owner", value: owner.name || "Unknown" },
      { label: "Amenities", value: amenities.length ? amenities.join(", ") : "None" },
      { label: "Posted At", value: updatedAt },
    ],
    [location, price, bedrooms, bathrooms, squareFeet, type, owner.name, amenities, updatedAt]
  );

  const prevImage = () =>
    setCurrentIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const nextImage = () => setCurrentIndex((i) => (i + 1) % images.length);

  return (
    <div className="card shadow rounded-2 border-0 h-100 rounded-3">
      {/* Carousel */}
      <div className="position-relative" ref={carouselRef}>
        <img
          src={images[currentIndex] || "https://via.placeholder.com/300x200"}
          alt={title}
          className="d-block w-100"
          style={{
            aspectRatio: "16/9",
            objectFit: "cover",
          }}
        />

        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous image"
              className="position-absolute top-50 start-0 translate-middle-y bg-dark bg-opacity-50 text-white border-0 p-2 rounded-circle"
              style={{ left: "10px" }}
            >
              ‹
            </button>
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="position-absolute top-50 end-0 translate-middle-y bg-dark bg-opacity-50 text-white border-0 p-2 rounded-circle"
              style={{ right: "10px" }}
            >
              ›
            </button>
          </>
        )}
      </div>

      {/* Body */}
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-primary">{title}</h5>
        <p className="card-text text-muted flex-grow-1">{description}</p>

        <ul className="list-group list-group-flush mb-3">
          {details.map(({ label, value }) => (
            <li key={label} className="list-group-item py-1 px-0">
              <strong>{label}:</strong> {value}
            </li>
          ))}
        </ul>

        {/* Footer Buttons */}
        <div className="mt-auto text-center">
          <Link to={`/ele/${_id}`}>
            <button className="btn btn-primary me-2">View Details</button>
          </Link>
          <a
            href={`mailto:${owner.email}?subject=Property Inquiry&body=Hi ${owner.name}, I am interested in your property.`}
            className="btn btn-outline-success"
          >
            Contact Owner
          </a>
        </div>
      </div>
    </div>
  );
};

CardSite.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    bathrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    bedrooms: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    description: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    location: PropTypes.string,
    owner: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
    }),
    price: PropTypes.number,
    squareFeet: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string,
    updatedAt: PropTypes.string,
    amenities: PropTypes.arrayOf(PropTypes.string),
  }),
};

CardSite.defaultProps = {
  data: {
    _id: "",
    title: "No Title",
    bathrooms: "N/A",
    bedrooms: "N/A",
    description: "No Description",
    images: [],
    location: "Unknown",
    owner: { name: "Unknown", email: "" },
    price: 0,
    squareFeet: "N/A",
    type: "Unknown",
    updatedAt: "N/A",
    amenities: [],
  },
};

export default CardSite;
