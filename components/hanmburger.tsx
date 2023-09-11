'use client'

import { useState } from 'react';
import Link from 'next/link';

const MenuButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        className="text-white p-2 focus:outline-none"
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <nav className="bg-[#0A146E] mt-2 p-2 items-center absolute right-0 left-0 px-8 py-2 z-50">
        <ul className="flex max-sm:flex-col justify-between max-sm:justify-end">
          <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center w-fit">
            <Link href="/" className='w-full'>Home</Link>
          </li>
          <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center w-fit">
            <Link href="/" className='w-full'>About</Link>
          </li>
          <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center w-fit">
            <Link href="/" className='w-full'>Resources</Link>
          </li>
          <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 flex items-center w-fit">
            <Link href="/" className='w-full'>Contact Us</Link>
          </li>
          <li className="hover:scale-110 hover:text-[#EE4B76] ease-in-out duration-300 border rounded-md bg-[#EE4B76] border-[#EE4B76] hover:bg-[#0A146E] w-fit px-2">
            <Link href="/" className='w-fit'>Events</Link>
          </li>
        </ul>
      </nav>
      )}
    </div>
  );
};

export default MenuButton;
