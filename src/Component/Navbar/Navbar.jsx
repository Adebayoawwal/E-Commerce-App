import React from 'react';
import './Navbar.css';

import logo from'../Asset/logo.png'
import cart from'../Asset/logo - Copy.png'

function Navbar() {
  return (
    <div  className='navbar'>
        <div className="nav-logo">
          <img src={logo} alt="" />
          <p>SHOPPER</p>
          </div>
          <ul className="nav-menu">
            <li>Shop <hr/></li>
            <li>Men</li>
            <li>Woman</li>
            <li>Kids</li>
          </ul>
          <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart} alt="" />
          </div>
    </div>
  );  
}

export default Navbar;