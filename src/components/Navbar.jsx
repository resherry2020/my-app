import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <span className="nav-left">
        <Link to="/" className="nav-link">
          <h1>EcoSunscreen</h1>
        </Link>
      </span>
      <span className="nav-right">
        <Link to="/ingredients" className="nav-link">
          <h2>Ingredients</h2>
        </Link>
      </span>
      <span className="nav-right">
        <Link to="/products" className="nav-link">
          <h2>Products</h2>
        </Link>
      </span>
      <span className="nav-right">
        <Link to="/about" className="nav-link">
          <h2>About Us</h2>
        </Link>
      </span>
    </nav>
  );
}

export default Navbar;
