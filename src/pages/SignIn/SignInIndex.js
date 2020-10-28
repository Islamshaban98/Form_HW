import React from "react";

import "./style.css";
import Form from "./Form";
import Quote from "../../Components/Quote";
import Logo from "../../Components/Logo";
import blueLogo from "../../assets/blueLogo.png";
import Superscene from "../../assets/superscene.png";
import Twoquote from "../../Components/Twoquote";

export default function SignInIndex() {
  return (
    <div className="outer-div">
      <div className="righ">
        <Logo logo={blueLogo} className="blueLogo" />
        <Twoquote className="quoteSymbol" />
        <Quote className="Quote2" />
        <img src={Superscene} alt="" className="Superscene" />
      </div>

      <Form />
    </div>
  );
}
