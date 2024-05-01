"use client";
import Tabs from "../../dynamic/tabs";

import {
  tabsCardElements,
  tabsCardElements2,
  tabsCardElements3,
  tabsCardType,
} from "@/app/utils/types";
import LeftArrow from "@/app/assets/icon/leftArrow";
import { Carousel } from "@trendyol-js/react-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../../dynamic/modal";
import { useMediaQuery } from "react-responsive";

const TabsCard = () => {
  const [content, setContent] = useState<tabsCardType[] | null>(null);
  const isTabletScreen = useMediaQuery({ maxWidth: 920 });

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const slidesToShow = isSmallScreen ? 1.1 : isTabletScreen ? 2.2 : 3.2;

  const tabs = [
    {
      title: "медленные переменного тока",
      content: (
        <Carousel
          responsive={true}
          show={slidesToShow}
          slide={3}
          swiping={true}
          key={1}
          infinite={true}
          leftArrow={
            <div className="elem-right">
              <LeftArrow />
            </div>
          }
          rightArrow={
            <div className="elem-right">
              <LeftArrow clasnName={"right"} />
            </div>
          }
        >
          {tabsCardElements?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <Image className="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h3 className="mb-2 card-title-catalog  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <Modal setContent={setContent} item={item} />
              </div>
            );
          })}
        </Carousel>
      ),
    },

    {
      title: "быстрые постоянного тока",
      content: (
        <Carousel
          // responsive={}
          show={slidesToShow}
          slide={3}
          key={2}
          infinite={false}
          swiping={true}
          leftArrow={
            <div className="elem-right">
              <LeftArrow />
            </div>
          }
          rightArrow={
            <div className="elem-right">
              <LeftArrow clasnName={"right"} />
            </div>
          }
        >
          {tabsCardElements2?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <Image className="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h3 className="mb-2 card-title-catalog  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <Modal setContent={setContent} item={item} />
              </div>
            );
          })}
        </Carousel>
      ),
    },
    {
      title: "дополнительное",
      content: (
        <Carousel
          show={slidesToShow}
          slide={3}
          swiping={true}
          key={3}
          infinite={false}
          leftArrow={
            <div className="elem-right">
              <LeftArrow />
            </div>
          }
          rightArrow={
            <div className="elem-right">
              <LeftArrow clasnName={"right"} />
            </div>
          }
        >
          {tabsCardElements3?.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <a href="#">
                  <Image className="rounded-t-lg" src={item.image} alt="" />
                </a>
                <div className="p-5">
                  <a href="#">
                    <h3 className="mb-2 card-title-catalog  text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </a>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                <Modal setContent={setContent} item={item} />
              </div>
            );
          })}
        </Carousel>
      ),
    },
    {
      title: "напольные станции",
      content: <></>,
    },
    {
      title: "настенные станции",
      content: <>2</>,
    },
    {
      title: " портативные станции",
      content: <>3</>,
    },
    // Add more tabs as needed
  ];
  return (
    <div className="card-tab-container">
      <h3 className="card-tab-title text-3xl font-bold mb-4">
        каталог со станциями
      </h3>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default TabsCard;
