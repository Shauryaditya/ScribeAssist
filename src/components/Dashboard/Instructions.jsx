import React from 'react'

const Instructions = ({ instruction }) => {
    console.log(instruction);
    const instructionsArray = Object.values(instruction);
    return (
        <div className='max-w-full '>
            <div className="flex flex-col gap-3">
                <div className="w-full bg-[#2F303D] rounded-[20px] p-4">

                    <div className="flex flex-col gap-2">

                        <div className="flex justify-between">
                            <p className='text-white font-mono text-lg font-bold'>Diagonosis</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                        </div>
                        <input type="text"
                            className='text-xs text-white bg-transparent'
                            value={instruction.Diagnosis} />

                    </div>
                </div>
                <div className="w-full bg-[#2F303D] rounded-[20px] p-4">

                    <div className="flex flex-col gap-2">

                        <div className="flex justify-between">
                            <p className='text-white font-mono text-lg font-bold'>Patient Instructions</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                        </div>
                        <div className="flex flex-col">
                            {instructionsArray.map((item, index) => (
                                <div key={index} className="">
                                    <h2 className="text-xs text-white font-semibold mb-2">{item.split(': ')[0]}</h2>
                                    <ul className='list-disc text-white pl-8'>
                                        <li className="mb-2">
                                            <p className="text-xs text-white">{item.split(': ')[1]}</p>
                                        </li>
                                    </ul>
                                </div>
                            ))}
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Instructions