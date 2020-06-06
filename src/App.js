import React from "react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={(routeProps) => <HomePage {...routeProps} />}
      />
      <Route
        path="/shop"
        render={(routeProps) => <ShopPage {...routeProps} />}
      />
    </Switch>
  );
}

export default App;
