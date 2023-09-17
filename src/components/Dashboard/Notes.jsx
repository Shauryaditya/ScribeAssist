'use client'
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '@/constant';
import getToken from '@/hook/getToken'


const Notes = ({ notes, id }) => {
    console.log(notes);

    const [patientName, setPatientName] = useState('');
    const [patientGender, setPatientGender] = useState('');
    const [patientAge, setPatientAge] = useState('');

    const token = getToken()

    const [updatedNotes, setUpdatedNotes] = useState(notes);

    useEffect(() => {
        // Initialize state variables with data from props
        setUpdatedNotes(notes);
    }, [notes]);

    const handleNotesChange = (e) => {
        setUpdatedNotes(e.target.value); // Update the updatedNotes state
    };
    // Function to construct the request body
    const updateSoapNote = async () => {
        try {
            const requestBody = {
                patient_name: patientName,
                patient_age: patientAge,
                patient_gender: patientGender,

                soap_note: updatedNotes,
                id: id
            };
            console.log(requestBody);

            const response = await fetch(`${BASE_URL}/api/edit-soap-note`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
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
                <form action="" onSubmit={updateSoapNote}>
                    <div className="w-full bg-[#2F303D] rounded-xl p-4">

                        <div className="flex flex-col gap-2">


                            <div className="flex justify-between">
                                <p className='text-white font-[IBM Plex Mono] text-sm font-bold'>Patient</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" class="w-6 h-6 text-white">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>


                            </div>
                            <div className='flex flex-row gap-4'>
                                <div className='flex flex-col'>
                                    <label className='text-white text-xs' htmlFor='patientName'>
                                        Patient Name
                                    </label>
                                    <input
                                        className='bg-transparent rounded-xl border border-gray-400 text-white text-xs py-2'
                                        type='text'
                                        id='patientName'
                                        value={patientName}
                                        onChange={(e) => setPatientName(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='text-white text-xs' htmlFor='patientGender'>
                                        Gender
                                    </label>
                                    <select
                                        className='bg-transparent rounded-xl border border-gray-400 text-white text-xs py-2'
                                        id='patientGender'
                                        value={patientGender}
                                        onChange={(e) => setPatientGender(e.target.value)}
                                        required
                                    >
                                        <option value='Male'>Male</option>
                                        <option value='Female'>Female</option>
                                        <option value='Others'>Others</option>
                                    </select>
                                </div>

                                <div className='flex flex-col'>
                                    <label className='text-white text-xs' htmlFor='patientAge'>
                                        Age
                                    </label>
                                    <input
                                        className='bg-transparent rounded-xl border border-gray-400 text-white text-xs py-2'
                                        type='text'
                                        id='patientAge'
                                        value={patientAge}
                                        onChange={(e) => setPatientAge(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full bg-[#2F303D] rounded-xl p-4 mt-8">

                        <div className=" flex flex-col gap-2">
                            {/* <p className="text-xs text-white whitespace-pre">
                            {notes}
                        </p> */}
                            <textarea
                                class="appearance-none block w-full h-80  bg-transparent text-white border border-gray-400 rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 text-xs"
                                id="grid-password"
                                value={updatedNotes}
                                onChange={handleNotesChange}
                                type="text"
                                placeholder="Type question here"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button
                            className='px-4 py-2 rounded-xl bg-violet-500 text-white text-xs'
                            type='submit'
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Notes