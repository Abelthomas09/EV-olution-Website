import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section id='contact' className="contact-section">
      <div className="contact-container">
        <h2>Book Your Test Drive</h2>
        <p>
          Ready to experience the future of driving? Schedule your personalized test drive with EV-olution today.
        </p>
        <form className="contact-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" placeholder="Enter your email" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
            </div>
            <div className="form-group">
              <label htmlFor="date">Preferred Date</label>
              <input type="date" id="date" name="date" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="model">Select Model</label>
            <select id="model" name="model" required>
              <option value="">Choose a model</option>
              <option value="model-s">Model S</option>
              <option value="model-3">Model 3</option>
              <option value="model-x">Model X</option>
              <option value="model-y">Model Y</option>
            </select>
          </div>
          <button type="submit" className="submit-btn">Schedule Test Drive</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
