import React from "react";
import hero1 from '../../assets/images/hero1.png';
import { Link } from 'react-router-dom';

// Menu Section Component
const MenuSection = () => {
  return (
    <>
      <section className="menu-section">
        <h2 className="section-title">Menu Favorites </h2>

        <div className='menu-flex'>
          <div className="menu-grid">
            <h2 className="section-title">Set “Sính lễ” </h2>
            <div className="menu-grid-item">
              <div className="menu-item">
                <h3 className="menu-item-name">APPETIZER</h3>
                <p className="menu-item-description">Sea cucumber with mint leaves.</p>
                {/* <p className="menu-item-price">$12</p> */}
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">DESSERT</h3>
                <p className="menu-item-description">Grass jelly with coconut milk.</p>
                {/* <p className="menu-item-price">$18</p> */}
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">GRILLED CHICKEN</h3>
                <p className="menu-item-description">Grilled chicken with black pepper sauce.</p>
                {/* <p className="menu-item-price">$28</p> */}
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">PEPPERMINT COCKTAIL</h3>
                <p className="menu-item-description">Optional.</p>
                {/* <p className="menu-item-price">$22</p> */}
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">NINE IVORY ELEPHANT</h3>
                <p className="menu-item-description">Grilled beef in bamboo tube.</p>
                {/* <p className="menu-item-price">$28</p> */}
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">FRESH COCONUT MOCKTAIL</h3>
                <p className="menu-item-description">Optional.</p>
                {/* <p className="menu-item-price">$22</p> */}
              </div>
            </div>
            <div className="view-all-container">
            <li><Link to="menu" className="view-all-button">VIEW FULL MENU</Link></li>
            </div>
          </div>
          <div className="menu-item-image">
            <img src={hero1} alt="Ramen bowl" />
          </div>
        </div>

      </section>
    </>
  );
}
export default MenuSection;