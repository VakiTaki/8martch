import React from "react";
import bg1 from "../images/bg1.png";
import Button from "./form/button";

function Welcome() {
  return (
    <div
      className="  h-screen w-screen  bg-cover bg-no-repeat bg-slate-900 relative flex flex-col justify-center items-center text-white  gap-10"
      style={{
        backgroundImage: `
           linear-gradient(to bottom, rgba(255, 255, 255, 0.3), transparent 1%, transparent 99%, rgba(255, 255, 255, 1)),
           url(${bg1})
         `,
      }}
    >
      <div className=" absolute top-[25%] left-[10%] flex  flex-col justify-center items-center gap-10 p-10 rounded-md bg-white bg-opacity-5 ">
        <h1 className=" text-[100px] font-bold ">Новый год!</h1>
        <span className=" text-[150px] tracking-[10px]">2024</span>
        <p className="text-3xl">
          Приглашаем всех на корпоративное мероприятие!
        </p>
      </div>
    </div>
  );
}

export default Welcome;
