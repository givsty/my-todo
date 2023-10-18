import React, { useState } from 'react'

const Form = ({title, handleClick}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        <h2>Регистрация</h2>
        <div className="auth__content__input">
          <input
            value={login}
            onChange={e => setLogin(e.target.value)}
            name="login"
            type="email"
            placeholder="Введите логин"
          />
        </div>
        <div className="auth__content__input">
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            name="password"
            type="password"
            placeholder="Введите пароль"
          />
        </div>
        <div className="auth__content__input">
          <input
            onBlur={()=> ''}
            name="password"
            type="password"
            placeholder="Повторите пароль"
          />
        </div>
        <div className="btn__auth">
          <button onClick={()=>handleClick(login, password)}>{title}</button>
        </div>
      </div>
    </div>
  )
}

export default Form