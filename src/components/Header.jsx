import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ authState, setAuthState }) => {
  const navigate = useNavigate();
  const logout = () => {
    setAuthState({ authenticated: false });
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__menu">
          {authState.authenticated === false ? (
            <>
              <Link to="/">Главная</Link>
              <Link to="/register">Регистрация</Link>
              <Link to="/login">Вход</Link>
            </>
          ) : (
            <>
              <Link to="/">Главная</Link>
              <Link to="/favorites">Любимые картинки</Link>
              <button onClick={logout}>Выйти</button>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
