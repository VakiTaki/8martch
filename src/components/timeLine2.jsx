import React from "react";
import hat from "../images/hat.png";

function TimeLine2() {
  return (
    <section className="py-10 bg-[#EFF0F4] lg:py-20  font-poppins">
      <div className="max-w-xl mx-auto ">
        <div className="text-center ">
          <div className="flex flex-col items-center  ">
            <h1 className=" text-[30px] md:text-[60px] font-bold leading-tight text-black ">
              <span className="  relative font-bold">
                <img
                  src={hat}
                  alt="Шляпа"
                  className=" absolute bottom-[72%] -left-[22%]  "
                />
                П
              </span>
              лан <span className=" text-black">мероприятия</span>{" "}
            </h1>
          </div>
          <p className="mb-16 text-base text-center text-gray-500"></p>
        </div>
      </div>
      <div className="flex flex-col justify-center ">
        <div className="w-full px-4 mx-auto lg:max-w-5xl ">
          <div className="relative">
            <div className="absolute hidden w-1 h-[90%] mt-4 transform -translate-x-1/2 bg-[#c9e2f5]  lg:block left-1/2"></div>
            <div className="space-y-2 lg:space-y-4">
              {/* <!-- Left section --> */}
              <div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <div className="relative flex-1 mb-10 bg-white rounded-md shadow lg:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                          <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-[#002f54] flex flex-col items-center ">
                                <span>15:00</span>
                                <span>-</span>
                                <span>15:30</span>
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p className="mb-0 text-xl font-bold text-[#696969] ">
                                Сбор гостей в Конференц зале "Европейский"
                              </p>
                              <p className="text-gray-700 ">
                                {/* Сбор гостей в Конференц зале "Европейский" */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#ffdb8b] rounded-full  left-1/2 lg:translate-y-[4px]">
                    <span className="text-gray-100 ">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-3 h-3 bi bi-building"
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
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <div className="relative flex-1 mb-10 bg-white rounded-md shadow lg:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                          <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white  lg:block drop-shadow-lg"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-[#002f54] flex flex-col items-center ">
                                <span>15:30</span>
                                <span>-</span>
                                <span>17:00</span>
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p className="mb-0 text-xl font-bold  text-[#696969] ">
                                Официальная часть мероприятия
                              </p>
                              <p className="text-gray-700 ">
                                {/* Официальная часть мероприятия */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#cd7cff] rounded-full  left-1/2 lg:translate-y-[3px]">
                    <span className="text-gray-100 "></span>
                  </div>
                </div>
              </div>
              {/* <!-- Left section --> */}
              <div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <div className="relative flex-1 mb-10 bg-white rounded-md shadow lg:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                          <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-[#002f54] flex flex-col items-center ">
                                <span>17:00</span>
                                <span>-</span>
                                <span>17:30</span>
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p className="mb-0 text-xl font-bold text-[#696969] ">
                                Перерыв
                              </p>
                              <p className="text-gray-700 ">
                                {/* Сбор гостей в Конференц зале "Европейский" */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#ffdb8b] rounded-full  left-1/2 lg:translate-y-[4px]">
                    <span className="text-gray-100 ">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-3 h-3 bi bi-building"
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
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <div className="relative flex-1 mb-10 bg-white rounded-md shadow lg:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                          <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white  lg:block drop-shadow-lg"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-[#002f54] flex flex-col items-center ">
                                <span>17:30</span>
                                <span>-</span>
                                <span>18:00</span>
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p className="mb-0 text-xl font-bold text-[#696969] ">
                                Велком в Конференц зале "Континенталь"
                              </p>
                              <p className="text-gray-700 ">
                                {/* Официальная часть мероприятия */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#cd7cff] rounded-full  left-1/2 lg:translate-y-[3px]">
                    <span className="text-gray-100 "></span>
                  </div>
                </div>
              </div>
              {/* <!-- Left section --> */}
              <div>
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-start w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pr-8">
                      <div className="relative flex-1 mb-10 bg-white rounded-md shadow lg:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-3 -right-4">
                          <div className="hidden h-10 origin-bottom-left transform -rotate-45 bg-white shadow lg:block"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-center">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-[#002f54] flex flex-col items-center ">
                                <span>18:00</span>
                                <span>-</span>
                                <span>23:00</span>
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p className="mb-0 text-xl font-bold text-[#696969] ">
                                Банкет
                              </p>
                              <p className="text-gray-700 ">
                                {/* Сбор гостей в Конференц зале "Европейский" */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#ffdb8b] rounded-full  left-1/2 lg:translate-y-[4px]">
                    <span className="text-gray-100 ">
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="w-3 h-3 bi bi-building"
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
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-end w-full mx-auto">
                    <div className="w-full lg:w-1/2 lg:pl-8">
                      <div className="relative flex-1 mb-10 bg-white rounded-md shadow lg:mb-8 ">
                        <div className="absolute inline-block w-4 overflow-hidden -translate-y-1/2 top-7 -left-4">
                          <div className="hidden h-10 origin-top-right transform -rotate-45 bg-white  lg:block drop-shadow-lg"></div>
                        </div>
                        <div className="relative z-20 ">
                          <div className="flex flex-wrap items-start">
                            <div className="p-4 md:w-1/4 ">
                              <span className="text-lg text-[#002f54] flex flex-col items-center ">
                                <span>23:00</span>
                                <span></span>
                                <span></span>
                              </span>
                            </div>
                            <div className="flex-1 p-4 pr-4 border-l border-gray-300 ">
                              <p className="mb-0 text-xl font-bold text-[#696969] ">
                                Финал
                              </p>
                              <p className="text-gray-700 ">
                                {/* Официальная часть мероприятия */}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-[#cd7cff] rounded-full  left-1/2 lg:translate-y-[3px]">
                    <span className="text-gray-100 "></span>
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
