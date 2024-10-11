import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import sponsorLogo1 from 'assets/images/sponsor.svg';

=======
import RegisterBtn from '@/components/registerBtn';

import codeformers from '@/assets/images/codeformer.jpg';

function codeformer() {
  return (
    <>
      <header className="bg-[#0A146E] py-2 text-base text-white md:py-8 md:text-xl">
        <div className="block justify-between px-8 align-middle font-bold md:flex md:px-36">
          <div>
            <Link
              href="https://drive.google.com/file/d/1AF5rmFB_RQ0qer5p_LJcPHlYr1FoD4F3/view?usp=drive_link"
              target="_blank"
            >
              <p className="p-2 text-center hover:text-gray-400">Notice</p>
            </Link>
          </div>
          <div className="max-md:mx-auto max-md:w-fit">
            <Link href="https://forms.gle/uArdA94fbAUCgbsz6" target="_blank">
              <RegisterBtn/>
            </Link>
          </div>
        </div>
      </header>
      <div className="container mx-auto my-4">
        
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl">Codeformers</p>
        </div>
        <div className="block md:flex">
          <div className="mx-16 pb-8">
            <Image src={codeformers} alt="codeformers" className="w-fit" />
          </div>
          <div className="my-auto h-fit">
            <div className="mx-16">
              <div className="mx-auto w-fit text-left text-lg md:text-2xl lg:text-justify">
                <p>Codeformers , our monthly coding competition! Showcase your skill and grab the top spot.</p>
                <br />
                <p className="text-left ">
                  Join us for: <br />
                  • Skill Growth 🚀 <br />
                  • Network Opportunities 🤝 <br />
                  • Exciting Prizes 🎉<br />• Fun Competitions 🏆
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
                    <span className="text-[18px] font-semibold">Last Wednesday Of Every Month</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Time</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">01:45 PM - 02:45 PM</span>
                  </div>
                </div>
                <div className="mt-1">
                  <div className="text-[14px] text-gray-500">
                    <span>Venue</span>
                  </div>
                  <div>
                    <span className="text-[18px] font-semibold">CL-1 & CL-3 (CS Block)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mx-16 my-4 text-center">
          <p className="rounded-xl bg-[#0A146E] text-2xl font-bold text-yellow-400 lg:text-6xl w-">Sponsored By</p>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            
            <div className="m-4">
              <a href='https://linktr.ee/uniartskillsacademy'>
  <Image src={sponsorLogo1} alt="Sponsor 1"  width={500} height = {200}/></a>
</div>



            
          </div>
        </div>
      </div>
    </>
  );
}

export default codeformer;