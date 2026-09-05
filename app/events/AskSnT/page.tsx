'use client';
import React, { Suspense } from 'react';
import Image from 'next/image';

import { flutterworkshop_img } from '@/assets/index';
import EventFormSwitcher from '@/components/EventFormSwitcher';

function AskSnTPage() {

  return (
    <section className="container mx-auto py-10" id="aarambh">
      <div className="mx-8 mt-6 text-[#0A146E] lg:mx-12">
        {/* HERO */}
        <div className="grid grid-cols-12 items-center gap-6 rounded-[24px] bg-[#0A146E] p-6 text-white md:p-10">
          <div className="col-span-12 mx-auto md:col-span-4">
            <Image src={flutterworkshop_img} alt="AskSnT" className="w-[220px] md:w-[280px]" priority />
          </div>
          <div className="col-span-12 md:col-span-8">
            <p className="text-3xl font-bold md:text-5xl">Ask S&amp;T</p>
            <p className="mt-3 text-sm text-white/80 md:text-lg">
              Got questions? ASK S&T! Join us for an interactive session with the Science & Technology Club where you can bring your technical and non-technical questions, clear your doubts, and get insights from experienced club members. Whether you’re curious about technology, the club, or anything in between, ASK S&T is your space to ask, explore, and learn. Register below and come get your questions answered!
            </p>
            <p className="mt-4 inline-block rounded-full bg-[#EE4B76] px-4 py-1 text-sm font-semibold">
              Registrations Open
            </p>
          </div>
        </div>

        {/* SHARED REGISTRATION FORM */}
        <div className="mt-10">
          <Suspense fallback={<div className="text-center py-8">Loading form...</div>}>
            <EventFormSwitcher event='AskSnT' title='Ask S&T' />
          </Suspense>
        </div>
      </div>
    </section>
  );
}

export default AskSnTPage;
