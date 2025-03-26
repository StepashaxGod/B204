import React from "react";
import "../css/AboutUs.css";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="about-page">
      <h1>About us</h1>
      <div className="about-content">
        <img src={assets.bugatti} alt="Our team" />
        <div className="about-text">
          <p>
            Our team is the best on the market, we are offering exclusive car
            models, that u cant find on the regular markets.
          </p>
          <p>We provide expert advice on the cars as well if u want to sell one go here - <NavLink to="/add-product"><p className="link-add">Add</p></NavLink></p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
