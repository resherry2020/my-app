import React from "react";

function Safealert() {
  return (
    <div class="alert alert-info mt-5" role="alert">
      <strong>Reassurance: </strong> Based on our current research findings,
      this sunscreen has been determined to be safe for marine life.
      <br />
      Click to view our ingredient analysis{" "}
      <a href="/about#princeples" class="alert-link">
        <strong> Princeples </strong>
      </a>
    </div>
  );
}

export default Safealert;
