import React, { useState, useEffect } from "react";
import Button from "../components/form/button";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import Welcome8 from "../components/welcome8";
import Timeline8 from "../components/timeline8";

function Main() {
  // const [showButton, setShowButton] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrolledHeight = window.scrollY;
  //     const totalDocumentHeight = document.body.scrollHeight;

  //     if (scrolledHeight + window.innerHeight >= totalDocumentHeight - 500) {
  //       setShowButton(false);
  //     } else {
  //       setShowButton(true);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const scrollToBottom = () => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: "smooth",
  //   });
  // };

  return (
    <div className=" flex flex-col justify-center items-center   ">
      <Welcome8 />
      {/* <Timeline8 /> */}
      {/* {showButton && (
        <div
          className="fixed  p-2 bottom-4 right-4 animate-bounce  "
          onClick={scrollToBottom}
        >
          <Button label="" color={"#000000"}>
            <ArrowDownIcon className=" w-8 h-8 text-[#ffdb8b]" />
          </Button>
        </div>
      )} */}
    </div>
  );
}

export default Main;
