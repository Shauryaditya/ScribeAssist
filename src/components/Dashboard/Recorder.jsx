"use client"
import React,{useState} from 'react'
import Timer from './Timer'
import Link from 'next/link'
const Recorder = () => {
    const [isHovered, setIsHovered] = useState(false);

    const cardStyle = isHovered
      ? 'bg-white text-black'
      : 'bg-[#222331] text-white';

      const buttonStyle = isHovered
      ? 'bg-white text-[#8167E6]'
      : 'bg-[#8167E6] text-white';
    return (
        <div className="max-w-full bg-[#222331] mx-8 pb-4">
            <div className="flex flex-row gap-3 my-8">
                <div className="w-full bg-[#191A29] h-56 rounded-[20px]">
                    <div className="flex flex-col p-4 gap-4 ">
                      <div className="mt-40">
                            <Timer />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex my-2">
                <div className="w-full bg-transparent rounded-[20px] p-4 border border-gray-500">
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
            <div className="flex justify-between mt-4">
                <button className={`text-sm bg-gray-500 transition duration-300 ease-in-out transform  rounded-xl px-4 py-2 ${cardStyle}`}
                   onMouseEnter={() => setIsHovered(true)}
                   onMouseLeave={() => setIsHovered(false)}>
                    Discard</button>
              <button className={`text-xs bg-[#8167E6]  rounded-xl px-4 py-2 transition duration-300 ease-in-out transform ${buttonStyle}`}
               onMouseEnter={() => setIsHovered(true)}
               onMouseLeave={() => setIsHovered(false)}>
                <Link href="/notes">Write Notes and Instructions </Link>  </button>
            </div>
        </div>
    )
}

export default Recorder