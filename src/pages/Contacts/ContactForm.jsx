import React from "react";
import Button from '../../components/Button'

function ContactForm(){
    return (
        <div className="contacts__modal">
            <h1 className="contacts__modal-title">
                Свяжитесь с нами
            </h1>
            <div className="contacts__modal-wrap">
                <div className="contacts__modal-left">
                    <input type="text" className="contacts__modal-input" placeholder="Введите адрес" />
                    <input type="tel" className="contacts__modal-input" placeholder="Введите номер телефона" />
                </div>
                <div className="contacts__modal-right">
                    <input type="text" className="contacts__modal-input" placeholder="Введите Ваше имя" />
                    <input type="email" className="contacts__modal-input" placeholder="Введите вашу почту" />
                </div>
            </div>

            <textarea className="contacts__modal-textarea" placeholder="Введите сообщение"></textarea>

            <Button text='Отправить' href='/' style={{justifyContent: "center"}}/>
        </div>
    );
}

export default ContactForm;