import React from "react";
import logo from '../../assest/image/logo.svg'
import mailIcon from '../../assest/image/footer/mainIcon.svg'
import tgIcon from '../../assest/image/footer/telegramIcon.svg'
import vkIcon from '../../assest/image/footer/vlLogo.svg'
import isDarkTheme from '../Header/Header'

function Footer() {
    return (
        <footer className={`footer ${isDarkTheme ? 'black' : ''}`} id="footer">
            <div className="container">
                <div className="footer__wrap">
                    <div className="footer__logo">
                        <img src={logo} alt="logo" />
                    </div>
                    <div className="footer__link">
                        <a href="#" className="footer__link-t">
                            Главная
                        </a>
                        <a href="#" className="footer__link-t">
                            Достопримечательности
                        </a>
                        <a href="#" className="footer__link-t">
                            Карты
                        </a>
                        <a href="#" className="footer__link-t">
                            Контакты 
                        </a>
                        <a href="#" className="footer__link-t">
                            FAQ
                        </a>
                    </div>
                    <div className="footer__image">
                        <a href="#">
                            <img className="footer__image-t" src={mailIcon} alt="mail-ru" />
                        </a>
                        <a href="https://t.me/+_3mwCE9e_DE1Yjgy">
                            <img className="footer__image-t" src={tgIcon} alt="telegram" />
                        </a>
                        <a href="https://vk.com/id823204414">
                            <img className="footer__image-t" src={vkIcon} alt="vk" />
                        </a>
                    </div>
                </div>
                <div className="footer__line"></div>
                <div className="footer__link">
                    <p className="footer__link-t">
                        Политика конфиденциальности
                    </p>
                    <p className="footer__link-t">
                        ©️ 2024 2rism
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;