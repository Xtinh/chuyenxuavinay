import React from 'react';
import './App.css';
import hero from './assets/images/hero.png';
import hero1 from './assets/images/hero1.png';
import center1 from './assets/images/center1.png';
import center2 from './assets/images/center2.png';
import center3 from './assets/images/center3.png';
import menu from './assets/images/menu.png';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Header from './Header';
// import Footer from './Footer';
// import Hero from './Hero';

// Header Component
const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <h1 className="restaurant-title">Chuyện xưa vị nay</h1>
          <nav className="main-navigation">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#reservations">Reservations</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

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
};

// Mission Section Component
const MissionSection = () => {
  return (
    <>
      <section className="mission-section">
        <div className="mission-container">
          <div className="mission-image">
            <img src={hero1} alt="Ramen bowl" />
          </div>
          <div className="mission-text">
            <p className="mission-statement">
              "SƠN TINH THUỶ TINH: VỊ TRUYỀN THỐNG, HỒN DÂN GIAN."
            </p>
            <p className="mission-description">
              At Ikigai Sushi and Ramen, our mission is to bring you the most authentic and delicious Japanese culinary experience.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

// Performance Section Component
const PerformanceSection = () => {
  return (
    <>
      <section className="performance-section">
        <h2 className="section-title">Bring you the most unique performance</h2>
        <div className="performance-grid">
          <div className="performance-card">
            <img src={center1} alt="Chef hands preparing food" />
            <h3 className="card-title">CRAFTED BY OUR MASTER CHEFS</h3>
          </div>
          <div className="performance-card">
            <img src={center2} alt="Fresh ingredients" />
            <h3 className="card-title">USING THE FINEST INGREDIENTS</h3>
          </div>
          <div className="performance-card">
            <img src={center3} alt="Sushi platter" />
            <h3 className="card-title">SERVED WITH CARE AND PASSION</h3>
          </div>
        </div>
      </section>
    </>
  );
};

// Menu Section Component
const MenuSection = () => {
  return (
    <>
      <section className="menu-section">
        <h2 className="section-title">Menu Favorites</h2>
        <div className='menu-flex'>
        <div className="menu-grid">
          <div className="menu-grid-item">
            <div className="menu-item">
              <h3 className="menu-item-name">IKIGAI SALAD</h3>
              <p className="menu-item-description">Fresh greens with our special dressing and seasonal toppings.</p>
              {/* <p className="menu-item-price">$12</p> */}
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">TONKOTSU RAMEN</h3>
              <p className="menu-item-description">Rich pork broth with tender chashu, soft boiled egg, and fresh noodles.</p>
              {/* <p className="menu-item-price">$18</p> */}
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">SASHIMI OMAKASE</h3>
              <p className="menu-item-description">Chef's selection of the freshest fish of the day.</p>
              {/* <p className="menu-item-price">$28</p> */}
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">IKIGAI KATSU</h3>
              <p className="menu-item-description">Crispy pork cutlet with special katsu sauce and fresh cabbage.</p>
              {/* <p className="menu-item-price">$22</p> */}
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">SASHIMI OMAKASE</h3>
              <p className="menu-item-description">Chef's selection of the freshest fish of the day.</p>
              {/* <p className="menu-item-price">$28</p> */}
            </div>
            <div className="menu-item">
              <h3 className="menu-item-name">IKIGAI KATSU</h3>
              <p className="menu-item-description">Crispy pork cutlet with special katsu sauce and fresh cabbage.</p>
              {/* <p className="menu-item-price">$22</p> */}
            </div>
          </div>
          <div className="view-all-container">
            <a href="#full-menu" className="view-all-button">VIEW FULL MENU</a>
          </div>
        </div>
        <div className="menu-item-image">
          <img src={hero1} alt="Ramen bowl" />
        </div>
        </div>
        
      </section>
    </>
  );
};

// Featured Dishes Component
const FeaturedDishes = () => {
  return (
    <>
      <section className="featured-dishes">
        <img src={menu} alt="Selection of premium sushi" className="featured-image" />
      </section>
    </>
  );
};

// Body Component (Main content wrapper)
const Body = () => {
  return (
    <>
      <main className="site-main">
        <HeroSection />
        <MissionSection />
        <PerformanceSection />
        <MenuSection />
        <FeaturedDishes />
      </main>
    </>
  );
};

// Footer Component
const Footer = () => {
  return (
    <>
      <footer className="site-footer">
        <div className="footer-container">
          <h2 className="footer-heading">Experience Ikigai today.</h2>
          <div className="contact-grid">
            <div className="contact-item">
              <h3 className="contact-title">PHONE NUMBER</h3>
              <p className="contact-info">123-456-7890</p>
            </div>
            <div className="contact-item">
              <h3 className="contact-title">EMAIL ADDRESS</h3>
              <p className="contact-info">info@ikigairestaurant.com</p>
            </div>
          </div>
          <div className="social-links">
            <a href="#facebook" className="social-link">Facebook</a>
            <a href="#instagram" className="social-link">Instagram</a>
            <a href="#twitter" className="social-link">Twitter</a>
          </div>
          <p className="copyright">© 2025 Ikigai Sushi and Ramen. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

// App Component (Main wrapper)
const App = () => {
  return (
    <>
      <div className="app-container">
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
};

// Export the App component
export default App;