'use client'
import React, { useState, useEffect } from 'react';
import Wave from './Wave'

function VoiceRecorder() {
  const [recording, setRecording] = useState(false);
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [audioURL, setAudioURL] = useState(null);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const recorder = new MediaRecorder(stream);
        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setAudioChunks((chunks) => [...chunks, event.data]);
          }
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
          const url = URL.createObjectURL(audioBlob);
          setAudioURL(url);
        };

        setMediaRecorder(recorder);
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  }, [audioChunks]);

  const startRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.start();
      setRecording(true);
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
      sendAudioToAPI();
    }
  };

  const sendAudioToAPI = async (audioBlob) => {
    try {
      const formData = new FormData();
      const access_token = localStorage.getItem('access_token');
      formData.append('audio', audioBlob, 'recording.wav');
        console.log(access_token);
      const response = await fetch('http://192.168.29.239:5000/api/transcribe', {
        method: 'POST',
        headers :{
            Authorization : `Bearer ${access_token}`,
        },

        body: formData,
      });

      if (response.ok) {
        // Handle successful response from the API
        const data = await response.json();
        setAudioData(data);
        console.log('Audio sent successfully to the API',data);
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

  return (
    <div>
    <div className="flex flex-col gap-1">
    
  
    {audioURL && (
      <div>
        <audio controls src={audioURL}></audio>
      </div>
    )}
    <Wave audioURL={audioURL} />
  
    <div className="w-full flex justify-end items-end">
      <button className='bg-[#8167E6] text-white rounded-xl px-6 py-2' onClick={recording ? stopRecording : startRecording}>
      {recording ? 'Stop Recording' : 'Start Encounter'}
    </button>
    </div>
    </div>
  </div>
  );
}

export default VoiceRecorder;
