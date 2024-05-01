"use client"
import TelegramIcon from "@/app/assets/icon/Telegram";
import VkIcon from "@/app/assets/icon/Vk";
import React, { useState } from "react";
import "./footer.scss";
import CookiePopup from "../dynamic/cookiePopup";
export const Footer = () => {
  const [open, setOpen] = useState<boolean>(true)
  const handleClickPopUp = () => {
setOpen(false)
  }
  return (
    <>
    <footer className="text-white py-4 rounded-t-lg border-t-2 footer-container">
      <div className="top-footer">
        <h2 className="footer-title">energotochka</h2>
        <div className="flex gap-5">
          <VkIcon />
          <TelegramIcon />
        </div>
      </div>

      <div className="footer-content  flex justify-between items-center">
        <div className="footer-text-left">
          <ul>
            <li>сертификаты и иные документы</li>
            <li>политика использования и обработки данных</li>
            <li>политика использования и обработки куки (англ. “cookies”)</li>
          </ul>
        </div>
        <div className="footer-text-center">
          <ul>
            <li>российская федерация,</li>
            <li>московская область,</li>
            <li>город москва</li>
            <li>огрн: 1234567890123</li>
            <li>ООО “Энерго-Точка”</li>
          </ul>
        </div>
        <div className="footer-text-right">
          <ul>
            <li>+7 937 475-75-95</li>
            <li>info@energotochka.com</li>
          </ul>
        </div>
      </div>
      <p className="footer-text-site">
        настоящий интернет-сайт, а также вся информация о товарах и об услугах,
        предоставленная на нём, носит исключительно информационный характер и ни
        при каких условиях не является публичной офертой, определяемой
        действующим российским законодательством
      </p>
    </footer>
    {open && 
    <CookiePopup handleClickPopUp={handleClickPopUp} /> 
    
    }
    </>
  );
};
