"use client"
import React, { useState,useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Image from 'next/image';
import Link from 'next/link'

import cbootcamp from '@/assets/images/CBOOTCAMP2024.png';
import close_button from '@/assets/svg/close_button.svg';


const AarambhModal = () => {
  const [open, setOpen] = useState(true);

  const onCloseModal = () => setOpen(false);
  const [width, setWidth] = useState('90%'); 

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth > 768 ? '350px' : '90%');
    };

    updateWidth();

    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);


  return (
      <Modal closeIcon={<Image className='hover:scale-125 duration-300' src={close_button} alt='Close' width={20} />} open={open} onClose={onCloseModal} center styles={{modal: {width: width,backgroundColor:'transparent'}}}>
        <div className='flex flex-wrap justify-center'>
            <Image src={cbootcamp} alt="Aarambh Poster" className='w-fit h-fit md:w-3/2'/>
            <Link href="/events/cbootcamp24" className='text-sm md:text-lg text-white mt-3 bg-[#EE4B76] p-2 px-5 rounded-lg outline-none hover:bg-transparent hover:text-[#EE4B76] border-2 border-[#EE4B76] duration-300 ease-in-out'>Register Now</Link> 
        </div>
      </Modal>
  );
};

export default AarambhModal;
