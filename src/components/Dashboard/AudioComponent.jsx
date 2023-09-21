'use client'
import { useReactMediaRecorder } from "react-media-recorder";
import React, { useEffect, useState } from "react";
import Wave from './Wave'
import { BASE_URL } from '@/constant';
import getToken from '@/hook/getToken'

const RecordView = ({ sendAudioToAPI }) => {
  const [second, setSecond] = useState("00");
  const [minute, setMinute] = useState("00");
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(false)
  const [isStartClicked, setIsStartClicked] = useState(false)
  useEffect(() => {
    let intervalId;

    if (isActive) {
      intervalId = setInterval(() => {
        const secondCounter = counter % 60;
        const minuteCounter = Math.floor(counter / 60);

        let computedSecond =
          String(secondCounter).length === 1
            ? `0${secondCounter}`
            : secondCounter;
        let computedMinute =
          String(minuteCounter).length === 1
            ? `0${minuteCounter}`
            : minuteCounter;

        setSecond(computedSecond);
        setMinute(computedMinute);

        setCounter((counter) => counter + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isActive, counter]);

  const {
    status,
    startRecording,
    stopRecording,
    pauseRecording,

    mediaBlobUrl
  } = useReactMediaRecorder({
    video: false,
    audio: true,
    echoCancellation: true
  });


  const urlToBlob = async (url) => {
    const response = await fetch(url);
    return await response.blob();
  };
  useEffect(() => {
    if (mediaBlobUrl) {
      setTimeout(async () => {
        const audioBlob = await urlToBlob(mediaBlobUrl);
        sendAudioToAPI(audioBlob);
      }, 1000);
    }

  }, [mediaBlobUrl])



  const handleRecordingStart = () => {
    setIsStartClicked(true)
    startRecording();
    setIsActive(true);
  }
  const handleRecordingStop = () => {
    setCounter(0);
    setSecond("00");
    setMinute("00");
    stopRecording();
    setIsActive(false)
    setIsStartClicked(false)
  }

  return (
    <div className="w-full"
      style={{

        height: "230px"
      }}
    >
      <div
        style={{
          height: "30px",
          display: "flex"
        }}
      >

      </div>

      <Wave audioURL={mediaBlobUrl} />
      <div
        className="flex justify-between"
        style={{

          color: "white",

        }}
      >

        <div style={{ marginTop: "35px", fontSize: "14px" }}>
          <span className="minute">{minute}</span>
          <span>:</span>
          <span className="second">{second}</span>
        </div>

        <div style={{ marginLeft: "20px", display: "flex" }}>
          <label
            style={{
              fontSize: "15px",
              fontWeight: "Normal"
              // marginTop: "20px"
            }}
            htmlFor="icon-button-file"
          >


            <div className="flex justify-center items-center">
              {
                !isStartClicked &&
                <button
                  style={{
                    padding: "0.8rem 1rem",
                    border: "none",
                    marginLeft: "15px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    borderRadius: "20px",
                    fontWeight: "normal",
                    backgroundColor: "#8167E6",
                    color: "white",
                    transition: "all 300ms ease-in-out",
                    transform: "translateY(0)"
                  }}
                  onClick={() => handleRecordingStart()}
                >
                  Start Encounter
                </button>
              }

              {
                isStartClicked &&
                <button
                  onClick={() => {
                    pauseRecording()
                    setIsActive((preValue) => !preValue)
                  }}
                  className="p-2 bg-white rounded-[5px]">
                  {
                    isActive ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-black font-bold">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg> :
                      <svg xmlns="http://www.w3.org/2000/svg" fill="#8167e6" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-violet-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                      </svg>

                  }


                </button>
              }
              {
                isStartClicked &&
                <button
                  className="p-2 bg-white"
                  style={{

                    border: "none",
                    marginLeft: "15px",
                    fontSize: "1rem",
                    cursor: "pointer",
                    color: "white",
                    borderRadius: "5px",
                    fontWeight: "bold",
                    transition: "all 300ms ease-in-out",
                    transform: "translateY(0)"
                  }}
                  onClick={async () => {
                    handleRecordingStop()
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 bg-white rounded">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                  </svg>

                </button>
              }

            </div>
          </label>
        </div>

      </div >
    </div >
  );
};
export default RecordView;