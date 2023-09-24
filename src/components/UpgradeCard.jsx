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
                <div class="mt-4 flex justify-center text-4xl text-white leading-none font-bold bg-gray-500 px-6 py-4">
                    ${price}
                    <span class="pt-4 text-xs font-medium text-white">/mo</span>
                </div>
                <div className="p-4">
                    <ul class="text-sm w-full mt-6 mb-6">
                        <li class="mb-3 flex items-center text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            AI Assisted H&P / SOAP Notes
                        </li>
                        <li class="mb-3 flex items-center text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            ScribeAssist
                        </li>
                        <li class="mb-3 flex items-center text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            DictAssist
                        </li>
                        <li class="mb-3 flex items-center text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            AI Assisted Care Plans
                        </li>
                        <li class="mb-3 flex items-center  text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            AI Attending Analysis *BETA
                        </li>
                        <li class="mb-3 flex items-center opacity-50 text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            AI Billing Analysis *BETA
                        </li>
                        <li class="mb-3 flex items-center opacity-50 text-white text-xs gap-4">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9 17.3334C5.07163 17.3334 3.10744 17.3334 1.88705 16.113C0.666666 14.8926 0.666666 12.9285 0.666666 9.00008C0.666666 5.07171 0.666666 3.10752 1.88705 1.88714C3.10744 0.666748 5.07163 0.666748 9 0.666748C12.9284 0.666748 14.8926 0.666748 16.1129 1.88714C17.3333 3.10752 17.3333 5.07171 17.3333 9.00008C17.3333 12.9285 17.3333 14.8926 16.1129 16.113C14.8926 17.3334 12.9284 17.3334 9 17.3334ZM12.3586 6.47481C12.6027 6.71888 12.6027 7.11461 12.3586 7.35869L8.19194 11.5254C7.94786 11.7694 7.55214 11.7694 7.30806 11.5254L5.64139 9.85869C5.39731 9.61461 5.39731 9.21888 5.64139 8.97481C5.88547 8.73073 6.2812 8.73073 6.52527 8.97481L7.75 10.1995L11.4747 6.47481C11.7188 6.23073 12.1145 6.23073 12.3586 6.47481Z" fill="white" />
                            </svg>

                            Alpha Test New Tools & Features
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