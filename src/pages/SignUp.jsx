import React from 'react';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import Form from '../components/ui/Form';
import { setUser } from '../store/slices/userSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const dispatch = useDispatch
  const handleRegister = (email, password) =>{
    const auth = getAuth()
    console.log(auth);
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) =>{
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
      title='register'
      handleClick={handleRegister}
    />
  )
}

export default SignUp