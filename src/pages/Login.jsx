import React from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Form from '../components/ui/Form';
import { setUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';

const Login = () => {
  const dispatch = useDispatch
  const handleLogin = (email, password) =>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accesToken,
        }))
      })
      .catch(console.error)
  }
  return (
    <Form 
      title='login'
      handleClick={handleLogin}
    />
  )
}

export default Login