import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./css/App.css";
import "./css/Query.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductContextProvider from "./Global/productContext";
import CartContextProvider from "./Global/cartContext";
import Special from "./pages/Special";
import Reservation from "./pages/Reservation";
import Error from "./pages/Error";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <Navbar />
            <Switch>
              <Route path="/The-Restro" exact component={Home} />
              <Route path="/special" exact component={Special} />
              <Route path="/product" exact component={Products} />
              <Route path="/reservation" exact component={Reservation} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/cart" exact component={Cart} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
