import React, { useState, useEffect } from 'react';
import './HeroStyles.css';

import gif from '../../assets/Pixel Art GIF.gif';

function Hero() {
  const phrases = [
    "Muhammad Ihsan",
    "23 years old",
    "Experience as Mobile and Web developer"
  ];

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentPhraseIndex((prevIndex) =>
          prevIndex === phrases.length - 1 ? 0 : prevIndex + 1
        );
        setIsAnimating(false);
      }, 500);
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(interval);
  }, [phrases.length]);

  return (
    <div className='hero'>
      <img src={gif} alt='Animated Background' className='background-gif' />
      <div className="overlay">
        <div className="content">
          <h1 className={`animated-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            {phrases[currentPhraseIndex]}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;