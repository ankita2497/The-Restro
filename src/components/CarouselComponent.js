import React from "react";
import { Link } from "react-router-dom";
import aaaa from "../assets/aaaa.jpg";
function CarouselComponent() {
  return (
    <>
      <div className="content">
        <div className="tagline">Find your delicious meal</div>
        <div className="title">Restro</div>
        <div className="more">
          <Link to="/product">show all the menu</Link>
        </div>
        <div className="desc">
          <p>
            Your <span>healthy</span> life starts here with us
          </p>
          <p className="information">
            A family owned company founded with the purpose of giving your
            family access to clean, organic products while you are on the go.
          </p>
        </div>
        <div className="heart">
          <img src={aaaa} alt="" />
        </div>
        <div className="arrows">
          <button className="prev">
            <i className="fa fa-chevron-left"></i>
          </button>
          <button className="next">
            <i className="fa fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default CarouselComponent;
