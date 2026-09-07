import {Link} from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <header style={{
    position: 'sticky',
    top: 0,
    zIndex: 100,
    // 背景を完全な色にせず、薄い半透明にしてすりガラス効果をつける
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    // 境界線をなくす（または極限まで薄くする）
    borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
    transition: 'all 0.3s ease',
  }}
>
                <Link to="/" className="header-logo">
                My Portfolios
                </Link>
                <nav>
                    <ul className="nav-list">
                        <li><Link to="/" className="nav-link">Home</Link></li>
                        <li><Link to="/PlayGround" className="nav-link">PlayGround</Link></li>
                        <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                        <li><Link to="/memo" className="nav-link">Memo</Link></li>
                        <li><Link to="/contact" className="nav-link">Contact</Link></li>
                    </ul>
                </nav>
            </header>
        </header>
    );
};

export default Header;