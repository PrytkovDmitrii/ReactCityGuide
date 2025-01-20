import React from "react";
import HomeCard from "./HomeCard";
import "../../assest/css/home.scss";
import DataFetcher from "../../components/Slider";
import moscowPhoto from "../../assest/image/home/moscow.png";
import piterPhoto from "../../assest/image/home/piter.webp";
import kazanPhoto from "../../assest/image/home/kazan.webp";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      <section className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__content">
              <div className="main__title">
                <h1 className="main__title-t animate-left">
                  Откройте для себя самые <br /> привлекательные <br /> места
                </h1>
              </div>
              <DataFetcher />
            </div>
            <div className="main__city">
              <HomeCard
                text="Москва - столица России и крупнейший город
                                страны. Это огромный мегаполис, который
                                является историческим, политическим и
                                духовным сердцем Российской Федерации."
                title="Москва"
                image={moscowPhoto}
              />

              <HomeCard
                text="Санкт-Петербург – город
                                уникальный для русской истории,
                                неуловимый и непостижимый.
                                Более двух веков он был
                                блистательной столицей великой
                                Российской империи и сейчас
                                сохраняет статус культурного и
                                духовного центра страны."
                title="Санкт-Петербург"
                image={piterPhoto}
              />

              <HomeCard
                text="Казань -  город в России, столица
                                Республики Татарстан, порт на левом
                                берегу реки Волги при впадении в неё
                                реки Казанки."
                title="Казань"
                image={kazanPhoto}
              />
              <Button
                text="Узнать больше ⮕"
                href="/attract"
                style={{ justifyContent: "end" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
