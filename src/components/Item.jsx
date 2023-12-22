import React from "react";
function Item(props) {
  return (
    <div>
      <img src={props.link} alt={props.alt} />
      <h3>{props.title}</h3>
    </div>
  );
}

export default Item;
