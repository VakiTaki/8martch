import React from "react";

function TimeLine2() {
  return (
    <section class="py-16 bg-[#EFF0F4] lg:py-20  font-poppins">
      <div class="max-w-xl mx-auto">
        <div class="text-center ">
          <div class="flex flex-col items-center ">
            <h1 class="text-5xl font-bold leading-tight text-slate-700 ">
              Расписание <span class=" text-slate-800">мероприятия</span>{" "}
            </h1>
          </div>
          <p class="mb-16 text-base text-center text-gray-500"></p>
        </div>
      </div>
      <div class="flex flex-col justify-center ">
        <div class="w-full px-4 mx-auto lg:max-w-5xl ">
          <div class="relative">
            <div class="absolute hidden w-1 h-full transform -translate-x-1/2 bg-[#c9e2f5]  lg:block left-1/2"></div>
            <div class="space-y-2 lg:space-y-4">
              {/* <!-- Left section --> */}
              <div>
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-start w-full mx-auto">
                    <div class="w-full lg:w-1/2 lg:pr-8">
                      <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 ">
                        <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                          <div class="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block"></div>
                        </div>
                        <div class="relative z-20 ">
                          <div class="flex flex-wrap items-center">
                            <div class="p-4 md:w-1/4 ">
                              <span class="text-lg text-gray-700 ">12:00</span>
                            </div>
                            <div class="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p class="mb-2 text-xl font-bold text-gray-600 ">
                                Начало
                              </p>
                              <p class="text-gray-700 ">Встреча сотрудников</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-green-500 rounded-full  left-1/2 lg:translate-y-[4px]">
                    <span class="text-gray-100 ">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="w-3 h-3 bi bi-building"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"
                        ></path>
                        <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"></path>
                      </svg> */}
                    </span>
                  </div>
                </div>
              </div>
              {/* <!-- Right section --> */}
              <div>
                <div class="flex flex-col items-center">
                  <div class="flex items-center justify-end w-full mx-auto">
                    <div class="w-full lg:w-1/2 lg:pl-8">
                      <div class="relative flex-1 mb-10 bg-white rounded shadow lg:mb-8 ">
                        <div class="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                          <div class="hidden h-10 origin-top-right transform -rotate-45 bg-white  lg:block drop-shadow-lg"></div>
                        </div>
                        <div class="relative z-20 ">
                          <div class="flex flex-wrap items-center">
                            <div class="p-4 md:w-1/4 ">
                              <span class="text-lg text-gray-700 ">22:00</span>
                            </div>
                            <div class="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p class="mb-2 text-xl font-bold text-gray-600 ">
                                Окончание
                              </p>
                              <p class="text-gray-700 ">До новых встреч</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-red-500 rounded-full  left-1/2 lg:translate-y-[3px]">
                    <span class="text-gray-100 "></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TimeLine2;
