"use client"
import React from 'react'
import Timer from './Timer'
import Link from 'next/link'
const Recorder = () => {
    return (
        <div className="max-w-full bg-[#222331] mx-4 pb-4">
            <div className="flex flex-row gap-3 my-4">
                <div className="w-full bg-[#191A29] h-48 rounded-xl">
                    <div className="flex flex-col p-4 gap-4 ">
                      <div className="mt-28">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex my-2">
                <div className="w-full bg-transparent rounded-md p-4 border border-gray-500">
                    <div className="flex flex-col gap-2">
                        <div className="">
                            <p className='text-xs text-[#8E93A6]'>Me</p>
                            <p className='text-xs text-[#8E93A6] font-[Avenir]'>Lörem ipsum prera bössa vadivis. Transplastisk båvugilig infragen, samt inade. Parasade dedogalogi söd för att vutilig och kontrangen,</p>
                        </div>
                        <div className="">
                            <p className='text-xs text-white'>Patient</p>
                            <p className='text-xs text-white font-[Avenir]'>Lörem ipsum etnoism ter i antiling gegt. Didade. Spek saktigt. Dyna antesm syncism denat semitirar i poras. Jiment förlåtturné val, eller nåsans tritos dogen bör mavis plus intrarän. Jynyr böhism reren epidynölig. Tira kronese bioponera i teradade kongen hubot manade. </p>
                        </div>
                        <div className="">
                            <p className='text-xs text-[#8E93A6]'>Me</p>
                            <p className='text-xs text-[#8E93A6] font-[Avenir]'>Lörem ipsum prera bössa vadivis. Transplastisk båvugilig infragen, samt inade. Parasade dedogalogi söd för att vutilig och kontrangen,</p>
                        </div>
                        <div className="">
                            <p className='text-xs text-white'>Patient</p>
                            <p className='text-xs text-white font-[Avenir]'>Lörem ipsum etnoism ter i antiling gegt. Didade. Spek saktigt. Dyna antesm syncism denat semitirar i poras. Jiment förlåtturné val, eller nåsans tritos dogen bör mavis plus intrarän. Jynyr böhism reren epidynölig. Tira kronese bioponera i teradade kongen hubot manade. </p>
                        </div>
                        <div className="">
                            <p className='text-xs text-[#8E93A6]'>Me</p>
                            <p className='text-xs text-[#8E93A6] font-[Avenir]'>Lörem ipsum prera bössa vadivis. Transplastisk båvugilig infragen, samt inade. Parasade dedogalogi söd för att vutilig och kontrangen,</p>
                        </div>
                        <div className="">
                            <p className='text-xs text-white'>Patient</p>
                            <p className='text-xs text-white font-[Avenir]'>Lörem ipsum etnoism ter i antiling gegt. Didade. Spek saktigt. Dyna antesm syncism denat semitirar i poras. Jiment förlåtturné val, eller nåsans tritos dogen bör mavis plus intrarän. Jynyr böhism reren epidynölig. Tira kronese bioponera i teradade kongen hubot manade. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between">
                <button className='text-sm bg-gray-500 text-white  rounded px-4 py-2'>Discard</button>
              <button className='text-xs bg-[#8167E6] text-white  rounded px-4 py-2-2'><Link href="/notes">Write Notes and Instructions </Link>  </button>
            </div>
        </div>
    )
}

export default Recorder