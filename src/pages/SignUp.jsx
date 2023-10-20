import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Form from '../components/ui/Form';
const SignUp = () => {
  const handleLogin = (email, password) =>{
    const auth = getAuth()
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(console.log)
      .catch(console.error)
  }
  return (
    <Form 
      title='register'
      handleClick={handleLogin}
    />
  )
}

export default SignUp