import React from "react";
import HeroSectionVN from '../Hero/HeroSectionVN.js';
import MissionSectionVN from '../../components/MissionSection/MissionSectionVN.js';
import PerformanceSectionVN from '../../components/PerformanceSection/PerformanceSectionVN.js';
import MenuSectionVN from '../../components/MenuSection/MenuSectionVN.js';
import FeaturedDishesVN from '../../components/FeaturedDishes/FeaturedDishesVN.js';


// Body Component (Main content wrapper)
const BodyVN = () => {
    return (
      <>
        <main className="site-main">
          <HeroSectionVN />
          <MissionSectionVN />
          <PerformanceSectionVN />
          <MenuSectionVN />
          <FeaturedDishesVN />
        </main>
      </>
    );
  }
  export default BodyVN;