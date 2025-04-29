import React from "react";

// Thành phần Footer
const FooterVN = () => {
    return (
      <>
        <footer className="site-footer">
          <div className="footer-container">
            <h2 className="footer-heading">Trải nghiệm "Chuyện xưa vị nay" ngay hôm nay.</h2>
            <div className="contact-grid">
              <div className="contact-item">
                <h3 className="contact-title">SỐ ĐIỆN THOẠI</h3>
                <p className="contact-info">+84 703 715 008</p>
              </div>
              <div className="contact-item">
                <h3 className="contact-title">ĐỊA CHỈ EMAIL</h3>
                <p className="contact-info">chuyenxuavinayfpt@gmail.com</p>
              </div>
              <div className="contact-item">
                <h3 className="contact-title">GIỜ MỞ CỬA</h3> 
                <p className="contact-info">10:00 - 14:00 | 17:30 - 22:00</p>
              </div>
            </div>
            <div className="social-links">
              <a href="https://www.facebook.com/profile.php?id=61571474445612" className="social-link">Facebook</a>
              <a href="https://www.instagram.com/chuyenxuavinay.fpt/" className="social-link">Instagram</a>
              {/* <a href="#twitter" className="social-link">Twitter</a> */}
            </div>
            <p className="copyright">© 2025 Chuyện xưa vị nay. Đã đăng ký bản quyền.</p>
          </div>
        </footer>
      </>
    );
}

export default FooterVN;
