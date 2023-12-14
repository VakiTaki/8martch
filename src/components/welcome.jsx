import React from "react";
import bg1 from "../images/bg1.png";
import Button from "./form/button";

function Welcome() {
  return (
    <div
      className="  h-screen w-screen  bg-cover bg-no-repeat bg-slate-900 relative  "
      style={{
        backgroundImage: `
           linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5)),
           url(${bg1})
         `,
      }}
    ></div>
  );
}

export default Welcome;
