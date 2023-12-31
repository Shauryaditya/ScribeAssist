"use client"
import React, { useState, useEffect } from 'react'
import { BASE_URL } from '@/constant';
import toast from 'react-hot-toast';
import Loader from './Loader'
import getToken from '@/hook/getToken'
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation'
const AudioComponent = dynamic(
  () => import('./AudioComponent'),
  { ssr: false }
);



const Recorder = () => {
  const router = useRouter()
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false)
  const token = getToken();
  // Callback function to receive audio data from Voice component

  const sendAudioToAPI = async (audioBlob) => {
    if (audioBlob) {
      setIsGenerating(true)
      try {
        const formData = new FormData();
        const token = getToken()
        formData.append('audio', audioBlob, 'recording.wav');
        console.log(token);
        const response = await fetch(`${BASE_URL}/api/transcribe`, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
          },

          body: formData,
        });

        if (response.ok) {

          // Handle successful response from the API
          const data = await response.json();
          setIsGenerating(false)
          console.log('Audio sent successfully to the API', data);
          // Pass the audio data to the parent component
          setAudioData(data);
        } else {
          setIsGenerating(false)
          // Handle API errors
          console.error('Error sending audio to the API');
        }
      } catch (error) {
        // Handle network or other errors
        console.error('Error:', error);
        setIsGenerating(false)
      }
    }
  };

  const [isPageRendered, setIsPageRendered] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Code that uses the window object
      setIsPageRendered(true)
    }
  }, []);

  const cardStyle = isHovered
    ? 'bg-white text-black'
    : 'bg-[#222331] text-white';

  const buttonStyle = isHovered2
    ? 'bg-white text-[#8167E6]'
    : 'bg-[#8167E6] text-white';

  const [isLoading, setIsLoading] = useState(false); // Initialize the loader state

  const sendAudioDataToApi = async () => {
    setIsLoading(true); // Show the loader when the request starts

    try {
      const apiUrl = `${BASE_URL}/api/generate_soap_note`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(audioData), // Send the audioData in the request body
      });

      if (response.ok) {
        // Handle success, e.g., redirect to a success page or show a message

        const data = await response.json();
        console.log('notes-data', data);
        const idFromResponse = data[0]?.patient_id;
        const notesPageUrl = `/notes?id=${idFromResponse}`;
        if (idFromResponse === undefined) {
          toast.error(data.message)
        } else {

          console.log('Data sent successfully to the API', data);
          router.push(notesPageUrl)

        }
      } else {
        // Handle errors, e.g., show an error message
        console.error('Failed to send data to the API');
      }
    } catch (error) {
      console.error('Error sending data to the API:', error);
    } finally {
      setIsLoading(false); // Hide the loader when the request is complete (whether success or error)
    }
  };
  if (isPageRendered) {
    return (
      <div className="max-w-full min-h-screen bg-[#222331] mx-8 pb-4">
        <div className="flex flex-row gap-3 my-8">
          <div className="w-full bg-[#191A29] h-64 rounded-[20px]">
            <div className="flex flex-col p-4 gap-4 ">
              <div className="mt-0">
                <AudioComponent sendAudioToAPI={sendAudioToAPI} />
                {/* <Voice onDataReceived={onDataReceived} /> */}

              </div>
            </div>
          </div>
        </div>

        <div className="flex mt-8">
          <div className="w-full h-64 bg-transparent rounded-[20px] p-4 border border-gray-500">
            <div className="flex flex-col gap-2">
              <div className="">
                {audioData ?
                  <p className='text-xs text-white font-[Avenir]'>{audioData.transcript}</p>
                  : null
                }
                {isGenerating ?
                  <p className='text-xs text-white font-[Avenir]'>Generating Text...</p>

                  : null}

              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <a
            href='/home'
            className={`text-sm bg-gray-500 transition duration-300 ease-in-out transform  rounded-xl px-4 py-2 ${cardStyle}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            Discard

          </a>
          {isLoading ? (
            <div className="flex">
              <button className={`text-xs bg-[#8167E6] flex rounded-xl px-4 py-2 transition duration-300 ease-in-out transform ${buttonStyle}`}>
                <Loader /> </button>
            </div>

          ) : (
            <button className={`text-xs bg-[#8167E6]  rounded-xl px-4 py-2 transition duration-300 ease-in-out transform ${buttonStyle} ${!audioData && ' pointer-events-none'}`}
              onMouseEnter={() => setIsHovered2(true)}
              onMouseLeave={() => setIsHovered2(false)}
              onClick={sendAudioDataToApi}>
              Write Notes and Instructions   </button>
          )}

        </div>
      </div>
    )
  }

}

export default Recorder