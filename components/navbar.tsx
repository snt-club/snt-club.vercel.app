import Image from "next/image";
import React from "react";
import Link from "next/link";
import Hamburger from "./hanmburger";

// Images EE4B76
import sntLogo from "@/assets/icons/snt-logo.png";

function navbar() {
  return (
    <header className="bg-[#0A146E]">
      <div className="h-fit container mx-auto">
        <div className="w-full h-fit  grid grid-cols-1 lg:grid-cols-2 px-8 text-white font-semibold max-sm:flex-col py-4">
          <div className="flex justify-between items-center ease-in-out">
            <div>
              <Link href="/">
                <Image src={sntLogo} alt="S&T Logo" className="w-auto h-12" />
              </Link>
            </div>
            <Hamburger />
          </div>
          <nav className="flex justify-end items-center">
            <ul className="hidden lg:flex gap-x-4 justify-end" id="mob-navbar">
              <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center">
                <Link href="/">Home</Link>
              </li>
              <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center">
                <Link href="#about">About</Link>
              </li>
              <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center">
                <Link href="#resources">Resources</Link>
              </li>
              <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center">
                <Link href="#footer">Contact Us</Link>
              </li>
              <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 border px-2 rounded-md bg-[#EE4B76] border-[#EE4B76] hover:bg-[#0A146E]">
                <Link href="#events">Events</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default navbar;
