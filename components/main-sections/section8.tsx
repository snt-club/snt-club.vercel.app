import Image from "next/image";
import React from "react";

import sharda_soni from "@/assets/people/sharda.png";
import vinay_marwal from "@/assets/people/vinay.png";

function section8() {
  return (
    <section className="h-fit p-4">
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Faculty Coordinators
          </p>
        </div>
        <div className="text-[#0A146E] grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-4">
          <div>
            <div>
              <Image
                src={sharda_soni}
                alt="Sharda Soni Ma'am Chemistry Department"
                className="mx-auto rounded-full"
              />
            </div>
            <div className="text-center">
              <div>
                <p className="text-2xl font-bold pb-2 pt-1">Dr. Sharda Soni</p>
              </div>
              <div>
                <p className="text-lg">Head of Department<br/>Chemistry</p>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={vinay_marwal}
                alt="Vinay Marwal Sir Mechanical Department"
                className="mx-auto rounded-full"
              />
            </div>
            <div className="text-center">
              <div>
                <p className="text-2xl font-bold pb-2 pt-1">Mr. Vinay Marwal</p>
              </div>
              <div>
                <p className="text-lg">Associate Professor<br/>Department of Mechanical Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section8;
