import React, { useState } from 'react';
import { ReactMic } from 'react-mic';

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState('');

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
      const access_token = localStorage.getItem('access_token');
      formData.append('audio', audioBlob, 'recording.wav');
        console.log(access_token);
      const response = await fetch('https://scribe-assist.onrender.com/api/transcribe', {
        method: 'POST',
        headers :{
            Authorization : `Bearer ${access_token}`,
        },

        body: formData,
      });

      if (response.ok) {
        // Handle successful response from the API
        const data = await response.json();

        console.log('Audio sent successfully to the API',data);
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
      <h1>Voice Recorder</h1>
      <button className='bg-violet-600 text-white rounded-xl px-6 py-2' onClick={isRecording ? handleStopRecording : handleStartRecording}>
        {isRecording ? 'Stop Recording' : 'Start Encounter'}
      </button>
      {audioURL && (
        <div>
          <audio controls src={audioURL}></audio>
        </div>
      )}
      <ReactMic
        record={isRecording}
        className="sound-wave"
        onStop={onStop}
        onData={onData}
        mimeType="audio/wav"
      />
    </div>
  );
};

export default VoiceRecorder;
