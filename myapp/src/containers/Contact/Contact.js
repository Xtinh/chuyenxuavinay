import React from "react";
import '../../styles/Contact.css';
import map from '../../assets/images/map.png';

const Contact = () => {
  return (
    <>
      <section className="contact-section" id="contact">
        <div className="contact-content">
        <img
        src={map}
        alt="Background"
        className="background-image"
        />
          <h2>Contact Us</h2>
          <p>
            We'd love to hear from you! Whether you have questions, feedback, or special requests, feel free to reach out.
          </p>
          <p>
            📍 Address: Nguyen Huy Chuong Street, Da Nang, Vietnam<br />
            📞 Phone: (+84) 703 715 008<br />
            📧 Email: chuyenxuavinayfpt@gmail.com
          </p>
          <p>
            Our team is here to assist you and ensure you have the best experience at "Chuyen xua vi nay".
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
