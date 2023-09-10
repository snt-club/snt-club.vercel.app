"use client";

import React, { useState, useEffect } from "react";
import ImageSlide from "./image-slide";
import { StaticImageData } from "next/image";

interface ImageSliderProps {
  images: (StaticImageData | string)[];
  itemsPerSlide: { screen: string; items: number }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, itemsPerSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowSize, setWindowSize] = useState('');

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 640) {
        setWindowSize('sm');
      } else if (width < 768) {
        setWindowSize('md');
      } else if (width < 1024) {
        setWindowSize('lg');
      } else {
        setWindowSize('xl');
      }
    }

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial call to handleResize to set the initial window size
    handleResize();

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const getCurrentItemsPerSlide = () => {
    const selectedItem = itemsPerSlide.find((item) => item.screen === windowSize);
    return selectedItem ? selectedItem.items : 4; // Default to 4 items per slide if not specified
  };


  const totalSlides = Math.ceil(images.length / getCurrentItemsPerSlide());

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const currentItemsPerSlide = getCurrentItemsPerSlide();
  const currentImages = images.slice(
    currentIndex * currentItemsPerSlide,
    (currentIndex + 1) * currentItemsPerSlide
  );

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <ImageSlide imageUrls={currentImages} fullScreen={windowSize === 'sm'} />
      </div>
      <button
        className="absolute left-0 top-0 text-white bg-black bg-opacity-50 p-2 h-full"
        onClick={prevSlide}
      >
        <span className="material-icons">arrow_back_ios</span>
      </button>
      <button
        className="absolute left-0 top-0 text-white bg-black bg-opacity-50 p-2 h-full"
        onClick={nextSlide}
      >
        <span className="material-icons">arrow_forward_ios</span>
      </button>
    </div>
  );
};

export default ImageSlider;
