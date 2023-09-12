import React, { useState, useEffect } from 'react';

function Timer(props) {
    const [apiData, setApiData] = useState(null);
    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [isRecording, setIsRecording] = useState(false);
    const [audioRecording, setAudioRecording] = useState(null);
    const [audioContext, setAudioContext] = useState(null);
    const [audioStream, setAudioStream] = useState(null);
    const [audioChunks, setAudioChunks] = useState([]);

    let timerInterval = null;
    let audioRecorder = null;

    useEffect(() => {
        // Initialize the audio context when the component mounts
        if (!audioContext) {
            const newAudioContext = new (window.AudioContext || window.webkitAudioContext)();
            setAudioContext(newAudioContext); // Store the audioContext in state
        }
    }, [audioContext]);

    const startTimer = async () => {
        if (!isRunning) {
            try {
                // Request microphone access
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    
                // Start the timer interval
                timerInterval = setInterval(() => {
                    setTotalSeconds(prevTotalSeconds => prevTotalSeconds + 1);
                }, 1000);
    
                // Start audio recording
                audioContext.resume().then(() => {
                    setAudioStream(stream);
                    audioRecorder = new MediaRecorder(stream);
    
                    const audioChunks = [];
    
                    audioRecorder.ondataavailable = event => {
                        if (event.data.size > 0) {
                            audioChunks.push(event.data);
                            setAudioChunks([...audioChunks]);
                        }
                    };
    
                    audioRecorder.onstop = () => {
                        const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                        setAudioRecording(audioBlob);
                        // Send the audio recording to the API
                        sendAudioToAPI(audioBlob);
                    };
    
                    audioRecorder.start();
                    setIsRecording(true);
                });
            } catch (error) {
                console.error('Error accessing microphone:', error);
            }
    
            setIsRunning(true);
        }
    };
console.log(audioRecorder);
    const stopTimer = () => {
        clearInterval(timerInterval);

        if (audioRecorder && audioRecorder.state === 'recording') {
            audioRecorder.stop();
        }
        sendAudioToAPI();
        setIsRunning(false);
        setIsRecording(false);
    };

    const resetTimer = () => {
        clearInterval(timerInterval);

        if (audioRecorder && audioRecorder.state === 'recording') {
            audioRecorder.stop();
        }

        // Clear the audio recording data
        setTotalSeconds(0);
        setIsRunning(false);
        setAudioRecording(null);
        setAudioChunks([]);
    };

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const sendAudioToAPI = async audioBlob => {
        if (audioBlob) {
            // Create a FormData object to send the binary audio file
            const formData = new FormData();
            formData.append('audio', audioBlob, 'audio.wav');
            const access_token = localStorage.getItem('access_token');

            // Make a POST request to the API endpoint
            try {
                const response = await fetch('https://scribe-assist.onrender.com/api/transcribe', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${access_token}`,
                    },
                    body: formData,
                });

                if (response.ok) {
                    const data = await response.json();
                    setApiData(data);
                    // Handle the API response data as needed
                    console.log('API response:', data);

                    // You can also pass the data to a parent component or perform any other actions here
                    // Example: props.onApiData(data);
                } else {
                    console.error('API request failed with status:', response.status);
                }
            } catch (error) {
                console.error('Error sending audio to API:', error);
            }
        }
    };

    const sendDataToParent = () => {
        const { sendDataToParent, sendApiDataToParent } = props;

        // Call the function passed from the parent and pass data to it
        sendDataToParent(totalSeconds);

        // Call the function passed from the parent to send apiData
        sendApiDataToParent(apiData);
    };

    return (
        <div className="w-full">
            <div className="flex flex-row justify-between items-center">
                <h1 className="text-sm space-x-4 text-white font-bold ">{formatTime(totalSeconds)}</h1>
                <div className="flex space-x-4">
                    <div className="mt-2">
                        {/* Display a message indicating recording status */}
                        {isRecording ? <p className='text-white'>Recording...</p> : null}
                    </div>
                    <button
                        className={`bg-white text-black py-2 px-2 rounded ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                        onClick={isRunning ? stopTimer : startTimer}
                        disabled={false}
                    >
                        {isRunning ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                            </svg>
                        )}
                    </button>

                    <button
                        className="bg-white text-white py-2 px-2 rounded"
                        onClick={resetTimer}
                        disabled={!isRunning}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Timer;
