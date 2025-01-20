import React from "react";
import PropTypes from "prop-types";
import '../assest/css/style.scss'

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null; 

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <button className="modal__close-btn" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Modal;