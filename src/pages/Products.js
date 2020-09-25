import React, { useContext } from "react";
import { productContext } from "../Global/productContext";
import { cartContext } from "../Global/cartContext";
import Banner from "../components/Banner";
const Products = () => {
  const { products } = useContext(productContext);
  const { dispatch } = useContext(cartContext);
  return (
    <>
      <section id="menu">
        <Banner />
        <div className="products">
          {products.map((product) => (
            <div className="product" key={product.id}>
              <div className="pro">
                <div className="productImage">
                  <img src={product.image} alt="Not found" />
                </div>
                <div className="productDetails">
                  <div className="proName">
                    <h4>{product.name}</h4>
                  </div>
                  <div className="proPrice">&#8377;{product.price}.00</div>
                </div>
                <div
                  className="proButton"
                  onClick={() =>
                    dispatch({ type: "ADD_TO_CART", id: product.id, products })
                  }
                >
                  <button className="btn">add to cart</button>
                </div>
                {product.productStatus === "new" ? (
                  <div className="new">New</div>
                ) : (
                  ""
                )}
                {product.productStatus === "hot" ? (
                  <div className="hot">Hot</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Products;
