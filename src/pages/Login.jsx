import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from "../components/ui/Form";
import { setUser } from "../store/slices/userSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const dispatch = useDispatch();
  const push = useNavigate();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        push("/Todo");
      })
      .catch(() => alert("Invalid user!"));
  };

  return <Form title="sign in" handleClick={handleLogin} />;
};

export default Login;
