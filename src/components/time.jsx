import React from "react";
import { CountdownTimer } from "./countDownTimer";

function Time() {
  return (
    <div
      className=" bg-[#161616] w-full flex justify-center py-[200px]  "
      style={{
        backgroundImage: `
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 5%, transparent 95%, rgba(255, 255, 255, 0.5))
  `,
      }}
    >
      <CountdownTimer
        targetDate={new Date("December 28, 2023 15:00:00").getTime()}
      />
    </div>
  );
}

export default Time;
