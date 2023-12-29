import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import About from "./About";
import Home from "./Home";
import Products from "./Propage";
import Check from "./Check";
import Ingpage from "./IngPage";

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
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
