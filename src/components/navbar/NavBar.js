import React from 'react';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import './NavBar.css'

const getCurrentTab = state => state.navigation.currentTab

const NavBar = () => {
  const dispatch = useDispatch()
  const currentTab = useSelector(getCurrentTab)

  return (
    <nav>
      <ul className='navbar-container'>
        <li onClick={() => dispatch({type: 'CHANGE TAB', tabName: 'home'})} className='menu-item'>
          <Link className={ currentTab === 'home' ? 'underlined' : '' } to="/">Home</Link>
        </li>
        <li onClick={() => dispatch({type: 'CHANGE TAB', tabName: 'about'})} className='menu-item'>
          <Link className={ currentTab === 'about' ? 'underlined' : '' } to="/about">About</Link>
        </li>
        <li onClick={() => dispatch({type: 'CHANGE TAB', tabName: 'projects'})} className='menu-item'>
          <Link className={ currentTab === 'projects' ? 'underlined' : '' } to="/projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
