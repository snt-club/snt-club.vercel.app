import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Coreteamslider from '@/components/coreteamslider';

import instagram from '@/assets/svg/in.svg';
import linkedin from '@/assets/svg/li.svg';

import { sntTeamMember } from '@/teamConstants';

function coreTeam() {
  return (
    <section className="container mx-auto h-fit" id="coreteam">
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div className="text-center text-[#0A146E]">
          <p className="pt-4 text-3xl font-bold md:text-5xl">Student Coordinators</p>
        </div>
        <div className="mt-[10px] flex flex-wrap justify-evenly gap-8 text-[#0A146E] md:mt-[20px] md:gap-24">
          {sntTeamMember.map((memberDetails, index) => (
            <>
              {memberDetails.memberPost === 'Student_Coordinator' ? (
                <div key={index}>
                  <div className="mx-auto w-fit">
                    <Image
                      src={memberDetails.memberPhoto}
                      alt={index.toString()}
                      width={150}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <div className="mt-[10px] text-center">
                    <span className="text-base font-bold md:text-xl">{memberDetails.memberName}</span>
                  </div>
                  <div className="mx-auto w-fit">
                    <div>
                      <span>
                        {memberDetails.memberYear},&nbsp;
                        {memberDetails.memberBranch}
                      </span>
                    </div>
                  </div>
                  <div className="mt-[10px] flex justify-center gap-5">
                    <div>
                      <Link href={memberDetails.memberInsta} target="_blank">
                        <Image src={instagram} alt="Instagram" width={30} className="duration-150 hover:scale-110" />
                      </Link>
                    </div>
                    <div>
                      <Link href={memberDetails.memberLinkedin} target="_blank">
                        <Image src={linkedin} alt="LinkedIn" width={30} className="duration-150 hover:scale-110" />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ''
              )}
            </>
          ))}
        </div>
      </div>

      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div className="text-center">
          <p className="pt-4 text-3xl font-bold md:text-5xl">Student Heads</p>
        </div>
        <div className="mx-auto flex justify-center">
          <Coreteamslider />
        </div>
      </div>
    </section>
  );
}

export default coreTeam;
