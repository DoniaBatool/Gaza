// components/Slider.tsx
"use client"

// components/Slider.tsx
import React, { useState, useEffect } from 'react';
import styles from './slider.module.css';
import Image from 'next/image';


const slides = [
  '/gaza/slider/hd1.webp', // Replace with your image paths
  '/gaza/slider/hd2.webp',
  '/gaza/slider/hd3.webp',
  '/gaza/slider/hd4.webp',
  '/gaza/slider/hd5.webp',
  '/gaza/slider/hd6.webp',
  '/gaza/slider/hd7.webp',
  '/gaza/slider/hd8.webp',
  '/gaza/slider/hd9.webp',
  '/gaza/slider/hd10.webp',
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animate, setAnimate] = useState(false);

  const nextSlide = () => {
    setAnimate(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setAnimate(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <main>
      
      <Image className={styles.slideHead}
      src="/gaza/slideHead.jpg"
      alt=""
      width={1400}
      height={100}
      />
    <div className={styles.sliderContainer}>
      <div className={styles.slides}>
        <button className={styles.prevButton} onClick={prevSlide}>
          &#10094;
        </button>
        <div
          className={`${styles.slide} ${animate ? styles.fade : ''}`}
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          onAnimationEnd={() => setAnimate(false)} // Reset animation class after it ends
        />
        <button className={styles.nextButton} onClick={nextSlide}>
          &#10095;
        </button>
      </div>
      
      <div className={styles.thumbnails}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${styles.thumbnail} ${currentIndex === index ? styles.activeThumbnail : ''}`}
            style={{ backgroundImage: `url(${slide})` }}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
    
    </main>
  );
};

export default Slider;
