'use client'
import React, { useState, useEffect } from "react";
import PricingCard from './PricingCard'
import { BASE_URL } from '../constant'
const Pricing = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const apiUrl = `${BASE_URL}/api/get-plan-details`
    console.log(apiUrl);
    fetch(apiUrl).then(res => res.json()).then(data => {
      console.log(data.plan_details)
      setData(data.plan_details)
    })
  }, [])
  return (
    <>
      <div id="pricing" class="min-h-screen items-center bg-[#191A29] mb-24">
        <div class="mt-32">
          <div class="text-start font-semibold mx-4 md:mx-44">
            <h1 class="text-4xl">
              <span class="text-violet-500 font-semibold">Pricing </span>
              <span className="text-white">Plans</span>
            </h1>
          </div>

          <div class=" sm:flex flex-wrap justify-center items-center gap-8 md:mx-16">
            {
              data?.length ?
                data.map((item) => (
                  <PricingCard
                    key={item.plan_id}
                    planData={item}
                  />
                ))
                : null
            }


            {/* <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 bg-[#222331] text-white mt-6 shadow-lg rounded-[20px] font-mono">
              <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="flex flex-col justify-center items-center gap-2">
                  <span class=" text-[#8167E6] rounded-full text-xl leading-5 font-semibold ">
                    Apollo
                  </span>
                  <span className="text-lg text-white font-[Avenir]">The Essential</span>
                </div>
              </div>
              <div class="mt-4 flex justify-center text-4xl text-white leading-none font-bold bg-gray-500 px-6 py-4">
                $89.99
                <span class="pt-4 text-xs font-medium text-white">/mo</span>
              </div>
              <div className="p-4">
                <ul class="text-sm w-full mt-6 mb-6">
                  <li class="mb-3 flex items-center text-white">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    All illimited components
                  </li>
                  <li class="mb-3 flex items-center text-white ">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Own custom Tailwind styles
                  </li>
                  <li class="mb-3 flex items-center text-white">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Unlimited Templates
                  </li>
                  <li class="mb-3 flex items-center ">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Free premium dashboard
                  </li>
                  <li class="mb-3 flex items-center text-white ">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Best ranking
                  </li>
                  <li class="mb-3 flex items-center opacity-50 ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      class="h-6 w-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Prenium svg
                  </li>
                  <li class="mb-3 flex items-center opacity-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      class="h-6 w-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    My wife
                  </li>
                </ul>
              </div>

              <button
                type="button"
                class="w-full px-3 py-4 text-sm shadow rounded-b-[20px] text-white  bg-[#8167E6] hover:bg-white transition-colors  transform"
              >
                Subscribe
                <div className="absolute inset-0 flex items-center justify-center transform translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100 transition-transform hover:duration-300 ">
                  <p className="text-[#8167E6] text-sm">$89.99</p>

                </div>
              </button>
            </div> */}

            {/* <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4 bg-[#222331] mt-6 shadow-lg rounded-[20px]">
              <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="flex flex-col justify-center items-center gap-2">
                  <span class=" text-[#8167E6] rounded-full text-xl leading-5 font-bold font-mono">
                    Apollo
                  </span>
                  <span className="text-lg text-white font-[Avenir]">The Essential</span>
                </div>
              </div>
              <div class="mt-4 flex justify-center text-4xl text-white leading-none font-extrabold bg-gray-500 px-6 py-4">
                $99.99
                <span class="pt-4 text-xs font-medium text-white">/mo</span>
              </div>

              <div className="p-4">
                <ul class="text-sm w-full mt-6 mb-6">
                  <li class="mb-3 flex items-center text-white">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    All illimited components
                  </li>
                  <li class="mb-3 flex items-center text-white">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Own custom Tailwind styles
                  </li>
                  <li class="mb-3 flex items-center text-white">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Unlimited Templates
                  </li>
                  <li class="mb-3 flex items-center text-white ">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Free premium dashboard
                  </li>
                  <li class="mb-3 flex items-center text-white">
                    <svg
                      class="h-6 w-6 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      stroke="currentColor"
                      fill="white"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1412 734q0-28-18-46l-91-90q-19-19-45-19t-45 19l-408 407-226-226q-19-19-45-19t-45 19l-91 90q-18 18-18 46 0 27 18 45l362 362q19 19 45 19 27 0 46-19l543-543q18-18 18-45zm252 162q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Best ranking
                  </li>
                  <li class="mb-3 flex items-center opacity-50 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      class="h-6 w-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    Prenium svg
                  </li>
                  <li class="mb-3 flex items-center opacity-50 text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="6"
                      height="6"
                      class="h-6 w-6 mr-2"
                      fill="currentColor"
                      viewBox="0 0 1792 1792"
                    >
                      <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                    </svg>
                    My wife
                  </li>
                </ul>
              </div>

              <button
                type="button"
                class="w-full px-3 py-4 text-sm shadow rounded-b-[20px] text-white  bg-[#8167E6] hover:bg-white transition-colors  transform "
              >
                Subscribe
                <div className="absolute inset-0 flex items-center justify-center transform translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100 transition-transform hover:duration-300 ">
                  <p className="text-[#8167E6] text-sm">  $99.99</p>

                </div>
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
