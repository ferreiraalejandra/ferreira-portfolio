import React from 'react';
import {Link} from "react-router-dom";
import './NavBar.css'

const NavBar = () => {
  return (
    <nav>
      <ul className='navbar-container'>
        <li className='menu-item'>
          <Link to="/">Home</Link>
        </li>
        <li className='menu-item'>
          <Link to="/about">About</Link>
        </li>
        <li className='menu-item'>
          <Link to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar