import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AddingProperties.css"; // optional for custom styles
import { toast } from "react-toastify";

export const PropertyForm = () => {
  const navigate = useNavigate();
  const [propertyData, setPropertyData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    type: "sale",
    bedrooms: "",
    bathrooms: "",
    squareFeet: "",
    amenities: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setPropertyData({ ...propertyData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setSelectedImages(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();

    Object.keys(propertyData).forEach((key) => {
      formData.append(key, propertyData[key]);
    });

    selectedImages.forEach((image) => {
      formData.append("images", image);
    });

    try {
      const res = await axios.post(
        "https://realestatebackend-5fuh.onrender.com/ap/properties",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token") || ""}`,
          },
        }
      );
      alert("Property listed successfully!");
      setPropertyData({
        title: "",
        description: "",
        location: "",
        price: "",
        type: "sale",
        bedrooms: "",
        bathrooms: "",
        squareFeet: "",
        amenities: "",
      });
      setSelectedImages([]);
      navigate("/agents");  // Navigate back to the home page after successful submission
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Failed to add property. Please check your inputs.");
    }

    setLoading(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f0fff0", // Light green background
        color: "#556b2f", // Dark olive green text
        minHeight: "100vh", // Full height
        paddingTop: "40px", // Add top padding for better spacing
      }}
    >
      <div className="container mt-5">
        <div className="row justify-content-center">
          <button className="btn btn-info w-50 mb-3" onClick={()=>navigate(-1)}>Go Back</button>
          <div className="col-md-10 col-lg-8">
            <div
              className="card shadow p-4 border-0 rounded-4 bg-white"
              style={{
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Subtle shadow effect
                borderRadius: "16px", // Rounded corners for the form
              }}
            >
              <h2 className="text-center mb-4 text-primary fw-bold">
                🏡 List a Property
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#556b2f' }}>Title</label>
                    <input
                      type="text"
                      name="title"
                      className="form-control"
                      value={propertyData.title}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }} // Input text color adjustment
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#556b2f' }}>Location</label>
                    <input
                      type="text"
                      name="location"
                      className="form-control"
                      value={propertyData.location}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label" style={{ color: '#556b2f' }}>Description</label>
                    <textarea
                      name="description"
                      className="form-control"
                      value={propertyData.description}
                      onChange={handleChange}
                      rows={3}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#556b2f' }}>Price ($)</label>
                    <input
                      type="number"
                      name="price"
                      className="form-control"
                      value={propertyData.price}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" style={{ color: '#556b2f' }}>Property Type</label>
                    <select
                      name="type"
                      className="form-select"
                      value={propertyData.type}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    >
                      <option value="sale">For Sale</option>
                      <option value="rent">For Rent</option>
                    </select>
                  </div>

                  <div className="col-md-4">
                    <label className="form-label" style={{ color: '#556b2f' }}>Bedrooms</label>
                    <input
                      type="number"
                      name="bedrooms"
                      className="form-control"
                      value={propertyData.bedrooms}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label" style={{ color: '#556b2f' }}>Bathrooms</label>
                    <input
                      type="number"
                      name="bathrooms"
                      className="form-control"
                      value={propertyData.bathrooms}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label" style={{ color: '#556b2f' }}>Square Feet</label>
                    <input
                      type="number"
                      name="squareFeet"
                      className="form-control"
                      value={propertyData.squareFeet}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label" style={{ color: '#556b2f' }}>Amenities (comma-separated)</label>
                    <input
                      type="text"
                      name="amenities"
                      className="form-control"
                      value={propertyData.amenities}
                      onChange={handleChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                  </div>

                  <div className="col-md-12">
                    <label className="form-label" style={{ color: '#556b2f' }}>Upload Images</label>
                    <input
                      type="file"
                      multiple
                      className="form-control"
                      onChange={handleImageChange}
                      required
                      style={{ backgroundColor: '#fff', color: '#556b2f' }}
                    />
                    {/* Optional preview */}
                    <div className="d-flex flex-wrap mt-2 gap-2">
                      {selectedImages.map((file, index) => (
                        <img
                          key={index}
                          src={URL.createObjectURL(file)}
                          alt="preview"
                          height="80"
                          className="rounded shadow"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="col-md-12">
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-2 fw-semibold"
                      disabled={loading}
                      style={{
                        backgroundColor: "#556b2f", // Dark olive green for button
                        borderColor: "#556b2f", // Matching border color
                      }}
                    >
                      {loading ? "Submitting..." : "Submit Property"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
