import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop-page";
import { Header } from "./components/header/header";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up";
import { auth } from "./components/firebase/firebase";

class App extends Component {
  state = {
    currentUser: null,
    unsubscribeFromAuth: null,
  };

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user.displayName);
      console.log(user.email);
    });
  }
  componentWillUnmount() {
    this.state.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/signin" element={<SignInSignUpPage />} />
          <Route path="*" element={<h1>404 Page Not Found 🚫</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
