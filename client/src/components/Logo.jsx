import React from 'react'
import logo from '../assets/images/argentBankLogo.webp'
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="main-nav-logo">
      <img src={logo} alt="Argent Bank Logo" className="main-nav-logo-image" />
      <h1 className="sr-only">Argent Bank</h1>
    </Link>
  );
};

export default Logo;