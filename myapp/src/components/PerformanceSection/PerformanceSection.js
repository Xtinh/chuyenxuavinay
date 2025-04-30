import React from "react";
import center1 from '../../assets/images/center1.png';
import center2 from '../../assets/images/center2.png';
import center3 from '../../assets/images/center3.png';


// Performance Section Component
const PerformanceSection = () => {
    return (
      <>
        <section className="performance-section">
          <h2 className="section-title">Bring you the most unique performance</h2>
          <div className="performance-grid">
            <div className="performance-card">
              <img src={center1} alt="Chef hands preparing food" />
              <h3 className="card-title-1">VIETNAM <br /> WATER <br /> PUPPET SHOW</h3>
            </div>
            <div className="performance-card">
              <img src={center2} alt="Fresh ingredients" />
              <h3 className="card-title-2">CULTURAL <br /> EXHIBITION <br /> AREA</h3>
            </div>
            <div className="performance-card">
              <img src={center3} alt="Sushi platter" />
              <h3 className="card-title-3">SERVED WITH <br /> CARE AND PASSION</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
  export default PerformanceSection;