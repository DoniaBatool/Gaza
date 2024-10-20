"use client"
// app/gallery/page.tsx
import React, { useRef, useState } from 'react';
import Slider from '@/app/components/slider/slider';
const Audio = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Reference to the audio element
  const [isPlaying, setIsPlaying] = useState(true); // Track whether the audio is playing

  // Function to handle play/pause button click
  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying); // Toggle the playing state
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      {/* Audio element */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/gaza/slider/hazaSalam.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <Slider/>
      {/* Play and Pause buttons */}
      <div
        style={{
          position: 'fixed',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center', // Center the buttons horizontally
          zIndex: 1000, // Ensure the buttons are on top
        }}
      >
        {/* Play/Pause Button */}
        <button
          onClick={toggleAudio}
          style={{
            marginBottom: '100px',
            padding: '10px',
            background: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            width: '60px', // Adjust width for visibility
            height: '40px', // Adjust height for visibility
          }}
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default Audio;
