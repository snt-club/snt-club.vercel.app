'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



function glimpses({ images }: { images: any[] }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [swiperSlides, setSwiperSlides] = useState(1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const updateSwriperSlides = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSwiperSlides(4); // Desktop
      } else if (screenWidth >= 992) {
        setSwiperSlides(3); // Desktop-Small
      } else if (screenWidth >= 768) {
        setSwiperSlides(2); // Tablet
      } else {
        setSwiperSlides(1); // Mobile
      }
    };
    updateSwriperSlides();
    window.addEventListener('resize', updateSwriperSlides);
    return () => {
      window.removeEventListener('resize', updateSwriperSlides);
    };
  }, []);

  return (
    <div className="mx-4 mb-[20px] lg:mx-8 lg:mb-0">
      <Swiper
        slidesPerView={swiperSlides}
        spaceBetween={50}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        // navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mt-[15px]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="mx-auto h-auto w-full overflow-hidden rounded-[10px] lg:w-[300px]">
              <Image
                src={image.images}
                alt={image.alt}
                className="aspect-video w-full rounded-[10px] bg-cover bg-center object-cover lg:w-[300px]"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default glimpses;
