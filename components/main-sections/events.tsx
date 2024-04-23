import Image from "next/image";
import Link from "next/link";
import React from "react";

import { eventDetails } from "@/eventConstants";

const events = () => {
  // To check if there is any upcoming event or not
  const UpcomingEventNumber = [];
  {
    eventDetails.map((details) =>
      details.eventStatus === "upcoming" ? UpcomingEventNumber.push("0") : ""
    );
  }
  return (
    <div className="h-fit container mx-auto" id="events">
      {/* UPCOMING EVENTS */}
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">Upcoming Events</p>
        </div>
        {eventDetails.map((details, index) =>
          details.eventStatus === "upcoming" ? (
            <div
              key={index}
              className="w-full mx-auto mb-6 mt-[10px] md:mt-[20px]"
            >
              <div className="bg-[#0A146E] rounded-[20px] p-[20px] text-white  grid grid-cols-12">
                <div className="col-span-12 md:col-span-3 mx-auto">
                  <Image
                    src={details.eventImg}
                    alt={details.eventName}
                    className="w-[200px] aspect-square"
                  />
                </div>
                <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
                  <div>
                    <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                      {details.eventName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg pb-2 md:pb-4">
                      {details.eventDesc}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EE4B76]">
                      Registrations Start Soon
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
        {UpcomingEventNumber.length === 0 ? (
          <div className="w-full mx-auto mt-[10px] md:mt-[20px] ">
            <div className="bg-[#0A146E] rounded-[20px] p-[20px] text-white text-center text-[16px] md:text-[20px] font-bold">
              NO EVENTS FOR NOW, STAY TUNED!
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      {/* ONGOING EVNETS */}
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-[30px] lg:mt-[50px]">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">Ongoing Events</p>
        </div>
        {eventDetails.map((details, index) =>
          details.eventStatus === "ongoing" ? (
            <div
              key={index}
              className="w-full mx-auto mb-6 mt-[10px] md:mt-[20px]"
            >
              <div
                className={`bg-[#0A146E] rounded-[20px] p-[20px] text-white  grid grid-cols-12`}
              >
                <div className="col-span-12 md:col-span-3 mx-auto">
                  <Image
                    src={details.eventImg}
                    alt={details.eventName}
                    className="w-[200px] aspect-square"
                  />
                </div>
                <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
                  <div>
                    <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                      {details.eventName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg pb-2 md:pb-4">
                      {details.eventDesc}
                    </p>
                  </div>
                  {details.eventRegStatus === "live" ? (
                    <div>
                      <Link href={details.eventRegLink} target="_blank">
                        <p className="px-2 py-1 bg-[#EE4B76] rounded-[4px] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                          Register Now
                        </p>
                      </Link>
                    </div>
                  ) : (
                    <div>
                      <p className="font-semibold text-[#EE4B76]">
                        Registrations Closed
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>

      {/* PAST EVENTS */}
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-[30px] lg:mt-[50px]">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">Past Events</p>
        </div>
        {eventDetails.map((details, index) =>
          details.eventStatus === "past" ? (
            <div
              key={index}
              className="w-full mx-auto mb-6 mt-[10px] md:mt-[20px]"
            >
              <div className="bg-[#0A146E] rounded-[20px] p-[20px] text-white  grid grid-cols-12">
                <div className="col-span-12 md:col-span-3 mx-auto">
                  <Image
                    src={details.eventImg}
                    alt={details.eventName}
                    className="w-[200px] aspect-square"
                  />
                </div>
                <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
                  <div>
                    <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                      {details.eventName}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm md:text-lg pb-2 md:pb-4">
                      {details.eventDesc}
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold text-[#EE4B76]">
                      Registrations Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )
        )}
      </div>
    </div>
  );
};

export default events;
