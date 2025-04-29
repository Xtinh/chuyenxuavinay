import React from "react";
import '../../styles/Reservations.css';
import about from '../../assets/images/about.png';

const ReservationsVN = () => {
  return (
    <>
      <section className="reservations-section" id="reservations">
        <div className="reservations-image">
        <img
        src={about}
        alt="Hình nền"
        className="background-image"
        />
        </div>
        <div className="reservations-content">
          
          <h2>Đặt Chỗ</h2>
          <p>
            Hãy đặt bàn ngay hôm nay và trải nghiệm hương vị độc đáo của truyền thống.
            Chúng tôi khuyến khích bạn đặt chỗ trước để đảm bảo có trải nghiệm ẩm thực tốt nhất.
          </p>
          <p>
            📞 Gọi cho chúng tôi theo số: <strong>(+84) 703 715 008</strong><br />
            📧 Gửi email cho chúng tôi: <strong>chuyenxuavinayfpt@gmail.com</strong>
          </p>
          <p>
            Hoặc bạn có thể đến trực tiếp và chúng tôi sẽ cố gắng hết sức để phục vụ bạn!
          </p>
        </div>
      </section>
    </>
  );
};

export default ReservationsVN;
