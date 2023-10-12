import React from "react";
import Image from "next/image";
import Link from "next/link";

import windowsproposter from "@/assets/images/windowspro.webp";

function WINDOWSPRO() {
  return (
    <>
      <header className="bg-[#0A146E]  text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/10Yj7YIt464DSrsc6PrTFuwxgULbp644s/view?usp=share_link"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center hidden">
                Notice
              </p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/1venQH8NjW1XETSSA" target="_blank">
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
            Windows Power User
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image
              src={windowsproposter}
              alt="Aarambh 2023"
              className="w-fit"
            />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                  We'll show you how to use your PC like a pro, covering topics
                  such as mastering Windows shortcuts, optimizing system
                  performance, personalizing your desktop, enhancing security
                  and privacy, and discovering hidden Windows power tools (like
                  PowerToys).
                  <br />
                  This event is perfect for all the Windows users, or anyone
                  looking to boost their PC skills.
                </p>
                <br />
              </div>
            </div>
            <div className="text-lg md:text-4xl mx-16">
              <div className="w-fit mx-auto text-left md:text-center">
                <div>
                  <p>
                    <b>Date:</b> 13 October, 2023
                  </p>
                </div>
                <div>
                  <p>
                    <b>Online:</b> 6:00PM to 7:00PM
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> Online
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WINDOWSPRO;
