import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import "./App.css";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // https://firebase.google.com/docs/auth/web/manage-users
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      // open subscription, just like onClick event... it can be called later
      this.setState({ currentUser: user }, () =>
        console.log(this.state.currentUser)
      );
    });
  }

  componentWillUnmount() {
    // close the subscribtion
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
}

export default App;
