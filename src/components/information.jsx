import React from "react";
import shape from "../images/shape.png";
import Button from "./form/button";

function Information() {
  return (
    <div
      className="  bg-slate-900 bg-no-repeat bg-cover w-full h-screen flex flex-col justify-center items-center text-white "
      style={{
        backgroundImage: `
linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5))`,
      }}
    >
      <div className="  text-white flex flex-col gap-4 bg-white  p-10  rounded-md bg-opacity-5 w-full h-full  items-center justify-center    ">
        <h2 className=" text-[50px] ">Название мероприятия</h2>
        <p>Краткая информация о мероприятии</p>
        <div className=" flex  items-center gap-10 mt-4">
          <Button label="Пойду" color={"green"} />
          <Button label="Не пойду" color={"red"} />
        </div>
      </div>
    </div>
  );
}

export default Information;
