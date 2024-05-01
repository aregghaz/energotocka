import React from "react";

const Line = () => {
  return (
    <div className="relative overflow-hidden running">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-700 animate-running-line"></div>
      <p className=" marquee__line running-text relative z-10 text-white font-bold text-lg py-4 px-6">
        поставка и установка станции под ключ - поставка и установка станции под
        ключ - поставка и установка станции под ключ - поставка и установка
        станции под ключ - поставка и установка станции под ключ - поставка и
        установка станции под ключ -
      </p>
    </div>
  );
};

export default Line;
