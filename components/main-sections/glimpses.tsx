import React from "react";
import Glimpses from "@/components/glimpses-slider";


function section3() {
  return (
    <section className="h-fit container mx-auto">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div>
          <p className="text-5xl md:text-6xl font-bold pt-4">
            Glimpses
          </p>
          <p className="text-justify text-sm md:text-base ml-1 lg:ml-4 sm:my-auto h-fit mt-[10px] md:mt-[20px]">
            All the three teams work with the same motive to enhance technical
            skills and achieve the apogee of technological advancements.
          </p>
        </div>
      </div>
        <div className="py-8">
          <Glimpses/>
        </div>
    </section>
  );
}

export default section3;
