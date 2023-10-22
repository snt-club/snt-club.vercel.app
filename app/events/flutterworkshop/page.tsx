import React from "react";
import Image from "next/image";
import Link from "next/link";

import flutterworkshopposter from "@/assets/images/flutterworkshopposter.webp";

function FLUTTERWORKSHOP() {
  return (
    <>
      <header className="bg-[#0A146E] text-white text-base md:text-xl py-2 md:py-8">
        <div className="block md:flex justify-between align-middle font-bold px-8 md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1oyv4XthxUrS0X8FMbnFJav6hbaUN1l17/view?usp=share_link"
              target="_blank"
            >
              <p className="hover:text-gray-400 p-2 text-center">
                Notice
              </p>
            </Link>
          </div>
          <div className="max-md:w-fit max-md:mx-auto">
            <Link href="https://forms.gle/HS7EDai2LxHPd2pKA" target="_blank">
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
            Flutter Workshop
          </p>
        </div>
        <div className="block md:flex pt-4">
          <div className="mx-16 pb-8">
            <Image
              src={flutterworkshopposter}
              alt="Flutter Workshop"
              className="h-fit"
            />
          </div>
          <div className="h-fit my-auto">
            <div className="mx-16">
              <div className="text-lg md:text-2xl text-left lg:text-justify w-fit mx-auto">
                <p>
                  We are conducting an offline session on the topic Flutter.
                  <br />
                  <br />
                  In this session, you'll learn Dart programming while building
                  a Calculator app. No prior knowledge is required, making it
                  perfect also for beginners. You also can choose between Visual
                  Studio Code and Android Studio as your development
                  environment.
                  <br />
                  <br />
                  By the end of the session, you'll have a fully functional
                  Calculator app of your own. Don't forget to bring your
                  laptops. Make sure to download and Install Flutter on your
                  systems. We're here to assist with any questions or
                  installation hiccups.
                </p>
                <br />
                <p className="text-left">
                  Flutter Installation Process -{" "}
                  <Link
                    className="text-blue-600 underline"
                    href={"https://youtu.be/BqHOtlh3Dd4?si=U7A8LlTY8GjXnSa6"}
                  >
                    https://youtu.be/BqHOtlh3Dd4?si=U7A8LlTY8GjXnSa6
                  </Link>
                </p>
                <br />
              </div>
            </div>
            <div className="text-lg md:text-4xl mx-16">
              <div className="w-fit mx-auto text-left md:text-center">
                <div>
                  <p>
                    <b>Date:</b> 25 October, 2023
                  </p>
                </div>
                <div>
                  <p>
                    <b>Online:</b> 1:30PM to 3:30PM
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> 4F4 Civil Block
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

export default FLUTTERWORKSHOP;
