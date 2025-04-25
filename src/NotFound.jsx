// src/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '80vh' }}>
      <h1 className="display-1 text-danger">404</h1>
      <p className="h4 mb-4">Oops! Page not found.</p>
      <Link to="/" className="btn btn-primary">
        Go Home
      </Link>
    </div>
  );
}
