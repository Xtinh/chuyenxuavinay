import React, { useState, useEffect } from "react";
import panner from "../assets/images/panner.png";
import chuyenxua from "../assets/images/chuyenxua.png";
import "./Hero.css"; // Import CSS file

const images = [panner, chuyenxua, panner]; // Image array

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000); // Change image every 2s

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h2>Welcome to Chuyện Xưa Vị Nay</h2>
          <p>
            Restaurant “Chuyện xưa vị nay” is a creative culinary destination, taking inspiration from the famous Vietnamese fairy tales about the competition between Sơn Tinh and Thủy Tinh...
          </p>
          <button className="cta-button">Dinning at Vi Nay</button>
        </div>
        <div className="hero-image">
          <img src={images[currentImage]} alt="Hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
