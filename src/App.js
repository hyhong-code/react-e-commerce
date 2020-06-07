import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

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
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapShot) => {
          // set current user to user just logged in
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
        });
      } else {
        // set current user state to null after user log out
        this.setState({ currentUser: userAuth });
      }
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
