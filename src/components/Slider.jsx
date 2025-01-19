import React, { useEffect, useState } from 'react';

const DataFetcher = () => {
  const [data, setData] = useState([]);
  const [randomData, setRandomData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  const getRandomItems = (array, count) => {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count); 
  };

  useEffect(() => {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/List/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Ошибка сети');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setRandomData(getRandomItems(data, 7)); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Ошибка при получении данных:', error);
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error.message}</div>;
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
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
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
            key={slide.id}
            className={`slide ${index === currentIndex ? "active" : ""}`}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img className='slider__image' src={slide.image} alt={slide.name} />
            <h2 className='slider__title'>{slide.name}</h2>
          </div>
        ))}
      </div>

      <button onClick={nextSlide} className="slider-button next">
        &#10095;
      </button>

      <div className="indicators">
        {data.map((slide, index) => (
          <span
            key={slide.id}
            className={index === currentIndex ? "indicator active" : "indicator"}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default DataFetcher;