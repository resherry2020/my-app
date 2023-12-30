import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [list, setList] = useState([]);
  const [safeFilter, setSafeFilter] = useState("all");
  const [spfFilter, setSpfFilter] = useState("all");

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

  //apply filters to the list of products
  const filteredList = list.filter((item) => {
    const safeCondition =
      safeFilter === "all" ? true : item.is_safe === (safeFilter === "safe");
    const spfCondition =
      spfFilter === "all" ? true : item.spf >= parseInt(spfFilter);
    return safeCondition && spfCondition;
  });

  return (
    <div>
      <h1 class="container pb-2 border-bottom">Products</h1>
      <div class="container">
        <div class="dropdown m-2">
          <a
            class="btn btn-danger dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select Safe Sunscreen
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" onClick={() => setSafeFilter("safe")}>
                Safe Sunscreens
              </a>
            </li>
            <li>
              <a
                class="dropdown-item"
                href="/products"
                onClick={() => setSafeFilter("all")}
              >
                All Products
              </a>
            </li>
          </ul>
        </div>
        <div class="dropdown m-2">
          <a
            class="btn btn-warning dropdown-toggle"
            href="/"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select SPF
          </a>

          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" onClick={() => setSpfFilter("50")}>
                over 50
              </a>
            </li>
            <li>
              <a class="dropdown-item" onClick={() => setSpfFilter("30")}>
                over 30
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/products">
                All Products
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row justify-content-evenly">
        {filteredList.map((item, index) => (
          <div class="col-3 mt-5" key={index}>
            <div class="media d-block d-sm-flex text-sm-left">
              <a class="cart-item-thumb mx-auto mr-sm-4" href="/">
                <img src={item.link} alt={item.title} className="fixed-img" />
              </a>
              <div class="p-4">
                <h4 class="text-dark">
                  <Link className="page-link" to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                </h4>
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
