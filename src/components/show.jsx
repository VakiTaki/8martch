import React from "react";
import bg1 from "../images/baby.png";

function Show() {
  return (
    <div
      className="    bg-co bg-no-repeat bg-[#EFF0F4] relative flex flex-col justify-center items-center text-white  gap-10  "
      style={{
        backgroundImage: `
       linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 0%, transparent 99%, rgba(255, 255, 255, 0.5))
     `,
      }}
    >
      <h2 className="text-[30px] md:text-[60px] font-bold text-center text-black">
        Вас ждет выступление кавер группы «Luxury Band»
      </h2>
      <p className=" text-[20px] md:text-[30px] text-[#002f54]  font-semibold  px-2 text-center">
        А также много интересного: конкурсы, призы...
      </p>
      <p className=" text-[20px] md:text-[30px] text-[#002f54] font-semibold px-2 text-center ">
        Следите за информацией
      </p>
      <img src={bg1} alt="Show" className="" />
      {/* <div className=" absolute top-[20%] left-[10%] flex  flex-col justify-center items-center gap-10 p-10 rounded-md ">
        <h1 className=" text-[100px] text-[#d47dff]">Новый год!</h1>
        <span className=" text-[150px] tracking-[10px] text-[#fddf8c]">
          2024
        </span>
        <p className="text-3xl">
          Приглашаем всех на корпоративное мероприятие!
        </p>
      </div> */}
    </div>
  );
}

export default Show;
