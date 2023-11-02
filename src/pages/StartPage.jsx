import React from "react";
import { redirect } from 'react-router-dom';
import {useAuth} from '../hooks/use-auth'
const StartPage = () => {
  const {isAuth} = useAuth;
  isAuth ? redirect('/Todo') : redirect('/my-todo')
  return (
    <div className="welcome__wrapper">
      <div className="welcome__content">
      <h2>Добро пожаловать в приложение "Список дел"</h2>
        <div className="welcome__content__wrapper">
          Для продолжения нажмите<button>Войти</button>или
          <button>Зарегистрироваться</button>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
