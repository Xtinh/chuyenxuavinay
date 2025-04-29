import React from "react";
import map from '../../assets/images/map.png'; // Your map image

// Location Map Component
const LocationMap = () => {
  return (
    <>
      <section className="location-map">
        <img src={map} alt="Map location of the restaurant" className="featured-image" />
      </section>
    </>
  );
}

export default LocationMap;
