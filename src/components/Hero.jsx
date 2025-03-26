import React from 'react';
import "../css/Hero.css";
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
           <div className="hero-text">
          <h1>BEST SPORT CARS</h1>
          <p>Most luxurious cars</p>
        </div>
        <div className="hero-image">
          <img src={assets.carHero} alt="Sport Car" />
        </div>
      </div>
    </section>
  );
};

export default Hero;