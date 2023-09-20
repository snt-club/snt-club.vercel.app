import React from "react";
import Image from "next/image";
import Link from "next/link";

import aarambhposter from "@/assets/images/aarmbhposter.webp";

function CBOOTCAMP() {
  return (
    <>
      <header className="bg-[#0A146E]  text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1DxVRrkcuYEaVY5KKeEQaMqwOmYkowZ7P/view?usp=share_link"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center">Notice</p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/ghZqA2RUZkK5VFBz6">
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
            AARAMBH 2023
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={aarambhposter} alt="Aarambh 2023" className="h-fit" />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                  Get ready to embark on an exciting journey! Science and
                  Technology Club is excited to introduce the eagerly
                  anticipated event AARAMBH , an introductory session designed
                  for freshers! 🌟💻
                </p>
                <br />
                <p>
                  🔍 Join us as we explore the fascinating world of science and
                  technology. Stay tuned because we're about to take you on an
                  enthralling adventure filled with delightful surprises.{" "}
                </p>
                <br />
              </div>
            </div>
            <div className="text-lg md:text-4xl mx-16">
              <div className="w-fit mx-auto text-left md:text-center">
                <div>
                  <p>
                    <b>Date:</b> 20 September, 2023
                  </p>
                </div>
                <div>
                  <p>
                    <b>Time:</b> 1:30 PM - 3:30 PM
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> JC Bose Auditorium
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-4 text-center mx-8 text-xs">
              <p>
                <b>Alpha &#40;1st Year Community&#41; WhatsApp Group:</b>{" "}
                <a
                  className="text-blue-600 hover:underline"
                  href="https://chat.whatsapp.com/Hgvn6rhASDK1Uu3zVHV6gP"
                  target="_blank"
                >
                  https://chat.whatsapp.com/Hgvn6rhASDK1Uu3zVHV6gP
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CBOOTCAMP;
