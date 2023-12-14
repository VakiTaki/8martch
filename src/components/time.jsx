import React from "react";
import { CountdownTimer } from "./countDownTimer";

function Time() {
  return (
    <div
      className=" bg-slate-900 w-full flex justify-center "
      style={{
        backgroundImage: `
    linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5))
  `,
      }}
    >
      <CountdownTimer
        targetDate={new Date("December 31, 2023 23:59:59").getTime()}
      />
    </div>
  );
}

export default Time;
