import React from 'react'
import SubscriptionButton from './SubscriptionButton'

const PricingCard = ({ planData }) => {
    const { plan_id, plan_key, plan_name, price } = planData
    return (
        <div class="w-full sm:w-1/2 md:w-1/2 lg:w-1/4  bg-[#222331] mt-6 shadow-lg rounded-[20px]">
            <div class="px-6 py-8 sm:p-10 sm:pb-6">
                <div class="flex flex-col justify-center items-center gap-2">
                    <span class=" text-[#8167E6] rounded-full text-xl leading-5 font-semibold font-mono">
                        Apollo
                    </span>
                    <span className="text-lg text-white font-[Avenir]">The Essential</span>
                </div>
            </div>
            <div class="mt-4 flex justify-center text-4xl text-white leading-none font-bold bg-gray-500 px-6 py-4">
                ${price}
                <span class="pt-4 text-xs font-medium text-white">/mo</span>
            </div>
            <div className="p-4">
                <ul class="text-sm w-full mt-6 mb-6">
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
                        Free premium dashboard
                    </li>
                    <li class="mb-3 flex items-center  text-white">
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

            <SubscriptionButton
                plan_key={plan_key}
                plan_id={plan_id}
                price={price}
            />
        </div>
    )
}

export default PricingCard