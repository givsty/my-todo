import React from "react";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import retmoveUser from '../../store/slices/userSlice'
const NavbarAcitve = () => {
  const dispatch = useDispatch()
  const { email } = useAuth();
  return (
    <>
      <li>{email}</li>
      <li>
        <button onClick={()=>dispatch(retmoveUser())}>Выйти</button>
      </li>
    </>
  );
};

export default NavbarAcitve;
