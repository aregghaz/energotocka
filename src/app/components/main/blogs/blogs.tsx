"use client";
import { blogText1, blogText2, blogText3 } from "@/app/utils/types";
import React from "react";
import InfoPopup from "../../dynamic/infoPopup";
import Card from "../card/card";
import Blogs_1_content from "./blogs_1_content";
import Blogs_2_content from "./blogs_2_content";
import Blogs_3_content from "./blogs_3_content";
import { Carousel } from "@trendyol-js/react-carousel";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";

const Blogs = () => {
  const isTabletScreen = useMediaQuery({ maxWidth: 920 });

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const slidesToShow = isSmallScreen ? 1.1 : isTabletScreen ? 2.5 : 3;
  console.log(isTabletScreen, "slidesToShow");
  return (
    <div className="blogs_container">
      <h3 className="text-3xl font-bold blogs_container_title mb-4">
        блог компании о важном
      </h3>
      <div className="blogs_list">
        {isTabletScreen ? (
          <Carousel
            responsive={true}
            show={slidesToShow}
            slide={3}
            swiping={true}
            key={1}
            hideArrows={true}
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
            <Card title="3 уровня зарядки электромобилей" htmlContent={false}>
              <div dangerouslySetInnerHTML={{ __html: blogText1 }} />

              <InfoPopup
                btnText="Читать статью"
                title={`3 уровня зарядки электромобилей: отраслевая аналитика`}
              >
                <Blogs_1_content />
              </InfoPopup>
            </Card>
            <Card title="5 факторов выбор уровня зарядки" htmlContent={false}>
              <div dangerouslySetInnerHTML={{ __html: blogText2 }} />

              <InfoPopup
                btnText=" Читать статью"
                title={`5 факторов для выбора уровня зарядки: отраслевая аналитика`}
              >
                <Blogs_2_content />
              </InfoPopup>
            </Card>
            <Card
              title="3 факторов, влияющие на скорость зарядки электромобилей"
              htmlContent={false}
            >
              <div dangerouslySetInnerHTML={{ __html: blogText3 }} />

              <InfoPopup
                btnText=" Читать статью"
                title={`3 факторов, которые влияют на скорость зарядки: отраслевая экономика`}
              >
                <Blogs_3_content />
              </InfoPopup>
            </Card>
          </Carousel>
        ) : (
          <>
            <Card title="3 уровня зарядки электромобилей" htmlContent={false}>
              <div dangerouslySetInnerHTML={{ __html: blogText1 }} />

              <InfoPopup
                btnText="Читать статью"
                title={`3 уровня зарядки электромобилей: отраслевая аналитика`}
              >
                <Blogs_1_content />
              </InfoPopup>
            </Card>
            <Card title="5 факторов выбор уровня зарядки" htmlContent={false}>
              <div dangerouslySetInnerHTML={{ __html: blogText2 }} />

              <InfoPopup
                btnText=" Читать статью"
                title={`5 факторов для выбора уровня зарядки: отраслевая аналитика`}
              >
                <Blogs_2_content />
              </InfoPopup>
            </Card>
            <Card
              title="3 факторов, влияющие на скорость зарядки электромобилей"
              htmlContent={false}
            >
              <div dangerouslySetInnerHTML={{ __html: blogText3 }} />

              <InfoPopup
                btnText=" Читать статью"
                title={`3 факторов, которые влияют на скорость зарядки: отраслевая экономика`}
              >
                <Blogs_3_content />
              </InfoPopup>
            </Card>
          </>
        )}
      </div>
    </div>
  );
};

export default Blogs;
