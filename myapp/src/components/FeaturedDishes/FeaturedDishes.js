import React from "react";
import menu from '../../assets/images/menu.png';

// Featured Dishes Component
const FeaturedDishes = () => {
    return (
      <>
        <section className="featured-dishes">
          <img src={menu} alt="Selection of premium sushi" className="featured-image" />
        </section>
      </>
    );
  }
  export default FeaturedDishes;