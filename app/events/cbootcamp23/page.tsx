import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import cbootcampposter from '@/assets/images/cbootcampposter.webp';

function CBOOTCAMP() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/10Yj7YIt464DSrsc6PrTFuwxgULbp644s/view?usp=share_link"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/KjCB38P1Y1XmskC47" target="_blank">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">
            C PROGRAMMING BOOTCAMP
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={cbootcampposter} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>C language is the foundation of programming, and we're here to strengthen your skills.</p>
                <br />
                <p className="text-left md:text-center">
                  Join us for: <br />
                  • Both online and offline classes 💻 <br />
                  • Fun problem-solving activities 🧑‍💻 <br />
                  • Engaging assignments 📙 <br />• Helpful doubt-solving sessions 📚
                </p>
                <br />
              </div>
            </div>
            <div className="mx-16 text-lg md:text-4xl">
              <div className="mx-auto w-fit text-left md:text-center">
                <div>
                  <p>
                    <b>Starting:</b> 25 September, 2023
                  </p>
                </div>
                <div>
                  <p>
                    <b>Offline:</b> Wednesday 1:30PM - 3:30PM, at 4F4
                  </p>
                  <p>
                    <b>Online:</b> Monday and Saturday, 5:30PM to 7:00PM
                  </p>
                </div>
                <div>
                  <p>
                    <b>Venue:</b> Hybrid
                  </p>
                </div>
              </div>
            </div>
            <div className="mx-8 pt-4 text-center text-sm sm:text-xl">
              <p>
                <b>C Bootcamp WhatsApp Group: </b>
                <a
                  className="text-blue-600 hover:underline"
                  href="https://chat.whatsapp.com/Jl6VFqm6t7h1sgyA63hrfW"
                  target="_blank"
                >
                  https://chat.whatsapp.com/Jl6VFqm6t7h1sgyA63hrfW
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
