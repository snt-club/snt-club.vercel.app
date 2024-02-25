import React from "react";
import Image from "next/image";
import Link from "next/link";

import cppWorkshop from "@/assets/images/cppWorkshop.png";

function CPP_WORKSHOP() {
  return (
    <>
      <header className="bg-[#0A146E]  text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1_hzpNWS9I5e-NocnqJltcjEFlw13Iu-9/view?usp=drive_link"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center">Notice</p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/omLXWvDMZMTiVNi38" target="_blank">
              <button className="bg-white text-[#0A146E] p-2 rounded-full hover:bg-transparent hover:text-white border-white border text-center ease-in-out duration-300">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="text-center my-4 mx-16">
          <p className="bg-[#0A146E] text-2xl lg:text-6xl text-yellow-400 font-bold rounded-xl">
            C++ Workshop
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={cppWorkshop} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                  C++ language is the foundation of development, and we're here
                  to strengthen your skills.
                </p>
                <br />
                <p className="text-left md:text-center">
                  Join us for: <br />
                  • Offline workshop 💻 <br />
                  • Fun problem-solving activities 🧑‍💻 <br />
                  • Engaging assignments 📙 <br />• Helpful doubt-solving
                  sessions 📚
                </p>
                <br />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div>
                  <div className="text-[14px] text-gray-500">
                    <span>Date</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[18px]">
                      28th February, 2024
                    </span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[18px]">
                      01:30 PM - 03:30 PM
                    </span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[18px]">
                      4F4, Civil Block
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CPP_WORKSHOP;
