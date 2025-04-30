import React from 'react';
import { Link } from 'react-router-dom';

// Thành phần Header
const HeaderVN = () => {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <h1 className="restaurant-title">“Chuyện xưa vị nay”</h1>
          <nav className="main-navigation">
            <ul>
              <li><Link to="/vi">Trang chủ</Link></li>
              <li><Link to="gioithieu">Giới thiệu</Link></li>
              <li><Link to="thucdon">Thực đơn</Link></li>
              <li><Link to="datban">Đặt bàn</Link></li>
              <li><Link to="lienhe">Liên hệ</Link></li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default HeaderVN;
