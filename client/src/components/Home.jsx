import React, { Fragment, useEffect, useState } from "react";
import Search from "./Search";
import Img from "./Img";
import Subtitle from "./Subtitle";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { IngData, ProData } from "./Database";

function Home() {
  const [Prolist, setProlist] = useState([]);

  //get prolist
  const getProlist = async () => {
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        // Check for error status
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const jsonDate = await response.json();

      console.log("client:" + jsonDate);
      setProlist(jsonDate);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getProlist();
  }, []);

  return (
    <Fragment className="page-container">
      <Img
        link={"https://picsum.photos/500/300"}
        alt={"EcoSunscreen-headimg"}
      />
      <Search item={ProData} />

      <Link to="/ingredients">
        <Subtitle text={"Ingredients"} />
      </Link>
      <Cards cardData={IngData} />

      <Link to="/products">
        <Subtitle text={"Products"} />
      </Link>
      <Cards cardData={Prolist} />
    </Fragment>
  );
}

export default Home;
