import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';

export default function Wave({audioURL}) {
    const wavesurferRef = useRef(null);

    useEffect(() => {
        const wavesurfer = WaveSurfer.create({
            container: wavesurferRef.current,
            waveColor: 'rgb(255, 255, 255)', // or simply 'white'
            progressColor: 'rgb(255, 255, 255)',
            url: audioURL,
            barWidth: 3,
            barGap: 6,
            barRadius: 2,
        });

        wavesurfer.once('interaction', () => {
            wavesurfer.play();
        });

        return () => {
            // Cleanup when the component unmounts
            wavesurfer.destroy();
        };
    }, [audioURL]);

    return <div ref={wavesurferRef}></div>;
}