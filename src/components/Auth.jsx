import React from "react";

const Auth = () => {
  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        <h2>Регистрация</h2>
        <div className="auth__content__input">
          <input
            type="text"
            onChange={() => ""}
            onKeyUpCapture={() => ""}
            placeholder="Введите логин"
            value={""}
          />
        </div>
        <div className="auth__content__input">
          <input
            type="text"
            onChange={() => ""}
            onKeyUpCapture={() => ""}
            placeholder="Введите пароль"
            value={""}
          />
        </div>
        <div className="btn__auth">
          <button onClick={(e) => ""}>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
