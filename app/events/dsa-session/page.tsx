import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { dsa } from '@/assets';

function DSA_SESSION() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1dTZRsCOVyHm2ymLkjqDnEThisimh_lrA/view?usp=sharing"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/NWZ5Zrh2wTeTq9oL7" target="_blank">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] py-2 text-2xl font-bold text-yellow-400 lg:text-6xl">
            Introductory session on DSA
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={dsa} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  DSA is one of the crucial and highly demanded skills to test your knowledge on every industry
                  standards. Attend our session to get the proper understanding and
                </p>
                <br />
                <p className="text-left">
                  Join us for: <br />
                  • What is DSA and its importance 💻 <br />
                  • DSA Basics and Fundamentals 🧑‍💻 <br />
                  • Role of DSA in Placement 📙 <br />
                  • DSA best practices 📚
                  <br />• How to master at DSA 🧑‍💻
                </p>
                <br />
              </div>
            </div>
            <div className="mx-16 flex">
              <div className="">
                <div>
                  <div className="text-[14px] text-gray-500">
                    <span>Date</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">03rd April, 2024</span>
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
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Registration Link</span>
                  </div>
                  <div>
                    <Link
                      href="https://forms.gle/NWZ5Zrh2wTeTq9oL7"
                      target="_blank"
                      className="text-[18px] font-semibold underline underline-offset-2"
                    >
                      Click Here
                    </Link>
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

export default DSA_SESSION;
