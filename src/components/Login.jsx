import React from 'react';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';
import Form from './ui/Form';
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