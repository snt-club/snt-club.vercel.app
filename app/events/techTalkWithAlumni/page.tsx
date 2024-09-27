import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import alumniSessionpng from '@/assets/images/alumniSession.jpg';

function alumniSession() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1Ze9QRoVwlmlqxH7HVwTPjS0OqwEjdIAP/view?usp=sharing"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/GQnzxZyZvfSwvh5p6" target="_blank">
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
            Tech Talk With Alumni
          </p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={alumniSessionpng} alt="alumniSession" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>
                  The Science and Technology Club is excited to invite you to our Tech Talk with Alumni - an exclusive
                  online session where you'll get to interact with our former club members who are now thriving in the
                  tech industry! 🌐👩‍💻
                </p>
                <br />
                <p className="text-left">
                  Join us for: <br />
                  • Learn from real-world experiences  🚀 <br />
                  • Gain valuable career insights  🤝 <br />
                  • Ask questions about career paths, projects, and industry trends 🎉<br />
                  • Get inspired by alumni success stories! 🏆
                </p>
                <br />
              </div>
            </div>
            <div className="flex justify-center">
              <div className="text-center">
                <div>
                  <div className="text-[14px] text-gray-500">
                    <span>Date</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">28th September 2024 </span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">5:00 PM Onwards</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">Online</span>
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

export default alumniSession;
