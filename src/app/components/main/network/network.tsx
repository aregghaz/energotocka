import React from "react";
const Network = () => {
  return (
    <div className="network_container">
      <h3 className="text-3xl font-bold network_container_title mb-4">
        быстрая связь
      </h3>
      <div className="network_content">
        <div className="inputs_container">
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
          <button className="banner_button bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"></button>
          <p className="info">
            в среднем, наш специалист перезванивает в течение двух минут
          </p>
        </div>
        <div className="frame-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin"
            width="580"
            height="205"
            //   frameborder="0"
            style={{ border: 0 }}
            //   allowfullscreen=""
            aria-hidden="false"
            //   tabindex="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Network;
