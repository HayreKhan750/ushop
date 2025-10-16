import { Routes, Route } from "react-router-dom";
import "./App.css";
import { HomePage } from "./pages/homepage/homepage";
import React, { Component } from "react";
import ShopPage from "./pages/shop/shop-page";
import { Header } from "./components/header/header";

class App extends Component {
  state = {};
  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="*" element={<h1>404 Page Not Found 🚫</h1>} />
        </Routes>
      </div>
    );
  }
}

export default App;
