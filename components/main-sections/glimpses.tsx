import React from "react";
import Glimpses from "@/components/glimpses-slider";
import { StaticImageData } from 'next/image';


function section3() {
  return (
    <section className="h-fit container mx-auto">
      <div>
        <div className="text-[#0A146E] p-4">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Glimpses
          </p>
          <p className="text-sm md:text-md">
            All the three teams work with the same motive to enhance technical
            skills and achieve the apogee of technological advancements.
          </p>
        </div>
        <div className="p-4">
          <Glimpses/>
        </div>
      </div>
    </section>
  );
}

export default section3;
