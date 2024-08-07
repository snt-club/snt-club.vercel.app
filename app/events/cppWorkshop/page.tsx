import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cppWorkshop from '@/assets/images/cppWorkshop.png';

function CPP_WORKSHOP() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1_hzpNWS9I5e-NocnqJltcjEFlw13Iu-9/view?usp=drive_link"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/omLXWvDMZMTiVNi38" target="_blank">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">C++ Workshop</p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={cppWorkshop} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>C++ language is the foundation of development, and we're here to strengthen your skills.</p>
                <br />
                <p className="text-left md:text-center">
                  Join us for: <br />
                  • Offline workshop 💻 <br />
                  • Fun problem-solving activities 🧑‍💻 <br />
                  • Engaging assignments 📙 <br />• Helpful doubt-solving sessions 📚
                </p>
                <br />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div>
                  <div className="text-[14px] text-gray-500">
                    <span>Date</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">28th February, 2024</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">01:30 PM - 03:30 PM</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">4F4, Civil Block</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPP_WORKSHOP;
