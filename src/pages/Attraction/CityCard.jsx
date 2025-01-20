import React, { useEffect, useState } from "react";
import AttractionCard from "./AttractionCard";
import PropTypes from "prop-types";

function CityCard({ num }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [setError] = useState(null);
  const itemsPerPage = 5;

  const startIndex = Number(num);

  useEffect(() => {
    fetch(`https://6735da235995834c8a945ad9.mockapi.io/api/List/`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
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

  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="wrapper">
      {currentItems.map((item) => (
        <AttractionCard
          key={item.pk}
          image={item.image}
          text={item.name}
          id={item.pk}
        />
      ))}
    </div>
  );
}

CityCard.propTypes = {
  num: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // num может быть строкой или числом и обязательным
};

export default CityCard;
