import React from "react";
import Homepage from "./pages/Homepage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <Homepage {...routeProps} />}
      />
    </Switch>
  );
}

export default App;
