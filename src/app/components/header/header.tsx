import Image from "../../../../node_modules/next/image";
import Circle from "../../assets/images/circle.png";
import Electronica from "../../assets/images/electronica.png";
import Banner from "./banner";
import "./header.scss";
import Line from "./Line";
const Header = () => {
  return (
    <>
      <div className={"header_container layout-container"}>
        <div className="header_container_banner">
          <div className="header_container_left">
            <div className={"header_top_container"}>
              <div className="header_top_logo_text">
                <p
                  className={"text-xs text-gray-900 dark:text-black title-desc"}
                >
                  официальный представитель торгово-производственной компании{" "}
                  <br /> и эксклюзивный дистрибьютор оборудования
                  премиум-качества бренда «beny»
                </p>
              </div>

              <h1 className="title mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
                energotochka
              </h1>
            </div>
            <span className="title-desc-info">
              электрические станции под ключ с сопровождением и ведением
            </span>
            <Banner />
          </div>
          <div className="header_right">
            <div className="hedaer_image_right">
              <Image src={Circle} width={40} height={40} alt="Circle" />
            </div>

            <div className="right_image_electronica">
              <Image
                src={Electronica}
                width={500}
                height={500}
                alt="Electronica of the author"
              />
            </div>
          </div>
        </div>
      </div>
      <Line />
    </>
  );
};

export default Header;
