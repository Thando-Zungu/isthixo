import React from 'react';
import './Footer.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-location">
          <LocationOnIcon />
          <a
            href="https://www.google.com/maps/place/127+Victoria+Embankment,+Durban,+South+Africa"
            target="_blank"
            rel="noopener noreferrer"
          >
            127 Victoria Embankment, Durban Central, Durban, 4001
          </a>
        </div>

        <div className="footer-map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.091812609808!2d31.020248215126844!3d-29.85970068194562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1ef7aa6c3ab10f29%3A0xa8c05e8c9e57c546!2s127%20Victoria%20Embankment%2C%20Durban%20Central%2C%20Durban%2C%204001%2C%20South%20Africa!5e0!3m2!1sen!2sza!4v1657737741467!5m2!1sen!2sza"
            width="100%"
            height="180"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="footer-links">
          <a href="/shop">Shop</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/terms">Terms</a>
        </div>

        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Isthixo Clothing. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
