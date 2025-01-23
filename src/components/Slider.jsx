import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const DataFetcher = () => {
  const [randomData, setRandomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getRandomItems = (array, count) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, count);
  };

  useEffect(() => {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/List/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Ошибка сети");
        }
        return response.json();
      })
      .then((data) => {
        setRandomData(getRandomItems(data, 7));
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

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
    return <div>Ошибка: {error.message}</div>;
  }

  if (!randomData.length) {
    return <div>Нет данных для отображения</div>;
  }

  return (
    <div>
      <Slider data={randomData} />
    </div>
  );
};

const Slider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      <button onClick={prevSlide} className="slider-button prev">
        &#10094;
      </button>
      <div className="slides-container">
        {data.map((slide, index) => (
          <div
            key={slide.id || index}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "all ease 0.3s",
            }}
          >
            <img className="slider__image" src={slide.image} alt={slide.name} />
            <h2 className="slider__title">{slide.name}</h2>
          </div>
        ))}
      </div>

      <button onClick={nextSlide} className="slider-button next">
        &#10095;
      </button>

      <div className="indicators">
        {data.map((slide, index) => (
          <span
            key={slide.id || index}
            className={
              index === currentIndex ? "indicator active" : "indicator"
            }
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

Slider.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default DataFetcher;
