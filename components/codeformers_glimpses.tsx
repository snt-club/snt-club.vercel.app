'use client';

import React, { useEffect, useState } from 'react';
import Glimpses from  './glimpses';

import img5 from '@/assets/gallery/5.jpg';
import img6 from '@/assets/gallery/6.jpg';
import img7 from '@/assets/gallery/7.jpg';
import img8 from '@/assets/gallery/8.jpg';


const images = [
  { images: img5, alt: '1' },
  { images: img6, alt: '2' },


  { images: img8, alt: '4' },
  { images: img7, alt: '5' },

];

function codeformers_glimpses() {
  return(
    <Glimpses  images={images} />
  )

}

export default codeformers_glimpses;
