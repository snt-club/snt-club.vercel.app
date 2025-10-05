'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import instagram from '@/assets/svg/in.svg';
import linkedin from '@/assets/svg/li.svg';

import { sntTeamMember } from '@/teamConstants';


const coreteamslider = () => {
  const [swiperSlides, setSwiperSlides] = useState(1);

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
    <>
      <div className="max-w-screen overflow-hidden">
        <Swiper
          slidesPerView={swiperSlides}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="z-10 mt-[15px] flex justify-center"
        >
          {/* {studenthead.map((coordinator, index) => (
          
        ))} */}
          {sntTeamMember.filter(member => member.memberPost === 'Student_Head')
                        .map((memberDetails, index) => (
            <>
                <SwiperSlide key={index}>
                  <div className="py-[20px]">
                    <div className="flex justify-center">
                      <Image
                        src={memberDetails.memberPhoto}
                        alt={index.toString()}
                        width={120}
                        className="rounded-full"
                      />
                    </div>
                    <div className="mt-[10px] text-center">
                      <span className="text-base font-bold md:text-xl">{memberDetails.memberName}</span>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <span>{memberDetails.memberYear},</span>
                      </div>
                      <div>
                        <span>&nbsp;{memberDetails.memberBranch}</span>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <div>
                        <span>{memberDetails.memberRole}</span>
                      </div>
                    </div>
                    <div className="mt-[10px] flex justify-center gap-5">
                      <div>
                        <Link href={memberDetails.memberInsta} target="_blank">
                          <Image src={instagram} alt="Instagram" width={30} className="duration-150 hover:scale-110" />
                        </Link>
                      </div>
                      <div>
                        <Link href={memberDetails.memberLinkedin} target="_blank">
                          <Image src={linkedin} alt="LinkedIn" width={30} className="duration-150 hover:scale-110" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
            </>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default coreteamslider;
