import React, { useEffect, useState } from "react";

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
    <div className=" px-4 py-5">
      <h2 class="container pb-2 border-bottom">Products</h2>
      <div class="row justify-content-center mt-5">
        {list.slice(0, 4).map((item) => (
          <div class="col-sm-2 mb-3 mb-sm-0 ">
            <div class="card">
              <div
                className={`card-header ${
                  item.is_safe ? " text-bg-info" : "text-bg-danger"
                }`}
              >
                {item.is_safe ? " Safe " : "Danger"}
              </div>
              <img
                src={item.link}
                class="card-img-top fixed-img"
                alt={item.title}
              ></img>
              <div class="card-body">
                <h5 class="card-title">{item.title}</h5>
                <span class="card-text">{item.brand}</span>
              </div>
              <div class="card-footer">
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li class="page-item disabled">
                      <a class="page-link">SPF: {item.spf}</a>
                    </li>

                    <li class="page-item">
                      <a class="page-link" href="/">
                        more
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Procards;
