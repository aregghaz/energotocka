import InfoPopup from "../dynamic/infoPopup";
import SuccesModal from "./succesModal";

const BannerPopupContent = () => {
  return (
    <div className="header_top_banner  m-8">
      <div className="top_text">
        <h2 className="top_text_title">energotochka</h2>
        <p className="model_sub_header">электрические станции под ключ</p>
        <span className="header_top_info">
          Пожалуйста, заполните ниже строки, чтобы мы смогли отправить
          презентацию, а также ответить на все ваши вопросы
        </span>
      </div>
      <div className="inputs_container">
        <div className="field_inputs">
          <input
            type="text"
            className="block w-full px-4 py-2  focus:outline-none focus-outline"
            placeholder="напишите ваше имя"
          />
          <input
            type="text"
            className="block w-full px-4 py-2  focus:outline-none focus-outline"
            placeholder="напишите номер сотового телефона"
          />
        </div>
        <InfoPopup>
          <SuccesModal />
        </InfoPopup>
        <p className="info">
          нажимая по кнопке, вы соглашаетесь с условиями использования и
          обработки данных
        </p>
      </div>
    </div>
  );
};

export default BannerPopupContent;
