import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Outputtable from "../components/Outputtable";
import Safealert from "../components/SafeAlert";
import Recommend from "./Recom";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch product data using the product ID
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:3001/products/${id}`);
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
                src={product.link}
                alt={product.title}
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
          <div class="col-md-7">
            <h2>{product.title}</h2>
            <p>Brand: {product.brand}</p>

            <div class="font-size-sm">
              <span class="text-muted mr-2">SPF:</span>
              {product.spf}
            </div>
            <div
              class="font-size-lg text-primary pt-2"
              className={` ${
                product.is_safe ? "badge text-bg-info" : "badge text-bg-danger"
              }`}
            >
              {product.is_safe ? " Safe " : "Danger"}
            </div>
            {product.is_safe ? (
              <Safealert />
            ) : (
              <Outputtable ing={product.prohibited_ingredients} />
            )}
          </div>
          <Recommend />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
