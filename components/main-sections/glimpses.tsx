import React from 'react';
import Glimpses from '@/components/glimpses-slider';

function section3() {
  return (
    <section className="container mx-auto h-fit">
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div>
          <p className="pt-4 text-5xl font-bold md:text-6xl">Glimpses</p>
          <p className="ml-1 mt-[10px] h-fit text-justify text-sm sm:my-auto md:mt-[20px] md:text-base lg:ml-4">
            All the three teams work with the same motive to enhance technical skills and achieve the apogee of
            technological advancements.
          </p>
        </div>
      </div>
      <div className="py-8">
        <Glimpses />
      </div>
    </section>
  );
}

export default section3;
