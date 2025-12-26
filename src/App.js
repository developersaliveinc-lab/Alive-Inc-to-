import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";  // <-- YEH IMPORT ADD KAR DO (missing tha)
import Contact from "./pages/Contact";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />  {/* Duplicate delete kar diya */}
            <Route path="/products" element={<Products />} />
            <Route path="/contact" element={<Contact />} />
            {/* Aur pages yaha add kar sakte ho */}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;