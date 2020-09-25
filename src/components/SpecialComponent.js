import React from "react";

function SpecialComponent(props) {
  return (
    <>
      <div className="single-special-item">
        <img src={props.img} alt="Special Dish" />
        <div className="menu-content">
          <h4>
            Dish Name<span>Price Rs/-</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            distinctio!
          </p>
        </div>
      </div>
    </>
  );
}

export default SpecialComponent;
