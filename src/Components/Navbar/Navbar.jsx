import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 500) {  // You can adjust this value based on when you want to hide the navbar
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
  };

  // Add event listener on mount and clean it up on unmount
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="nav-logo">EV-olution</div>
        <ul className="nav-menu">
            <li href="#home">Home</li>
            <li href="#explore">Explore</li>
            <li href="#about">About</li>
            <li href="#contact" className='nav-contact'>Contact</li>
        </ul>
    </div>
  );
};

export default Navbar;
