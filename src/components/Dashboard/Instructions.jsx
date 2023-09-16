import React from 'react'
import BASE_URL from '../constants';

const Instructions = ({ instruction,id }) => {
    console.log(instruction);
    // Function to construct the request body
    const access_token = localStorage.getItem('access_token');
    
    const updateInstruction = async () => {
        try {
            const requestBody = {
                patient_instraction : instruction,
                id: id
            };
            console.log(requestBody);

            const response = await fetch(`${BASE_URL}/api/edit-patient-instraction`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${access_token}`,
                },
                body: JSON.stringify(requestBody),
            })
            if (response.ok) {

                const data = await response.json();
                alert(data.message)
            }
            else {
                // Handle API errors
                console.error('Error sending data to the API');
            }
        } catch (error) {
            // Handle network or other errors
            console.error('Error:', error);
        }

    };
    return (
        <div className='max-w-full '>
            <div className="flex flex-col gap-3">

                <div className="w-full bg-[#2F303D] rounded-[20px] p-4">

                    <div className="flex flex-col gap-2">

                        <div className="flex justify-between">
                            <p className='text-white font-mono text-lg font-bold'>Patient Instructions</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                            </svg>

                        </div>
                        <div className="max-w-full flex flex-col">
                            <textarea
                                class="appearance-none block w-full h-80  bg-transparent text-white border border-gray-400 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 text-xs"
                                id="grid-password"
                                value={instruction}
                                type="text"
                                placeholder="Type question here"
                            />
                        </div>


                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className='px-4 py-2 rounded-xl bg-violet-500 text-white text-xs'
                        onClick={updateInstruction}
                    >
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

export default Instructions