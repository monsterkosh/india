import React from 'react';
import name from '../assets/name.png';
import simplelogo from '../assets/simple-logo.png';
import '../styles/navbarStyles.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-name-container'>
        <img alt='Name' src={name} className='navbar-name' />
      </div>
      <div className='navbar-logo-container'>
        <img alt='Logo' src={simplelogo} className='navbar-logo' />
      </div>
    </div>
  );
};

export default Navbar;
