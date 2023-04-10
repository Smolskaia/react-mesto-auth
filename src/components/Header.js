import React from "react";
import logo from "../images/header-logo.svg";

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src={logo}
        alt="Логотип проекта Место"
      />
      <div className="header__wrapper">
        <p className="header__mail">aaa@mail.ru</p>
        <a to="/sign-in" className="header__link">Регистрация</a>
        <a to="/sign-in" className="header__link">Войти</a>
        <a to="/sign-in" className="header__link">Выйти</a>
      </div>
    </header>
  );
}

export default Header;
