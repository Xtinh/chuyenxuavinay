import React from "react";
import menu3 from '../../assets/images/menu3.png';

// Thành phần Phần Sứ Mệnh
const MissionSectionVN = () => {
    return (
      <>
        <section className="mission-section">
          <div className="mission-container">
            <div className="mission-image">
              <img src={menu3} alt="Tô mì Ramen" />
            </div>
            <div className="mission-text">
              <p className="mission-statement">
                "SƠN TINH THỦY TINH: VỊ TRUYỀN THỐNG, HỒN DÂN GIAN."
              </p>
              <p className="mission-description">
                Lấy cảm hứng từ truyền thuyết Sơn Tinh - Thủy Tinh, “Chuyện xưa vị nay” mang đến một trải nghiệm ẩm thực độc đáo, nơi mỗi món ăn là một câu chuyện, mỗi không gian là một lát cắt văn hóa.
                <br />
                Chúng tôi không chỉ phục vụ món ngon, mà còn lan tỏa tinh hoa ẩm thực Việt qua những trải nghiệm đậm chất dân gian – tinh tế, đầy cảm xúc và tự hào.
                <br />
                Bước vào “Chuyện xưa vị nay” là bước vào hành trình nhớ về cội nguồn – nơi ẩm thực, không gian và cảm xúc giao hòa, tạo nên những khoảnh khắc khó quên cho mỗi thực khách.
              </p>
            </div>
          </div>
        </section>
      </>
    );
}

export default MissionSectionVN;
