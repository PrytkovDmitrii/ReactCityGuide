import React, { useRef, useEffect } from "react";
import local from '../../assest/image/header/local.svg';

function NewAttractCard({ image, title, text, address, id }) {
  const cardRef = useRef(null); 

  useEffect(() => {
    const cardElement = cardRef.current;

    console.log({id})
 
    const handleClick = () => {
      window.location.href = `http://localhost:3000/all-attract/${id}`; 
    };

    if (cardElement) {
      cardElement.addEventListener('click', handleClick);
    }

    return () => {
      if (cardElement) {
        cardElement.removeEventListener('click', handleClick);
      }
    };
  }, [id]);

  return (
    <div className="attraction__card">
      <button className="attraction__card-inner" id={id} ref={cardRef}>
        <div className="attraction__card-front">
          <img className="attraction__card-img" src={image} alt={title} />
          <p className="attraction__card-title">{title}</p>
          <div className="attraction__card-wrap">
            <img className="attraction__card-local" src={local} alt="addressIcon" />
            <p className="attraction__card-address">{address}</p>
          </div>
        </div>
        <div className="attraction__card-back">
          <p>{text}</p>
        </div>
      </button>
    </div>
  );
}

export default NewAttractCard;