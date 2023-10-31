import React, { useState } from 'react'
import iconLogo from '../../assets/img/6194029.png'
import {Link} from 'react-router-dom'
import { useAuth } from '../../hooks/use-auth'
import NavbarList from './NavbarList'
const Navbar = () => {
  const {email, isAuth} = useAuth()
  return (
    <div className='nav__wrapper'>
      <div className="elements__wrapper">
        <div className="nav__logo">
          <li><Link to="/my-todo"><img src={iconLogo} alt="" /></Link></li>
        </div>
        <ul className='elements__content'>
          {isAuth ? `${email}` : <NavbarList />}
        </ul>
      </div>
    </div>
  )
}

export default Navbar