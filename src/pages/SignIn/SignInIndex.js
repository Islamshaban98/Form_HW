import React from "react";

import Form from "./Form";
import Quote from "../../Components/Quote";
import Logo from "../../Components/Logo";
import blueLogo from "../../assets/blueLogo.png";
import Superscene from "../../assets/superscene.png";

export default function SignInIndex() {
  return (
    <div>
      <div>
        <Logo logo={blueLogo} style={{ width: "440px", hight: "100px" }} />
        <Quote />
        <img src={Superscene} alt="" />
      </div>

      <Form />
    </div>
  );
}
