'use client';
import React, { Suspense } from 'react';
import Link from 'next/link';
import EventFormSwitcher from '@/components/EventFormSwitcher';
import { getEventConfig } from '@/lib/eventRegistrations';
import Image from 'next/image';
import { cBootcamp26Poster } from '@/assets';

function CBootcampPage() {
  const eventDetails = getEventConfig('c5bt3kp8');

  return (
    <>
      {/* HEADER / NOTICE BAR: Stacks vertically on mobile, row on tablet/desktop */}
      <header className="w-full bg-[#0A146E] py-4 text-white shadow-md">
        <div className="mx-auto flex w-full max-w-[94%] flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:justify-between sm:px-6 xl:max-w-7xl">
          <div>
            <Link href="#" target="_blank" download="NOTICE_C_BOOTCAMP .pdf">
              <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white md:text-base">
                📌 Notice
              </span>
            </Link>
          </div>
          <div>
            <a href="#register">
              <button className="rounded-full border border-white bg-white px-5 py-1.5 text-sm font-bold text-[#0A146E] shadow-sm transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:text-base">
                Register Now
              </button>
            </a>
          </div>
        </div>
      </header>

      {/* FULL-CANVAS WRAPPER */}
      <div className="mx-auto my-8 w-full max-w-[94%] px-2 sm:px-6 xl:max-w-7xl">
        
        {/* REFINED, PROPORTIONAL TITLE BANNER */}
        <div className="mb-8 w-full text-center md:mb-10">
          <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#0A146E] via-[#12209e] to-[#0A146E] px-6 py-3.5 shadow-md shadow-[#0A146E]/10 md:py-4">
            <h1 className="text-2xl font-extrabold tracking-normal text-amber-300 md:text-3xl lg:text-4xl">
              {eventDetails?.title || "C Bootcamp"}
            </h1>
          </div>
        </div>

        {/* 12-COL FULL-WIDTH CONTENT GRID */}
        <div className="grid w-full grid-cols-12 items-start gap-8 lg:gap-12">
          
          {/* POSTER / IMAGE PLACEHOLDER */}
          <div className="col-span-12 flex justify-center lg:col-span-4 lg:justify-start">
            <div className="relative w-full max-w-[340px] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-md transition duration-300 hover:shadow-lg lg:max-w-none">
              <Image
                src={cBootcamp26Poster}
                alt="C Bootcamp Poster"
                width={600}
                height={600}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* EVENT DESCRIPTION & DETAILS */}
          <div className="col-span-12 space-y-6 text-[#0A146E] lg:col-span-8">
            {/* Main Lead Paragraph (Normal readable weight) */}
            <p className="text-base font-normal leading-relaxed text-slate-700 md:text-lg">
              We&apos;re excited to announce our <strong className="font-semibold text-[#0A146E]">C Bootcamp</strong> for all coding enthusiasts! Students new to coding or looking to strengthen their C programming fundamentals — this bootcamp is for you.
            </p>

            {/* Structured Bullet Section (Regular font weight) */}
            <div className="w-full rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 md:p-6">
              <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#EE4B76]">
                Join us for:
              </p>
              <ul className="space-y-3 text-sm font-normal leading-relaxed text-slate-700 md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-lg">📆</span>
                  <span>Hybrid mode classes to fit your schedule.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🧑🏻‍💻</span>
                  <span>Problem-solving activities that make learning fun and interactive</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">🖋️</span>
                  <span>Sharpen your skills with guided, hands-on tasks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">📚</span>
                  <span>Get your questions answered in real-time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-lg">👨🏻‍🎓</span>
                  <span>Earn a completion certificate after successfully finishing the bootcamp!</span>
                </li>
              </ul>
            </div>

            {/* METADATA PILLS: Clean labels with bolded data values */}
            <div className="grid grid-cols-1 gap-3 pt-1 text-center sm:grid-cols-3 md:gap-4">
              <div className="rounded-xl border border-[#0A146E]/15 bg-white p-3.5 shadow-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Date</span>
                <p className="mt-0.5 text-sm font-semibold text-[#0A146E] md:text-base">
                  {eventDetails?.formattedDate || "September 16, 2026"}
                </p>
              </div>
              
              <div className="rounded-xl border border-[#0A146E]/15 bg-white p-3.5 shadow-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Time</span>
                <p className="mt-0.5 text-sm font-semibold text-[#0A146E] md:text-base">
                  {eventDetails?.formattedTime || "1:30 PM - 3:00 PM"}
                </p>
              </div>

              <div className="rounded-xl border border-[#0A146E]/15 bg-white p-3.5 shadow-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Venue</span>
                <p className="mt-0.5 text-sm font-semibold text-[#0A146E] md:text-base">
                  {eventDetails?.venue || "4F-L4, Civil Block"}
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* REGISTRATION FORM SECTION */}
        <div id="register" className="mx-auto mt-14 w-full max-w-4xl pt-4">
          <Suspense fallback={<div className="py-10 text-center text-base font-semibold text-[#0A146E]">Loading form...</div>}>
            <EventFormSwitcher
              event="c5bt3kp8"
              title="C Bootcamp"
              whatsappGroupUrl="https://chat.whatsapp.com/FUc84Zn2rrEFV3BkBaJOdp"
            />
          </Suspense>
        </div>

      </div>
    </>
  );
}

export default CBootcampPage;