import React from "react";

import "./style.css";
import Back from "../../Components/Back";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import Or from "../../Components/Orgroup";

export default class Form extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: "",
    checked: "",
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    let _value = value;
    if (name === "checked") {
      _value = checked;
    }
    this.setState({ [name]: _value });
  };
  render() {
    const { email, password, repassword, checked } = this.state;
    return (
      <div className="form">
        <Back />
        <div className="text_div">
          <h1 className="h1">Register Individual Account!</h1>
          <p className="p">
            For the purpose of gamers regulation, your details are required.
          </p>
        </div>
        <form className="inputs-div">
          <Input
            type="email"
            lable="Email address*"
            placeholder="Enter email address"
            id="email"
            name="email"
            handleChange={this.handleChange}
            value={email}
          />
          <Input
            type="password"
            lable="Create password*"
            placeholder="Password"
            id="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
          />
          <Input
            type="password"
            lable="Repeat password*"
            placeholder="Repeat password"
            id="repassword"
            name="repassword"
            handleChange={this.handleChange}
            value={repassword}
          />
          <Checkbox
            type="checkbox"
            id="checked"
            name="checked"
            label="I agree to terms & conditions"
            checked={checked}
            handleChange={this.handleChange}
          />
          <Button name="Register" title="Register Account" />
          <Or />
          <Button name="byGoogle" title="Register with Google" />
        </form>
      </div>
    );
  }
}
