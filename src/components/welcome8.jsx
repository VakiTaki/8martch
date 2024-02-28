import React from "react";
import bg8_1 from "../images/bg8_1.jpg";
import march8 from "../images/8march.png";

function Welcome8() {
  return (
    <div
      className=" w-full min-h-screen bg-cover  bg-no-repeat flex justify-center  lg:justify-end   "
      style={{
        backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 5)),
      url(${bg8_1})
    `,
      }}
    >
      <div className="w-1/2">
        <div className=" w-full h-full   flex flex-col  gap-40 justify-between items-center lg:justify-start lg:items-center  md:bg-none md:bg-opacity-0 rounded-md lg:mr-20">
          <div className=" text-center">
            <p className=" text-3xl font-lobster text-[#d50466] mt-10 md:text-5xl text-shadow">
              {" "}
              Поздравляем с{" "}
            </p>
            <p className=" text-3xl font-lobster text-[#d50466] mt-10 md:text-5xl text-shadow ">
              <span className=" text-red-700 text-[60px] lg:text-[100px] mx-2">
                8
              </span>{" "}
              <span>марта!</span>
            </p>
          </div>

          {/* <div className=" max-w-[500px]">
            <img src={march8} alt="" className=" object-fit " />
          </div> */}

          <div className=" font-lobster  px-4 text-2xl md:text-4xl text-[#d50466]   rounded-md whitespace-nowrap mb-10 text-shadow ">
            <p> Счастья теплого, как солнце,</p>
            <p>И любви желаем вам!</p>
            <p>С праздником 8 Марта</p>
            <p>Всех прекрасных наших дам!</p>
            <p>Всем отличного здоровья,</p>
            <p>Бодрости и красоты,</p>
            <p>Пусть весна скорей исполнит</p>
            <p>Ваши главные мечты!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome8;
