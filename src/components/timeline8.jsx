import React from "react";
import bg8_2 from "../images/bg8_2.jpg";
import { Timeline } from "primereact/timeline";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "./Timeline.css";

function Timeline8() {
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
      className="  w-screen bg-cover lg:px-10  py-10 bg-right-top bg-transparent"
      //   style={{
      //     backgroundImage: `

      //   url(${bg8_2})
      // `,
      //   }}
    >
      <div className="card w-full  lg:w-1/2  ">
        <Timeline
          value={events}
          align="alternate"
          className="customized-timeline"
          marker={customizedMarker}
          content={customizedContent}
        />
      </div>
    </div>
  );
}

export default Timeline8;
