import React from "react";

import back from "../../assets/arrow_back_ios_24px.png";
import "./style.css";
export default function Back() {
  return (
    <div className="back_div">
      <img className="icon" src={back} alt="back" />
      <div className="back">Back</div>
    </div>
  );
}
