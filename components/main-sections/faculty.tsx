import Image from 'next/image';
import React from 'react';

import { sntTeamMember } from '@/teamConstants';

function faculty() {
  return (
    <section className="h-fit" id="faculty">
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div className="text-center">
          <span className="pt-4 text-3xl font-bold md:text-5xl">Faculty Coordinators</span>
        </div>
        <div className="w-full">
          <div className="mt-[10px] flex flex-wrap justify-evenly gap-4 text-[#0A146E] md:mt-[20px]">
            {sntTeamMember.map((memberDetails, index) => (
              <>
                {memberDetails.memberPost === 'Faculty_Coordinator' ? (
                  <div key={index}>
                    <div>
                      <div className="flex justify-center">
                        {memberDetails.memberPhoto === '' ? (
                          ''
                        ) : (
                          <Image src={memberDetails.memberPhoto} alt={index.toString()} className="rounded-full" />
                        )}
                      </div>
                      <div className="text-center">
                        <div>
                          <p className="pt-1 text-base font-bold md:text-xl">{memberDetails.memberName}</p>
                        </div>
                        <div>
                          <p className="text-base">
                            {memberDetails.memberRole}
                            <br />
                            {memberDetails.memberDepartment}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="hidden"></div>
                )}
              </>
            ))}
            {/* {sntTeamMember.map((memberDetails,index)=>(
              <>
              
              </>
            ))} */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default faculty;
