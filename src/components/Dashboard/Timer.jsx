import React, { Component } from 'react';

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            totalSeconds: 0,
            isRunning: false,
            audioRecording: null,
        };

        this.timerInterval = null;
        this.audioContext = null;
        this.audioRecorder = null;
    }

    componentDidMount() {
        // Initialize the audio context and recorder when the component mounts
        this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }

    startTimer = () => {
        if (!this.state.isRunning) {
            // Start the timer interval
            this.timerInterval = setInterval(() => {
                this.setState((prevState) => ({
                    totalSeconds: prevState.totalSeconds + 1,
                }));
            }, 1000);

            // Start audio recording
            this.audioContext.resume().then(() => {
                this.audioContext.createMediaStreamDestination().stream.getTracks()[0].addEventListener('ended', () => {
                    this.stopTimer();
                });

                navigator.mediaDevices
                    .getUserMedia({ audio: true })
                    .then((stream) => {
                        this.audioRecorder = new MediaRecorder(stream);

                        this.audioRecorder.ondataavailable = (event) => {
                            if (event.data.size > 0) {
                                this.setState({ audioRecording: event.data });
                            }
                        };

                        this.audioRecorder.start();
                    })
                    .catch((error) => {
                        console.error('Error accessing microphone:', error);
                    });
            });

            this.setState({ isRunning: true });
        }
    };

    stopTimer = () => {
        clearInterval(this.timerInterval);

        if (this.audioRecorder && this.audioRecorder.state === 'recording') {
            this.audioRecorder.stop();
        }

        this.setState({ isRunning: false });
    };

    resetTimer = () => {
        clearInterval(this.timerInterval);

        if (this.audioRecorder && this.audioRecorder.state === 'recording') {
            this.audioRecorder.stop();
        }

        this.setState({ totalSeconds: 0, isRunning: false, audioRecording: null });
    };

    formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    render() {
        const { totalSeconds, isRunning, audioRecording } = this.state;

        return (
            <div className="w-full">
                <div className="flex flex-row justify-between items-center">
                    <h1 className="text-sm space-x-4 text-white font-bold ">{this.formatTime(totalSeconds)}</h1>
                    <div className="flex space-x-4">
                        <button
                            className={`bg-white text-black py-2 px-2 rounded ${isRunning ? 'opacity-50 cursor-not-allowed' : ''}`}
                            onClick={isRunning ? this.stopTimer : this.startTimer}
                            disabled={false}
                        >
                            {isRunning ? (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                                </svg>
                            )}
                        </button>

                        <button
                            className="bg-white text-white py-2 px-2 rounded"
                            onClick={this.resetTimer}
                            disabled={!isRunning}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                            </svg>
                        </button>
                    </div>
                </div>
                {audioRecording && (
                    <audio controls>
                        <source src={URL.createObjectURL(audioRecording)} />
                    </audio>
                )}
            </div>
        );
    }
}

export default Timer;
