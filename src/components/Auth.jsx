import React, { useState } from "react";
import {Link} from 'react-router-dom'
const Auth = () => {
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputPasswordBad, setInputPasswordBad] = useState(false)
  const [inputLoginBad, setInputLoginBad] = useState(false)
  const [errorField, setErrorField] = useState('Поле не может быть пустым')

  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        <h2>Войти</h2>
        <div className="auth__content__input">
          <input
            onChange={() => {
              return ''
            }}
            onBlur={() => {
              return ''
            }}
            name="login"
            type="text"
            placeholder="Введите логин"
          />
        </div>
        <div className="auth__content__input">
          <input
            onBlur={() => {
              return ''
            }}
            name="password"
            type="text"
            placeholder="Введите пароль"
          />
        </div>
        <div className="btn__auth">
          <Link to='/todo' ><button>Отправить</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
