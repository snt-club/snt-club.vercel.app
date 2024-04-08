import React from "react";
import Image from "next/image";
import Link from "next/link";

import {web} from "@/assets";

function Web_Dev() {
  return (
    <>
      <header className="bg-[#0A146E]  text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/11TOOYmnqQn7VlP1Nwqt2ozuvuM2ZyEPP/view?usp=drive_link"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center">Notice</p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/JA4JVLDoFazTWva6A" target="_blank">
              <button className="bg-white text-[#0A146E] p-2 rounded-full hover:bg-transparent hover:text-white border-white border text-center ease-in-out duration-300">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="text-center my-4 mx-16">
          <p className="bg-[#0A146E] text-2xl py-2 lg:text-6xl text-yellow-400 font-bold rounded-xl">
            Web-Development Workshop
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={web} alt="WebDev Session" className="w-fit" />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                  Learning Web Development boosts creativity, digital presence,
                  and Designing skills, offering opportunities for personal
                  projects and online ventures.
                </p>
                <br />
                <p className="text-left ">
                  Join us for: <br />
                  • Introduction to Web Development💻
                  <br />
                  • Importance of Web Development🧑‍💻 <br />
                  • Basics of HTML and CSS 📚 <br />
                  • Future of Web Development 📙 <br />
                  • Hands-on: Create Portfolio Website🌐
                  <br />
                </p>
                <br />
              </div>
            </div>
            <div className="flex mx-16">
              <div className="">
                <div>
                  <div className="text-[14px] text-gray-500">
                    <span>Date</span>
                  </div>
                  <div>
                    <span className="font-semibold text-[18px]">
                      10th April, 2024
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
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Registration Link</span>
                  </div>
                  <div>
                    <Link
                      href="https://forms.gle/JA4JVLDoFazTWva6A"
                      target="_blank"
                      className="font-semibold underline underline-offset-2 text-[18px]"
                    >
                      Click Here
                    </Link>
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

export default Web_Dev;
