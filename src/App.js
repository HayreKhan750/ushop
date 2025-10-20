import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop-page";
import Header from "./components/header/header";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import {
  auth,
  createUserProfileDocument,
  firestore,
} from "./components/firebase/firebase";

import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.action";
class App extends Component {
  unsubscribeFromAuth = null;
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        // Get user document reference
        const userRef = await createUserProfileDocument(userAuth);

        // Listen to changes on the user document
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
        setCurrentUser(userAuth);
      } else {
        // If user logs out
        this.setState({ currentUser: null });
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log(auth);

    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route
            path="/signin"
            element={
              this.props.currentUser ? (
                <Navigate to="/" />
              ) : (
                <SignInSignUpPage />
              )
            }
          />
          <Route path="*" element={<h1>404 Page Not Found 🚫</h1>} />
        </Routes>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
