"use client";
import { Carousel } from "@trendyol-js/react-carousel";
import { useState } from "react";
import "react-multi-carousel/lib/styles.css";
import { useMediaQuery } from "react-responsive";
const FAQs = () => {
  // State to manage the visibility of each answer
  const [showAnswer, setShowAnswer] = useState<any>({});
  // const [content, setContent] = useState<tabsCardType[] | null>(null);
  const isTabletScreen = useMediaQuery({ maxWidth: 920 });

  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const slidesToShow = isSmallScreen ? 1.1 : isTabletScreen ? 2.2 : 3;
  // Function to toggle the visibility of an answer
  const toggleAnswer = (id: number) => {
    setShowAnswer((prevState: any) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const faqs = [
    {
      id: 1,
      question:
        "Насколько сильно отличаются наши зарядные станции для электромобилей по стоимости от других станций?",
      answer: `Наши станции находятся в “вилке цен” на российском рынке и отличаются лишь высокими показателями эффективности.

      Есть несколько вариантов зарядных станций от компании-производителя «BENY», которые отличаются
      друг-от-друга типом поставляемого тока, мощностью передачи тока, а также иными определенными функционалами, которые доставляют как для бизнеса, так и для обычного потребителя — исключительное удобство использования.`,
    },
    {
      id: 2,
      question:
        "Какое количество времени необходимо для полной зарядки электромобиля на наших зарядных станции?",
      answer: `Необходимое количество времени зарядки, пропорционально ёмкости электромобиля и мощности электростанции.

      Есть несколько вариантов электростанций в нашем ассортименте, которые отличаются мощностями, а также классификациями и фазами передачи тока, что позволяет заряжать электромобиль с разной скоростью заряда.
      Например, ёмкость батареи составляет 86 кВт, а мощность электростанции 22 кВт, итоговое время зарядки ~3,5 часов.`,
    },
    {
      id: 3,
      question: "Как выбрать электростанцию для своего электромобиля?",
      answer: `Первое, на что стоит обратить внимание, это на качество комплектующих самих зарядных электростанций. 

      Например, наши зарядные электростанций постоянно тока «BENY», оснащены последним силовым модулем 
      от ведущего мирового производителя в сфере робототехники, энергетики и технологии автоматизации «АВВ».
      Помимо этого в наших зарядных электростанциях постоянно тока устанавливается высококачественный контактор 
      от крупнейшего южнокорейского производителя электротехнического оборудования — «LS Electric».
      
      Второе, это на гарантийный срок и сертификацию продукции соответствующей российским стандартам.
      
      Например, гарантийный срок на продукцию «BENY» составляет до трех лет, а срок годности до двадцати лет.
      Вся представленная нами продукция прошла необходимые испытания, подтвержденные сертификатами и декларациями.`,
    },
  ];

  return (
    <div className="faq-container mx-auto">
      <h3 className="text-3xl faq-container-title font-bold mb-4">F.A.Q.</h3>
      {isTabletScreen ? (
        <Carousel
          responsive={true}
          show={slidesToShow}
          slide={3}
          swiping={true}
          key={1}
          hideArrows={true}
          infinite={false}
        >
          {faqs?.map((faq) => (
            <div key={faq.id} className="mb-4 faq-list">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAnswer(faq.id)}
              >
                <h2 className="text-xl faq-title font-semibold">
                  {faq.question}
                </h2>
                <div className="circle-arrow">
                  <svg
                    className={`w-6 h-6 ${
                      showAnswer[faq.id] ? "transform rotate-180" : ""
                    }`}
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {showAnswer?.[faq?.id] && (
                <>
                  <hr />
                  <p className="mt-2">{faq?.answer}</p>
                </>
              )}
            </div>
          ))}
        </Carousel>
      ) : (
        <>
          {faqs?.map((faq) => (
            <div key={faq.id} className="mb-4 faq-list">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleAnswer(faq.id)}
              >
                <h2 className="text-xl faq-title font-semibold">
                  {faq.question}
                </h2>
                <div className="circle-arrow">
                  <svg
                    className={`w-6 h-6 ${
                      showAnswer[faq.id] ? "transform rotate-180" : ""
                    }`}
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7 10L12 15L17 10"
                      stroke="currentColor"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              {showAnswer?.[faq?.id] && (
                <>
                  <hr />
                  <p className="mt-2">{faq?.answer}</p>
                </>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FAQs;
