import React from "react";
import center1 from '../../assets/images/center1.png';
import center2 from '../../assets/images/center2.png';
import center3 from '../../assets/images/center3.png';

// Thành phần Phần Trình Diễn
const PerformanceSectionVN = () => {
    return (
      <>
        <section className="performance-section">
          <h2 className="section-title">Mang đến cho bạn trải nghiệm trình diễn độc đáo nhất</h2>
          <div className="performance-grid">
            <div className="performance-card">
              <img src={center1} alt="Đôi tay đầu bếp đang chuẩn bị món ăn" />
              <h3 className="card-title">CHẾ BIẾN BỞI CÁC BẾP TRƯỞNG HÀNG ĐẦU</h3>
            </div>
            <div className="performance-card">
              <img src={center2} alt="Nguyên liệu tươi sống" />
              <h3 className="card-title">SỬ DỤNG NGUYÊN LIỆU TINH TUYỂN NHẤT</h3>
            </div>
            <div className="performance-card">
              <img src={center3} alt="Mâm sushi" />
              <h3 className="card-title">PHỤC VỤ BẰNG SỰ TỈ MỈ VÀ ĐAM MÊ</h3>
            </div>
          </div>
        </section>
      </>
    );
}

export default PerformanceSectionVN;
