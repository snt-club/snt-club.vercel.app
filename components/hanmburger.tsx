'use client';

import { useState } from 'react';
import Link from 'next/link';

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button className="p-2 text-white focus:outline-none" onClick={toggleMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>
      {isOpen && (
        <nav className="absolute left-0 right-0 z-50 mt-2 items-center bg-[#0A146E] p-2 px-8 py-2">
          <ul className="flex justify-between max-sm:flex-col max-sm:justify-end">
            <li className="flex w-fit items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
              <Link href="/" className="w-full">
                Home
              </Link>
            </li>
            <li className="flex w-fit items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
              <Link href="/#about" className="w-full">
                About
              </Link>
            </li>
            <li className="flex w-fit items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
              <Link href="/#resources" className="w-full">
                Resources
              </Link>
            </li>
            <li className="flex w-fit items-center duration-300 ease-in-out hover:scale-110 hover:text-[#EE4B76]">
              <Link href="/#footer" className="w-full">
                Contact Us
              </Link>
            </li>
            <li className="w-fit rounded-md border border-[#EE4B76] bg-[#EE4B76] px-2 duration-300 ease-in-out hover:scale-110 hover:bg-[#0A146E] hover:text-[#EE4B76]">
              <Link href="/#events" className="w-fit">
                Events
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default MenuButton;
