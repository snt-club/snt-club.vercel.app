import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import asksnt from '@/assets/images/askSnt.jpg';

function askSnt() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1w3PqKD8Y6lwFd0w75l390jYUMMfyh5XS/view?usp=sharing"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/AHR29AEKUjLRTgex5" target="_blank">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] py-2 text-2xl font-bold text-yellow-400 lg:text-6xl">Ask S&T</p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={asksnt} alt="WebDev Session" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  As you begin this thrilling journey, we recognise you may have lots of questions - and we're proper
                  right here to answer them! Ask S&T is your chance to get all your doubts clarified in person. Whether
                  it's about technology, our club, or anything related to college life, we've got you covered!
                </p>
                <br />
                <p className="text-left">
                  Join us for: <br />
                    <b>Meet the Team </b>: Get to know the members of the S&T Club. <br />
                    <b>Explore Opportunities</b>: Learn about upcoming events and projects.    <br />
                    <b>Networking:</b> Connect with fellow freshers and seniors.   <br />
                    <b>Resource Sharing</b>: Discover useful resources and tips for your academic journey  <br />
                  <br />
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
                    <span className="text-[18px] font-semibold">18th September, 2024</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">01:45 PM - 03:45 PM</span>
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

export default askSnt;
