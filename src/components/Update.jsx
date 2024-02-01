import React from "react";

import checkIcon from "../assets/images/icon-list.svg";

const Update = ({ update }) => {
  return (
    <div className="main__content_update">
      <img src={checkIcon} alt="check icon" />

      <p>{update}</p>
    </div>
  );
};

export default Update;
