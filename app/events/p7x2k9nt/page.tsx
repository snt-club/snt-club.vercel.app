'use client';
import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import EventFormSwitcher from '@/components/EventFormSwitcher';
import { getEventConfig } from '@/lib/eventRegistrations';
import Image from 'next/image';
import AskSNTPoster from '@/assets/images/AskS&T.jpeg';

const EVENT_ID = "p7x2k9nt";

function AskSNT() {
  const eventDetails = getEventConfig(EVENT_ID);

  // 1. Local state for live DB capacity
  const [isFull, setIsFull] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(true);

  useEffect(() => {
    async function checkEventCapacity() {
      try {
        const res = await fetch(`/api/z9x4p7/${EVENT_ID}/s7yb37hi`);
        const data = await res.json();
        if (data?.isFull) {
          setIsFull(true);
        }
      } catch (err) {
        console.error('Error fetching event capacity', err);
      } finally {
        setLoadingStatus(false);
      }
    }

    checkEventCapacity();
  }, []);

  // 2. Combine static config with dynamic DB check
  const staticRegOpen = Boolean(eventDetails?.registrationOpen);
  const attendanceOpen = Boolean(eventDetails?.attendanceOpen);
  const started = Boolean(eventDetails?.started);
  const ended = Boolean(eventDetails?.ended);

  // Closed if DB says it's full
  const registrationOpen = staticRegOpen && !isFull;
  const showForm = !ended && (attendanceOpen || registrationOpen);

  return (
    <>
      {/* HEADER / NOTICE BAR: Stacks vertically on mobile, row on tablet/desktop */}
      <header className="w-full bg-[#0A146E] py-4 text-white shadow-md">
        <div className="mx-auto flex w-full max-w-[94%] flex-col items-center justify-center gap-3 px-2 sm:flex-row sm:justify-between sm:px-6 xl:max-w-7xl">
          <div>
            <Link href="#" target="_blank">
              <span className="inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-sm font-medium text-white/90 transition hover:bg-white/10 hover:text-white md:text-base">
                📌 Notice
              </span>
            </Link>
          </div>
          <div>
            {ended ? (
              <span className="inline-flex items-center rounded-full border border-white/40 bg-white/10 px-5 py-1.5 text-sm font-bold text-white">
                Event Concluded
              </span>
            ) : attendanceOpen ? (
              <Link href="?attendance=true">
                <button className="rounded-full border border-[#4bee6e] bg-[#4bee6e] px-5 py-1.5 text-sm font-bold text-[#0A146E] shadow-sm transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:text-base">
                  Mark Attendance
                </button>
              </Link>
            ) : registrationOpen ? (
              <a href="#register">
                <button className="rounded-full border border-white bg-white px-5 py-1.5 text-sm font-bold text-[#0A146E] shadow-sm transition duration-300 ease-in-out hover:bg-transparent hover:text-white md:text-base">
                  Register Now
                </button>
              </a>
            ) : (
              <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-1.5 text-sm font-bold text-white/70">
                Registrations Closed
              </span>
            )}
          </div>
        </div>
      </header>

      {/* FULL-CANVAS WRAPPER */}
      <div className="mx-auto my-8 w-full max-w-[94%] px-2 sm:px-6 xl:max-w-7xl">
        
        {/* REFINED, PROPORTIONAL TITLE BANNER */}
        <div className="mb-8 w-full text-center md:mb-10">
          <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-[#0A146E] via-[#12209e] to-[#0A146E] px-6 py-3.5 shadow-md shadow-[#0A146E]/10 md:py-4">
            <h1 className="text-2xl font-extrabold tracking-normal text-amber-300 md:text-3xl lg:text-4xl">
              {eventDetails?.title || "Ask S&T"}
            </h1>
          </div>
        </div>

        {/* 12-COL FULL-WIDTH CONTENT GRID (items-center to align heights nicely) */}
        <div className="grid w-full grid-cols-12 items-center gap-8 lg:gap-12">
          
          {/* POSTER: limited max-width to avoid stretching too tall */}
          <div className="col-span-12 flex justify-center lg:col-span-4 lg:justify-start">
            <div className="relative w-full max-w-[280px] overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-50 shadow-md transition duration-300 hover:shadow-lg sm:max-w-[320px]">
              <Image
                src={AskSNTPoster}
                alt="Ask S&t Poster"
                width={600}
                height={600}
                className="h-auto w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* EVENT DESCRIPTION & DETAILS */}
          <div className="col-span-12 space-y-6 text-[#0A146E] lg:col-span-8">
            {/* Live / Status Pill */}
            <div className="flex items-center gap-2">
              {ended ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-200 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-slate-500" /> Event Ended
                </span>
              ) : attendanceOpen ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" /> Attendance Portal Live
                </span>
              ) : started ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#0A146E]">
                  <span className="h-2 w-2 animate-ping rounded-full bg-[#0A146E]" /> Ask S&T In Progress
                </span>
              ) : registrationOpen ? (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Registrations Open
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-amber-800">
                  <span className="h-2 w-2 rounded-full bg-amber-500" /> Registrations Closed
                </span>
              )}
            </div>

            {/* Main Lead Paragraph */}
            <p className="text-base font-normal leading-relaxed text-slate-700 md:text-lg">
               Got a doubt? 🤔 A question? 💭 Anything on your mind? 💡 No hesitation, no awkwardness — just ask away! 🗣️✨ Whether it's academics 📚, technology 💻, college life 🎓, career guidance 🚀, or anything else — <strong className="font-semibold text-[#0A146E]">Ask SNT</strong> is your space to ask, explore, and learn! 🙌🏻
            </p>

            {/* METADATA PILLS */}
            <div className="grid grid-cols-1 gap-3 pt-1 text-center sm:grid-cols-3 md:gap-4">
              <div className="rounded-xl border border-[#0A146E]/15 bg-white p-3.5 shadow-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Date</span>
                <p className="mt-0.5 text-sm font-semibold text-[#0A146E] md:text-base">
                  {eventDetails?.formattedDate || "October 10, 2026"}
                </p>
              </div>
              
              <div className="rounded-xl border border-[#0A146E]/15 bg-white p-3.5 shadow-sm">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">Time</span>
                <p className="mt-0.5 text-sm font-semibold text-[#0A146E] md:text-base">
                  {eventDetails?.formattedTime || "2 PM - 3 PM"}
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

        {/* REGISTRATION / ATTENDANCE / STATUS SECTION */}
      <div id="register" className="mx-auto mt-8 w-full max-w-4xl">
        {loadingStatus ? (
          <div className="py-8 text-center text-slate-500">Checking availability...</div>
        ) : ended ? (
          <div className="rounded-2xl border-2 border-[#0A146E]/15 bg-slate-50/80 p-8 text-center text-[#0A146E] shadow-sm">
            <p className="text-4xl">🏁</p>
            <h3 className="mt-3 text-2xl font-bold">Event Concluded</h3>
          </div>
        ) : showForm ? (
          <Suspense fallback={<div className="py-10 text-center text-base font-semibold text-[#0A146E]">Loading form...</div>}>
            <EventFormSwitcher
              event={EVENT_ID}
              title="Ask S&T"
              whatsappGroupUrl=""
            />
          </Suspense>
        ) : (
          <div className="rounded-2xl border-2 border-amber-300 bg-amber-50/80 p-8 text-center text-[#0A146E] shadow-sm">
            <p className="text-4xl">⏳</p>
            <h3 className="mt-3 text-2xl font-bold">
              {isFull ? "Registrations Full!" : "Registrations Are Closed"}
            </h3>
            <p className="mt-2 text-sm text-slate-700 md:text-base">
              {isFull 
                ? "This event has reached its maximum limit of 100 registrations."
                : `Registrations for ${eventDetails?.title || "Ask S&T"} are now closed.`}
            </p>
          </div>
        )}
      </div>

      </div>
    </>
  );
}

export default AskSNT;