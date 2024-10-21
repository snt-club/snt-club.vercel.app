'use client';

import React, { useEffect, useState } from 'react';
import Glimpses from  './glimpses';

import img1 from '@/assets/gallery/1.jpg';
import img2 from '@/assets/gallery/2.jpg';
import img4 from '@/assets/gallery/3.jpg';
import img5 from '@/assets/gallery/Aarambh-2022-5.webp';
import img6 from '@/assets/gallery/3.jpg';
import img7 from '@/assets/gallery/4.jpg';
import img8 from '@/assets/gallery/Aarambh-2022-8.webp';


const images = [
  { images: img1, alt: '1' },
  { images: img2, alt: '2' },

  { images: img6, alt: '3' },
  { images: img4, alt: '4' },
  { images: img7, alt: '5' },

];

function codeformers_glimpses() {
  return(
    <Glimpses  images={images} />
  )

}

export default codeformers_glimpses;
