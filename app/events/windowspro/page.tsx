import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import windowsproposter from '@/assets/images/windowspro.webp';

function WINDOWSPRO() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/10Yj7YIt464DSrsc6PrTFuwxgULbp644s/view?usp=share_link"
              target="_blank"
            >
              <p className="hidden p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/1venQH8NjW1XETSSA" target="_blank">
              <button className="rounded-full border border-white bg-white p-2 text-center text-[#0A146E] duration-300 ease-in-out hover:bg-transparent hover:text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">Windows Power User</p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={windowsproposter} alt="Aarambh 2023" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  We'll show you how to use your PC like a pro, covering topics such as mastering Windows shortcuts,
                  optimizing system performance, personalizing your desktop, enhancing security and privacy, and
                  discovering hidden Windows power tools (like PowerToys).
                  <br />
                  This event is perfect for all the Windows users, or anyone looking to boost their PC skills.
                </p>
                <br />
              </div>
            </div>
            <div className="mx-16 text-lg md:text-4xl">
              <div className="mx-auto w-fit text-left md:text-center">
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
