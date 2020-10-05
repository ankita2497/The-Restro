import React, { useContext } from "react";
import { cartContext } from "../Global/cartContext";
import cart_empty from "../assets/cart_empty.png";
const Cart = (props) => {
  const { dispatch, shoppingCart, totalPrice, qty } = useContext(cartContext);
  console.log("total qty: ", qty);
  return (
    <div className="cartContainer">
      <div className="cartDetails">
        {shoppingCart.length ? (
          shoppingCart.map((product) => (
            <div className="cart" key={product.id}>
              <span className="cartProImage">
                <img src={product.image} alt="" />
                <span className="imageCount">{product.qty}</span>
              </span>
              <span className="cartProductName">{product.name}</span>
              <span className="cartProductPrice">
                &#8377;{product.price}.00
              </span>
              <span
                className="inc"
                onClick={() => dispatch({ type: "INC", id: product.id })}
              >
                <i className="fas fa-plus"></i>
              </span>
              <span className="productQuantity">{product.qty}</span>
              <span
                className="dec"
                onClick={() => dispatch({ type: "DEC", id: product.id })}
              >
                <i className="fas fa-minus"></i>
              </span>
              <span className="productTotalPrice">
                &#8377;{product.qty * product.price}.00
              </span>
              <button
                onClick={() =>
                  dispatch({ type: "DELETE_PRODUCT", id: product.id })
                }
                className="deleteCartPro"
              >
                <i className="fas fa-trash-alt"></i>
              </button>
            </div>
          ))
        ) : (
          <div className="empty-cart">
            <img src={cart_empty} alt="Your Cart Is Empty" />
            <h5>Add Some Stuff!!</h5>
          </div>
        )}
      </div>
      {shoppingCart.length ? (
        <div className="cartSummary">
          <div className="summary">
            <h3>Order Summary</h3>
            <div className="totalItems">
              <div className="items">Total Items</div>
              <div className="itemsCount">{qty}</div>
            </div>
            <div className="totalPriceSection">
              <div className="justTitle">Total Price</div>
              <div className="itemsPrice">&#8377;{totalPrice}.00</div>
            </div>
            <div className="stripSection">
              <button className="btn">PAYMENT</button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Cart;
