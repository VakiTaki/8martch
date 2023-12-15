import React from "react";
import surprise from "../images/surprise.png";
import Button from "./form/button";

function Information() {
  return (
    <div
      className={
        "  bg-slate-900 bg-no-repeat   w-full h-screen flex flex-col justify-center items-center text-white "
      }
      style={{
        backgroundImage: `
            linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5)),
            url(${surprise})
          `,
        animation: "moveBackground 10s linear infinite", // Настройте продолжительность и другие параметры анимации
      }}
    >
      <div className="  text-white flex flex-col gap-4 bg-white  p-10  rounded-md bg-opacity-5 w-full h-full  items-center justify-center    ">
        <h2 className=" text-[50px] ">Название мероприятия</h2>
        <p>Краткая информация о мероприятии</p>
        <div className=" flex  items-center gap-10 mt-4">
          <Button label="Пойду" color={"#00800075"} />
          <Button label="Не пойду" color={"#ff000075"} />
        </div>
      </div>
    </div>
  );
}

export default Information;
