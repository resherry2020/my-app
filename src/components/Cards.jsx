import React from "react";
import Card from "./Card";

function Cards({ cardData }) {
  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          link={card.link}
          alt={card.title}
        />
      ))}
    </div>
  );
}

export default Cards;
