import React, { useEffect, useState } from "react";
import Item from "./Item";

function Products() {
  const [list, setList] = useState([]);
  //get all items
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:3001/products", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      console.log(response);
      const jsonDate = await response.json();
      console.log(jsonDate);
      setList(jsonDate);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getList();
  }, []);

  return (
    <div>
      <h2>Products</h2>

      {list.map((item, index) => (
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
