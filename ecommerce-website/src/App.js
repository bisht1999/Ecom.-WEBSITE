import React, { useState } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AvailableProducts from "./components/Products/AvailbleProducts";
import Cart from "./components/Cart/Cart";
import About from "./components/Pages/About";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const hidecartHandler = () => {
    setCartIsShown(false);
  };
  const showCartHandler = () => {
    setCartIsShown(true);
  };

  return (
    <>
      <CartProvider>
        <Route path="/store">
          {cartIsShown && <Cart onHideCart={hidecartHandler} />}
          <Header onShowCart={showCartHandler} />
          <AvailableProducts />
          <Footer />
        </Route>
      </CartProvider>
      <Route path="/about">
        <Header />
        <About />
        <Footer />
      </Route>
    </>
  );
}

export default App;