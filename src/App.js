import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SignUpIndex from "../src/pages/SignUp/SignUpIndex";
import SignInIndex from "../src/pages/SignIn/SignInIndex";
class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/SignInIndex">
              <SignInIndex />
            </Route>
            <Route exact path="/">
              <SignUpIndex />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
export default App;
