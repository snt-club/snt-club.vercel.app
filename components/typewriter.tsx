'use client';

import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  speed: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ texts, speed }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const text = texts[currentTextIndex];
    let currentIndex = 0;

    const intervalId = setInterval(() => {
      if (currentIndex <= text.length) {
        setCurrentText(text.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
        setTimeout(() => {
          setCurrentText('');
          setCurrentTextIndex((prevIndex) => (prevIndex === texts.length - 1 ? 0 : prevIndex + 1));
        }, speed);
      }
    }, speed);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentTextIndex, texts, speed]);

  return <span className="typewriter text-[#EE4B76]">{currentText}&nbsp;</span>;
};

export default Typewriter;
