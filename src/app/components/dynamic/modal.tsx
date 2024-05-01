"use client";
import { blogType } from "@/app/utils/types";
import { useState } from "react";
import Image from "../../../../node_modules/next/image";
interface Imodal {
  setContent: (item: any) => void;
  item: any;
}
const Modal: React.FC<Imodal> = ({ setContent, item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setContent(item);
  };
  const closeModal = () => setIsOpen(false);
  return (
    <div className="modal-btn">
      <button
        onClick={openModal}
        className="more-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4 rounded"
      >
        Подробнее
      </button>

      {/* Modal Overlay */}
      {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-50"></div>}

      {/* Modal Dialog Box */}
      {isOpen && (
        <div className="full-modal modal-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-md rounded z-50">
          <div>
            <span
              onClick={closeModal}
              className="absolute top-0 right-0 cursor-pointer p-4"
            >
              ×
            </span>
            <div className="content-modal-part">
              <Image className="rounded-t-lg" src={item?.image} alt="" />
              <div>
                <p>{item?.contentTitle}</p>
                <h2 className="text-lg font-bold mb-4">{item?.title}</h2>
                <p>{item?.contentDescription}</p>
                <button className="modal-content-btn">
                  Проконсультироваться
                </button>
                <div className="blogs-content">
                  {item?.blog &&
                    item?.blog?.map((blog: blogType, index: number) => {
                      return (
                        <div key={index} className="blog-card">
                          <h3>{blog?.title}</h3>
                          <p>{blog?.desc}</p>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
