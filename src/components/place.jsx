import React from "react";
import map1 from "../images/map1.png";
import mapIcon from "../images/place.png";
import timeIcon from "../images/times.png";
import bus from "../images/Lovepik_com-401910909-bus-3d-model.png";

function Place() {
  return (
    <div
      className="w-full min-h-screen bg-no-repeat bg-top-bottom bg-200 flex justify-center items-center bg-[#EFF0F4] "
      style={{
        backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5)),
    `,
      }}
    >
      <div className=" flex flex-col items-center gap-4">
        <div className=" flex-col  flex md:flex-row   justify-between p-4 gap-8">
          <div className="md:w-1/2 h-full rounded-md shadow-xl">
            <img
              src={map1}
              alt="Карта"
              className=" w-full h-full  object-cover"
            />
          </div>

          <div className=" md:w-1/2 flex flex-col gap-10  ">
            <h2 className=" text-[30px] md:text-[60px] font-bold  ">
              О мероприятии
            </h2>
            {/* <p className=" text-[#696969] ">text</p> */}
            <div className="flex gap-4 items-center">
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
        <div className=" flex-col  flex md:flex-row   justify-between p-4 gap-8">
          <div className="flex flex-col items-center p-4 text-[18px] text-[#696969]  font-semibold  indent-8 ">
            <div className=" flex-col md:flex-row flex  justify-between items-center gap-8 ">
              <div className=" w-1/2 flex justify-center items-center">
                <img src={bus} alt="Bus" className=" w-[400px]  " />
              </div>
              <div className=" flex  flex-col">
                <p className=" max-w-[900px] text-justify">
                  На предстоящее корпоративное мероприятие организован
                  специальный транспорт для вашего удобства!
                  <span className=" text-[#002f54]">
                    {" "}
                    Автобусы будут отправляться от офиса
                  </span>{" "}
                  в период{" "}
                  <span className=" text-[#002f54]">с 14:00 до 14:30</span>.
                  Просим вас собраться заранее, чтобы мы могли обеспечить
                  своевременный и комфортный трансфер для каждого.
                  {/* Мы рекомендуем
                занять места в автобусах заблаговременно, чтобы избежать
                задержек. В случае возникновения вопросов, пожалуйста,
                обращайтесь к вашему непосредственному руководителю или
                координатору мероприятий.  */}
                </p>
                <p>Ждем Вас, чтобы вместе сделать этот день незабываемым!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Place;
