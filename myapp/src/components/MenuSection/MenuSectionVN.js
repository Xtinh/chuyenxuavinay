import React from "react";
import menu1 from '../../assets/images/menu1.png';
import { Link } from 'react-router-dom';

// Thành phần Phần Thực Đơn
const MenuSectionVN = () => {
  return (
    <>
      <section className="menu-section">
        <h2 className="section-title">Menu Signature
        </h2>

        <div className='menu-flex'>
          <div className="menu-grid">
            <h2 className="section-title">Set “Sính lễ”</h2>
            <div className="menu-grid-item">
              <div className="menu-item">
                <h3 className="menu-item-name">KHAI VỊ</h3>
                <p className="menu-item-description">Hải sâm với lá bạc hà.</p>
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">TRÁNG MIỆNG</h3>
                <p className="menu-item-description">Sương sáo nước cốt dừa.</p>
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">GÀ NƯỚNG</h3>
                <p className="menu-item-description">Gà nướng sốt tiêu đen.</p>
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">COCKTAIL BẠC HÀ</h3>
                <p className="menu-item-description">Tùy chọn.</p>
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">CHÍN VOI NGÀ</h3>
                <p className="menu-item-description">Bò nướng ống tre.</p>
              </div>
              <div className="menu-item">
                <h3 className="menu-item-name">MOCKTAIL DỪA TƯƠI</h3>
                <p className="menu-item-description">Tùy chọn.</p>
              </div>
            </div>
            <div className="view-all-container">
              <li><Link to="thucdon" className="view-all-button">XEM TOÀN BỘ THỰC ĐƠN</Link></li>
            </div>
          </div>
          <div className="menu-item-image">
            <img src={menu1} alt="Tô mì Ramen" />
          </div>
        </div>
      </section>
    </>
  );
}

export default MenuSectionVN;
