import {Link} from 'react-router-dom';
import "./Header.css"

const Header = () => {
    return (
        <header className="header">
            <Link to="/" className="header-logo">
            My Portfolios
            </Link>
            <nav>
                <ul className="nav-list">
                    <li><Link to="/" className="nav-link">Home</Link></li>
                    <li><Link to="/skills" className="nav-link">Skills</Link></li>
                    <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
                    <li><Link to="/memo" className="nav-link">Memo</Link></li>
                    <li><Link to="/contact" className="nav-link">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;