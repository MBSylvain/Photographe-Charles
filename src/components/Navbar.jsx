import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React from "react";
import Home from "../pages/Home"; // Fixed path
import Gallery from "../pages/Gallery";
import Pricing from "../pages/Pricing"; // Fixed typo
import Contact from "../pages/contact";
import Services from "../pages/Services"; // Import the Services component

const Navbar = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Charles Quentin
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link
                  to="/Home"
                  className="nav-link active"
                  aria-current="page"
                >
                  Accueil
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Pricing" className="nav-link">
                  Prix
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Gallery" className="nav-link">
                  Gallerie
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/Contact" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default Navbar;
