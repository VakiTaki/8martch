import React from "react";
import TimeLine2 from "./timeLine2";

function Plan() {
  return (
    <div
      className="  w-screen  bg-cover  bg-white  "
      style={{
        backgroundImage: `
         linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5))
       `,
      }}
    >
      {/* <Timeline /> */}
      <TimeLine2 />
    </div>
  );
}

export default Plan;
