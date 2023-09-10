"use client";

import React, { useState } from "react";
import ImageSlide from "./image-slide";
import { StaticImageData } from "next/image";

interface ImageSliderProps {
  images: (StaticImageData | string)[];
  itemsPerSlide: { screen: string; items: number }[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images, itemsPerSlide }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getWindowSize = () => {
    const width = window.innerWidth;
    if (width < 640) {
      return 'sm';
    } else if (width < 768) {
      return 'md';
    } else if (width < 1024) {
      return 'lg';
    } else {
      return 'xl';
    }
  };

  const getCurrentItemsPerSlide = () => {
    const screenSize = getWindowSize();
    const selectedItem = itemsPerSlide.find((item) => item.screen === screenSize);
    return selectedItem ? selectedItem.items : 4;
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
        <ImageSlide imageUrls={currentImages} fullScreen={getWindowSize() === 'sm'} />
      </div>
      <button
        className="absolute left-0 top-1/2 text-white px-2 py-1 rounded-full"
        onClick={prevSlide}
      >
        <span className="material-icons">arrow_back_ios</span>
      </button>
      <button
        className="absolute right-0 top-1/2  text-white px-2 py-1 rounded-full"
        onClick={nextSlide}
      >
        <span className="material-icons">arrow_forward_ios</span>
      </button>
    </div>
  );
};

export default ImageSlider;
