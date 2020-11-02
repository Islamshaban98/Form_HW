import React from "react";

import "./style.css";
import ListIcon from "../../Components/ListIcon";
import Orgroup from "../../Components/Orgroup";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

export default class Form extends React.Component {
  state = {
    email: "",
    password: "",
    checked1: "",
    checked2: "",
    passwordShown: false,
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

  togglePasswordVisiblity = () => {
    const { passwordShown } = this.state;
    this.setState({ passwordShown: passwordShown ? false : true });
  };
  render() {
    const { email, password, checked1, checked2, passwordShown } = this.state;
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
              handleChange={(e) => {
                this.handleChange(e);
              }}
              placeholder="Write your email"
            />
            <Input
              value={password}
              id="pass"
              name="password"
              type={passwordShown ? "text" : "password"}
              handleChange={this.handleChange}
              lable="Choose a password"
              placeholder="Write your password"
              toggleShow={this.togglePasswordVisiblity}
            />
            <Checkbox
              type="checkbox"
              label={["I agree to ", <Link to="#">terms & conditions</Link>]}
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
            <div className="signup-button-div">
              <Button name="Register" title="Login" type="submit" />
            </div>
          </form>
        </div>
        <div className="RegisterText">
          Don't have an account? <Link to="/"> Register</Link>
        </div>
      </div>
    );
  }
}
