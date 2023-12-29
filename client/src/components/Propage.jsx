import React, { useEffect, useState } from "react";

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
      <h1 class="container pb-2 border-bottom">Products</h1>
      <div class="row justify-content-evenly">
        {list.map((item, index) => (
          <div class="col-3 mt-5" key={index}>
            <div class="media d-block d-sm-flex text-sm-left">
              <a class="cart-item-thumb mx-auto mr-sm-4" href="/">
                <img src={item.link} alt={item.title} className="fixed-img" />
              </a>
              <div class="media-body pt-3">
                <h3 class="product-card-title font-weight-semibold border-0 pb-0">
                  <a href="/">{item.title}</a>
                </h3>
                <div class="font-size-sm">
                  <span class="text-muted mr-2"></span>
                  {item.brand}
                </div>
                <div class="font-size-sm">
                  <span class="text-muted mr-2">SPF:</span>
                  {item.spf}
                </div>
                <div
                  class="font-size-lg text-primary pt-2"
                  className={` ${
                    item.is_safe ? "badge text-bg-info" : "badge text-bg-danger"
                  }`}
                >
                  {" "}
                  {item.is_safe ? " Safe " : "Danger"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
