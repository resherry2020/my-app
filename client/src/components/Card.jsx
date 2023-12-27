import React, { Fragment } from "react";

function Card(props) {
  console.log("card:props" + props.link, props.alt, props.title);
  return (
    <Fragment>
      <div className="card">
        <img src={props.link} alt={props.alt} />
        <h3>{props.title}</h3>
      </div>
    </Fragment>
  );
}

export default Card;
