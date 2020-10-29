import React from "react";
import "./style.css";

import EyeIcon from "../Icons/EyeIcon";

export default function Input(props) {
  const {
    id,
    placeholder,
    name,
    type,
    lable,
    value,
    handleChange,
    toggleShow,
  } = props;
  return (
    <div className="input_div">
      <label className="label" htmlFor={id}>
        {lable}
      </label>
      <input
        className="input"
        name={name}
        placeholder={placeholder}
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
      />
      <div onClick={toggleShow}>
        <EyeIcon
          className={`${
            type === "password" || type === "text" ? "eye" : "hiddenSvg"
          }`}
        />
      </div>
    </div>
  );
}
