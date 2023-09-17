'use client'
import React, { useState, useEffect } from 'react';
import { ReactMic } from 'react-mic';
import Wave from './Wave'
import { BASE_URL } from '@/constant';

import getToken from '@/hook/getToken';

const VoiceRecorder = ({ onDataReceived }) => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');
  const [audioData, setAudioData] = useState(null);

  const handleStartRecording = () => {
    setIsRecording(true);
  };

  const handleStopRecording = () => {
    setIsRecording(false);
  };

  const onData = (recordedBlob) => {
    // Do something with the audio data, if needed
  };

  const onStop = (recordedBlob) => {
    setAudioURL(recordedBlob.blobURL);
    sendAudioToAPI(recordedBlob.blob);
  };

  const sendAudioToAPI = async (audioBlob) => {
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
        setAudioData(data);
        console.log('Audio sent successfully to the API', data);
        // Pass the audio data to the parent component
        onDataReceived(data);
      } else {
        // Handle API errors
        console.error('Error sending audio to the API');
      }
    } catch (error) {
      // Handle network or other errors
      console.error('Error:', error);
    }
  };

  const [isPageRendered, setIsPageRendered] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Code that uses the window object
      setIsPageRendered(true)
    }
  }, []);
  if (isPageRendered) {
    return (
      <div>
        <div className="flex flex-col gap-1">


          {/* {audioURL && (
          <div>
            <audio controls src={audioURL}></audio>
          </div>
        )} */}
          <Wave audioURL={audioURL} />
          <div className="w-full flex justify-end items-end mt-12">
            <button className='bg-[#8167E6] text-white rounded-xl px-6 py-2' onClick={isRecording ? handleStopRecording : handleStartRecording}>
              {isRecording ? 'Stop Recording' : 'Start Encounter'}
            </button>
          </div>
          <ReactMic
            record={isRecording}
            className="none"
            visualSetting='none'
            onStop={onStop}
            onData={onData}
            mimeType="audio/wav"
          />

        </div>
      </div>
    );
  }

};

export default VoiceRecorder;
