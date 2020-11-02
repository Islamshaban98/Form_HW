import React from "react";

import { Link } from "react-router-dom";

import "./style.css";
import Back from "../../Components/Back";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import Or from "../../Components/Orgroup";
import PasswordStrengthBar from "react-password-strength-bar";

export default class Form extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: "",
    checked: "",
    passwordShown: false,
    repasswordShown: false,
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    let _value = value;
    if (name === "checked") {
      _value = checked;
    }
    this.setState({ [name]: _value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.email);
  };
  togglePasswordVisiblity = () => {
    const { passwordShown } = this.state;
    this.setState({ passwordShown: passwordShown ? false : true });
  };
  togglerePasswordVisiblity = () => {
    const { repasswordShown } = this.state;
    this.setState({ repasswordShown: repasswordShown ? false : true });
  };
  render() {
    const {
      email,
      password,
      repassword,
      checked,
      passwordShown,
      repasswordShown,
    } = this.state;
    return (
      <div className="form">
        <Link to="/SignInIndex">
          <Back />
        </Link>

        <div className="text_div">
          <h1 className="h1">Register Individual Account!</h1>
          <p className="p">
            For the purpose of gamers regulation, your details are required.
          </p>
        </div>
        <form onSubmit={this.handleSubmit} className="inputs-div">
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
            type={passwordShown ? "text" : "password"}
            lable="Create password*"
            placeholder="Password"
            id="password"
            name="password"
            handleChange={this.handleChange}
            value={password}
            toggleShow={this.togglePasswordVisiblity}
          />
          <PasswordStrengthBar password={password} />
          <Input
            type={repasswordShown ? "text" : "password"}
            lable="Repeat password*"
            placeholder="Repeat password"
            id="repassword"
            name="repassword"
            handleChange={this.handleChange}
            value={repassword}
            toggleShow={this.togglerePasswordVisiblity}
          />
          <PasswordStrengthBar password={repassword} />
          <Checkbox
            type="checkbox"
            id="checked"
            name="checked"
            label={["I agree to ", <Link to="">terms & conditions</Link>]}
            checked={checked}
            handleChange={this.handleChange}
          />
          <div className="register-button-div">
            <Button name="Register" title="Register Account" type="submit" />
            <Or />
            <Button
              name="byGoogle"
              title="Register with Google"
              type="submit"
            />
            <div className="LoginText">
              Do you already have an account?{" "}
              <Link to="/SignInIndex"> Log in</Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
