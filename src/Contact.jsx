import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your form submission logic, like sending the data to an API or email service.
    setStatus('Submitting your message...');
    setTimeout(() => {
      setStatus('Thank you for contacting us! We will get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 2000);
  };

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary mb-5">Contact Us</h1>

      {/* Contact Form */}
      <div className="row">
        <div className="col-lg-6 mb-4">
          <h3 className="mb-4">Get In Touch</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input
                type="text"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                className="form-control"
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 py-2">Submit</button>
          </form>
          {status && (
            <div className="mt-3 text-center">
              <p className="text-success">{status}</p>
            </div>
          )}
        </div>

        {/* Google Map */}
        <div className="col-lg-6 mb-2">
          <h3 className="mb-4">Our Location</h3>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              title="Google Map"
              className="embed-responsive-item rounded-5 shadow-sm"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799072132!2d-74.25986676212146!3d40.69767006313144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f18b8e063%3A0x9b45e74e00f7ff3c!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1634563874392!5m2!1sen!2sin"
              style={{ border: 0, width: '100%', height: '350px' }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
