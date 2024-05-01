import DoneIcon from "@/app/assets/icon/Done";
import Telegram_green from "@/app/assets/icon/Telegram_green";
import Vk_Green from "@/app/assets/icon/Vk_Green";
import React from "react";

const SuccesModal = () => {
  return (
    <div className="success_modal">
      <h2 className="top_text_title">energotochka</h2>
      <p className="model_sub_header">электрические станции под ключ</p>
      <div className="flex-done-icon">
        <DoneIcon />
      </div>
      <p className="info_succes_modal">
        <span>Благодарим вас за оказанное доверие</span>
        Мы с вами свяжемся в ближайшие минуты и ответим на все ваши вопросы
      </p>
      <span className="real-time-text">
        настоящее окно автоматически закроется через 10 секунд
      </span>

      {/* <button className="banner_button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
        Подтвердить
      </button> */}
      <div className="success_modal_flex">
        <Telegram_green />
        <Vk_Green />
      </div>
    </div>
  );
};

export default SuccesModal;
