import React from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Form from '../components/ui/Form';
import { setUser } from '../store/slices/userSlice';

const Login = () => {
  const handleLogin = (email, password) =>{
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      .then(({user})=>{
        console.log(user);
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