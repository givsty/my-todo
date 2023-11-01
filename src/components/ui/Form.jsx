import React, { useState } from 'react'
import StartPage from '../../pages/StartPage'

const Form = ({title, handleClick, wrongPassOrLogin}) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        {wrongPassOrLogin ? <span className='wrongLoginOrPass'>Не верный логин или пароль!</span>: ''}
        <h2>{title === "register" ? 'Зарегистрироваться' : 'Войти'}</h2>
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
        {title === 'register' ? <div className="auth__content__input">
          <input
            onBlur={()=> ''}
            name="password"
            type="password"
            placeholder="Повторите пароль"
          />
        </div> : ''}
        <div className="btn__auth">
          <button onClick={()=>{
            handleClick(login, password)
          }}>{title === "register" ? 'Подтвердить' : 'Войти'}</button>
        </div>
      </div>
    </div>
  )
}

export default Form