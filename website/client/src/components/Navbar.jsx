import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg px-5 bg-#FFC93C ">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          EcoSunscreen
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link " aria-current="page" href="/">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/products">
                Products
              </a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/check">
                Check
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link">
                About Us
              </a>
            </li>
          </ul>
          <span class="navbar-text">Dive into Safe Sun</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
