import React from 'react'
import logo from '../assets/images/argentBankLogo.png'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="main-nav-logo">
      <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
    </Link>
  );
};

export default Logo;