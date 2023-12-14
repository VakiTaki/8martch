import React from "react";
const test = [
  { id: 1, time: "12:00", title: "Title", description: "description" },
  { id: 2, time: "12:00", title: "Title", description: "description" },
  { id: 3, time: "12:00", title: "Title", description: "description" },
  { id: 4, time: "12:00", title: "Title", description: "description" },
  { id: 5, time: "12:00", title: "Title", description: "description" },
  { id: 6, time: "12:00", title: "Title", description: "description" },
  { id: 7, time: "12:00", title: "Title", description: "description" },
  { id: 8, time: "12:00", title: "Title", description: "description" },
  { id: 9, time: "12:00", title: "Title", description: "description" },
  { id: 10, time: "12:00", title: "Title", description: "description" },
];

function Timeline({ data = test }) {
  return (
    <div className=" w-screen overflow-x-scroll p-4">
      <ol className=" flex   ">
        {data.map((event, index) => (
          <li
            className="relative mb-6 sm:mb-0 min-w-[500px] h-[300px]"
            key={event.id}
          >
            <div className="flex items-center ">
              <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0"></div>
              {data.length !== index + 1 && (
                <div
                  className={
                    "hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 " +
                    (data.length === index + 1 ? " hidden " : " ")
                  }
                ></div>
              )}
            </div>
            <div className="mt-3 sm:pe-8">
              <h3 className="text-lg font-semibold text-gray-900">
                {event.title}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {event.time}
              </time>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {event.description}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Timeline;
