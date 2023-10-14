import React, { useState } from "react";

const Registration = () => {
  const [inputLogin, setInputLogin] = useState('')
  const [inputPassword, setInputPassword] = useState('')
  const [inputPasswordBad, setInputPasswordBad] = useState(false)
  const [inputLoginBad, setInputLoginBad] = useState(false)
  const [errorField, setErrorField] = useState('Поле не может быть пустым')
  const loginHandler = (e) =>{
    setInputLogin(e.target.value)
    const re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/;
    if(!re.test(String(e.target.value).toLowerCase)){
      setErrorField('Некорректный логин')
    }else{
      setErrorField('')
    }
  }
  const onBlur = (e) =>{
    switch(e.target.value){
      case 'login':
        setInputLoginBad(true)
        break
      case 'password':
        setInputPasswordBad(true)
        break
    }
  }
  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        <h2>Регистрация</h2>
        <div className="auth__content__input">
          {(inputLoginBad && errorField) && <div style={{color: 'red'}}>{errorField}</div>} 
          <input
            onChange={e => loginHandler(e)}
            onBlur={e => onBlur(e)}
            name="login"
            type="text"
            placeholder="Введите логин"
          />
        </div>
        <div className="auth__content__input">
          {(inputPassword && errorField) && <div>{errorField}</div>} 
          <input
            onBlur={e => onBlur(e)}
            name="password"
            type="text"
            placeholder="Введите пароль"
          />
        </div>
        <div className="auth__content__input">
          <input
            onBlur={()=> ''}
            name="password"
            type="text"
            placeholder="Повторите пароль"
          />
        </div>
        <div className="btn__auth">
          <button onClick={(e) => ""}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Registration;
