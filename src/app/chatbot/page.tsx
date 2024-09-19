"use client";

export default function Home() {
  return (
    <div className="flex h-screen antialiased text-gray-800 bg-[#EDF2F7] ">
      <div className="flex flex-row h-full w-full md:px-16">
        <div className="flex flex-col flex-auto h-full p-9">
          <div className="flex flex-row items-center justify-center h-12 w-full">
            <div className="flex items-center justify-center rounded-2xl mb-2 text-indigo-700 bg-indigo-100 h-10 w-10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                ></path>
              </svg>
            </div>
            <div className="ml-2 font-bold text-2xl">Health CareChat Bot</div>
          </div>
          <div className="flex flex-col flex-auto  rounded-2xl bg-[#F7FAFC] p-4">
            <div className="flex flex-col h-full  ">
              <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        BOT
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Hi ,I’m here to assist you with predicting potential
                          health issues and providing valuable information on
                          causes and precautions. Please choose one of the
                          options below to get started:
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        BOT
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Vel ipsa commodi illum saepe numquam maxime
                          asperiores voluptate sit, minima perspiciatis.
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* Recommentation */}
                  <div className="col-start-1 col-end-13 flex justify-center gap-3">
                    <button className="relative w-50 flex flex-col gap-2 rounded-2xl border px-3 pb-4 pt-3 text-start shadow-xxs transition hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2l6 3v5c0 5.55-4.05 10.74-6 12-1.95-1.26-6-6.45-6-12V5l6-3z"
                          stroke="#32CD32"
                          stroke-width="2"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9 12l2 2 4-4"
                          stroke="#228B22"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                      <div className="text-gray-600 dark:text-gray-500">
                        Causes and Precautions
                      </div>
                    </button>

                    <button className="relative w-50 flex flex-col gap-2 rounded-2xl border px-3 pb-4 pt-3 text-start shadow-xxs transition hover:bg-token-main-surface-secondary disabled:cursor-not-allowed">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="#FF6F61"
                        />
                        <path
                          d="M12 8l-1.5 3.5-2-2L5 13h4l1 2 2.5-5L15 11h4l-6 6-4-8z"
                          fill="#FF4500"
                        />
                        <rect
                          x="15"
                          y="4"
                          width="6"
                          height="6"
                          rx="1"
                          fill="#FF0000"
                        />
                        <path
                          d="M17 6v2h2V6h-2zm-1 1h4v-2h-4v2z"
                          fill="#FFFFFF"
                        />
                      </svg>

                      <div className="text-gray-600 dark:text-gray-500">
                        Disease Prediction
                      </div>
                    </button>
                  </div>
                  {/* <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        M
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>......?</div>
                      </div>
                    </div>
                  </div> */}

                  {/* <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>Lorem ipsum dolor sit amet !</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-6 col-end-13 p-3 rounded-lg">
                    <div className="flex items-center justify-start flex-row-reverse">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                        </div>
                        <div className="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500">
                          Seen
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Perspiciatis, in.
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-start-1 col-end-8 p-3 rounded-lg">
                    <div className="flex flex-row items-center">
                      <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                        A
                      </div>
                      <div className="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl">
                        <div className="flex flex-row items-center">
                          <button className="flex items-center justify-center bg-indigo-600 hover:bg-indigo-800 rounded-full h-8 w-10">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </button>
                          <div className="flex flex-row items-center space-x-px ml-4">
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-4 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-12 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-6 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-5 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-4 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-3 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-10 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-1 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-1 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-8 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-2 w-1 bg-gray-500 rounded-lg" />
                            <div className="h-4 w-1 bg-gray-500 rounded-lg" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
