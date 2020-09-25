import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <>
      <div className="dish">
        <img src={props.img} alt="Dish" />
        <div>
          <h6>Dish Name</h6>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <span>
            <i className="fas fa-star-half-alt"></i>
            {props.rate}
          </span>
          <Link to="/product">
            <button className="btn">
              <i className="fas fa-chevron-right"></i>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Card;
