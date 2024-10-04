
import tracom from '../../Assets/tracom_services_cover.jpg';
import { Link } from 'react-router-dom';


const Nav = () => {
  return (
    <header className="main-header">
      <nav className="main-nav">
        <img src={tracom} alt="tracom-logo" className="main-logo" />
        <ul id="main-nav-ul">
          <li><Link to="/body">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <div className="search">
          <Link to="/signup" className="btn">Sign Up</Link>
          <Link to="/login" className="btn2">Login</Link>
        </div>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
