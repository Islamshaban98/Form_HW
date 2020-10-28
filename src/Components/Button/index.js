import React from "react";
import "./style.css";
import GoogleIcon from "../Icons/GoogleIcon";
export default function Button(props) {
  const { title, name } = props;
  return (
    <div className="parent-button">
      <GoogleIcon
        className={`${name !== "Register" ? "googleIcon" : "hidden"}`}
      />
      <input
        className={`button ${name === "Register" ? "register" : "byGoogle"}`}
        type="button"
        name={name}
        value={title}
      />
    </div>
  );
}
