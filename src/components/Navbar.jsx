import React from "react";
import{NavLink}from "react-router-dom";
import '../style/navbar.css';

const Navbar = () => {
  return  <nav className="navbar">
        <div className='logonav'>
        <NavLink to="/" className='logonav-nav'> &#60; Store &#47; &#62;</NavLink>
        </div>
        <div className='menu'>
        <ul>
                <NavLink to="/login" className='menulinks'>Login</NavLink>
        </ul>
        </div>
      </nav>
};

export default Navbar;
