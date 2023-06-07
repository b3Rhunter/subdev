import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      
      <nav>
        <Link className='nav' to="/">HOME</Link>
        <Link className='nav' to="/services">SERVICES</Link>
        <Link className='nav' to="/pricing">PRICING</Link>
      </nav>
    </header>
  );
}

export default Header;
