import React, { useState } from 'react'
import { useAuth } from "../../hooks/use-auth";
import iconLogo from '../../assets/img/6194029.png'
import {Link} from 'react-router-dom'
import NavbarList from './NavbarList'
import NavbarAcitve from './NavbarAcitve'
const Navbar = () => {
  const { isAuth } = useAuth();
  return (
    <div className='nav__wrapper'>
      <div className="elements__wrapper">
        <div className="nav__logo">
          <li>{!isAuth ? <Link to="/my-todo"><img src={iconLogo} alt="" /></Link> : <Link to="/Todo"><img src={iconLogo} alt="" /></Link>}</li>
        </div>
        <ul className='elements__content'>
          {isAuth ? <NavbarAcitve /> : <NavbarList />}
        </ul>
      </div>
    </div>
  )
}

export default Navbar