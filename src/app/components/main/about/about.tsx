import React from "react";
import Image from "next/image";
import AbouImage from "../../../assets/images/about.png";
import AboutCarMob from "../../../assets/images/car_mob.png";

const About = () => {
  return (
    <div className="about_container">
      <h2 className=" about_title text-3xl font-bold mb-4">информация о нас</h2>
      <div className="about_banner">
        <div className="about_banner_text">
          <p>
            Мы являемся официальным и эксклюзивным дистрибьютером зарядных
            станций для автомобилей с электробатареями, компании-производителя
            «BENY», которые зарекомендовали себя на мировой рынке, как
            современные, эффективные и удобные электростанции. Наши зарядные
            станции имеют необходимые сертификаты, в том числе и документы о
            соответствии российским стандартам качества и эксплуатации,
            подтвержденные специализированными государственными учреждениями ...
          </p>
        </div>
        <div className="about_banner_image">
          <Image cl src={AbouImage} width={600} height={205} alt="About of the author" className="desc" />
          <Image
            src={AboutCarMob}
            alt="About of the author"
            className="mobile"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
