"use client";
import { tabsCardType } from "@/app/utils/types";
import React, { Fragment, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import Image from "../../../../../node_modules/next/image";
import Modal from "../../dynamic/modal";

interface Icard {
  tabCard: tabsCardType[];
}
const CardContent: React.FC<Icard> = ({ tabCard }) => {
  const [content, setContent] = useState<tabsCardType[] | null>(null);
  return (
    <Fragment>
      {tabCard?.map((item: any, index: number) => {
        return (
          <div
            key={index}
            className="card max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <a>
              <Image className="rounded-t-lg" src={item.image} alt="" />
            </a>
            <div className="p-5">
              <a>
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
    </Fragment>
  );
};

export default CardContent;
