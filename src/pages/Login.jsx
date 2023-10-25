import React, { useState } from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Form from '../components/ui/Form';
import { setUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [wrongPassOrLogin, setWrongPassOrLogin] = useState(false)
  const dispatch = useDispatch
  const {push} = useNavigate();
  const handleLogin = (email, password) =>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accesToken,
        }))
        push('/Todo')
      })
      .catch(setWrongPassOrLogin(true))
  }
  return (
    <Form 
      title='login'
      handleClick={handleLogin}
      wrongPassOrLogin={wrongPassOrLogin}
    />
  )
}

export default Login