"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import img1 from "@/assets/gallery/Aarambh-2022-1.webp";
import img2 from "@/assets/gallery/Aarambh-2022-2.webp";
import img3 from "@/assets/gallery/Aarambh-2022-3.webp";
import img4 from "@/assets/gallery/Aarambh-2022-4.webp";
import img5 from "@/assets/gallery/Aarambh-2022-5.webp";
import img6 from "@/assets/gallery/Aarambh-2022-6.webp";
import img7 from "@/assets/gallery/Aarambh-2022-7.webp";
import img8 from "@/assets/gallery/Aarambh-2022-8.webp";
import img9 from "@/assets/gallery/JECRC Tech-A-Thon.webp";
import img10 from "@/assets/gallery/LNMIIT-Hackathon-1.webp";
import img11 from "@/assets/gallery/LNMIIT-Hackathon-2.webp";
import img12 from "@/assets/gallery/LNMIIT-Hackathon-3.webp";
import img13 from "@/assets/gallery/LNMIIT-Hackathon-4.webp";
import img14 from "@/assets/gallery/LNMIIT-Hackathon-5.webp";
import img15 from "@/assets/gallery/SnT-Lecture-Series-1.webp";
import img16 from "@/assets/gallery/SnT-Lecture-Series-2.webp";
import img17 from "@/assets/gallery/SnT-Lecture-Series-3.webp";
import img18 from "@/assets/gallery/SnT-Team-1.webp";
import img19 from "@/assets/gallery/SnT-Team-2.webp";
import img20 from "@/assets/gallery/SnT-Team-3.webp";
import img21 from "@/assets/gallery/Tech-Lounge-1.webp";
import img22 from "@/assets/gallery/Tech-Lounge-2.webp";
import img23 from "@/assets/gallery/Tech-Lounge-3.webp";

const images = [
  { images: img1, alt: "Aarambh 2022" },
  { images: img2, alt: "Aarambh 2022" },
  { images: img3, alt: "Aarambh 2022" },
  { images: img4, alt: "Aarambh 2022" },
  { images: img5, alt: "Aarambh 2022" },
  { images: img6, alt: "Aarambh 2022" },
  { images: img7, alt: "Aarambh 2022" },
  { images: img8, alt: "Aarambh 2022" },
  { images: img9, alt: "Aarambh 2022" },
  { images: img10, alt: "Aarambh 2022" },
  { images: img11, alt: "Aarambh 2022" },
  { images: img12, alt: "Aarambh 2022" },
  { images: img13, alt: "Aarambh 2022" },
  { images: img14, alt: "Aarambh 2022" },
  { images: img15, alt: "Aarambh 2022" },
  { images: img16, alt: "Aarambh 2022" },
  { images: img17, alt: "Aarambh 2022" },
  { images: img18, alt: "Aarambh 2022" },
  { images: img19, alt: "Aarambh 2022" },
  { images: img20, alt: "Aarambh 2022" },
  { images: img21, alt: "Aarambh 2022" },
  { images: img22, alt: "Aarambh 2022" },
  { images: img23, alt: "Aarambh 2022" },
];

function glimpsesSlider() {
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
    window.addEventListener("resize", updateSwriperSlides);
    return () => {
      window.removeEventListener("resize", updateSwriperSlides);
    };
  }, []);

  return (
    <div className="mb-[20px] lg:mb-0">
      <Swiper
        slidesPerView={swiperSlides}
        spaceBetween={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mt-[15px] flex justify-center"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className="w-full flex justify-center">
            <div className="w-full md:w-[300px] h-auto overflow-hidden rounded-[10px] mx-auto ">
              <Image
                src={image.images}
                alt={image.alt}
                className="w-full md:w-[300px] bg-cover bg-center rounded-[10px] aspect-video object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default glimpsesSlider
