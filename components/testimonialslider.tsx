'use client';

import React, { useEffect, useState } from 'react';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const testimonial = [
  {
    message: 'All members of snt club increase our courage and support us in every queries.',
  },
  {
    message:
      "It's been a journey of 8 months with this club. I was introduced to so manythings for the first time here in this community. I have received constant support and motivation from all the coordinators and team members.",
  },
  {
    message: 'All in all it was a great experience to be part of the SNT Club.',
  },
  {
    message:
      'It was a wonderful experience with all the Coordinators and Members of S&T Club. We got to know and learn many new Technologies and because of the proper guidance and overall support of coordinators this Club is Growing.',
  },
  {
    message:
      'The sessions and bootcamps conducted by Snt club is very informative and helped me to develop my skills. I would like to thank all the working team for such amazing bootcamps.',
  },
  {
    message:
      'My experience till now in the club was awesome. Hope we would be doing such wonderful sessions in coming days.',
  },
  {
    message:
      'All the classes taken were very nice..... And every event is very well managed and amazing. Thank you SnT club.',
  },
  {
    message: 'All sessions were good and eager to earn more knowledge from the club.',
  },
  {
    message:
      "Thank you for taking extra effort to make sure the entire club was on the same page. It would have been easy for important details to slip through the cracks, but thanks to you, that didn't happen.",
  },
];

function testimonialslider() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [swiperSlides, setSwiperSlides] = useState(1);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const updateSwriperSlides = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth >= 1200) {
        setSwiperSlides(3); // Desktop
      } else if (screenWidth >= 992) {
        setSwiperSlides(2); // Desktop-Small
      } else if (screenWidth >= 768) {
        setSwiperSlides(1); // Tablet
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
    <div>
      <div className="mx-[10px] md:mx-[40px]">
        <div className="mb-[20px] lg:mb-0">
          <Swiper
            slidesPerView={swiperSlides}
            spaceBetween={50}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            className="z-10 mt-[15px] flex justify-center"
          >
            {testimonial.map((message, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center rounded-[10px] bg-[#0A146E] p-4 text-center text-white md:p-8">
                  <div>
                    <div>
                      <span className="text-5xl font-extrabold">{'"'}</span>
                    </div>
                    <div className="h-[180px] w-full md:h-[160px]">
                      <span className="text-sm md:text-base">{message.message}</span>
                    </div>
                    <div>
                      <span className="text-5xl font-extrabold">{'"'}</span>
                    </div>
                    <div>
                      <span>⭐⭐⭐⭐⭐</span>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default testimonialslider;
