import React from "react";
import bg1 from "../images/baby.png";
import sergey from "../images/7cOdELSZdeg.jpg";

function Show() {
  return (
    <div
      className="    bg-co bg-no-repeat bg-[#EFF0F4] relative flex flex-col justify-center items-center text-white  gap-10 px-4 "
      style={{
        backgroundImage: `
       linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 0%, transparent 99%, rgba(255, 255, 255, 0.5))
     `,
      }}
    >
      <h2 className="text-[30px] md:text-[60px] font-bold text-center text-black max-w-[1500px]">
        Наш ведущий
      </h2>
      <h2 className="text-[30px] md:text-[60px] font-bold text-center text-black max-w-[1500px] -mt-10">
        Сергей Беликов
      </h2>
      <p className=" text-[20px] md:text-[30px] text-[#002f54]  font-semibold  px-2 md:text-center  max-w-[1500px] indent-8 md:indent-0">
        В этот особенный день, когда радость и волнение заполняют воздух, наше
        праздничное мероприятие будет озарять своим присутствием Сергей Беликов,
        выдающийся мастер своего дела в области фантастики и признанный одним из
        лучших ведущих нашей страны. Его уникальный талант и харизма обещают
        превратить этот день в незабываемое событие.
      </p>
      <img src={sergey} alt="Show" className="md:max-w-[1000px] " />
      <h2 className="text-[30px] md:text-[60px] font-bold text-center text-black max-w-[1500px]">
        Выступление кавер группы
      </h2>
      <h2 className="text-[30px] md:text-[60px] font-bold text-center text-black max-w-[1500px] -mt-10">
        «Luxury Band»
      </h2>
      <p className=" text-[20px] md:text-[30px] text-[#002f54]  font-semibold  px-2 md:text-center max-w-[1500px] indent-8 md:indent-0">
        Готовьтесь к захватывающему музыкальному путешествию с кавер-группой
        «Luxury Band», которая своими неповторимыми ритмами наполнит вечер
        яркими красками и незабываемыми мелодиями. А еще вас ожидает множество
        интересных моментов: увлекательные конкурсы, великолепные призы и
        множество сюрпризов
      </p>
      <img src={bg1} alt="Show" className="md:max-w-[1000px]" />
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
