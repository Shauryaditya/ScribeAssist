"use client"
import React,{useState} from 'react'
import Timer from './Timer'
import Link from 'next/link'
import Voice from './Voice'
const Recorder = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [timerData, setTimerData] = useState(null); // State to store data from Timer component
    const [apiData, setApiData] = useState(null); // State to store apiData from Timer component
    const [audioData, setAudioData] = useState(null);

    const access_token = localStorage.getItem('access_token');
    // Callback function to receive audio data from Voice component
    const onDataReceived = (data) => {
      setAudioData(data);
    };console.log("Audio data >>>>",audioData)


 

    // Function to receive apiData from Timer component
    const receiveApiDataFromTimer = (apiData) => {
        setApiData(apiData); // Set the received apiData in the state
       
    };
    console.log(apiData);


    const cardStyle = isHovered
      ? 'bg-white text-black'
      : 'bg-[#222331] text-white';

      const buttonStyle = isHovered2
      ? 'bg-white text-[#8167E6]'
      : 'bg-[#8167E6] text-white';

      const sendAudioDataToApi = async () => {
        // if (audioData) {
            console.log("Audio Data >>>",audioData)
          
          try {
            const apiUrl = 'https://scribe-assist.onrender.com/api/generate_soap_note';
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Authorization : `Bearer ${access_token}`
              },
              body: JSON.stringify({ audioData }), // Send the audioData in the request body
            });
    
            if (response.ok) {
              // Handle success, e.g., redirect to a success page or show a message
              const data = await response.json();
              console.log('Data sent successfully to the API',data);
            } else {
              // Handle errors, e.g., show an error message
              console.error('Failed to send data to the API');
            }
          } catch (error) {
            console.error('Error sending data to the API:', error);
          }
        // }
      };
    return (
        <div className="max-w-full min-h-screen bg-[#222331] mx-8 pb-4">
            <div className="flex flex-row gap-3 my-8">
                <div className="w-full bg-[#191A29] h-64 rounded-[20px]">
                    <div className="flex flex-col p-4 gap-4 ">
                      <div className="mt-0">
                        <Voice onDataReceived={onDataReceived} />
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex my-2">
                <div className="w-full bg-transparent rounded-[20px] p-4 border border-gray-500">
                    <div className="flex flex-col gap-2">
                        <div className="">
                            <p className='text-xs text-white font-[Avenir]'>{audioData?.transcript}</p>
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
               onMouseEnter={() => setIsHovered2(true)}
               onMouseLeave={() => setIsHovered2(false)}
               onClick={sendAudioDataToApi}>
             Write Notes and Instructions   </button>
            </div>
        </div>
    )
}

export default Recorder