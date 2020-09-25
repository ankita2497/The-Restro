import React from "react";
import about_us_pic from "../assets/about_us_pic.jpg";

function HomeComponent() {
  return (
    <>
      <section id="about-us">
        <div>
          <img src={about_us_pic} width="100%" alt="About-us-img" />
        </div>
        <div className="about-us-content">
          <h3 className="head">Welcome</h3>
          <h2>About Restro</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At quis
            suscipit provident molestias nemo similique nihil excepturi haru
            unde fugiat maxime voluptas quasi explicabo expedita ipsa voluptatem
            laudantium distinctio quam laborum odio maiores perspiciatis itaque.
          </p>
          <p>
            Suscipit aliquam magni voluptas aut, nihil itaque ex minus! Nostrum
            incidunt consequatur ea asperiores assumenda!
          </p>
          <button className="btn">
            Get Direction<i className="fas fa-chevron-right"></i>
          </button>
        </div>
      </section>
    </>
  );
}

export default HomeComponent;
