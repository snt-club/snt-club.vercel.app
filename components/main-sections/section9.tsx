import Image from "next/image";
import React from "react";
import Link from "next/link";

import shreyansh from "@/assets/people/shreyansh.png";
import chinkle from "@/assets/people/chinkle.png";
import instagram from "@/assets/svg/in.svg";
import linkedin from "@/assets/svg/li.svg";

function section9() {
  return (
    <section className="h-fit p-4">
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-12">
            Student Coordinators
          </p>
        </div>
        <div className="text-[#0A146E] grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-4">
          <div>
            <div>
              <Image
                src={shreyansh}
                alt="Student Coordinator - Shreyansh Agarwal"
                width={150}
                className="mx-auto rounded-full"
              />
            </div>
            <div className="text-center">
              <div>
                <p className="text-2xl font-bold pb-2 pt-1">
                  Shreyansh Agrawal
                </p>
              </div>
              <div>
                <p className="text-lg">III Yr, CSE</p>
              </div>
              <div className="flex gap-2 justify-center">
                <div>
                  <Link href="/">
                    <Image src={instagram} alt="Instagram" width={30} />
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <Image src={linkedin} alt="LinkedIn" width={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <Image
                src={chinkle}
                alt="Student Coordinator - Chinkle Rathore"
                width={150}
                className="mx-auto rounded-full"
              />
            </div>
            <div className="text-center">
              <div>
                <p className="text-2xl font-bold pb-2 pt-1">Chinkle Rathore</p>
              </div>
              <div>
                <p className="text-lg">III Yr, CSE</p>
              </div>

              <div className="flex gap-2 justify-center">
                <div>
                  <Link href="/">
                    <Image src={instagram} alt="Instagram" width={30} />
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <Image src={linkedin} alt="LinkedIn" width={30} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-12">
            Student Heads
          </p>
        </div>
      </div>
      {/* <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-4xl md:text-6xl font-extrabold mb-4 md:mb-12">
            Faculty Coordinators
          </p>
        </div>
        </div> */}
    </section>
  );
}

export default section9;
