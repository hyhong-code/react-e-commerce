import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import Header from "./components/Header";
import SignInSignUpPage from "./pages/SignInSignUpPage";
import "./App.css";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    // https://firebase.google.com/docs/auth/web/manage-users
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        await userRef.onSnapshot((snapShot) => {
          // set current user to user just logged in
          setCurrentUser({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        // set current user state to null after user log out
        setCurrentUser(userAuth);
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
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
