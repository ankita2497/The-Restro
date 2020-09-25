import React from "react";
import Heading from "../components/Heading";
import SpecialComponent from "../components/SpecialComponent";
import special1 from "../assets/special1.jpg";
import special2 from "../assets/special2.jpg";
import special3 from "../assets/special3.jpg";
import special4 from "../assets/special4.jpg";
import special5 from "../assets/special5.jpg";
import special6 from "../assets/special6.jpg";

function Special() {
  return (
    <>
      <section id="special">
        <Heading content="Discover" content2="Our Chef’s special" />
        <div className="special-item">
          <SpecialComponent img={special1} />
          <SpecialComponent img={special2} />
          <SpecialComponent img={special3} />
          <SpecialComponent img={special4} />
          <SpecialComponent img={special5} />
          <SpecialComponent img={special6} />
        </div>
      </section>
    </>
  );
}

export default Special;
