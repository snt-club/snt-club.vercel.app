import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { eventDetails } from '@/eventConstants';

const events = () => {
  // To check if there is any upcoming event or not
  const UpcomingEventNumber = [];
  {
    eventDetails.map((details) => (details.eventStatus === 'upcoming' ? UpcomingEventNumber.push('0') : ''));
  }
  return (
    <div className="container mx-auto h-fit" id="events">
      {/* UPCOMING EVENTS */}
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div className="text-center">
          <p className="pt-4 text-2xl font-bold md:text-5xl">Upcoming Events</p>
        </div>
        {eventDetails.map((details, index) =>
          details.eventStatus === 'upcoming' ? (
            <div key={index} className="mx-auto mb-6 mt-[10px] w-full md:mt-[20px]">
              <div className="grid grid-cols-12 rounded-[20px] bg-[#0A146E] p-[20px] text-white">
                <div className="col-span-12 mx-auto md:col-span-3">
                  <Image src={details.eventImg} alt={details.eventName} className="aspect-square w-[200px]" />
                </div>
                <div className="col-span-12 my-auto px-4 py-4 md:col-span-9 md:px-8">
                  <div>
                    <p className="pb-2 text-xl font-bold md:pb-4 md:text-3xl">{details.eventName}</p>
                  </div>
                  <div>
                    <p className="pb-2 text-sm md:pb-4 md:text-lg">{details.eventDesc}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#4bee6e]">Registrations Start Soon</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          ),
        )}
        {UpcomingEventNumber.length === 0 ? (
          <div className="mx-auto mt-[10px] w-full md:mt-[20px]">
            <div className="rounded-[20px] bg-[#0A146E] p-[20px] text-center text-[16px] font-bold text-white md:text-[20px]">
              NO EVENTS FOR NOW, STAY TUNED!
            </div>
          </div>
        ) : (
          ''
        )}
      </div>

      {/* ONGOING EVNETS */}
      <div className="mx-8 mt-[30px] text-[#0A146E] lg:mx-12 lg:mt-[50px]">
        <div className="text-center">
          <p className="pt-4 text-2xl font-bold md:text-5xl">Ongoing Events</p>
        </div>
        {eventDetails.map((details, index) =>
          details.eventStatus === 'ongoing' ? (
            <div key={index} className="mx-auto mb-6 mt-[10px] w-full md:mt-[20px]">
              <div className={`grid grid-cols-12 rounded-[20px] bg-[#0A146E] p-[20px] text-white`}>
                <div className="col-span-12 mx-auto md:col-span-3">
                  <Image src={details.eventImg} alt={details.eventName} className="aspect-square w-[200px]" />
                </div>
                <div className="col-span-12 my-auto px-4 py-4 md:col-span-9 md:px-8">
                  <div>
                    <p className="pb-2 text-xl font-bold md:pb-4 md:text-3xl">{details.eventName}</p>
                  </div>
                  <div>
                    <p className="pb-2 text-sm md:pb-4 md:text-lg">{details.eventDesc}</p>
                  </div>
                  {details.eventRegStatus === 'live' ? (
                    <div>
                      <Link href={details.eventRegLink} target="_blank">
                        <p className="w-fit rounded-[4px] border border-[#EE4B76] bg-[#EE4B76] px-2 py-1 text-center font-semibold hover:bg-opacity-0 duration-200 hover:text-[#EE4B76]">
                          Register Now
                        </p>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold text-[#EE4B76]">Registrations Closed</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ''
          ),
        )}
      </div>

      {/* PAST EVENTS */}
      <div className="mx-8 mt-[30px] text-[#0A146E] lg:mx-12 lg:mt-[50px]">
        <div className="text-center">
          <p className="pt-4 text-2xl font-bold md:text-5xl">Past Events</p>
        </div>
        {eventDetails.map((details, index) =>
          details.eventStatus === 'past' ? (
            <div key={index} className="mx-auto mb-6 mt-[10px] w-full md:mt-[20px]">
              <div className="grid grid-cols-12 rounded-[20px] bg-[#0A146E] p-[20px] text-white">
                <div className="col-span-12 mx-auto md:col-span-3">
                  <Image src={details.eventImg} alt={details.eventName} className="aspect-square w-[200px]" />
                </div>
                <div className="col-span-12 my-auto px-4 py-4 md:col-span-9 md:px-8">
                  <div>
                    <p className="pb-2 text-xl font-bold md:pb-4 md:text-3xl">{details.eventName}</p>
                  </div>
                  <div>
                    <p className="pb-2 text-sm md:pb-4 md:text-lg">{details.eventDesc}</p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EE4B76]">Registrations Closed</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ''
          ),
        )}
      </div>
    </div>
  );
};

export default events;
