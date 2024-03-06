import React from "react";
import bg8_1 from "../images/bg8_1.jpg";
import { Card } from "primereact/card";
import { Timeline } from "primereact/timeline";

function Welcome8() {
  const events = [
    {
      status: "Соб",
      date: "15/10/2020 10:30",
      icon: "pi pi-shopping-cart",
      color: "#9C27B0",
      text: "событие1",
    },
    {
      status: "Соб",
      date: "14:00",
      icon: "pi pi-cog",
      color: "#673AB7",
      text: "событие1",
    },
    {
      status: "Соб",
      date: "16:15",
      icon: "pi pi-shopping-cart",
      color: "#FF9800",
      text: "событие1",
    },
    {
      status: "Соб",
      date: " 10:00",
      icon: "pi pi-check",
      color: "#607D8B",
      text: "событие1",
    },
  ];

  const customizedMarker = (item) => {
    return (
      <span
        className="flex w-5 h-5 items-center justify-center text-white rounded-full z-1 "
        style={{ backgroundColor: item.color }}
      >
        <i className={item.icon}></i>
      </span>
    );
  };

  const customizedContent = (item) => {
    return (
      <Card title={item.status} subTitle={item.date} className=" bg-pink-50">
        {item.image && (
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${item.image}`}
            alt={item.name}
            width={200}
            className="shadow-md"
          />
        )}
        <p>{item.text}</p>
        {/* <Button label="Read more" className="p-button-text"></Button> */}
      </Card>
    );
  };
  return (
    <div
      className=" w-full min-h-screen bg-cover  bg-no-repeat flex justify-center  lg:justify-end bg-fixed   "
      style={{
        backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 5)),
      url(${bg8_1})
    `,
      }}
    >
      <div className="md:2/3 2xl:w-1/2 h-full p-4 md:p-10">
        <div className=" w-full h-full   flex flex-col justify-center    items-center lg:justify-start lg:items-center  md:bg-none md:bg-opacity-0 rounded-md lg:mr-20 gap-10">
          <div className=" text-center">
            <p className=" text-3xl font-lobster text-[#d50466]  md:text-5xl text-shadow">
              {" "}
              Дорогие наши девушки и женщины!
            </p>
          </div>

          <div className=" font-lobster  px-4 text-xl md:text-2xl lg:text-3xl text-[#9a1c50]   rounded-md   text-shadow flex flex-col gap-10 ">
            <p className=" indent-8">
              От всего сердца поздравляем Вас с замечательным праздником -
              Международным женским днем 8 Марта! В этот светлый день хочется
              выразить Вам искреннюю благодарность и признательность за ваш
              бесценный вклад в нашу общую работу, за вашу доброту, заботу и
              красоту, которыми вы наполняете нашу жизнь.
            </p>
            <p className=" indent-8">
              Пусть этот праздник принесет Вам радость, улыбки, приятные
              сюрпризы и теплые объятия близких. Желаем Вам огромного счастья,
              благополучия, успехов во всех начинаниях и достижениях! Пусть
              каждый ваш день будет наполнен яркими красками, любовью и
              гармонией.
            </p>
            <p className=" indent-8">
              Спасибо вам за то, что делаете наш коллектив таким уютным и
              теплым. Вы - наше вдохновение и наша гордость!
            </p>
          </div>
          <div className=" text-center">
            <p className=" text-3xl font-lobster text-[#d50466]  md:text-5xl text-shadow my-10">
              С 8 Марта, дорогие дамы!
            </p>
          </div>
          <div className=" text-center">
            <p className=" text-3xl font-lobster text-[#d50466]  md:text-5xl text-shadow">
              {" "}
              Хотим анонсировать план мероприятий на 7 марта:
            </p>
          </div>
          <div className=" font-lobster  px-4 text-xl md:text-2xl lg:text-3xl text-[#9a1c50]   rounded-md   text-shadow flex flex-col gap-10 ">
            <p className=" indent-8">
              С 9-00 на 6 этаже вас будет ожидать{" "}
              <span className=" ">welcome drink</span> с приглашённой звездой.
            </p>
            <p className=" indent-8">
              В 13-00 на 6 этаже (переговорная к.522В) начало официальной части
              мероприятия.
            </p>
            <p className=" indent-8">
              На мероприятии Вас ждёт поздравление от коллег и руководства.
            </p>
            <p className=" indent-8">
              Хедлайнером данного мероприятия станет широкоизвестный в узких
              кругах артист, чьё имя в скором времени появится на афишах вашего
              города.
            </p>
            <p className=" indent-8">
              Завершающей частью мероприятия будет фуршет-банкет. При себе иметь
              в обязательном порядке хорошее настроение.
            </p>
            <p className=" indent-8">До встречи 7 марта!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome8;
