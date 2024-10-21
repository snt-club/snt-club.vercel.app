'use client';

import React, { useEffect, useState } from 'react';
import Glimpses from  './glimpses';

import img1 from '@/assets/gallery/Aarambh-2022-1.webp';
import img2 from '@/assets/gallery/Aarambh-2022-2.webp';
import img4 from '@/assets/gallery/Aarambh-2022-4.webp';
import img5 from '@/assets/gallery/Aarambh-2022-5.webp';
import img6 from '@/assets/gallery/Aarambh-2022-6.webp';
import img7 from '@/assets/gallery/Aarambh-2022-7.webp';
import img8 from '@/assets/gallery/Aarambh-2022-8.webp';
import img9 from '@/assets/gallery/JECRC Tech-A-Thon.webp';
import img11 from '@/assets/gallery/LNMIIT-Hackathon-2.webp';
import img13 from '@/assets/gallery/LNMIIT-Hackathon-4.webp';
import img15 from '@/assets/gallery/SnT-Lecture-Series-1.webp';
import img17 from '@/assets/gallery/SnT-Lecture-Series-3.webp';
import img20 from '@/assets/gallery/SnT-Team-3.webp';
import img21 from '@/assets/gallery/Tech-Lounge-1.webp';
import img22 from '@/assets/gallery/Tech-Lounge-2.webp';
import img23 from '@/assets/gallery/Tech-Lounge-3.webp';

const images = [
  { images: img1, alt: 'Aarambh 2022' },
  { images: img2, alt: 'Aarambh 2022' },
  { images: img15, alt: 'Aarambh 2022' },
  { images: img6, alt: 'Aarambh 2022' },
  { images: img4, alt: 'Aarambh 2022' },
  { images: img7, alt: 'Aarambh 2022' },
  { images: img9, alt: 'Aarambh 2022' },
  { images: img11, alt: 'Aarambh 2022' },
  { images: img17, alt: 'Aarambh 2022' },
  { images: img5, alt: 'Aarambh 2022' },
  { images: img22, alt: 'Aarambh 2022' },
  { images: img8, alt: 'Aarambh 2022' },
  { images: img20, alt: 'Aarambh 2022' },
  { images: img13, alt: 'Aarambh 2022' },
  { images: img23, alt: 'Aarambh 2022' },
  { images: img21, alt: 'Aarambh 2022' },
];

function glimpsesSlider() {
  return(
    <Glimpses  images={images} />
  )

}

export default glimpsesSlider;
