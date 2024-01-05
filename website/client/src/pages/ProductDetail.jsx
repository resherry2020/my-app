import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import Safealert from "../components/SafeAlert";
import Recommend from "./Recom";
import Table from "./Table";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data using the product ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/proing/${id}`);
        const productData = await response.json();
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product data", error);
      }
    };

    fetchProduct();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <div class="container my-5">
        <div class="row">
          <div class="col-md-5">
            <div class="main-img">
              <img
                class=""
                src={product[0].link}
                alt={product[0].title}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
          <div class="col-md-7">
            <h2>{product[0].title}</h2>
            <p>Brand: {product[0].brand}</p>

            <div class="font-size-sm">
              <span class="text-muted mr-2">SPF:</span>
              {product[0].spf}
            </div>

            <div
              class="font-size-lg text-primary pt-2"
              className={` ${
                product[0].is_safe
                  ? "badge text-bg-info"
                  : "badge text-bg-danger"
              }`}
            >
              {product[0].is_safe ? " Safe " : "Danger"}
            </div>
            {product[0].is_safe ? <Safealert /> : <Table ing={product} />}
          </div>
          <Recommend />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
