import React from 'react';
import './App.css';
import Header from './containers/Header/Header.js';
import HeaderVN from './containers/Header/HeaderVN.js';
import Footer from './containers/Footer/Footer.js';
import FooterVN from './containers/Footer/FooterVN.js';
import Body from './containers/Body/Body.js';
import BodyVN from './containers/Body/BodyVN.js';
import homepage from './assets/images/homepage.png';
import About from './containers/About/About.js';
import Menu from './containers/Menu/Menu.js';
import Reservations from './containers/Reservations/Reservations.js';
import Contact from './containers/Contact/Contact.js';
import AboutVN from './containers/About/AboutVN.js';
import MenuVN from './containers/Menu/MenuVN.js';
import ReservationsVN from './containers/Reservations/ReservationsVN.js';
import ContactVN from './containers/Contact/ContactVN.js';
import { BrowserRouter as Router, Route, Routes, Link, Outlet } from 'react-router-dom';

// Home Component (Landing page)
function Home() {
  return (
    <div className="home">
      <img
        src={homepage}
        alt="Background"
        className="background-image"
      />
      <div className="language-select">
        <Link to="/en" className="language-link">ENGLISH</Link>
        <Link to="/vi" className="language-link">TIẾNG VIỆT</Link>
      </div>
    </div>
  );
}

// English Page Component
function EnglishPage() {
  return (
    <div className="app-container">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

// Vietnamese Page Component
function VietnamesePage() {
  return (
    <div className="app-container">
      <HeaderVN />
      <Outlet />
      <FooterVN />
    </div>
  );
}

// App Component
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/en" element={<EnglishPage />}>
          <Route index element={<Body />} />
          <Route path="menu" element={<Menu />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="reservations" element={<Reservations />} />
        </Route>
        <Route path="/vi/*" element={<VietnamesePage />}>
          <Route index element={<BodyVN />} />
          <Route path="thucdon" element={<MenuVN />} />
          <Route path="gioithieu" element={<AboutVN />} />
          <Route path="datban" element={<ReservationsVN />} />
          <Route path="lienhe" element={<ContactVN />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
