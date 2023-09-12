"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import shreyansh from "@/assets/people/shreyansh.png";
import chinkle from "@/assets/people/chinkle.png";
import vanshaj from "@/assets/people/vanshaj.png";
import somya from "@/assets/people/somya.png";
import unique from "@/assets/people/unique.png";
import shailesh from "@/assets/people/shailesh.png";
import parth from "@/assets/people/parth.png";
import simran from "@/assets/people/simran.png";
import laveena from "@/assets/people/laveena.png";
import instagram from "@/assets/svg/in.svg";
import linkedin from "@/assets/svg/li.svg";

const studentcoordinator = [
  {
    name: "Shreyansh Agrawal",
    profile_pic: shreyansh,
    year: "III yr",
    branch: "CSE",
    instagram_link: "https://www.instagram.com/sh_reyan_sh_/",
    linkedin_link: "https://www.linkedin.com/in/shreyansh-agarwal-1060a4222/",
  },
  {
    name: "Chinkle Rathore",
    profile_pic: chinkle,
    year: "III yr",
    branch: "CSE",
    role: "Development Head",
    instagram_link: "https://www.instagram.com/chinklerathore11/?igshid=MzRlODBiNWFlZA%3D%3D",
    linkedin_link: "https://www.linkedin.com/in/chinkle-rathore-7a5519252/",
  },
];

const studenthead = [
  {
    name: "Vanshaj Kataria",
    profile_pic: vanshaj,
    year: "III yr",
    branch: "ECE",
    role: "Development Head",
    instagram_link: "https://www.instagram.com/vanshaj_kataria/",
    linkedin_link: "https://www.linkedin.com/in/vanshaj-kataria-3730731b2/",
  },
  {
    name: "Somya Jain",
    profile_pic: somya,
    year: "III yr",
    branch: "ECE",
    role: "Management Head",
    instagram_link: "",
    linkedin_link: "",
  },
  {
    name: "Unique Paliwal",
    profile_pic: unique,
    year: "III yr",
    branch: "CSE",
    role: "Tutor Head",
    instagram_link: "",
    linkedin_link: "",
  },
  {
    name: "Shailesh Purohit",
    profile_pic: shailesh,
    year: "III yr",
    branch: "ECE",
    role: "Content Head",
    instagram_link: "",
    linkedin_link: "",
  },
  {
    name: "Parth Jain",
    profile_pic: parth,
    year: "III yr",
    branch: "ECE",
    role: "Design Head",
    instagram_link: "",
    linkedin_link: "",
  },
  {
    name: "Simran Rawat",
    profile_pic: simran,
    year: "III yr",
    branch: "ECE",
    role: "Social Media/PR Head",
    instagram_link: "",
    linkedin_link: "",
  },
  {
    name: "Laveena Goyal",
    profile_pic: laveena,
    year: "III yr",
    branch: "ECE",
    role: "Technical Head",
    instagram_link: "",
    linkedin_link: "",
  },
];

function coreTeam() {
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
    window.addEventListener("resize", updateSwriperSlides);
    return () => {
      window.removeEventListener("resize", updateSwriperSlides);
    };
  }, []);

  return (
    <>
      {/* Student Coordinator */}
      <div className="text-center text-[#0A146E]">
        <span className="text-2xl md:text-4xl font-extrabold">
          Student Coordinators
        </span>
      </div>
      <div className="block md:flex justify-evenly mt-[50px] text-[#0A146E]">
        {studentcoordinator.map((coordinator, index) => (
          <div key={index} className="mb-[20px] md:mb-0">
            <div className="flex justify-center">
              <Image
                src={coordinator.profile_pic}
                alt={coordinator.name}
                width={150}
                className="rounded-full"
              />
            </div>
            <div className="mt-[10px] text-center">
              <span className="text-2xl font-bold">{coordinator.name}</span>
            </div>
            <div className="flex justify-center">
              <div>
                <span>{coordinator.year},</span>
              </div>
              <div>
                <span>&nbsp;{coordinator.branch}</span>
              </div>
            </div>
            <div className="flex justify-center gap-5 mt-[10px]">
              <div>
                <Link href={coordinator.instagram_link} target="_blank">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={30}
                    className="hover:scale-110 duration-150"
                  />
                </Link>
              </div>
              <div>
                <Link href={coordinator.linkedin_link} target="_blank">
                  <Image
                    src={linkedin}
                    alt="LinkedIn"
                    width={30}
                    className="hover:scale-110 duration-150"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Core Team */}
      <div className="text-center text-[#0A146E] mt-[50px]">
        <span className="text-2xl md:text-4xl font-extrabold">
          Student Heads
        </span>
      </div>

      <div className="flex justify-evenly  text-[#0A146E] p-8">
        <Swiper
          slidesPerView={swiperSlides}
          spaceBetween={50}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="mt-[15px] flex justify-center z-10"
        >
          {studenthead.map((coordinator, index) => (
            <SwiperSlide key={index}>
              <div>
                <div className="flex justify-center">
                  <Image
                    src={coordinator.profile_pic}
                    alt={coordinator.name}
                    width={120}
                    className="rounded-full"
                  />
                </div>
                <div className="mt-[10px] text-center">
                  <span className="text-2xl font-bold">
                    {coordinator.name}
                  </span>
                </div>
                <div className="flex justify-center">
                  <div>
                    <span>{coordinator.year},</span>
                  </div>
                  <div>
                    <span>&nbsp;{coordinator.branch}</span>
                  </div>
                </div>
                <div className="flex justify-center gap-5 mt-[10px]">
                  <div>
                    <Link href={coordinator.instagram_link} target="_blank">
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 duration-150"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link href={coordinator.linkedin_link} target="_blank">
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 duration-150"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default coreTeam;
