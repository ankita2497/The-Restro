import React from "react";
import Card from "../components/Card";
import Heading from "./Heading";
import featured1 from "../assets/featured1.jpg";
import featured2 from "../assets/featured2.jpg";
import featured3 from "../assets/featured3.jpg";
import featured4 from "../assets/featured4.jpg";

function Featuredfood() {
  return (
    <>
      <section id="featured-food">
        <div className="container">
          <Heading content="Explore" content2="Our Featured Food" />
          <div className="item">
            <Card img={featured1} alt="featured-img" rate="4.5" />
            <Card img={featured2} alt="featured-img" rate="5.0" />
            <Card img={featured3} alt="featured-img" rate="4.5" />
            <Card img={featured4} alt="featured-img" rate="4.5" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Featuredfood;
