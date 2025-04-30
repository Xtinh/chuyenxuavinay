import React from "react";
import '../../styles/About.css';
import resver from '../../assets/images/resver.png';

const AboutVN = () => {
  return (
    <>
      <section className="about-section" id="about">
        <div className="about-image">
        <img
        src={resver}
        alt="Hình nền"
        className="background-image"
        />
          <h2>Về Chúng Tôi</h2>
          <p>
            Chào mừng đến với Chuyện xưa vị nay — nơi hương vị truyền thống giao hòa với linh hồn dân gian.
            Chúng tôi tự hào mang đến những món ăn được lấy cảm hứng từ di sản phong phú của văn hóa Việt Nam,
            kết hợp hương vị đậm đà với một chút hiện đại.
          </p>
          <p>
            Từ những món khai vị được lựa chọn tỉ mỉ đến các món nướng đặc trưng, mỗi đĩa ăn là một câu chuyện về tay nghề,
            truyền thống và đam mê. Hãy cùng chúng tôi trải nghiệm hành trình độc đáo qua những kho báu ẩm thực Việt Nam.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutVN;
