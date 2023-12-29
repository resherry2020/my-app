import React, { useEffect, useState } from "react";

const Ingpage = () => {
  const [list, setList] = useState([]);
  //get all items
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:3001/ingredients", {
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
      <h1 class="container pb-2 border-bottom">Unsafe Ingredients</h1>
      <div className="row">
        {list.map((item) => (
          <div key={item.id} class="col-md-6 mb-2 mt-2">
            <div class="overflow-auto mx-auto">
              <div class="card m-2 mt-3">
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={item.imglink} class="fixed-img" alt={item.name} />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h3 class="card-title">{item.name}</h3>
                      <p class="card-text">
                        <strong>Description: </strong>
                        {item.description}
                      </p>
                      <p class="card-text">
                        <strong>Impact: </strong>
                        {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingpage;
