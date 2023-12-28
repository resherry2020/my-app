import React, { useEffect, useState } from "react";

function Ingcards() {
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
      <h2 class="container pb-2 border-bottom">Ingredients</h2>
      {list.length > 0 && (
        <div>
          {[...Array(Math.ceil(list.length / 4))].map((_, rowIndex) => (
            <div key={rowIndex} className="row justify-content-center mt-5">
              {list.slice(rowIndex * 4, (rowIndex + 1) * 4).map((item) => (
                <div key={item.id} className="col-sm-2 mb-3 mb-sm-0 ">
                  <div className="card">
                    <img
                      src={item.imglink}
                      className="card-img-top fixed-img"
                      alt={item.name}
                    ></img>
                    <div className="card-body">
                      <h5 className="card-title">{item.name}</h5>
                    </div>
                    <div class="card-footer">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination justify-content-center">
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
          ))}
        </div>
      )}
    </div>
  );
}

export default Ingcards;
