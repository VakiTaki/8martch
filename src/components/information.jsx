import React from "react";
import Button from "./form/button";
import { QRCodeSVG } from "qrcode.react";

const AnonUser = () => {
  return (
    <>
      <h2 className=" text-[30px] md:text-[60px] font-bold text-center ">
        Предварительная регистрация
      </h2>
      <p className=" text-[20px] font-semibold">
        Перейдите по ссылке из пригласительного письма, чтобы зарегистрироваться
      </p>
    </>
  );
};

const CompletedUser = ({ user, onYes }) => {
  return (
    user && (
      <div className="flex flex-col justify-center items-center gap-10">
        {user.participation ? (
          <>
            <h2 className=" text-[20px] md:text-[30px] font-bold">
              Ваш QR код для посещения
            </h2>
            <p className=" text-[20px] md:text-[40px] font-semibold text-center">
              {user?.fullname || "ФИО"}
            </p>
            <div className=" flex justify-center items-start border-[5px] shadow-sm  shadow-white rounded-md ">
              <QRCodeSVG value={user.qr} size={300} />
            </div>
          </>
        ) : (
          <>
            <p className=" text-[20px] md:text-[40px] font-semibold text-center">
              {user?.fullname || "ФИО"}
            </p>
            <p className=" text-[20px] font-semibold">
              Вы отказались от участия
            </p>
            <Button
              label="Все-таки пойду"
              color={"#d27bfd"}
              text={" text-black w-[200px]"}
              onClick={() => onYes({ token: user?.token })}
            />
          </>
        )}
      </div>
    )
  );
};

const RegisteredUser = ({ user, onYes, onNo }) => {
  return user?.completed ? (
    <CompletedUser user={user} onNo={onNo} onYes={onYes} />
  ) : (
    <NotCompletedUser user={user} onNo={onNo} onYes={onYes} />
  );
};

const NotCompletedUser = ({ user, onYes, onNo }) => {
  return (
    <>
      <h2 className=" text-[30px] md:text-[60px] font-bold text-center ">
        Предварительная регистрация
      </h2>
      <p className=" text-[20px] md:text-[40px] font-semibold text-center">
        {user?.fullname || "ФИО"}
      </p>
      <div className=" flex-col md:flex-row flex  items-center gap-10 mt-4">
        <Button
          label="Пойду"
          color={"#d27bfd"}
          text={" text-black w-[200px]"}
          onClick={() => onYes({ token: user?.token })}
        />

        <Button
          label="Не пойду"
          color={"#ffdc86"}
          text={" text-black w-[200px]"}
          onClick={() => onNo({ token: user?.token })}
        />
      </div>
    </>
  );
};

function Information({ user, onYes, onNo, isShowNo }) {
  return (
    <div
      className={
        " bg-black bg-no-repeat   w-full h-screen flex flex-col justify-center items-center text-white "
      }
      style={{
        backgroundImage: `
       linear-gradient(to bottom, rgba(255, 255, 255, 0.5), transparent 1%, transparent 99%, rgba(255, 255, 255, 0.5))
     `,
      }}
    >
      <div className="  text-white flex flex-col gap-10 bg-white  p-10  rounded-md bg-opacity-5 w-full h-full  items-center justify-center    ">
        {user ? (
          <RegisteredUser user={user} onNo={onNo} onYes={onYes} />
        ) : (
          <AnonUser />
        )}
      </div>
    </div>
  );
}

export default Information;
