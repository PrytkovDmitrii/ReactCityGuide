import React from "react";
import '../../assest/css/attraction.scss'
import CityCard from "./CityCard";
import Button from "../../components/Button";

function Attraction() {
    return (
        <div className="container_2">
            
            <h1 className="attractions__title">
                Достопримечательности Москвы
            </h1>
            <CityCard num="0" />
            <h1 className="attractions__title">
                Достопримечательности Казани
            </h1>
            <CityCard num="15" />
            <h1 className="attractions__title">
                Достопримечательности Санкт-Петербурга
            </h1>
            <CityCard num="20" />
            <Button text="Посмотреть все" href="/all-attract" style={{justifyContent: "center"}}/>
        </div>

    );
}
export default Attraction;