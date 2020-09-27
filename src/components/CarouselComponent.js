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
          <button className="btn">Show Menu</button>
          <div className="icons">
            <i class="fab fa-facebook-f"></i>
            <i class="fab fa-whatsapp"></i>
            <i class="fab fa-instagram"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
