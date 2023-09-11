import React from "react";
import Glimpses from "@/components/glimpses";
import { StaticImageData } from 'next/image';


function section3() {
  return (
    <section className="h-fit p-4">
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-2 md:mb-8">
            Glimpses
          </p>
          <p className="text-sm md:text-lg text-justify md:text-center">
            All the three teams work with the same motive to enhance technical
            skills and achieve the apogee of technological advancements.
          </p>
        </div>
        <div className="pt-4">
          <Glimpses/>
        </div>
      </div>
    </section>
  );
}

export default section3;
