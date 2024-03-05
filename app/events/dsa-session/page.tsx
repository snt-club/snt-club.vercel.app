import React from "react";
import Image from "next/image";
import Link from "next/link";

import { dsa } from "@/assets";

function DSA_SESSION() {
  return (
    <>
      <header className="bg-[#0A146E]  text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1i_V1oTp9zI9YW1-4SVhTgAL7kt1eoAUr/view?usp=sharing"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center">Notice</p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/NWZ5Zrh2wTeTq9oL7" target="_blank">
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
            Introductory session on DSA
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={dsa} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                  DSA is one of the crucial and highly demanded skills to test
                  your knowledge on every industry standards. Attend our session
                  to get the proper understanding and
                </p>
                <br />
                <p className="text-left ">
                  Join us for: <br />
                  • What is DSA and its importance 💻 <br />
                  • Role of DSA in placement 🧑‍💻 <br />
                  • How to master DSA 📙 <br />• DSA best practices
                  <br />• DSA vs Development 🧑‍💻 📚
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
                      06th March, 2024
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
                      href="https://forms.gle/NWZ5Zrh2wTeTq9oL7"
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

export default DSA_SESSION;
