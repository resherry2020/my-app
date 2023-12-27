import React, { Fragment } from "react";
import Card from "./Card";

function Cards({ cardData }) {
  return (
    <Fragment className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          link={card.link}
          alt={card.title}
        />
      ))}
    </Fragment>
  );
}

export default Cards;
