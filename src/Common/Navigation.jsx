import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      {/* Use NavLink for navigation links */}
      <NavLink to="/" exact activeClassName="active">
        App
      </NavLink>
      <NavLink to="/Login" activeClassName="active">
        Login
      </NavLink>
      <NavLink to="/SignUp" activeClassName="active">
        SignUp
      </NavLink>
    </nav>
  );
};

export default Navigation;
