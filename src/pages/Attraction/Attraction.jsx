import React from "react";
import "../../assest/css/attraction.scss";
import CityCard from "./CityCard";
import Button from "../../components/Button";
import attraction from "../../assest/image/home/attraction.png";

function Attraction() {
  return (
    <div className="container_2">
      <div className="attractions__wrap">
        <h1 class="attractions__title-text">
          Добро пожаловать в наш раздел, посвященный удивительным
          достопримечательностям! Здесь вы найдете все необходимое для
          планирования незабываемого путешествия по самым интересным местам
          наших регионов.
        </h1>
        <img
          class="attractions__title-image"
          src={attraction}
          alt="Достопримечательность😎"
        />
      </div>
      <h1 className="attractions__title">Достопримечательности Москвы</h1>
      <CityCard num="0" />
      <h1 className="attractions__title">Достопримечательности Казани</h1>
      <CityCard num="15" />
      <h1 className="attractions__title">
        Достопримечательности Санкт-Петербурга
      </h1>
      <CityCard num="20" />
      <Button
        text="Посмотреть все"
        href="/all-attract"
        style={{ justifyContent: "center" }}
      />
    </div>
  );
}
export default Attraction;
