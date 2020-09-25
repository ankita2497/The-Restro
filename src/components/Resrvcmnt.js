import React from "react";
import { Link } from "react-router-dom";

function Resrvcmnt() {
  return (
    <>
      <section id="reservation">
        <div className="container">
          <h3 className="head">Let's</h3>
          <h2>Book A Table</h2>
          <form>
            <div className="form-content">
              <div>
                <label>Date</label>
                <input type="date" />
              </div>
              <div>
                <label>Time</label>
                <input type="time" />
              </div>
              <div>
                <label>Guest</label>
                <select>
                  <option>Select Guest</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>8</option>
                </select>
              </div>
            </div>
            <label className="email">Email</label>
            <input type="email" placeholder="Enter Your Email" />
            <button type="submit" className="btn">
              Check Availability<i className="fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <footer id="contact">
          <div className="container">
            <h1>
              <Link to="/">
                The<span> Restro</span>
              </Link>
            </h1>
            <div className="footer-content">
              <div>
                <h5>About Us</h5>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
              </div>
              <div>
                <h5>Get News & offers</h5>
                <input type="email" placeholder="Enter Your Email" />
              </div>
              <div>
                <h5>Address</h5>
                <p>
                  Akshya Nagar 1st Block 1st Cross,
                  <span>Rammurthy nagar, Bangalore-560016</span>
                </p>
                <p>Monday-Friday 7:00 A.M- 9:00 P.M +918359433216</p>
              </div>
            </div>
            <div className="move-up">
              <span>
                <i className="fas fa-arrow-circle-up"></i>
              </span>
            </div>
          </div>
          <hr />
          <p className="copyright">
            Copyright &copy; All Rights Reserved | Ankita Banerjee
          </p>
        </footer>
      </section>
    </>
  );
}

export default Resrvcmnt;
