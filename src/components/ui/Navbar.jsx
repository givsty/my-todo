import React from 'react'
import iconLogo from '../../assets/img/6194029.png'
const Navbar = () => {
  return (
    <div className='nav__wrapper'>
      <div className="elements__wrapper">
        <div className="nav__logo">
          <img src={iconLogo} alt="" />
        </div>
        <ul className='elements__content'>
          <li>Войти</li>
          <li>зарегистрироваться</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar