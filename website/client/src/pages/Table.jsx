import React from "react";

function Table(props) {
  return (
    <div class="row justify-content-center mt-5">
      <div class="alert alert-danger" role="alert">
        Caution: This sunscreen may pose a threat to marine life. We strongly
        advise against using it while in the ocean.
        <br />
        <a href="/about" class="alert-link">
          [ Click here ]
        </a>
        to view our ingredient analysis for more information
      </div>
      <div class="col ">
        <table class="table table-warning table-striped mt-5">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Impact</th>
            </tr>
          </thead>
          <tbody>
            {props.ing.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.impact}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
