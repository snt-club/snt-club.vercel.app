import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import Hamburger from './hanmburger';

// Images EE4B76
import sntLogo from '@/assets/icons/snt-logo.png';

function navbar() {
  return (
    <header className="bg-[#0A146E]">
      <div className="container mx-auto h-fit">
        <div className="grid h-fit w-full grid-cols-1 px-8 py-4 font-semibold text-white max-sm:flex-col lg:grid-cols-2">
          <div className="flex items-center justify-between ease-in-out">
            <div>
              <Link href="/">
                <Image src={sntLogo} alt="S&T Logo" className="h-12 w-auto" />
              </Link>
            </div>
            <Hamburger />
          </div>
          <nav className="flex items-center justify-end">
            <ul className="hidden justify-end gap-x-4 lg:flex" id="mob-navbar">
              <li className="flex items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
                <Link href="/">Home</Link>
              </li>
              <li className="flex items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
                <Link href="/#about">About</Link>
              </li>
              <li className="flex items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
                <Link href="/#resources">Resources</Link>
              </li>
              <li className="flex items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
                <Link href="/#footer">Contact Us</Link>
              </li>
              <li className="rounded-md border border-[#EE4B76] bg-[#EE4B76] px-2 duration-300 ease-in-out hover:scale-110 hover:bg-[#0A146E] hover:text-[#EE4B76]">
                <Link href="/#events">Events</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default navbar;
