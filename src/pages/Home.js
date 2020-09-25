import React from "react";
import HomeComponent from "../components/HomeComponent";
import Featuredfood from "../components/Featuredfood";
import Special from "./Special";
import Reservation from "./Reservation";
import CarouselComponent from "../components/CarouselComponent";
function Home() {
  return (
    <>
      <section id="header">
        <div className="container">
          <CarouselComponent />
        </div>
      </section>
      <HomeComponent />
      <Featuredfood />
      <Special />
      <Reservation />
    </>
  );
}
export default Home;
