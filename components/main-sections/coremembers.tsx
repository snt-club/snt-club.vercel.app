import Link from 'next/link';
import React from 'react';

import { sntTeamMember } from '@/teamConstants';

function coremembers() {
  return (
    <section className="container mx-auto min-w-full h-fit">
      <div className="bg-[#D9E4F7]">
        <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
          <div className="text-center">
            <p className="pt-4 text-3xl font-bold md:text-5xl">Team Members</p>
          </div>
          <div className="mt-[10px] grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-x-20 md:mt-10">
            <div className="mx-auto w-fit p-4 text-center">
              <div>
                <p className="mb-4 text-base font-semibold md:text-xl">Development Team</p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === 'Student_Team' && memberDetails.memberTeam == 'Development_Team' ? (
                      <Link key={index} href={memberDetails.memberLinkedin} target="_blank">
                        <p className="text-xs hover:underline md:text-sm">{memberDetails.memberName}</p>
                      </Link>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="mx-auto w-fit p-4 text-center">
              <div>
                <p className="mb-4 text-base font-semibold md:text-xl">Designing Team</p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === 'Student_Team' && memberDetails.memberTeam == 'Design_Team' ? (
                      <Link key={index} href={memberDetails.memberLinkedin} target="_blank">
                        <p className="text-xs hover:underline md:text-sm">{memberDetails.memberName}</p>
                      </Link>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="mx-auto w-fit p-4 text-center">
              <div>
                <p className="mb-4 text-base font-semibold md:text-xl">Tutor Team</p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === 'Student_Team' && memberDetails.memberTeam == 'Tutor_Team' ? (
                      <Link key={index} href={memberDetails.memberLinkedin} target="_blank">
                        <p className="text-xs hover:underline md:text-sm">{memberDetails.memberName}</p>
                      </Link>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="mx-auto w-fit p-4 text-center">
              <div>
                <p className="mb-4 text-base font-semibold md:text-xl">Management and Event Team</p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === 'Student_Team' && memberDetails.memberTeam == 'event_team' ? (
                      <Link key={index} href={memberDetails.memberLinkedin} target="_blank">
                        <p className="text-xs hover:underline md:text-sm">{memberDetails.memberName}</p>
                      </Link>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="mx-auto w-fit p-4 text-center">
              <div>
                <p className="mb-4 text-base font-semibold md:text-xl">Content Team</p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === 'Student_Team' && memberDetails.memberTeam == 'content_Team' ? (
                      <Link key={index} href={memberDetails.memberLinkedin} target="_blank">
                        <p className="text-xs hover:underline md:text-sm">{memberDetails.memberName}</p>
                      </Link>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="mx-auto w-fit p-4 text-center">
              <div>
                <p className="mb-4 text-base font-semibold md:text-xl">Editing Team</p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === 'Student_Team' && memberDetails.memberTeam == 'editing_Team' ? (
                      <Link key={index} href={memberDetails.memberLinkedin} target="_blank">
                        <p className="text-xs hover:underline md:text-sm">{memberDetails.memberName}</p>
                      </Link>
                    ) : (
                      ''
                    )}
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default coremembers;
