import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import flutterworkshopposter from '@/assets/images/flutterworkshopposter.webp';

function FLUTTERWORKSHOP() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1oyv4XthxUrS0X8FMbnFJav6hbaUN1l17/view?usp=share_link"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/HS7EDai2LxHPd2pKA" target="_blank">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">Flutter Workshop</p>
        </div>
        <div className="block pt-4 md:flex">
          <div className="mx-16 pb-8">
            <Image src={flutterworkshopposter} alt="Flutter Workshop" className="h-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  We are conducting an offline session on the topic Flutter.
                  <br />
                  <br />
                  In this session, you'll learn Dart programming while building a Calculator app. No prior knowledge is
                  required, making it perfect also for beginners. You also can choose between Visual Studio Code and
                  Android Studio as your development environment.
                  <br />
                  <br />
                  By the end of the session, you'll have a fully functional Calculator app of your own. Don't forget to
                  bring your laptops. Make sure to download and Install Flutter on your systems. We're here to assist
                  with any questions or installation hiccups.
                </p>
                <br />
                <p className="text-left">
                  Flutter Installation Process -{' '}
                  <Link className="text-blue-600 underline" href={'https://youtu.be/BqHOtlh3Dd4?si=U7A8LlTY8GjXnSa6'}>
                    https://youtu.be/BqHOtlh3Dd4?si=U7A8LlTY8GjXnSa6
                  </Link>
                </p>
                <br />
              </div>
            </div>
            <div className="mx-16 text-lg md:text-4xl">
              <div className="mx-auto w-fit text-left md:text-center">
                <div>
                  <p>
                    <b>Date:</b> 25 October, 2023
                  </p>
                </div>
                <div>
                  <p>
                    <b>Online:</b> 1:30PM to 3:30PM
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> 4F4 Civil Block
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FLUTTERWORKSHOP;
