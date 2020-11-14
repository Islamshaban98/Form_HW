import React from "react";

import PasswordStrengthBar from "react-password-strength-bar";
import axios from "axios";
import { Link, withRouter } from "react-router-dom";

import "./style.css";
import Back from "../../Components/Back";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Button from "../../Components/Button";
import Or from "../../Components/Orgroup";
import SignUpSchema, { fieldSchema } from "../SignUp/SignUpValidation";

class Form extends React.Component {
  state = {
    email: "",
    password: "",
    repassword: "",
    checked: "",
    passwordShown: false,
    repasswordShown: false,
    errors: {},
    error: "",
  };

  handleChange = (e) => {
    const { name, value, checked } = e.target;
    let _value = value;
    if (name === "checked") {
      _value = checked;
    }
    const validate = () => {
      fieldSchema(name)
        .validate(value)
        .then(() => {
          this.setState((prevState) => {
            const { errors } = prevState;
            return { errors: { ...errors, [name]: "" } };
          });
        })
        .catch((err) => {
          this.setState((prevState) => {
            const { errors } = prevState;
            return { errors: { ...errors, [name]: err.message } };
          });
        });
    };
    this.setState({ [name]: _value }, validate);
  };

  validateForm = (data) => {
    SignUpSchema.validate(data, { abortEarly: false })
      .then(() => {
        this.setState({ errors: {}, error: "" });
      })
      .catch((err) => {
        const errors = {};
        err.inner.forEach(({ message, params }) => {
          errors[params.path] = message;
          this.setState({ errors, error: "check the fields above" });
        });
      });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password, repassword, error } = this.state;
    this.validateForm({ email, password, repassword });
    if (!error) {
      //post data to api with axios
      axios
        .post("https://fake-api-ahmed.herokuapp.com/v1/auth/signup", {
          email,
          password,
        })
        .then((res) => {
          this.props.handelLogin();
          this.props.history.push("/SignInIndex");
        })
        .catch((err) => {
          console.log(err.response.data.error);
          let error = err.response.data.error;
          if (error.includes("duplicate")) {
            error = "Email is already exist";
          }
          this.setState({ error });
        });
    }
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
      errors,
      error,
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
            error={errors.email}
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
            error={errors.password}
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
            error={errors.repassword}
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
            {error && <span>{error}</span>}
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
export default withRouter(Form);
