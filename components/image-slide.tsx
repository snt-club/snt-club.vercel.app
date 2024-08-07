import React from 'react';
import { StaticImageData } from 'next/image';
import Image from 'next/image';

interface ImageSlideProps {
  imageUrls: (StaticImageData | string)[];
  fullScreen: boolean;
}

const ImageSlide: React.FC<ImageSlideProps> = ({ imageUrls, fullScreen }) => {
  return (
    <div className={`flex justify-center space-x-4 ${fullScreen ? 'flex-col' : ''}`}>
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className={`flex-shrink-0 ${fullScreen ? 'w-full' : 'w-1/4'}`}>
          {typeof imageUrl === 'string' ? (
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className={`aspect-video h-auto w-full rounded object-cover`}
            />
          ) : (
            <Image
              src={imageUrl}
              alt={`Slide ${index + 1}`}
              className={`aspect-video h-auto w-full rounded object-cover`}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageSlide;
