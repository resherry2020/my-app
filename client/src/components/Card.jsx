import React, { Fragment } from "react";

function Card(props) {
  console.log("card:props" + props.link, props.alt, props.title);
  return (
    <Fragment className="container">
      <div className="card">
        <img className="card-img-top" src={props.link} alt={props.alt} />
        <div className="card-body">
          <h3 className="card-title">{props.title}</h3>
          <span className="card-subtitle">{props.brand}</span>
          <div className="card-footer">safe</div>
        </div>
      </div>
    </Fragment>
  );
}

export default Card;
