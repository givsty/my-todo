import React from "react";

const Auth = () => {
  return (
    <div className="auth__wrapper">
      <div className="auth__content">
        <input
          type="text"
          onChange={()=>''}
          onKeyUpCapture={()=>''}
          placeholder="Введите логин"
          value={''}
        />
        <button
          className="send"
          onClick={(e) => ''}
        >
          Отправить
        </button>
      </div>
    </div>
  );
};

export default Auth;
