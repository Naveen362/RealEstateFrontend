import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSite from "./CardSite";
import { Link } from "react-router-dom";

const ShowingData = () => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://realestatebackend-5fuh.onrender.com/ap/properties",{headers:{Authorization:`Bearer ${localStorage.getItem('token')}`||"notfound"}})
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err1) => {
        setErr(err1.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid py-5 bg-danger bg-opacity-10 rounded-5 m-0" >
      <div className="container">
         <div className='d-flex justify-content-between align-items-center'>
        <h1 className="mb-5 text-center text-primary">
          Welcome to Our Website <i className="bi-geo-alt-fill" /> 
        </h1> <Link className='btn btn-primary w-25 d-flex justify-content-center align-items-center' to="/addproperties">+ Add Sites</Link>
</div>
        {err && (
          <div className="alert alert-danger text-center" role="alert">
            Error: {err} — please try again later.
          </div>
        )}

        {loading && !err && (
          <div className="d-flex justify-content-center my-5">
            <div
              className="spinner-border text-primary"
              role="status"
              style={{ width: "4rem", height: "4rem" }}
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}

        {!loading && !err && (
          <>
            {data.length > 0 ? (
              <>
                <h2 className="text-center text-secondary mb-4">
                  {data.length} {data.length > 1 ? "Properties Found" : "Property Found"}
                </h2>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                  {data.map((ele, ind) => (
                    <div className="col" key={ind}>
                      <div className="h-100">
                        <CardSite data={ele} />
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <h3 className="text-center text-muted">No Data Available</h3>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ShowingData;
