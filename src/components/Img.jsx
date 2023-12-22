import React from "react";

function Img(porps) {
  return (
    <div className="container">
      <img className="headimg" src={porps.link} alt={porps.alt} />
    </div>
  );
}

export default Img;
