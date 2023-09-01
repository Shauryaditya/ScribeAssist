import React from 'react'

const Account = () => {
    return (
        <div className="max-w-full mx-4">
            <div className="flex flex-row gap-8 my-8">
                <div className="w-1/2 bg-[#2F303D] rounded-md">
                    <div className="flex flex-col p-4 gap-4 ">
                        <p className='text-white'>General</p>
                        <div class="mb-4">
                         
                            <input class="shadow appearance-none border text-xs bg-[#222331] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
                        </div>
                        <div class="mb-4">
                        
                            <input class="shadow text-xs appearance-none border bg-[#222331] rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Display Name" />
                        </div>
                        <div class="mb-6">
                          
                            <input class="shadow appearance-none border bg-transparent rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************" />

                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-[#2F303D] rounded-md p-4">
                    <p className='text-white'>Documents</p>
                    <div className="flex flex-col justify-center items-center py-24 gap-4">
                        <p className='text-xs text-[#8E93A6]'>No Documents Added</p>
                        <p className='text-white text-xs underline'>Click To Add</p>
                    </div>
                </div>
            </div>
            <div className="flex">
                <div className="w-full bg-[#2F303D] rounded-md p-4">
                    <div className="flex flex-col gap-4">
                        <p className='text-white text-sm'>Subscription</p>
                        <div className="w-full bg-gradient-to-r from-[#8167E6] to-[#443093] rounded-md ">
                            <div className="flex flex-col p-4 gap-4">
                                <div className="flex justify-between">
                                    <p className='text-white text-sm'>Apollo</p>
                                    <p className='text-white text-sm'>$79.99/mo</p>
                                </div>
                                <div className="">
                                    <p className='text-white font-[Avenir] text-xs'>Tissa teravödade, cykelbox hygon. Pens denyjäns autopevis inte treling. Tissa teravödade, cykelbox hygon. Pens denyjäns autopevis inte treling.</p>
                                </div>
                                <div className="flex flex-row gap-6">
                                    <p className='text-white text-xs'>Auto Renew</p>
                                    <p className='text-white text-xs'>Started : 17 / 02 / 2023</p>
                                </div>
                                <div className="flex justify-between">
                                    <div className="flex flex-row ">
                                        <p className='text-white text-xs underline'>Update Payment Method</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className='text-white bg-violet-500 rounded-lg px-4 py-2 text-xs'>Cancel</button>
                                        <button className='text-[#8167E6] bg-white rounded-lg px-4 py-2 text-xs'>Upgrade</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex my-4">
                <div className="w-full bg-[#2F303D] rounded-md p-4">
                    <div className="flex flex-col gap-2">
                        <p className='text-white font-[IBM Plex Mono] text-sm font-bold'>Communication Preferences</p>
                        <p className='text-white text-xs'>Columns of checkboxes to opt in/out of the communications.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account