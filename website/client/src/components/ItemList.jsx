import React from "react";
import Addalert from "./Addalert";

function ItemList({ items, emptyHeading }) {
  const count = items ? items.length : 0;
  let heading = emptyHeading;
  if (count > 0) {
    const noun = count > 1 ? "Products" : "Product";
    heading = count + " " + noun;
  }

  return (
    <section>
      <h1 class="container pb-2 border-bottom">{heading}</h1>
      <div class="row justify-content-evenly">
        {items.map((item, index) => (
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
                  {item.is_safe ? " Safe " : "Unsafe"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {count > 1 ? <Addalert /> : <p>0</p>}
    </section>
  );
}

export default ItemList;
