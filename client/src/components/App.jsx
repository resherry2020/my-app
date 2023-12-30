import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Products from "./Propage";
import Check from "./Check";
import Ingpage from "./IngPage";
import Procards from "./Procards";
import ProductDetail from "../pages/ProductDetail";
import Recommend from "../pages/Recom";

function App() {
  return (
    <div className="page-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/check" element={<Check />} />
          <Route path="/ingredients" element={<Ingpage />} />
          <Route path="/" element={<Procards />} />
          <Route path="/" element={<Recommend />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
