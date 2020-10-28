import React from "react";

import "./style.css";
import ListIcon from "../../Components/ListIcon";
import Orgroup from "../../Components/Orgroup";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
export default class Form extends React.Component {
  render() {
    return (
      <div className="signInForm">
        <div className="title-div">
          <h1 className="h1Text">Join the game!</h1>
          <p className="pText">Go inside the best gamers social network!</p>
        </div>
        <div className="component">
          <ListIcon />
          <Orgroup />
          <Input lable="Your email" placeholder="Write your email" />
          <Input lable="Choose a password" placeholder="Write your password" />
          <Checkbox type="checkbox" label="I agree to terms & conditions" />
          <Checkbox
            type="checkbox"
            label="I’d like being informed about latest news and tips"
          />
          <Button name="Register" title="Sign up for free" />
        </div>
        <div className="loginText">
          Do you already have an account? <span>Log in</span>
        </div>
      </div>
    );
  }
}
