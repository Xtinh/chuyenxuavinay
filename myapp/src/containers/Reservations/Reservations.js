import React from "react";
import '../../styles/Reservations.css';
import about from '../../assets/images/about.png';

const Reservations = () => {
  return (
    <>
      <section className="reservations-section" id="reservations">
        <div className="reservations-image">
        <img
        src={about}
        alt="Background"
        className="background-image"
        />
        </div>
        <div className="reservations-content">
          
          <h2>Reservations</h2>
          <p>
            Book your table today and experience the unique taste of tradition.
            We recommend making a reservation in advance to ensure the best dining experience.
          </p>
          <p>
            📞 Call us at: <strong>(+84) 703 715 008</strong><br />
            📧 Email us at: <strong>chuyenxuavinayfpt@gmail.com  </strong>
          </p>
          <p>
          You’re also welcome to visit us in person – we’re always ready to warmly welcome you and serve you with our utmost dedication!
          </p>
        </div>
      </section>
    </>
  );
};

export default Reservations;
