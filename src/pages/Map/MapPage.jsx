import React from "react";
import "../../assest/css/map.scss";
import Map from "./Map";

function MapPage() {
  return (
    <div className="container">
      <h1 className="map__title">Карты городов</h1>
      <div className="map__wrap">
        <Map
          title="Москва"
          map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d577343.9823584367!2d36.72622995939306!3d55.58025721750774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54afc73d4b0c9%3A0x3d44d6cc5757cf4c!2z0JzQvtGB0LrQstCw!5e0!3m2!1sru!2sru!4v1736702364035!5m2!1sru!2sru"
        />
        <Map
          title="Санкт-Петербугр"
          map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255811.36032671676!2d29.76505544912967!3d59.94000295493879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LM!5e0!3m2!1sru!2sru!4v1736703016415!5m2!1sru!2sru"
        />
        <Map
          title="Казань"
          map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143545.1106168476!2d48.761513278960464!3d55.79510708825158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x415ead2b7caccd99%3A0x7fcb77b9b5ad8c65!2z0JrQsNC30LDQvdGMLCDQoNC10YHQvy4g0KLQsNGC0LDRgNGB0YLQsNC9!5e0!3m2!1sru!2sru!4v1736702965342!5m2!1sru!2sru"
        />
      </div>
    </div>
  );
}

export default MapPage;
