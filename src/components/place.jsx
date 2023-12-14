import React from "react";
import map from "../images/map.jpeg";
import shape1 from "../images/shape-1.png";

function Place() {
  return (
    <div
      className="w-full h-screen bg-no-repeat bg-left-bottom bg-200 flex justify-center items-center bg-[#EFF0F4] "
      style={{
        backgroundImage: `
      linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5)),
         url(${shape1})
    `,
      }}
    >
      <div className=" flex flex-col items-center gap-10">
        <div class="flex flex-col items-center ">
          <h1 class="text-5xl font-bold leading-tight text-slate-700 ">
            Приходите <span class=" text-slate-800"> по адресу</span>{" "}
          </h1>
        </div>

        <img src={map} alt="Карта" className=" w-1/2  rounded-md shadow-xl" />
      </div>
    </div>
  );
}

export default Place;
