import React from "react";

function Warning() {
  return (
    <div className="container">
      <div
        class="alert alert-warning alert-dismissible fade show p-5"
        role="alert"
      >
        <h4>
          <strong>Sorry!</strong> <br /> <br />
          It seems we haven't found product results that match your search
          query. :( <br />
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

export default Warning;
