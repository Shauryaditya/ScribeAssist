'use client'
import React, { useState } from 'react'
import UpgradeConfirmationModal from './UpgradeConfirmationModal'
const UpgradeCard = ({ data, subscriptionId }) => {
    const { plan_id, plan_key, plan_name, price, is_active_plan } = data
    const [isClicked, setIsClicked] = useState(false)
    const handleClose = () => {
        setIsClicked(false)
    }
    return (
        <>
            <div className=" max-w-sm bg-[#222331] mt-6 shadow-lg rounded-[20px]">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <span className=" text-[#8167E6] rounded-full text-xl leading-5 font-semibold font-mono">
                            Apollo
                        </span>
                        <span className="text-lg text-white font-[Avenir]">The Essential</span>
                    </div>
                </div>
                <div className="mt-4 flex justify-center text-4xl text-white leading-none font-bold bg-gray-500 px-6 py-4">
                    ${price}
                    <span className="pt-4 text-xs font-medium text-white">/mo</span>
                </div>
                <div className="p-4">
                    <ul className="text-sm w-full mt-6 mb-6">
                        <li className="mb-3 flex items-center text-white ">
                            <svg
                                className="h-6 w-6 mr-2"
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
                        <li className="mb-3 flex items-center text-white">
                            <svg
                                className="h-6 w-6 mr-2"
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
                        <li className="mb-3 flex items-center text-white">
                            <svg
                                className="h-6 w-6 mr-2"
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
                        <li className="mb-3 flex items-center text-white">
                            <svg
                                className="h-6 w-6 mr-2"
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
                        <li className="mb-3 flex items-center  text-white">
                            <svg
                                className="h-6 w-6 mr-2"
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
                        <li className="mb-3 flex items-center opacity-50 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                className="h-6 w-6 mr-2"
                                fill="currentColor"
                                viewBox="0 0 1792 1792"
                            >
                                <path d="M1277 1122q0-26-19-45l-181-181 181-181q19-19 19-45 0-27-19-46l-90-90q-19-19-46-19-26 0-45 19l-181 181-181-181q-19-19-45-19-27 0-46 19l-90 90q-19 19-19 46 0 26 19 45l181 181-181 181q-19 19-19 45 0 27 19 46l90 90q19 19 46 19 26 0 45-19l181-181 181 181q19 19 45 19 27 0 46-19l90-90q19-19 19-46zm387-226q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
                            </svg>
                            Prenium svg
                        </li>
                        <li className="mb-3 flex items-center opacity-50 text-white">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="6"
                                height="6"
                                className="h-6 w-6 mr-2"
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
                    onClick={() => setIsClicked(true)}
                    type="button"
                    className={`${is_active_plan && 'pointer-events-none'} w-full px-3 py-4 text-sm shadow rounded-b-[20px] text-white  bg-[#8167E6] hover:bg-white transition-colors  transform`}
                >
                    {`${is_active_plan ? 'Current Plan' : 'Upgrade'}`}
                    <div className="absolute inset-0 flex items-center justify-center transform translate-y-2 opacity-0 hover:translate-y-0 hover:opacity-100 transition-transform hover:duration-300 ">
                        <p className="text-[#8167E6] text-sm">${price}</p>

                    </div>
                </button>
            </div>
            {isClicked &&
                <UpgradeConfirmationModal
                    data={data}
                    subscriptionId={subscriptionId}
                    onClose={handleClose}
                />
            }
        </>
    )
}
export default UpgradeCard