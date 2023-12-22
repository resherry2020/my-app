import React from "react";
import Search from "./Search";
import Img from "./Img";
import Subtitle from "./Subtitle";
import Cards from "./Cards";
import { Link } from "react-router-dom";
import { IngData, ProData } from "./Database";

function Home() {
  return (
    <div className="page-container">
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
      <Cards cardData={ProData} />
    </div>
  );
}

export default Home;
