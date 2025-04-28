import { useState } from 'react';
import alacarte_menu from '../../assets/images/alacarte_menu.jpg';
import '../../styles/Menu.css';

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="menu-container">
      <h1 className="menu-title">A La Carte Menu</h1>
      <img
        src={alacarte_menu} // Lưu ý đường dẫn đúng khi bạn triển khai nhé
        alt="A La Carte Menu"
        className={`menu-image ${isOpen ? 'open' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      {isOpen && <div className="overlay" onClick={() => setIsOpen(false)} />}
    </div>
  );
}
