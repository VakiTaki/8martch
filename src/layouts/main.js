import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import WelcomePage from "../components/welcome";
import Plan from "../components/plan";
import Place from "../components/place";
import Time from "../components/time";
import Information from "../components/information";
import Button from "../components/form/button";

function Main() {
  const { code } = useParams();

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolledHeight = window.scrollY;
      const totalDocumentHeight = document.body.scrollHeight;

      if (scrolledHeight + window.innerHeight >= totalDocumentHeight - 500) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    };

    // Добавляем обработчик события прокрутки
    window.addEventListener("scroll", handleScroll);

    // Убираем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // Добавляет плавность скролла
    });
  };

  return (
    <div className="  flex flex-col  justify-center relative ">
      <WelcomePage />
      <Place />
      <Time />
      <Plan />
      <Information />
      {showButton && (
        <div
          className="fixed  p-2 bottom-4 right-4 animate-bounce  "
          onClick={scrollToBottom}
        >
          <Button label="Хочу" color={"#000000"} />
        </div>
      )}
    </div>
  );
}

export default Main;
