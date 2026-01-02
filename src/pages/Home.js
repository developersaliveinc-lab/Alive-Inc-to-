import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faGlobe, 
  faShieldAlt, 
  faTruck, 
  faCertificate, 
  faUsers, 
  faHandshake,
  faVial,
  faMicroscope,
  faWarehouse,
  faAward
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const Home = () => {
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div id="home">
      {/* Hero Slider */}
      <Slider {...heroSettings}>
        <div className="slide" style={{ backgroundImage: `url(/images/d11bfd9e-8795-48b7-a084-fa9d6733cfeb.png)` }}>
          <div className="slide-content">
            <h1>VAMA</h1>
            <p>Global Excellence in Manufacturing and Exporting<br />Life-Saving Pharmaceutical Formulations</p>
          </div>
        </div>
      </Slider>

      {/* Vama Ethos Section */}
      <section className="ethos-section">
        <div className="container">
          <div className="ethos-header">
            <span className="value-driven">VALUE DRIVEN</span>
            <h2>Vama Ethos</h2>
          </div>

          <div className="ethos-cards">
            <div className="ethos-card">
              <div className="icon-wrapper">
                <svg className="ethos-svg" viewBox="0 0 64 64">
                  <path d="M32 12l-8 8 8 8 8-8z" fill="none" stroke="#e91e63" strokeWidth="4" />
                  <path d="M20 28h24" fill="none" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
                  <circle cx="32" cy="32" r="20" fill="none" stroke="#e91e63" strokeWidth="4" />
                </svg>
              </div>
              <p>Caring</p>
            </div>

            <div className="ethos-card">
              <div className="icon-wrapper">
                <svg className="ethos-svg" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="12" fill="none" stroke="#e91e63" strokeWidth="4" />
                  <circle cx="32" cy="32" r="24" fill="none" stroke="#e91e63" strokeWidth="4" />
                  <line x1="32" y1="8" x2="32" y2="4" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
                  <line x1="32" y1="60" x2="32" y2="56" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
                  <line x1="8" y1="32" x2="4" y2="32" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
                  <line x1="60" y1="32" x2="56" y2="32" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <p>Focus</p>
            </div>

            <div className="ethos-card">
              <div className="icon-wrapper">
                <svg className="ethos-svg" viewBox="0 0 64 64">
                  <rect x="16" y="12" width="32" height="40" rx="4" fill="none" stroke="#e91e63" strokeWidth="4" />
                  <line x1="24" y1="24" x2="40" y2="24" stroke="#e91e63" strokeWidth="4" />
                  <line x1="24" y1="32" x2="40" y2="32" stroke="#e91e63" strokeWidth="4" />
                  <line x1="24" y1="40" x2="36" y2="40" stroke="#e91e63" strokeWidth="4" />
                  <polyline points="36,44 40,48 48,40" fill="none" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <p>Accountability</p>
            </div>

            <div className="ethos-card">
              <div className="icon-wrapper">
                <svg className="ethos-svg" viewBox="0 0 64 64">
                  <path d="M32 12 L40 28 L56 32 L44 44 L48 60 L32 50 L16 60 L20 44 L8 32 L24 28 Z" fill="none" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="32" cy="32" r="8" fill="none" stroke="#e91e63" strokeWidth="4" />
                  <path d="M32 44v12M20 48l-8 8m32-8l8 8" stroke="#e91e63" strokeWidth="4" strokeLinecap="round" />
                </svg>
              </div>
              <p>Innovation</p>
            </div>
          </div>

          <p className="ethos-footer">
            Trusted Partner for Genuine Pharmaceutical Solutions in India.
          </p>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="welcome-section">
        <div className="pink-dot"></div>
        <div className="container">
          <div className="welcome-container">
            <div className="welcome-left">
              <img src="/images/scientist-lab.jpg" alt="Vama Lifecare Scientist Lab" className="welcome-image" />
            </div>

            <div className="welcome-right">
              <p className="top-tagline-big">
                ONE STOP-SHOP FOR PHARMACEUTICAL FINISHED DOSE FORMULATIONS
              </p>
              <div className="welcome-text">
                <p>
                  VAMA Lifecare has been fully equipped in Manufacturing and Exports of Pharmaceutical Finished Dose Formulations focusing in Oncology, Critical care & Life-Saving Drugs including blood derivatives, Ophthalmology & Cardiovascular drugs to more than 50+ countries worldwide. Our Products are manufactured in Eu-GMP & Country Specific Regulatory Authority Accredited Facilities.
                </p>
                <p>
                  Our Quality Assurance team ensures Product Quality, Customer Satisfaction, Compliance, Cost Savings following the SOPs laid down by WHO-GMP & Stringent Regulatory Authorities. Our Warehouse is GSDP approved & our logistics network is colossal, and we take advantage and legacy of being in the industry for the past 2 decades.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-pink-dot"></div>
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">20<span className="plus">+ ↑</span></div>
              <div className="stat-label">Years of service</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">300<span className="plus">+ ↑</span></div>
              <div className="stat-label">FDF's</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50<span className="plus">+ ↑</span></div>
              <div className="stat-label">Countries</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5<span className="plus">+ ↑</span></div>
              <div className="stat-label">Manufacturing Facilities</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200<span className="plus">+ ↑</span></div>
              <div className="stat-label">Employees</div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Reach Section - NEW */}
      <section className="global-reach-section">
        <div className="container">
          <h2 className="section-title">Global Presence</h2>
          <p className="section-subtitle">Delivering Life-Saving Medicines to 50+ Countries Worldwide</p>
          
          <div className="global-stats">
            <div className="global-stat">
              <FontAwesomeIcon icon={faGlobe} className="global-icon" />
              <h3>50+</h3>
              <p>Countries Served</p>
            </div>
            <div className="global-stat">
              <FontAwesomeIcon icon={faTruck} className="global-icon" />
              <h3>Global</h3>
              <p>Supply Chain</p>
            </div>
            <div className="global-stat">
              <FontAwesomeIcon icon={faHandshake} className="global-icon" />
              <h3>500+</h3>
              <p>Trusted Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths Section - NEW */}
      <section className="strengths-section">
        <div className="container">
          <h2 className="section-title">Why Choose Vama Lifecare</h2>
          
          <div className="strengths-grid">
            <div className="strength-card">
              <FontAwesomeIcon icon={faCertificate} className="strength-icon" />
              <h3>WHO-GMP Certified</h3>
              <p>Manufacturing in EU-GMP & internationally accredited facilities ensuring highest quality standards</p>
            </div>
            
            <div className="strength-card">
              <FontAwesomeIcon icon={faMicroscope} className="strength-icon" />
              <h3>Advanced R&D</h3>
              <p>Cutting-edge research and development for innovative life-saving formulations</p>
            </div>
            
            <div className="strength-card">
              <FontAwesomeIcon icon={faShieldAlt} className="strength-icon" />
              <h3>Quality Assurance</h3>
              <p>Stringent quality control at every stage from raw material to final packaging</p>
            </div>
            
            <div className="strength-card">
              <FontAwesomeIcon icon={faWarehouse} className="strength-icon" />
              <h3>GSDP Approved</h3>
              <p>State-of-the-art warehousing with temperature-controlled storage facilities</p>
            </div>
            
            <div className="strength-card">
              <FontAwesomeIcon icon={faVial} className="strength-icon" />
              <h3>500+ Products</h3>
              <p>Comprehensive portfolio across Oncology, Critical Care, Cardiology & more</p>
            </div>
            
            <div className="strength-card">
              <FontAwesomeIcon icon={faUsers} className="strength-icon" />
              <h3>Expert Team</h3>
              <p>200+ dedicated professionals with decades of pharmaceutical expertise</p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence - NEW */}
      <section className="manufacturing-section">
        <div className="container">
          <h2 className="section-title">Manufacturing Excellence</h2>
          <p className="section-subtitle">State-of-the-Art Facilities Meeting Global Standards</p>
          
          <div className="manufacturing-grid">
            <div className="manufacturing-item">
              <img src="/images/global/ishaque.jpg" alt="Modern Facility" className="manufacturing-img" />
              <div className="manufacturing-overlay">
                <FontAwesomeIcon icon={faAward} className="overlay-icon" />
                <h4>EU-GMP Certified</h4>
              </div>
            </div>
            
            <div className="manufacturing-item">
              <img src="/images/global/ishaque1.jpg" alt="Quality Control" className="manufacturing-img" />
              <div className="manufacturing-overlay">
                <FontAwesomeIcon icon={faMicroscope} className="overlay-icon" />
                <h4>Advanced Testing Labs</h4>
              </div>
            </div>
            
            <div className="manufacturing-item">
              <img src="/images/global/ishaque2.jpeg" alt="Production Line" className="manufacturing-img" />
              <div className="manufacturing-overlay">
                <FontAwesomeIcon icon={faVial} className="overlay-icon" />
                <h4>Sterile Production</h4>
              </div>
            </div>
            
            <div className="manufacturing-item">
              <img src="/images/global/ishaque3.jpeg" alt="Clean Room" className="manufacturing-img" />
              <div className="manufacturing-overlay">
                <FontAwesomeIcon icon={faShieldAlt} className="overlay-icon" />
                <h4>ISO Clean Rooms</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two Decades Excellence Marquee */}
      <section className="marquee-excellence-section">
        <div className="marquee-container">
          <div className="marquee-content">
            {/* First Group */}
            <div className="marquee-group">
              <h2>Two Decades Of Excellence In Pharma Solutions</h2>
              <span className="separator">●</span>
              <p>Your One-Stop Pharma Partner</p>
              <span className="separator">●</span>
              <p>Reliable Solutions For Global Healthcare</p>
              <span className="separator">●</span>
              <p>Excellence In Life-Saving Medicines</p>
              <span className="separator">●</span>
              <p>Delivering Quality Products Worldwide</p>
              <span className="separator">●</span>
              <p>Manufactured In Accredited Pharma Facilities</p>
            </div>

            {/* Duplicate Group for Seamless Loop */}
            <div className="marquee-group">
              <h2>Two Decades Of Excellence In Pharma Solutions</h2>
              <span className="separator">●</span>
              <p>Your One-Stop Pharma Partner</p>
              <span className="separator">●</span>
              <p>Reliable Solutions For Global Healthcare</p>
              <span className="separator">●</span>
              <p>Excellence In Life-Saving Medicines</p>
              <span className="separator">●</span>
              <p>Delivering Quality Products Worldwide</p>
              <span className="separator">●</span>
              <p>Manufactured In Accredited Pharma Facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations Marquee */}
      <section className="marquee-accreditations-section">
        <div className="container">
          <h2 className="accreditations-title">Accreditations</h2>
          <div className="marquee-container">
            <div className="accreditations-logos">
              <img src="/images/accreditations/who-gmp.png" alt="WHO-GMP" className="accreditation-logo" />
              <img src="/images/accreditations/invima.png" alt="INVIMA" className="accreditation-logo" />
              <img src="/images/accreditations/mhra.png" alt="MHRA" className="accreditation-logo" />
              <img src="/images/accreditations/fda.png" alt="FDA" className="accreditation-logo" />
              {/* Duplicate */}
              <img src="/images/accreditations/who-gmp.png" alt="WHO-GMP" className="accreditation-logo" />
              <img src="/images/accreditations/invima.png" alt="INVIMA" className="accreditation-logo" />
              <img src="/images/accreditations/mhra.png" alt="MHRA" className="accreditation-logo" />
              <img src="/images/accreditations/fda.png" alt="FDA" className="accreditation-logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Formulations */}
      <section className="advanced-formulations-section">
        <div className="af-pink-dot"></div>
        <div className="container">
          <div className="af-header">
            <span className="af-quality-text">QUALITY YOU TRUST</span>
            <h2>Advanced Formulations</h2>
          </div>

          <div className="af-grid">
            <div className="af-image">
              <img src="/images/advanced/lab1.jpg" alt="Lab Process" className="af-img" />
            </div>
            <div className="af-image">
              <img src="/images/advanced/lab2.jpg" alt="Lab Research" className="af-img" />
            </div>

            <div className="af-middle-box">
              <div className="af-icon">
                <svg viewBox="0 0 100 100" className="microscope-icon">
                  <path d="M50 10 a20 20 0 1 0 0 40 a20 20 0 1 0 0 -40 M50 30 v30 M30 60 h40" fill="none" stroke="#fff" strokeWidth="6" strokeLinecap="round" />
                  <circle cx="50" cy="80" r="10" fill="#fff" />
                </svg>
              </div>
              <h3>Reliable Healthcare Delivery</h3>
              <p>Committed To Global Healthcare And Safety</p>
            </div>                            

            <div className="af-image">
              <img src="/images/advanced/lab3.jpg" alt="Lab Testing" className="af-img" />
            </div>
            <div className="af-image">
              <img src="/images/advanced/lab4.jpg" alt="Lab Quality" className="af-img" />
            </div>
          </div>

          <div className="af-footer">
            <svg viewBox="0 0 100 100" className="af-footer-icon">
              <path d="M50 10 a20 20 0 1 0 0 40 a20 20 0 1 0 0 -40 M50 30 v30 M30 60 h40" fill="none" stroke="#e91e63" strokeWidth="6" strokeLinecap="round" />
              <circle cx="50" cy="80" r="10" fill="#e91e63" />
            </svg>
            <p>Trusted Global Pharmaceutical Solutions Provider.</p>
          </div>
        </div>
      </section>

      {/* Trusted Products */}
      <section className="trusted-products-section">
        <div className="tp-pink-dot"></div>
        <div className="container">
          <div className="tp-main-header">
            <h2>Trusted Experts In Pharmaceutical Manufacturing And Global Distribution</h2>
          </div>

          <div className="tp-sub-header">
            <span className="tp-subtitle">PRODUCT RANGE</span>
            <h3>Trusted Pharmaceutical Products</h3>
          </div>

          <div className="tp-grid">
            <div className="tp-item">
              <img src="/images/trusted/paclitaxal.jpg" alt="Paclitaxal" className="tp-product-img" />
              <p className="tp-category">Oncology</p>
            </div>
            <div className="tp-item">
              <img src="/images/trusted/rivaroxaban.jpg" alt="Rivaroxaban" className="tp-product-img" />
              <p className="tp-category">Cardio Vascular</p>
            </div>
            <div className="tp-item">
              <img src="/images/trusted/pharmacy.jpg" alt="Pharmacy" className="tp-product-img" />
              <p className="tp-category">Pharmacy</p>
            </div>
            <div className="tp-item">
              <img src="/images/trusted/pharma.jpg" alt="Generic Drugs" className="tp-product-img" />
              <p className="tp-category">Generic Drugs</p>
            </div>
            <div className="tp-item">
              <img src="/images/trusted/atropine.jpg" alt="Atropine" className="tp-product-img" />
              <p className="tp-category">Critical Care</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pink Banner Marquee */}
      <section className="pink-banner-marquee-section">
        <div className="marquee-container pink-marquee">
          <div className="pink-banner-content">
            <p>Provide Safety</p>
            <span className="pink-separator">○</span>
            <p>Your One-Stop Pharma Partner</p>
            <span className="pink-separator">○</span>
            <p>Innovating Critical Care Formulations</p>
            <span className="pink-separator">○</span>
            <p>Excellence In Life-Saving Medicines</p>
            <span className="pink-separator">○</span>
            <p>Trusted Global</p>
            {/* Duplicate */}
            <p>Provide Safety</p>
            <span className="pink-separator">○</span>
            <p>Your One-Stop Pharma Partner</p>
            <span className="pink-separator">○</span>
            <p>Innovating Critical Care Formulations</p>
            <span className="pink-separator">○</span>
            <p>Excellence In Life-Saving Medicines</p>
            <span className="pink-separator">○</span>
            <p>Trusted Global</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="test-pink-dot"></div>
        <div className="container">
          <div className="test-header">
            <span className="test-subtitle">CLIENT TESTIMONIALS</span>
            <h2>What Our Clients Say</h2>
          </div>

          <div className="test-grid">
            <div className="test-card">
              <div className="test-profile">
                <img src="/images/testimonials/vikram.jpg" alt="Vikram Singh" className="test-img" />
              </div>
              <div className="test-content">
                <p className="test-quote">
                  "Their life-saving formulations have been instrumental in treating critical cases. Vama Lifecare's commitment to quality and timely delivery is unmatched."
                </p>
                <h4 className="test-name">Omkar Chavare</h4>
                <p className="test-position">Oncology Specialist</p>
                <div className="test-stars">★★★★★</div>
              </div>
            </div>

            <div className="test-card">
              <div className="test-profile">
                <img src="/images/testimonials/ritu.jpg" alt="Ritu Kapoor" className="test-img" />
              </div>
              <div className="test-content">
                <p className="test-quote">
                  "From production to logistics, everything is seamless. Their team ensures compliance and quality at every step – a true partner in healthcare."
                </p>
                <h4 className="test-name">Hardik Pandya</h4>
                <p className="test-position">Hospital Procurement Head</p>
                <div className="test-stars">★★★★★</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button - Added Here */}
      <a 
        href="https://wa.me/919324745058?text=Hello%20Vama%20Lifecare%2C%20I%20would%20like%20to%20know%20more%20about%20your%20products%20and%20services!"
        className="whatsapp-float" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default Home;