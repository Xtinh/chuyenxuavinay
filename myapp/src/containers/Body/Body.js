import React from "react";
import HeroSection from '../Hero/HeroSection.js';
import MissionSection from '../../components/MissionSection/MissionSection.js';
import PerformanceSection from '../../components/PerformanceSection/PerformanceSection.js';
import MenuSection from '../../components/MenuSection/MenuSection.js';
import FeaturedDishes from '../../components/FeaturedDishes/FeaturedDishes.js';


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
  }
  export default Body;