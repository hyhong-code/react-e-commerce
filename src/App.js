import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default App;
