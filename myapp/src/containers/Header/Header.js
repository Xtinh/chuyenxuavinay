import React from 'react';
import { Link } from 'react-router-dom';
// import About from '../pages/About';
// import Menu from '../pages/Menu';
// import Reservations from '../pages/Reservations';
// import Contact from '../pages/Contact';


// Header Component
const Header = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <h1 className="restaurant-title">Chuyện xưa vị nay</h1>
          <nav className="main-navigation">
            <ul>
              <li><Link to="/en">Home</Link></li>
              <li><Link to="about">About</Link></li>
              <li><Link to="menu">Menu</Link></li>
              <li><Link to="reservations">Reservations</Link></li>
              <li><Link to="contact">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;