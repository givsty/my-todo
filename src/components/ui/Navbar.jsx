import React from 'react'
import iconLogo from '../../assets/img/6194029.png'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav__wrapper'>
      <div className="elements__wrapper">
        <div className="nav__logo">
          <img src={iconLogo} alt="" />
        </div>
        <ul className='elements__content'>
          <li><Link to="/auth">Войти</Link></li>
          <li><Link to='/registration'>Зарегистрироваться</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar