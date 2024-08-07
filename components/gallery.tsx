'use client';

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const slides = [];
  for (let i = 0; i < images.length; i += 4) {
    const slideImages = images.slice(i, i + 4);

    slides.push(
      <div key={i} className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {slideImages.map((image, index) => (
          <div key={index} className="relative aspect-video">
            <Image src={image} alt={`Image ${i + index + 1}`} fill className="object-fit h-fit" />
          </div>
        ))}
      </div>,
    );
  }
  return (
    <div className="mx-auto max-w-screen-lg">
      <Carousel showThumbs={false} showStatus={false} infiniteLoop={true} autoPlay={true}>
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} alt={`Image ${index + 1}`} width={800} height={500} className="object-cover" />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageGallery;
