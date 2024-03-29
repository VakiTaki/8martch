import React, { useState, useEffect } from "react";
import { getRussianTimesWords } from "../utils/getRussianTimesWords";
import timesIcon from "../images/times.png";

export const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft);
    }, 1000);

    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formatNumber = (number) => (number < 10 ? `0${number}` : number);
  return (
    <div className="text-white p-4 flex flex-col items-center ">
      <div className=" flex items-center gap-4">
        <img src={timesIcon} alt="Время иконка" className=" w-10 h-10 " />
        <h2 className="   text-[30px] md:text-[60px] font-bold ">
          До события осталось
        </h2>
      </div>

      <div className=" grid grid-cols-2  md:grid-cols-4 gap-10 w-[300px]  md:w-[600px] text-right">
        <div className=" flex flex-col  ">
          <span className=" flex justify-center items-center text-[100px] font-bold ">
            {timeLeft.days}
          </span>
          <span className=" text-right flex justify-center">
            {getRussianTimesWords(timeLeft.days, "days")}
          </span>
        </div>
        <div className=" flex flex-col  ">
          <span className="  text-[100px] font-bold flex justify-center ">
            {formatNumber(timeLeft.hours)}
          </span>{" "}
          <span className=" text-right flex justify-center ">
            {getRussianTimesWords(timeLeft.hours, "hours")}
          </span>
        </div>
        <div className=" flex flex-col justify-center ">
          <span className=" text-[100px] font-bold flex justify-center">
            {formatNumber(timeLeft.minutes)}
          </span>{" "}
          <span className=" text-right flex justify-center">
            {getRussianTimesWords(timeLeft.minutes, "minutes")}
          </span>
        </div>
        <div className=" flex flex-col  ">
          <span className=" text-[100px] font-bold flex justify-center">
            {formatNumber(timeLeft.seconds)}
          </span>{" "}
          <span className=" text-right flex justify-center">
            {getRussianTimesWords(timeLeft.seconds, "seconds")}
          </span>
        </div>
      </div>
    </div>
  );
};
