import Image from "next/image";
import React from "react";

import { sntTeamMember } from "@/teamConstants";

function faculty() {
  return (
    <section className="h-fit" id="faculty">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <span className="text-3xl md:text-5xl font-bold pt-4">
            Faculty Coordinators
          </span>
        </div>
        <div className="w-full ">
          <div className="text-[#0A146E] flex flex-wrap  justify-evenly gap-4 mt-[10px] md:mt-[20px]">
            {sntTeamMember.map((memberDetails, index) => (
              <>
                {memberDetails.memberPost === "Faculty_Coordinator" ? (
                  <div key={index}>
                    <div>
                      <div className="flex justify-center">
                        {memberDetails.memberPhoto === "" ? (
                          ""
                        ) : (
                          <Image
                            src={memberDetails.memberPhoto}
                            alt={index.toString()}
                            className=" rounded-full"
                          />
                        )}
                      </div>
                      <div className="text-center">
                        <div>
                          <p className="text-base md:text-xl font-bold pt-1">
                            {memberDetails.memberName}
                          </p>
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
