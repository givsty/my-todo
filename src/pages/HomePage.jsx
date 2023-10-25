import React from 'react'
import { redirect } from 'react-router-dom';
import {useAuth} from '../hooks/use-auth'
const HomePage = () =>{
  const {isAuth, email} = useAuth;
  isAuth ? redirect('/Todo') : redirect('/my-todo')
}

export default HomePage