import React from "react";
import Glimpses from "@/components/glimpses";
import { StaticImageData } from 'next/image';

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

const images: (StaticImageData | string)[] = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
];

const itemsPerSlide = [
  { screen: 'sm', items: 1 },
  { screen: 'md', items: 2 },
  { screen: 'lg', items: 3 },
  { screen: 'xl', items: 4 },
];

function section3() {
  return (
    <section className="h-fit p-4">
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-8">
            Glimpses
          </p>
          <p className="text-sm md:text-lg text-justify md:text-center">
            All the three teams work with the same motive to enhance technical
            skills and achieve the apogee of technological advancements.
          </p>
        </div>
        <div className="pt-4">
          <Glimpses images={images} itemsPerSlide={itemsPerSlide} />
        </div>
      </div>
    </section>
  );
}

export default section3;
