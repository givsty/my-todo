import React from "react";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { removeUser } from '../../store/slices/userSlice'
const NavbarAcitve = () => {
  const dispatch = useDispatch()
  const { email, isAuth} = useAuth(); 
  return isAuth ? (
    <>
      <li>{email}</li>
      <li>
        <button onClick={ ()=> dispatch(removeUser())}>Выйти</button>
      </li>
    </>
  ) : "";
};

export default NavbarAcitve;
