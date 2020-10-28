import React from "react";

import "./style.css";
import ListIcon from "../../Components/ListIcon";
import Orgroup from "../../Components/Orgroup";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import SignUpIndex from "../SignUp/SignUpIndex";

export default class Form extends React.Component {
  state = {
    email: "",
    password: "",
    checked1: "",
    checked2: "",
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const checked1 = e.target.checked;
    const checked2 = e.target.checked;
    let _value = value;
    if (name === "checked1") {
      _value = checked1;
    }
    if (name === "checked2") {
      _value = checked2;
    }
    this.setState({ [name]: _value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert("You are submitting " + this.state.email);
  };

  render() {
    const { email, password, checked1, checked2 } = this.state;
    return (
      <div className="signInForm">
        <div className="title-div">
          <h1 className="h1Text">Join the game!</h1>
          <p className="pText">Go inside the best gamers social network!</p>
        </div>
        <div className="component">
          <ListIcon />
          <Orgroup />
          <form onSubmit={this.handleSubmit}>
            <Input
              value={email}
              name="email"
              id="Email"
              lable="Your email"
              handleChange={this.handleChange}
              placeholder="Write your email"
            />
            <Input
              value={password}
              id="pass"
              name="password"
              type="password"
              handleChange={this.handleChange}
              lable="Choose a password"
              placeholder="Write your password"
            />
            <Checkbox
              type="checkbox"
              label={["I agree to ", <a href="#">terms & conditions</a>]}
              name="checked1"
              handleChange={this.handleChange}
              checked={checked1}
            />
            <Checkbox
              type="checkbox"
              label="I’d like being informed about latest news and tips"
              name="checked2"
              handleChange={this.handleChange}
              checked={checked2}
            />
            <Button name="Register" title="Sign up for free" type="submit" />
          </form>
        </div>
        <div className="loginText">
          Do you already have an account? <a href="#">Log in</a>
        </div>
      </div>
    );
  }
}
