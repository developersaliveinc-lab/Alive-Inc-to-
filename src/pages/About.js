import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGlobe, 
  faHeartbeat, 
  faAward, 
  faUsers, 
  faLeaf, 
  faFlask, 
  faHandshake, 
  faMicroscope 
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';  // WhatsApp icon import
import { Link } from 'react-router-dom';
import './About.css';

// Images import from src/images
import aboutHero from '../images/about-hero.jpg';
import aboutCompany from '../images/about-company.jpg';
import teamCEO from '../images/team-ceo.jpg';
import teamCMO from '../images/team-cmo.jpg';
import teamCOO from '../images/team-coo.jpg';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutHero})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>About Vama Lifecare</h1>
          <p>Excellence in Healthcare • Innovation for Life • Since 2020</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="intro-section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="intro-grid">
            <div className="intro-text">
              <p>
                Vama Lifecare is a dynamic pharmaceutical company dedicated to transforming lives through high-quality, affordable medicines. Established in 2020, we have rapidly grown into a trusted name in the healthcare industry by combining scientific innovation with ethical manufacturing practices.
              </p>
              <p>
                Our state-of-the-art WHO-GMP certified facility in Navi Mumbai ensures every product meets global standards of safety and efficacy. We specialize in cardiology, neurology, dermatology, gastroenterology, and nutraceuticals.
              </p>
              <div className="highlight-box">
                <FontAwesomeIcon icon={faHandshake} className="highlight-icon" />
                <p>Trusted by over 1000 healthcare professionals across India</p>
              </div>
            </div>
            <div className="intro-image">
              <img src={aboutCompany} alt="Vama Lifecare Manufacturing Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card">
              <h3>500+</h3>
              <p>Products Portfolio</p>
            </div>
            <div className="stat-card">
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className="stat-card">
              <h3>1000+</h3>
              <p>Healthcare Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="vm-section">
        <div className="container">
          <h2 className="section-title">Vision & Mission</h2>
          <div className="vm-grid">
            <div className="vm-card">
              <FontAwesomeIcon icon={faGlobe} className="vm-icon" />
              <h3>Vision</h3>
              <p>To become a global leader in affordable healthcare, making quality medicines accessible to every individual across the world.</p>
            </div>
            <div className="vm-card">
              <FontAwesomeIcon icon={faHeartbeat} className="vm-icon" />
              <h3>Mission</h3>
              <p>To deliver innovative, safe, and effective pharmaceutical solutions through continuous research, ethical practices, and patient-centric approach.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <FontAwesomeIcon icon={faAward} />
              <h4>Quality Excellence</h4>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faMicroscope} />
              <h4>Innovation</h4>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faUsers} />
              <h4>Customer Focus</h4>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faLeaf} />
              <h4>Sustainability</h4>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faFlask} />
              <h4>Scientific Integrity</h4>
            </div>
            <div className="value-card">
              <FontAwesomeIcon icon={faHandshake} />
              <h4>Ethical Partnership</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section">
        <div className="container">
          <h2 className="section-title">Leadership Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <img src={teamCEO} alt="Dr. Rajesh Patel" />
              <h4>Dr. Rajesh Patel</h4>
              <p>Founder & CEO</p>
            </div>
            <div className="team-card">
              <img src={teamCMO} alt="Dr. Priya Sharma" />
              <h4>Dr. Priya Sharma</h4>
              <p>Chief Medical Officer</p>
            </div>
            <div className="team-card">
              <img src={teamCOO} alt="Mr. Amit Kumar" />
              <h4>Dr. Abid Pathan</h4>
              <p>Chief Operating Officer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="journey-section">
        <div className="container">
          <h2 className="section-title">Our Journey</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="year">2020</div>
              <p>Foundation of Vama Lifecare</p>
            </div>
            <div className="timeline-item">
              <div className="year">2021</div>
              <p>WHO-GMP Facility Launched</p>
            </div>
            <div className="timeline-item">
              <div className="year">2022</div>
              <p>100+ Products Launched</p>
            </div>
            <div className="timeline-item">
              <div className="year">2023</div>
              <p>International Expansion</p>
            </div>
            <div className="timeline-item">
              <div className="year">2025</div>
              <p>Global Leader with 500+ Products</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="closing-section">
        <div className="container">
          <h2>We Are Committed to Better Health</h2>
          <p>Every product is a promise of quality, safety, and care.</p>
          <Link to="/contact" className="cta-btn">Contact Us</Link>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919324745058?text=Hello%20Vama%20Lifecare%2C%20I%20am%20interested%20in%20your%20products%20and%20services."
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default About;