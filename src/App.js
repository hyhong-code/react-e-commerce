import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage";
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
        <Route
          path="/signin"
          render={(routeProps) => <SignInSignUpPage {...routeProps} />}
        />
      </Switch>
    </div>
  );
}

export default App;
