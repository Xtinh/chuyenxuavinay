import React from "react";
import '../../styles/About.css';
import about from '../../assets/images/about.png';

const About = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-image">
        <img
        src={about}
        alt="Background"
        className="background-image"
        />
          <h2>About Us</h2>
          <p>
            Welcome to Son Tinh Thuy Tinh — where traditional taste meets the soul of folklore.
            We are proud to offer dishes inspired by the rich heritage of Vietnamese culture,
            blending authentic flavors with a modern touch.
          </p>
          <p>
            From our carefully curated appetizers to signature grilled dishes, every plate tells
            a story of craftsmanship, tradition, and passion. Join us and experience a unique journey
            through Vietnam's culinary treasures.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
