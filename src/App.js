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
              <Route path="/The-Restro/special" exact component={Special} />
              <Route path="/The-Restro/product" exact component={Products} />
              <Route
                path="/The-Restro/reservation"
                exact
                component={Reservation}
              />
              <Route path="/The-Restro/signup" exact component={SignUp} />
              <Route path="/The-Restro/cart" exact component={Cart} />
              <Route path="*" component={Error} />
            </Switch>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;
