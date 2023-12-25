import React from "react";
import map1 from "../images/map1.png";
import mapIcon from "../images/place.png";
import timeIcon from "../images/times.png";
import bus from "../images/b12b27314fbd11ee84eeaaafe6635749_upscaled.jpeg";
import busIcon from "../images/bus-2-svgrepo-com.svg";

function Place() {
  return (
    <>
      <div
        className="w-full min-h-screen bg-no-repeat bg-top-bottom bg-200 flex justify-center items-center bg-[#EFF0F4] "
        style={{
          backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5)),
    `,
        }}
      >
        <div className=" grid grid-cols-1 md:grid-cols-2 p-4 gap-4">
          <div className="  flex justify-center items-center">
            <img
              src={map1}
              alt="Карта"
              className=" md:w-full   object-cover rounded-md shadow-xl max-h-[600px]"
            />
          </div>
          <div className="flex justify-center items-center">
            {" "}
            <div className="  flex flex-col gap-10   ">
              <h2 className=" text-[30px] md:text-[60px] font-bold  ">
                О мероприятии
              </h2>
              {/* <p className=" text-[#696969] ">text</p> */}
              <div className="flex gap-4 items-center ">
                <img src={timeIcon} alt="Time" />
                <div className=" flex flex-col  ">
                  <span className=" text-[16px] md:text-[18px] text-[#002f54] uppercase font-semibold ">
                    Время проведения: 28 декабря
                  </span>
                  <span className=" text-[16px] text-[#696969]">
                    начало - 15:00, финал - 23:00
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <img src={mapIcon} alt="Time" />
                <div className=" flex flex-col  ">
                  <span className=" text-[16px] md:text-[18px] text-[#002f54] uppercase font-semibold ">
                    Место проведения: Центр международной торговли
                  </span>
                  <span className=" text-[15px] text-[#696969]">
                    Краснопресненская набережная, 12
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className=" flex  flex-col justify-center items-center gap-10">
              <h2 className=" w-full  text-[30px] md:text-[60px] font-bold   ">
                Как добраться
              </h2>
              <div className="flex gap-4 items-center  md:w-3/3">
                <img src={busIcon} alt="Time" className=" w-[40px] h-[50px]" />
                <div className=" flex flex-col  ">
                  <span className=" text-[16px] md:text-[18px] text-[#002f54] uppercase font-semibold ">
                    Автобусы будут отправляться от офиса в период с 14:00 до
                    14:30
                  </span>
                  <span className=" text-[15px] text-[#696969]">
                    Ждем Вас, чтобы вместе сделать этот день незабываемым!
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="  flex justify-center items-center">
            <img
              src={bus}
              alt="Карта"
              className="      object-cover rounded-md shadow-xl max-h-[600px]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Place;
