import React from "react";

function Card(props) {
  return (
    <div>
      <div className="card">
        <img src={props.link} alt={props.alt} />
        <h3>{props.title}</h3>
      </div>
    </div>
  );
}

export default Card;
