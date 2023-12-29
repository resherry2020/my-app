import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item">
          <a href="/" class="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-2 text-body-secondary" href="/products">
            Products
          </a>
        </li>

        <li class="nav-item">
          <a class="nav-link px-2 text-body-secondary" href="/check">
            Check
          </a>
        </li>
        <li class="nav-item">
          <a href="/about" class="nav-link px-2 text-body-secondary">
            About Us
          </a>
        </li>
      </ul>
      <p class="text-center text-body-secondary">© {year} EcoSunscreen </p>
    </footer>
  );
}

export default Footer;
