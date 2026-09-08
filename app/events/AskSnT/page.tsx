'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
// import Image from 'next/image';
// import asksnt from '@/assets/images/asksnt.jpg'; // uncomment when image is ready

import EventFormSwitcher from '@/components/EventFormSwitcher';

function AskSnTPage() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link href="#" target="_blank">
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <a href="#register">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </header>

      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">Ask S&amp;T</p>
        </div>

        <div className="block md:flex">
          {/* Image — replace div with <Image> when image is ready */}
          <div className="mx-16 pb-8">
            <div className="flex h-64 w-64 items-center justify-center rounded-xl border-2 border-dashed border-[#0A146E]/30 bg-[#0A146E]/5 md:h-72 md:w-72">
              <div className="text-center text-[#0A146E]/40">
                <p className="text-5xl">📸</p>
                <p className="mt-2 text-sm font-medium">Image coming soon</p>
              </div>
            </div>
          </div>

          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>Ask S&amp;T, our open Q&amp;A session! Bring your questions and get answers from experienced club members.</p>
                <br />
                <p className="text-left md:text-center">
                  Join us for: <br />
                  • Live Q&amp;A with club members 💬 <br />
                  • Technical &amp; non-technical discussions 💻 <br />
                  • Career &amp; project guidance 🚀 <br />
                  • Open doubt-solving sessions 📚
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
                    <span className="text-[18px] font-semibold">To be declared</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">To be declared</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">To be declared</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="register" className="mx-16 mt-8">
          <Suspense fallback={<div className="py-8 text-center">Loading form...</div>}>
            <EventFormSwitcher event="AskSnT" title="Ask S&T" />
          </Suspense>
        </div>
      </div>
    </>
  );
}

export default AskSnTPage;
