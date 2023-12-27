import React, { useState } from "react";
import { Link } from "react-router-dom";

function Warning(props) {
  const [isShowWarning, setIsShowWarning] = useState(true);

  const handleClose = () => {
    props.clearSearch();
    setIsShowWarning(false);
    // You can add additional logic here if needed
  };

  return (
    isShowWarning && (
      <div className="container warning">
        <p>
          It seems we haven't found product results that match your search
          query. :( <br />
          <br />
          To view the eco-friendly index of the sunscreen, please
          <Link to="/check"> click here </Link> to check:)
        </p>
        <div>
          <button className="closebtn" onClick={handleClose}>
            <img src="/Icon/close.svg" alt="close button" />
          </button>
        </div>
      </div>
    )
  );
}

export default Warning;
