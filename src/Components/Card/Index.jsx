import React from "react";
import "./style.css";

const Card = ({img, title}) => {
  return (
    <div className="card">
      <img src={img} alt="" />
      <div className="title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Card;
