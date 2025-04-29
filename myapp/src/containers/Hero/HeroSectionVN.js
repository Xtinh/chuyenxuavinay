import React from "react";
import hero from '../../assets/images/hero.png';

// Hero Section Component
const HeroSection = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-image">
          <img src={hero} alt="Delicious sushi platter" />
        </div>
      </section>
    </>
  );
}
  export default HeroSection;