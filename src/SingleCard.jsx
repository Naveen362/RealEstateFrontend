import React, { useEffect, useState, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const SingleCard = () => {
  const [data1, setData1] = useState({});
  const { id } = useParams();
  const scrollRef = useRef();
  const navigate=useNavigate();
  useEffect(() => {
    axios.get(`https://realestatebackend-5fuh.onrender.com/ap/singleproduct/${id}`,{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`||"notfound"}})
      .then(res => setData1(res.data.data))
      .catch(err => console.log(err));
  }, [id]);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
  };

  const isMultipleImages = data1?.images?.length > 1;

  return (
    <div className="container py-4 w-75 mx-auto">
      <h2 className="text-center mb-4 text-decoration-underline text-warning">SINGLE SITE VIEW</h2>

      {/* Scroll buttons only if multiple images */}
      {isMultipleImages && (
        <div className="text-center mb-3">
          <button className="btn btn-outline-primary me-2" onClick={scrollLeft}>←</button>
          <button className="btn btn-outline-primary" onClick={scrollRight}>→</button>
        </div>
      )}

      {/* Image scroll section */}
      <div
        ref={scrollRef}
        className={`d-flex ${isMultipleImages ? "gap-3 px-3" : "justify-content-center"} rounded-4 bg-white shadow w-75 mx-auto`}
        style={{
          overflowX: isMultipleImages ? 'auto' : 'hidden',
          overflowY: 'hidden',
          whiteSpace: 'nowrap',
          scrollSnapType: isMultipleImages ? 'x mandatory' : 'none',
          scrollbarWidth: 'none',        // Firefox
          msOverflowStyle: 'none',       // IE/Edge
        }}
      >
        <style>
          {`
            div::-webkit-scrollbar {
              display: none; /* Chrome, Safari, Opera */
            }
          `}
        </style>
        {data1?.images?.length > 0 ? (
          data1.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`property-${i}`}
              className="rounded-4 shadow"
              style={{
                height: '250px',
                width: '350px',
                objectFit: 'cover',
                flex: isMultipleImages ? '0 0 auto' : 'none',
                scrollSnapAlign: isMultipleImages ? 'start' : 'none',
              }}
            />
          ))
        ) : (
          <h4 className="text-center w-100">No Images Found</h4>
        )}
      </div>

      {/* Property Details */}
      <div className="card bg-white shadow mt-4 p-3 rounded-4 w-75 mx-auto">
        <h4 className="card-title text-center text-primary">{data1.title}</h4>
        <p className="text-muted">{data1.description}</p>

        <ul className="list-group list-group-flush">
          <li className="list-group-item"><strong>Location:</strong> {data1.location}</li>
          <li className="list-group-item"><strong>Price:</strong> ${data1.price}</li>
          <li className="list-group-item"><strong>Bedrooms:</strong> {data1.bedrooms} | <strong>Bathrooms:</strong> {data1.bathrooms}</li>
          <li className="list-group-item"><strong>Square Feet:</strong> {data1.squareFeet}</li>
          <li className="list-group-item"><strong>Type:</strong> {data1.type}</li>
          <li className="list-group-item"><strong>Owner:</strong> {data1?.owner?.name || 'Unknown'}</li>
          <li className="list-group-item"><strong>Amenities:</strong> {data1.amenities?.length ? data1.amenities.join(", ") : 'None'}</li>
          <li className="list-group-item"><strong>Posted At:</strong> {data1.updatedAt}</li>
        </ul>

        <div className="text-center mt-4">
        <a href={`mailto:${data1?.owner?.email || "example@example.com"}?subject=Property Inquiry&body=Hi ${data1?.owner?.name || "Owner"}, I am interested in your property listed on the site.`}
  className="btn btn-outline-success"
>
  Contact Owner
</a>

          <button className='btn btn-danger mx-2' onClick={()=>navigate(-1)}>GOBACK</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
