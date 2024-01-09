import React, { useEffect, useState } from "react";
import Search from "./Search";
import Carousel from "./Carousel";

import Procards from "./Procards";

import Ingpage from "./IngPage";

function Home() {
  const [Prolist, setProlist] = useState([]);

  //get prolist
  const getProlist = async () => {
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const jsonDate = await response.json();

      setProlist(jsonDate);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProlist();
  }, []);

  return (
    <div className="page-container">
      <Carousel />

      <Search item={Prolist} />

      <Procards />
      <Ingpage />
    </div>
  );
}

export default Home;
