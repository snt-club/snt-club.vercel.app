import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import aarambhposter from '@/assets/images/AARAMBH_24_main_JC.png';

function aarambh24() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/10gwqAdkbDNKb_DE6zOqmjsu60OaP2ojj/view"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/1C5SjZwk3E16tzdy5" target='_blank'>
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">AARAMBH 2024</p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={aarambhposter} alt="Aarambh 2023" className="h-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                "In the realm of technology, the greatest impact comes from connecting people."
                </p>
                <br />
                <p>
                The Science and Technology Club is  excited to kick off the new sessional year with AARAMBH -
                 an introductory session for freshers! 🌟💻 
                </p>
                <br />
                <p>
                Join us as we explore the world of technology and innovation and seek the opportunities 
                </p>
                <br />
              </div>
            </div>
            <div className="mx-16 text-lg md:text-4xl">
              <div className="mx-auto w-fit text-left md:text-center">
                <div>
                  <p>
                    <b>Date:</b> 14th September 2024
                  </p>
                </div>
                <div>
                  <p>
                    <b>Time:</b> 1:30 PM onwards
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> JC Bose Auditorium
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-8 pt-4 text-center text-xs">
              <p>
                <b>Alpha &#40;1st Year Community&#41; WhatsApp Group:</b>{' '}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://chat.whatsapp.com/DgMDbnq3vlk6oscFdT23Ua"
                  target="_blank"
                >
                  Join Here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default aarambh24;
