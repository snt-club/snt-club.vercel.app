import Image from "next/image";
import Link from "next/link";
import React from "react";

import jecrchack from "@/assets/svg/jecrchack.svg";
import cws2 from "@/assets/svg/cws2.svg";

function section5() {
  return (
    <section className="h-fit p-4" id="events">
      <div className="pb-8">
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Upcoming Events
          </p>
        </div>
        <div className="w-full mx-auto px-4 md:px-12 mb-6 hidden">
          <div className="bg-[#0A146E] text-white p-4 grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mx-auto">
              <Image src={jecrchack} alt="Event Icon" width={250} />
            </div>
            <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8">
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
              <div>
                <Link href="/">
                  <p className="px-2 py-1 bg-[#EE4B76] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                    Register Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mx-auto px-4 md:px-12">
          <div className="bg-[#0A146E] text-white p-4 grid text-center text-2xl font-semibold">
            NO EVENTS FOR NOW, STAY TUNNED!
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Past Events
          </p>
        </div>
        <div className="w-full mx-auto px-4 md:px-12">
          <div className="bg-[#0A146E] text-white p-4 grid grid-cols-12">
            <div className="col-span-12 md:col-span-3 mx-auto">
              <Image src={cws2} alt="Event Icon" width={250} />
            </div>
            <div className="col-span-12 md:col-span-9 my-auto px-4 md:px-8">
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
              <div>
                <Link href="/">
                  <p className="px-2 py-1 bg-[#EE4B76] w-fit border border-[#EE4B76] text-center font-semibold hover:text-[#EE4B76] hover:bg-opacity-0">
                    Register Now
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section5;
