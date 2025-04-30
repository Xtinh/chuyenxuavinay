import React from "react";
import center1 from '../../assets/images/center1.png';
import center2 from '../../assets/images/center2.png';
import center3 from '../../assets/images/center3.png';

// Component Khu Vực Biểu Diễn
const PerformanceSectionVN= () => {
    return (
      <>
        <section className="performance-section">
          <h2 className="section-title">Mang đến cho bạn những màn trình diễn độc đáo nhất</h2>
          <div className="performance-grid">
            <div className="performance-card">
              <img src={center1} alt="Đôi tay đầu bếp đang chuẩn bị món ăn" />
              <h3 className="card-title-1">MÚA RỐI NƯỚC VIỆT NAM</h3>
            </div>
            <div className="performance-card">
              <img src={center2} alt="Nguyên liệu tươi sống" />
              <h3 className="card-title-2">KHU TRƯNG BÀY VĂN HÓA</h3>
            </div>
            <div className="performance-card">
              <img src={center3} alt="Đĩa sushi" />
              <h3 className="card-title-3">PHỤC VỤ BẰNG TÂM VÀ ĐAM MÊ</h3>
            </div>
          </div>
        </section>
      </>
    );
}
export default PerformanceSectionVN;
