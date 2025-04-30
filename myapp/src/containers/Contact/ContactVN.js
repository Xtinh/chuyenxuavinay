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
        alt="Hình nền"
        className="background-image"
        />
          <h2>Liên Hệ Với Chúng Tôi</h2>
          <p>
            Chúng tôi rất mong nhận được phản hồi từ bạn! Dù bạn có câu hỏi, ý kiến đóng góp hay yêu cầu đặc biệt, đừng ngần ngại liên hệ với chúng tôi.
          </p>
          <p>
            📍 Địa chỉ: Đường Nguyễn Huy Chương, Đà Nẵng, Việt Nam<br />
            📞 Số điện thoại: (+84) 703 715 008<br />
            📧 Email: chuyenxuavinayfpt@gmail.com
          </p>
          <p>
            Đội ngũ của chúng tôi luôn sẵn sàng hỗ trợ bạn và đảm bảo bạn có trải nghiệm tuyệt vời tại "Chuyện xưa vị nay".
          </p>
        </div>
      </section>
    </>
  );
};

export default Contact;
