import React from "react";
import {Link} from 'react-router-dom'
const NavbarList = () => {
  return (
    <>
      <li>
        <Link to="/auth">Войти</Link>
      </li>
      <li>
        <Link to="/registration">Зарегистрироваться</Link>
      </li>
    </>
  );
};

export default NavbarList;
