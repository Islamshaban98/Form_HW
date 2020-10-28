import React from "react";

import "./App.css";
import SignUpIndex from "../src/pages/SignUp/SignUpIndex";
import SignInIndex from "../src/pages/SignIn/SignInIndex";
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <SignUpIndex />
      </div>
    );
  }
}

export default App;
