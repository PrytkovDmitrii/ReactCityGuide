import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AttractionCard from "./AttractionCard";

function CityCard({ num }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
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
        console.error("Ошибка при загрузке данных:", error);
        setError(error);
        setLoading(false);
      });
  }, []);


  const currentItems = data.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="wrapper">
      {currentItems.map((item) => (
        <AttractionCard
          image={item.image}
          text={item.name}
          id={item.pk}
        />
      ))}
    </div>
  );
}

export default CityCard;