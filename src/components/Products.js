import React from "react";
import Item from "./Item";
import { ProData } from "./Database";

function Products() {
  return (
    <div>
      <h2>Products</h2>
      {ProData.map((item, index) => (
        <Item
          key={index}
          title={item.title}
          link={item.link}
          alt={item.title}
        />
      ))}
    </div>
  );
}

export default Products;
