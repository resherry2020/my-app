import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Procards() {
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
    <div className="container">
      <div className=" px-4 py-5">
        <h2 class="container pb-2 border-bottom">
          <a class="nav-link" href="/products">
            Products
          </a>
        </h2>
        <div class="row mt-5">
          {list.slice(0, 4).map((item) => (
            <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
              <div class="bg-white rounded shadow-sm">
                <img
                  src={item.link}
                  alt={item.title}
                  class="img-fluid card-img-top fixed-img"
                />
                <div class="p-4">
                  <h5>
                    <a href="/" class="text-dark">
                      <Link className="page-link" to={`/product/${item.id}`}>
                        {item.title}
                      </Link>
                    </a>
                  </h5>
                  <p class="small text-muted mb-0">{item.brand}</p>
                  <div class="d-flex align-items-center justify-content-between rounded-pill bg-light px-3 py-2 mt-4">
                    <p class="small mb-0">
                      <i class="fa fa-picture-o mr-2"></i>
                      <span class="font-weight-bold">{item.spf}</span>
                    </p>
                    <div
                      class={`badge badge-primary px-3 rounded-pill font-weight-normal ${
                        item.is_safe ? " bg-info" : "bg-danger"
                      }`}
                    >
                      {item.is_safe ? " Safe " : "Danger"}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Procards;
