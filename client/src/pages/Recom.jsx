import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Recommend() {
  const [list, setSafeList] = useState([]);

  const shuffleArray = (array) => {
    // Use the Fisher-Yates algorithm for shuffling
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  // In your React component
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/products");
        const data = await response.json();
        const List = data.filter((product) => product.is_safe);
        setSafeList(List);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchData();
  }, []);

  shuffleArray(list);
  const selectedItems = list.slice(0, 4);

  return (
    <div className="mt-5">
      <h3 className="mt-5">Recommend Products</h3>
      <div className="container similar-products my-4 ">
        <div className="row">
          {selectedItems.map((item) => (
            <div className="col-md-3" key={item.id}>
              <div className="similar-product">
                <img className="w-100" src={item.link} alt={item.title} />
                <p>{item.brand}</p>
                <h5>
                  <Link className="page-link" to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                </h5>
                <p>SPF: {item.spf}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Recommend;
