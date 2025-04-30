import React from "react";
import menu3 from '../../assets/images/menu3.png';

// Mission Section Component
const MissionSection = () => {
    return (
      <>
        <section className="mission-section">
          <div className="mission-container">
            <div className="mission-image">
              <img src={menu3} alt="Ramen bowl" />
            </div>
            <div className="mission-text">
              <p className="mission-statement">
              "SON TINH THUY TINH: TRADITIONAL TASTE, FOLK SOUL."
              </p>
              <p className="mission-description">
              Inspired by the legend of Son Tinh - Thuy Tinh, 
              <br />
              "The Old Story - Today" brings a unique culinary experience, where each dish is a story, each space is a slice of culture.
              <br />
              We not only serve delicious food, but also spread the quintessence of Vietnamese cuisine through experiences imbued with folklore - delicate, emotional and full of pride.
              <br />
              Entering "The Old Story - Today" is entering a journey to remember the origin - where cuisine, space and emotions intersect, creating memorable moments for each diner.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
  export default MissionSection;