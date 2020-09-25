import React, { useState } from "react";
import { Link } from "react-router-dom";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import isEmpty from "validator/lib/isEmpty";

function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      isEmpty(formData.username) ||
      isEmpty(formData.email) ||
      isEmpty(formData.password) ||
      isEmpty(formData.password2)
    ) {
      setFormData({
        ...formData,
        errorMsg: "All Fields Are Required",
      });
    } else if (!isEmail(formData.email)) {
      setFormData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else if (!equals(formData.password, formData.password2)) {
      setFormData({
        ...formData,
        errorMsg: "Password do not Match",
      });
    } else {
      setFormData({
        ...formData,
        successMsg: "Validation Success",
      });
    }
  };
  return (
    <>
      <section id="signup">
        <form onSubmit={handleSubmit}>
          <div>
            <div>
              <p className="alert">{formData.errorMsg}</p>
              <p className="alert" style={{ color: "green" }}>
                {formData.successMsg}
              </p>
            </div>
            <div>
              <span>
                <i className="fas fa-user"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <span>
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <span>
                <i className="fas fa-lock"></i>
              </span>

              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <span>
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                name="password2"
                value={formData.password2}
                onChange={handleChange}
              ></input>
            </div>
            <div>
              <button type="submit" className="btn" style={{ width: "90%" }}>
                Sign Up
              </button>
            </div>
            <p>
              Already Have an Account?
              <Link to="/" style={{ color: "#1d930f" }}>
                Sign In
              </Link>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}

export default SignUp;
