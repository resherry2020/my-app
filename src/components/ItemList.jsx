import React from "react";
import Item from "./Item";

function ItemList({ items, emptyHeading }) {
  const count = items ? items.length : 0;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Products" : "Product";
    heading = count + " " + noun;
  }

  return (
    <section>
      <h2>{heading}</h2>
      {items.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          link={item.link}
          alt={item.title}
        />
      ))}
    </section>
  );
}

export default ItemList;
