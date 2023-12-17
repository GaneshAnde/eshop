// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end', padding: '10px' }}>
      <Link to="/login" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>
        Login
      </Link>
      <Link to="/signup" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>
        Signup
      </Link>
      <Link to="/search" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>
        Search
      </Link>
    </header>
  );
};

export default Header;
