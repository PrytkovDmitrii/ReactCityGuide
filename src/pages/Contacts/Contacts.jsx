import React, { useState } from "react";
import '../../assest/css/contacts.scss';
import contactImage from '../../assest/image/contacts/contactImage.png';
import Modal from "../../components/Modal";
import ContactForm from "./ContactForm";

function Contacts() {
  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true); 
  };

  const closeModal = () => {
    setIsModalOpen(false); 
  };

  return (
    <div className="container">
      <div className="contacts__wrap">
        <div className="contacts__left">
          <img className="contacts__image" src={contactImage} alt="Контакты картинка🥺" />
        </div>
        <div className="contacts__right">
          <h1 className="contacts__title">Свяжитесь с нами</h1>
          <p className="contacts__text">
            Мы всегда рады помочь вам с вопросами, предложениями и отзывами. Не стесняйтесь обращаться!
          </p>
          <div className="contacts__line"></div>
          <div className="contacts__wrap-mini">
            <div className="contacts__subtitle">
              <h2>Телефон:</h2>
              <h2 className="contacts__down">Почта:</h2>
            </div>
            <div className="contacts__number">
              <p>+7(xxx) xxx xx-xx</p>
              <p className="contacts__down">twoo2rism@info.ru</p>
            </div>
          </div>
          <button className="main__btn-t" onClick={openModal}>
            Связаться с нами
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal}>
                <ContactForm />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Contacts;