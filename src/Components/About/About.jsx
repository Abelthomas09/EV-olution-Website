import React from 'react';
import './About.css';
import car from '../../assets/car.jpg'

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-overlay" />
      <div className="about-content">
        <h2>About EV-olution</h2>
        <p>
          At <strong>EV-olution</strong>, we're not just building electric vehicles—we're
          crafting a sustainable future. With a passion for innovation, we’re leading
          the charge in creating a new standard in electric vehicle technology, where
          performance meets environmental responsibility.
        </p>
        <p>
          Our mission is to empower a greener, more connected world by pushing
          the boundaries of what's possible in electric mobility. Join us in driving
          the transformation toward a cleaner tomorrow.
        </p>
        <button className="learn-more-btn">Learn More</button>
      </div>
      <div className="about-image">
        <img src={car} alt="Electric Car" />
      </div>
    </section>
  );
};

export default About;
