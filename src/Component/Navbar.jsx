import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assest/image 1.png';

const Navbar = () => {
  return (
    <header
      style={{ position: "sticky", top: 0 }}
      className="bg-black flex justify-between items-center text-white w-full z-10 h-[80px] px-[40px] bg-[#141414B2] opacity-70"
    >
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-full" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-[20px]">
          
          <li><Link to="/hero">About Us</Link></li>
          <li><Link to="/count">Services</Link></li>
          <li><Link to="/main">Aircraft Guide</Link></li>
          <li><Link to="/hero">Contact Us</Link></li>
          <li><Link to="/section">Reviews</Link></li>
          <li><Link to="/">Eng</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
