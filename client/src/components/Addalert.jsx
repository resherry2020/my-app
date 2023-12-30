import React from "react";

function Addalert() {
  return (
    <div className="container">
      <div
        class="alert alert-success alert-dismissible fade show p-5"
        role="alert"
      >
        <h4>
          If none of the above search results match the product you are looking
          for, it's possible that the sunscreen you're searching for has not yet
          been added to our database.
          <br />
          To view the eco-friendly index of the sunscreen, please click below to
          check:) <br /> <br />
          <a href="/check" class="alert-link">
            Click Here
          </a>
        </h4>
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
}

export default Addalert;
