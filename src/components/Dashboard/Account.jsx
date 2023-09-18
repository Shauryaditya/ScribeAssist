'use client'
import React, { useEffect, useState } from 'react'

import getToken from '@/hook/getToken'
import { BASE_URL } from '@/constant';
import CancelButton from '../../components/CancelButton'
import UpgradeButton from '../../components/UpgradeButton'
import ChangePasswordModal from './ChangePasswordModal'
import { Link } from '@chakra-ui/react';
const Account = () => {
    const [contact, setContact] = useState();
    const [showModal, setShowModal] = useState(false);
    const handleOnClose = () => setShowModal(false);
    const token = getToken()
    useEffect(() => {
        const fetchInfo = async () => {
            try {

                const response = await fetch(
                    `${BASE_URL}/api/get-user-info`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                if (response.ok) {
                    const data = await response.json();
                    setContact(data);
                } else {
                    console.error("Failed to fetch data");
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchInfo();
    }, [token])

    const [subData, setSubData] = useState()
    useEffect(() => {
        const url = `${BASE_URL}/api/get-payment-details`;
        const token = getToken(); // Assuming you have a function to get the token
        console.log("payment-details", url, token);

        const requestOptions = {
            method: 'GET', // or 'POST', 'PUT', etc., depending on your API
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        };

        fetch(url, requestOptions)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status} - ${res.statusText}`);
                }
                return res.json();
            })
            .then(data => {
                console.log('subdata', data);
                setSubData(data.payment_details);
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });

    }, [])
    console.log("Account Info", contact, subData);
    return (
        <div className="max-w-full bg-[#222331] mx-4 pb-4">
            <div className="flex flex-row gap-3 my-4">
                <div className="w-1/2 bg-[#2F303D] rounded-xl">
                    <div className="flex flex-col p-4 gap-4 ">
                        <p className='text-white'>General</p>
                        <div class="mb-4">

                            <input
                                class="shadow appearance-none border border-none text-xs bg-[#222331] rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Email"
                                value={contact?.user_details?.email} />
                        </div>
                        <div class="mb-4">

                            <input
                                class="shadow text-xs appearance-none border border-none bg-[#222331] rounded-xl w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Display Name"
                                value={contact?.user_details?.name} />
                        </div>
                        <div class="mb-6">

                            <div className="w-full flex justify-between shadow appearance-none border  bg-transparent rounded-xl  py-3 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline
                             border-[#888C8C] ">
                                <input
                                    className="outline-0 bg-transparent"
                                    type="password"
                                    placeholder="*******"

                                />
                                <p
                                    className="font-light text-violet-500 text-xs"
                                    onClick={() => setShowModal(true)}
                                >Change Password</p>
                                <ChangePasswordModal
                                    onClose={handleOnClose}
                                    visible={showModal} />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#2F303D] rounded-xl p-4">
                    <p className='text-white'>Documents</p>
                    <div className="flex flex-col justify-center items-center py-24 gap-4">
                        <p className='text-xs text-[#8E93A6]'>No Documents Added</p>
                        <p className='text-white text-xs underline'>Click To Add</p>
                    </div>
                </div>
            </div>

            {/* // Subscription section */}
            <div className="flex">
                <div className="w-full bg-[#2F303D] rounded-md p-4">
                    <div className="flex flex-col gap-4">
                        <p className='text-white text-lg font-[IBM Plex Mono] font-semibold'>Subscription</p>
                        <div className="w-full bg-gradient-to-r from-[#8167E6] to-[#443093] rounded-md ">
                            <div className="flex flex-col p-4 gap-4">
                                <div className="flex justify-between">
                                    <p className='text-white text-sm'>Apollo</p>
                                    <p className='text-white text-sm'>${subData?.subscription_amount}/mo</p>
                                </div>
                                <div className="">
                                    <p className='text-white font-[Avenir] text-xs'>Tissa teravödade, cykelbox hygon. Pens denyjäns autopevis inte treling. Tissa teravödade, cykelbox hygon. Pens denyjäns autopevis inte treling.</p>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <p className='text-white text-xs'>Auto Renew</p>
                                    <p className='text-white text-xs'>Started : {subData?.current_period_start.slice(0, 10)}</p>

                                    {subData?.cancel_at_period_end &&
                                        <p className='text-white text-xs'>End Date : {subData?.current_period_end.slice(0, 10)}</p>}
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-row ">
                                        <Link href='/update-payment' className='text-white text-xs underline'>Update Payment Method</Link>
                                    </div>
                                    <div className="flex gap-3">
                                        {
                                            subData?.cancel_at_period_end !== true && <CancelButton
                                                subscriptionId={subData?.subscription_id
                                                }
                                            />

                                        }

                                        <UpgradeButton
                                            data={subData}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-2">
                <div className="w-full bg-[#2F303D] rounded-md p-4">
                    <div className="flex flex-col gap-2">
                        <p className='text-white font-[IBM Plex Mono] text-lg font-semibold'>Communication Preferences</p>
                        <p className='text-white text-xs'>Columns of checkboxes to opt in/out of the communications.</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Account