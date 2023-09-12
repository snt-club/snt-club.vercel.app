import Image from "next/image";
import React from "react";

import sharda_soni from "@/assets/people/sharda.png";
import vinay_marwal from "@/assets/people/vinay.png";

function faculty() {
  return (
    <section className="h-fit container mx-auto">
      <div className="p-8">
        <div className="text-center text-[#0A146E]">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Faculty Coordinators
          </p>
        </div>
        <div className="">
          <div className="text-[#0A146E] grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="w-fit mx-auto">
              <div>
                <Image
                  src={sharda_soni}
                  alt="Sharda Soni Ma'am Chemistry Department"
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">
                    Dr. Sharda Soni
                  </p>
                </div>
                <div>
                  <p className="text-md">
                    Head of Department
                    <br />
                    Chemistry
                  </p>
                </div>
              </div>
            </div>
            <div className="w-fit mx-auto">
              <div>
                <Image
                  src={vinay_marwal}
                  alt="Vinay Marwal Sir Mechanical Department"
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">
                    Mr. Vinay Marwal
                  </p>
                </div>
                <div>
                  <p className="text-md">
                    Associate Professor
                    <br />
                    Department of Mechanical Engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default faculty;
