import React from "react";
import header_img from "../assets/header_img.svg";
import { Link } from "react-router-dom";
function CarouselComponent() {
  return (
    <>
      <div className="content">
        <img src={header_img} alt="header-pic" />
        <div className="information">
          <h1>
            Enjoy Our
            <span> Delicious Meal</span>
          </h1>
          <p>
            Good Slogans for Food Delivery Buisness are the to attract
            <span>the More Customer and Earn Good Money.</span>
          </p>
          <Link to="/The-Restro/product">
            <button className="btn">Show Menu</button>
          </Link>
          <div className="icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-whatsapp"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
