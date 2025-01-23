import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";
import Button from "../../components/Button";
import ReviewForm from "../../components/Reviews/ReviewForm";

function AttractionPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/Attractions/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Достопримечательность не найдена");
        }
        return response.json();
      })
      .then((data) => {
        data.images = [data.image, data.imageTwo];
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentImageIndex(0);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? data.images.length - 1 : prevIndex - 1,
    );
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === data.images.length - 1 ? 0 : prevIndex + 1,
    );
  };

  if (loading) {
    return (
      <div className="loader">
        <div className="loader__row">
          <div className="loader__item"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return <NotFound />;
  }

  if (!data) {
    return <div>Данные не загружены😭</div>;
  }

  return (
    <div className="container">
      <Button text="⬅ Вернуться назад" href="/../all-attract/" />
      <h1 className="attraction__page-title">{data.name}</h1>
      <div className="attraction__page-wrapper">
        <div className="attraction__page-description">
          <h3 className="attraction__page-description-title animate-right">
            {data.title}
          </h3>
          <p className="attraction__page-description-text">
            {data.description}
          </p>
        </div>
        <img
          className="attraction__page-image attraction__page-image-adapt"
          src={data.image}
          alt={data.name}
          width="650"
          height="450"
          onClick={() => openModal(0)}
        />
      </div>
      <div className="attraction__page-wrapper">
        <img
          className="attraction__page-image"
          src={data.imageTwo}
          alt={data.name}
          width="auto"
          height="500"
          onClick={() => openModal(1)}
        />
        <div className="attraction__page-description">
          <h3 className="attraction__page-description-title animate-left">
            {data.titleTwo}
          </h3>
          <p className="attraction__page-description-text">
            {data.descriptionTwo}
          </p>
        </div>
      </div>
      <h1 className="attraction__page-map-title">{data.name} на карте</h1>
      <div className="attraction__page-map">
        <iframe
          className="attraction__page-map"
          src={data.map}
          width="950"
          height="450"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <h1 className="attraction__page-info-title">Дополнительная информация</h1>
      <div className="attraction__page-info">
        <p className="attraction__page-info-text">Адрес: {data.address}</p>
        <p className="attraction__page-info-text">
          Время работы: {data.openHours}
        </p>
      </div>
      <ReviewForm />

      {isModalOpen && (
        <div className="attraction__page-modal-overlay" onClick={closeModal}>
          <div
            className="attraction__page-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={data.images[currentImageIndex]}
              alt="Увеличенное изображение"
            />
            <button className="attraction__page-modal-prev" onClick={prevImage}>
              &#10094;
            </button>
            <button className="attraction__page-modal-next" onClick={nextImage}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AttractionPage;
