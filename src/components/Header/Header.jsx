import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"; // Импортируем useLocation
import logo from "../../assest/image/logo.svg";
import newspaperIcon from "../../assest/image/header/newspaper.svg";
import attractIcon from "../../assest/image/header/attract.svg";
import mapIcon from "../../assest/image/header/local.svg";
import contactIcon from "../../assest/image/header/contacts.svg";
import sunIcon from "../../assest/image/header/sun.png";
import moonIcon from "../../assest/image/header/moon.png";
import HeaderLink from "./HeaderLink";

function Header() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "black") {
      setIsDarkTheme(true);
    }
  }, []);

  useEffect(() => {
    const elements = [
      document.body,
      document.getElementById("footer"),
      document.getElementById("header"),
    ];
    elements.forEach((element) => {
      if (element) {
        isDarkTheme
          ? element.classList.add("black")
          : element.classList.remove("black");
      }
    });
    localStorage.setItem("theme", isDarkTheme ? "black" : "");
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header
      className={`header ${isDarkTheme ? "black" : ""} ${isMenuOpen ? "open" : ""}`}
      id="header"
    >
      <div className="container" id="line">
        <div className="header__wrap">
          <button
            className="header__burger-btn"
            id="burger"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="header__image animate-left">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__menu animate-down">
            <HeaderLink
              className="header__text"
              icon={newspaperIcon}
              title="Главная"
              href="/"
            />
            <HeaderLink
              className="header__text"
              icon={attractIcon}
              title="Достопримечательности"
              href="/attract"
            />
            <HeaderLink
              className="header__text"
              icon={mapIcon}
              title="Карты"
              href="/maps"
            />
            <HeaderLink
              className="header__text"
              icon={contactIcon}
              title="Контакты"
              href="/contacts"
            />
            <form className="header__switch" onClick={toggleTheme}>
              <img
                className="header__switch-img"
                src={isDarkTheme ? moonIcon : sunIcon}
                width="40"
                alt="Toggle Theme"
                id="sun"
              />
            </form>
          </div>
          <div className="header__registr animate-right">
            <div className="header__vhod">
              <a href="#" className="header__vhod-t">
                Login
              </a>
            </div>
            <div className="header__reg">
              <a href="#" className="header__reg-t">
                Sign up
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
