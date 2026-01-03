import React, { useState } from 'react';  // useEffect nahi use ho raha, remove kiya
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
  faClock
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faWhatsapp  // ← WhatsApp icon added from brands
} from '@fortawesome/free-brands-svg-icons';
import './Contact.css';

const Contact = () => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSuccess(false);
    setError('');

    emailjs.sendForm(
      'service_4imqcj3',
      'template_fb554mb',
      e.target,
      '-eikndrZpqw0OZ0t3'
    )
    .then(() => {
      setSuccess(true);
      setSending(false);
      e.target.reset();
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      setError('Failed to send message. Please try again.');
      setSending(false);
    });
  };

  return (
    <div className="contact-page">

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            We are here to answer any questions you may have about our pharmaceutical solutions
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="container">
          <div className="info-grid">

            <div className="info-card">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <h3>Phone</h3>
              <p>+91 73040 44082</p>
              <p>+91 93242 45521</p>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <h3>Email</h3>
              <p>info@vamalifecare.com</p>
              <p>support@vamalifecare.com</p>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <h3>Address</h3>
              <p>F-85, 1st Floor, Nano-Wing,</p>
              <p>Fantasia Business Park,</p>
              <p>Near Inorbit Mall, Sector-30A,</p>
              <p>Vashi, Navi Mumbai - 400705</p>
            </div>

            <div className="info-card">
              <div className="icon-circle">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <h3>Business Hours</h3>
              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p>Sunday: Closed</p>
            </div>

          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-container">

            <div className="form-header">
              <h2>Send us a Message</h2>
              <p>We typically respond within 24 hours</p>
            </div>

            <form onSubmit={sendEmail} className="best-form">

              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" required />
                  <label>Full Name</label>
                  <span className="focus-line"></span>
                </div>

                <div className="form-group">
                  <input type="email" name="email" required />
                  <label>Email Address</label>
                  <span className="focus-line"></span>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <input type="tel" name="phone" required />
                  <label>Phone Number</label>
                  <span className="focus-line"></span>
                </div>

                <div className="form-group">
                  <input type="text" name="company" />
                  <label>Company (Optional)</label>
                  <span className="focus-line"></span>
                </div>
              </div>

              <div className="form-group full">
                <textarea name="message" rows="8" required></textarea>
                <label>Your Message</label>
                <span className="focus-line"></span>
              </div>

              <button type="submit" className="submit-btn" disabled={sending}>
                <span>{sending ? 'Sending...' : 'Send Message'}</span>
                <span className="arrow">→</span>
              </button>

            </form>

            {success && (
              <p className="success-msg">
                Thank you! Your message has been sent successfully.
              </p>
            )}

            {error && <p className="error-msg">{error}</p>}

          </div>
        </div>
      </section>

      {/* Social & Map */}
      <section className="contact-social">
        <div className="container">

          <h2>Connect With Us</h2>

          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>

          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.99!2d72.9955!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8e5f8b3e4d7%3A0x8e3a3e3e3e3e3e3e!2sFantasia%20Business%20Park!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Vama Lifecare Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919324745058?text=Hello%20Vama%20Lifecare%2C%20I%20have%20a%20query."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default Contact;