import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { 
  faFacebookF, 
  faInstagram, 
  faLinkedinIn 
} from "@fortawesome/free-brands-svg-icons";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-column company-info">
          <h3>Vama Lifecare</h3>
          <p>
            With over two decades of rich experience in the field of specialty medicine, our founder, Mr. Omkar Chavare, laid the foundation of Vama Health Group in 2010, along with a core team of just three members.
          </p>
        </div>

        <div className="footer-column sitemap">
          <h3>Sitemap</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-column contacts">
          <h3>Contacts</h3>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>+91 73040 44082</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>info@vamalifecare.com</span>
          </div>
          <div className="contact-item address">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <span>
              F-85, 1st Floor, Nano-Wing, Fantasia Business Park,<br />
              Near Inorbit Mall, Sector-30A, Vashi, Navi Mumbai - 400705
            </span>
          </div>
        </div>

        <div className="footer-column social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com/vamalifecare" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com/vamalifecare" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com/company/vamalifecare" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; Copyright Vama Lifecare. All Rights Reserved</p>
        <p>Designed by <span>Alive Inc Group.</span></p>
      </div>
    </footer>
  );
};

export default Footer;