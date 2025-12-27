import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faHeartPulse, 
  faBrain, 
  faLeaf, 
  faCapsules, 
  faEye, 
  faPills, 
  faCertificate,
  faCheckCircle,
  faShieldAlt,
  faFlask
} from '@fortawesome/free-solid-svg-icons';
import './Products.css';

const Products = () => {
  const categories = [
    { name: "Cardiology", icon: faHeartPulse, color: "#e91e63", count: "85+" },
    { name: "Neurology", icon: faBrain, color: "#9c27b0", count: "65+" },
    { name: "Dermatology", icon: faLeaf, color: "#4caf50", count: "70+" },
    { name: "Gastroenterology", icon: faCapsules, color: "#ff9800", count: "55+" },
    { name: "Ophthalmology", icon: faEye, color: "#2196f3", count: "40+" },
    { name: "Nutraceuticals", icon: faPills, color: "#795548", count: "120+" },
  ];

  const featuredProducts = [
    { name: "CardioMax Pro", category: "Cardiology", icon: faHeartPulse, desc: "Advanced cardiovascular protection with proven efficacy", image: "https://www.shutterstock.com/image-photo/professional-photo-medicine-tablets-capsules-260nw-2706792183.jpg" },
    { name: "NeuroShield", category: "Neurology", icon: faBrain, desc: "Cognitive enhancement and neuroprotection formula", image: "https://static.vecteezy.com/system/resources/previews/009/178/693/large_2x/different-medicines-tablets-pills-in-blister-pack-medications-drugs-on-blue-background-close-up-copy-space-high-quality-photo.jpg" },
    { name: "DermaClear Advanced", category: "Dermatology", icon: faLeaf, desc: "Clinically proven skin rejuvenation therapy", image: "https://static.vecteezy.com/system/resources/previews/065/353/836/non_2x/blister-packs-and-scattered-capsules-on-a-white-table-with-a-brown-bottle-in-soft-daylight-ideal-for-pharmaceutical-themes-healthcare-marketing-medical-packaging-and-wellness-campaigns-photo.jpeg" },
    { name: "GastroCare Plus", category: "Gastroenterology", icon: faCapsules, desc: "Complete digestive health and gut balance", image: "https://static.vecteezy.com/system/resources/previews/070/685/955/non_2x/colorful-pharmaceutical-capsules-and-tablets-in-blister-packs-pharmaceutical-industry-healthcare-products-photo.jpeg" },
    { name: "VisionPro Max", category: "Ophthalmology", icon: faEye, desc: "Premium eye health and vision support", image: "https://static.vecteezy.com/system/resources/previews/009/178/695/large_2x/different-medicines-tablets-pills-in-blister-pack-medications-drugs-on-blue-background-close-up-copy-space-high-quality-photo.jpg" },
    { name: "NutriVita Premium", category: "Nutraceuticals", icon: faPills, desc: "Complete daily nutrition with bioavailable nutrients", image: "https://media.istockphoto.com/id/1778918997/photo/background-of-a-large-group-of-assorted-capsules-pills-and-blisters.jpg?s=612x612&w=0&k=20&c=G6aeWKN1kHyaTxiNdToVW8_xGY0hcenWYIjjG_xwF_Q=" },
  ];

  return (
    <div className="products-page">
      {/* Hero */}
      <section className="products-hero" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/blurred-background-modern-pharmaceutical-laboratory-260nw-2621808743.jpg')" }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Our Pharmaceutical Excellence</h1>
          <p>500+ WHO-GMP Certified Products Across 6 Therapeutic Segments</p>
          <div className="hero-highlight">
            <FontAwesomeIcon icon={faShieldAlt} />
            <span>Trusted Quality • Global Standards • Patient First</span>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="categories-section">
        <div className="container">
          <h2 className="section-title">Therapeutic Categories</h2>
          <div className="categories-grid">
            {categories.map((cat, i) => (
              <div key={i} className="category-card" style={{ '--cat-color': cat.color }}>
                <div className="cat-icon-wrapper">
                  <FontAwesomeIcon icon={cat.icon} className="cat-icon" />
                </div>
                <h3>{cat.name}</h3>
                <p className="cat-count">{cat.count} Products</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map((prod, i) => (
              <div key={i} className="product-card">
                <div className="product-image-wrapper">
                  <img src={prod.image} alt={prod.name} className="product-image" />
                </div>
                <div className="product-icon-bg">
                  <FontAwesomeIcon icon={prod.icon} className="product-icon" />
                </div>
                <h3>{prod.name}</h3>
                <span className="product-cat">{prod.category}</span>
                <p>{prod.desc}</p>
                <button className="details-btn">
                  <span>View Details</span>
                  <FontAwesomeIcon icon={faCheckCircle} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="quality-section">
        <div className="container">
          <div className="quality-grid">
            <div className="quality-content">
              <h2>Uncompromising Quality  </h2>
              <p className="quality-paragraph">
    We maintain the highest standards in pharmaceutical manufacturing with rigorous quality control at every stage. This commitment ensures every product meets global benchmarks for safety, efficacy, and reliability—from raw material sourcing to final packaging.
  </p>
  <p className="quality-paragraph">
    Our dedicated quality assurance team conducts multi-level checks, including comprehensive stability testing, bioequivalence studies, and contamination control. Every batch undergoes thorough validation to guarantee consistent therapeutic performance and utmost patient safety.
  </p>
              <div className="certifications">
                <div className="cert-item">
                  <FontAwesomeIcon icon={faCertificate} />
                  <div>
                    <h4>WHO-GMP Certified</h4>
                    <p>Global manufacturing standards</p>
                  </div>
                </div>
                <div className="cert-item">
                  <FontAwesomeIcon icon={faFlask} />
                  <div>
                    <h4>Stability Tested</h4>
                    <p>Comprehensive stability studies</p>
                  </div>
                </div>
                <div className="cert-item">
                  <FontAwesomeIcon icon={faCheckCircle} />
                  <div>
                    <h4>Bioequivalence Proven</h4>
                    <p>Clinically validated formulations</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="quality-visual">
              <img src="https://eu-images.contentstack.com/v3/assets/blt14ac89070d5e4751/blt6b1b68da3e624243/6725205cdd4fd46cf015a3a6/IMG_2024-11-01-143828.jpg" alt="GMP Cleanroom Facility" className="quality-facility-img" />
              <img src="https://media.licdn.com/dms/image/v2/D5612AQH96ea4lkAeBg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1682570182708?e=2147483647&v=beta&t=VJ4J8g_hBqvRjnEWJao0b5BD8655mCxDhIL0MtSz2UA" alt="Modern GMP Cleanroom" className="quality-facility-img" />
              <img src="https://www.gxpcellators.com/wp-content/uploads/2025/02/cell-and-gane-teherapy_04022025-png.webp" alt="Advanced Pharmaceutical Facility" className="quality-facility-img" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="products-cta">
        <div className="container">
          <h2>Partner with Excellence</h2>
          <p>Join thousands of healthcare professionals trusting Vama Lifecare for superior pharmaceutical solutions</p>
          <div className="cta-buttons">
            <a href="/contact" className="primary-cta">Contact Our Team</a>
            <a href="/contact" className="secondary-cta">Request Product List</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;