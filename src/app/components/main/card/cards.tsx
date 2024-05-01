"use client";
import DoneIcon from "@/app/assets/icon/Done";
import { Carousel } from "@trendyol-js/react-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
import Text from "../../dynamic/Text";
import Card from "./card";
const Cards = () => {
  const isTabletScreen = useMediaQuery({ maxWidth: 920 });

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const slidesToShow = isSmallScreen ? 1.1 : isTabletScreen ? 2.1 : 3;

  return (
    <div className="cards_container">
      <h3 className="cards_title text-3xl font-bold mb-4">
        преимущества наших станций
      </h3>
      <section className="cards-list">
        <Carousel
          responsive={true}
          show={slidesToShow}
          slide={3}
          swiping={true}
          key={1}
          // hideArrows={true}
          infinite={true}

          // leftArrow={
          //   <div className="elem-right">
          //     <LeftArrow />
          //   </div>
          // }
          // rightArrow={
          //   <div className="elem-right">
          //     <LeftArrow clasnName={"right"} />
          //   </div>
          // }
        >
          <Card
            title={"Инновационность"}
            htmlContent={true}
            component={
              <Text>
                {" "}
                <ul>
                  <li>
                    <DoneIcon />
                    подключение через «Bluetooth»
                  </li>
                  <li>
                    <DoneIcon />
                    регулирование заряда тока
                  </li>
                  <li>
                    <DoneIcon />
                    управление через приложение
                  </li>
                  <li>
                    <DoneIcon />
                    записывание истории заряда
                  </li>
                </ul>
              </Text>
            }
          />
          <Card
            title={"Совместимость"}
            htmlContent={true}
            component={
              <Text>
                <p>
                  Все зарядные станции, поставляемые нами совместимы с
                  различными моделями автомобилей, например такие как «Zeekr»,
                  «Volkswagen», «Tesla», «NIO», «Nissan», «Lixiang», «Mercedes»,
                  «BYD», «BMW» и прочее
                </p>
              </Text>
            }
          />
          <Card
            title={"Безопасность"}
            htmlContent={true}
            component={
              <Text>
                {" "}
                <ul>
                  <li>
                    <DoneIcon />
                    защита от перенапряжения
                  </li>
                  <li>
                    <DoneIcon />
                    защита от перегревания
                  </li>
                  <li>
                    <DoneIcon />
                    защита от недонапряжения
                  </li>
                  <li>
                    <DoneIcon />
                    защита от молнии и непогоды
                  </li>
                </ul>
              </Text>
            }
          />
        </Carousel>
      </section>
    </div>
  );
};

export default Cards;
