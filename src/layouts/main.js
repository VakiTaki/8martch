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
      const windowHeight = window.innerHeight;
      const scrolledHeight = window.scrollY;
      if (scrolledHeight > windowHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
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
        <div className="fixed  p-2 bottom-4 right-4" onClick={scrollToTop}>
          <Button label="Хочу" color={"#000000"} />
        </div>
      )}
    </div>
  );
}

export default Main;
