import Image from "next/image";
import Link from "next/link";
import React from "react";

import jecrchack from "@/assets/svg/jecrchack.svg";
import cbootcamp from "@/assets/svg/c_bootcamp.svg";
import cws2 from "@/assets/svg/cws2.svg";
import aarambh from "@/assets/svg/aarambh.svg";

function events() {
  return (
    <section className="h-fit container mx-auto" id="events">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">Upcoming Events</p>
        </div>
        <div className="w-full mx-auto mb-6 mt-[10px] md:mt-[20px]">
          <div className="bg-[#0A146E] text-white p-4\ grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mx-auto">
              <Image src={aarambh} alt="Event Icon" width={250} />
            </div>
            <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
              <div>
                <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                  AARAMBH 2023
                </p>
              </div>
              <div>
                <p className="text-sm md:text-lg pb-2 md:pb-4">
                  S&T is excited to announce an introduction session for the
                  first year students and welcome them to their journey of
                  becoming an engineer.
                </p>
              </div>
              <div className="">
                <Link href="/events/aarambh23">
                  <p className="px-2 py-1 bg-[#EE4B76] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                    Register Now
                  </p>
                </Link>
              </div>
              <div>
                <p className="font-semibold text-[#EE4B76] hidden">
                  Registrations Start Soon
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto mb-6 mt-[10px] md:mt-[20px]">
          <div className="bg-[#0A146E] text-white p-4\ grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mx-auto">
              <Image src={cbootcamp} alt="Event Icon" width={250} />
            </div>
            <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
              <div>
                <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                  C Bootcamp
                </p>
              </div>
              <div>
                <p className="text-sm md:text-lg pb-2 md:pb-4">
                  Science and Technology Club is organising a C Bootcamp for the
                  students where you will be taught the concepts of C
                  Programming .
                </p>
              </div>
              <div className="">
                <Link href="/events/cbootcamp">
                  <p className="px-2 py-1 bg-[#EE4B76] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                    Register Now
                  </p>
                </Link>
              </div>
              <div>
                <p className="font-semibold text-[#EE4B76] hidden">
                  Registrations Start Soon
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mb-6 mt-[10px] md:mt-[20px]">
          <div className="bg-[#0A146E] text-white p-4\ grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mx-auto">
              <Image src={jecrchack} alt="Event Icon" width={250} />
            </div>
            <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
              <div>
                <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                  INNOV8 &apos;23 - JECRC Hackathon
                </p>
              </div>
              <div>
                <p className="text-sm md:text-lg pb-2 md:pb-4">
                  INNOV8 with SnT Club is excited to annouce about the JECRC
                  Hackathon taking place on 27th September 2023.
                </p>
              </div>
              <div className="hidden">
                <Link href="/">
                  <p className="px-2 py-1 bg-[#EE4B76] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                    Register Now
                  </p>
                </Link>
              </div>
              <div>
                <p className="font-semibold text-[#EE4B76]">
                  Registrations Start Soon
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto mt-[10px] md:mt-[20px] hidden">
          <div className="bg-[#0A146E] text-white p-4 grid text-center text-2xl font-semibold">
            NO EVENTS FOR NOW, STAY TUNNED!
          </div>
        </div>
      </div>
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">Past Events</p>
        </div>
        <div className="w-full mx-auto mt-[10px] md:mt-[20px]">
          <div className="bg-[#0A146E] text-white p-4 grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mx-auto">
              <Image src={cws2} alt="Event Icon" width={250} />
            </div>
            <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8 py-4">
              <div>
                <p className="text-xl md:text-3xl font-bold pb-2 md:pb-4">
                  Code With SnT 2.0
                </p>
              </div>
              <div>
                <p className="text-sm md:text-lg pb-2 md:pb-4">
                  Science and Technology Club is organising an event Code With
                  SnT 2.0 for the second year students where you will compete
                  your fellow coders and solve C Programming Questions.
                </p>
              </div>
              <div className="hidden">
                <Link href="/">
                  <p className="px-2 py-1 bg-[#EE4B76] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                    Register Now
                  </p>
                </Link>
              </div>
              <div>
                <p className="font-semibold text-[#EE4B76]">
                  Registrations Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default events;
