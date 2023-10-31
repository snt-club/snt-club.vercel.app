import React from "react";
import Image from "next/image";
import Link from "next/link";
import Coreteamslider from "@/components/coreteamslider";

import instagram from "@/assets/svg/in.svg";
import linkedin from "@/assets/svg/li.svg";

import { sntTeamMember } from "@/teamConstants";

function coreTeam() {
  return (
    <section className="h-fit container mx-auto" id="coreteam">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center text-[#0A146E]">
          <p className="text-3xl md:text-5xl font-bold pt-4">
            Student Coordinators
          </p>
        </div>
        <div className="text-[#0A146E] flex flex-wrap justify-evenly gap-8 md:gap-24 mt-[10px] md:mt-[20px]">
          {sntTeamMember.map((memberDetails, index) => (
            <>
              {memberDetails.memberPost === "Student_Coordinator" ? (
                <div key={index}>
                  <div className="w-fit mx-auto">
                    <Image
                      src={memberDetails.memberPhoto}
                      alt={index.toString()}
                      width={150}
                      className="rounded-full"
                    />
                  </div>
                  <div className="mt-[10px] text-center">
                    <span className="text-base md:text-xl font-bold">
                      {memberDetails.memberName}
                    </span>
                  </div>
                  <div className="w-fit mx-auto">
                    <div>
                      <span>{memberDetails.memberYear},&nbsp;{memberDetails.memberBranch}</span>
                    </div>
                  </div>
                  <div className="flex justify-center gap-5 mt-[10px]">
                    <div>
                      <Link href={memberDetails.memberInsta} target="_blank">
                        <Image
                          src={instagram}
                          alt="Instagram"
                          width={30}
                          className="hover:scale-110 duration-150"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link href={memberDetails.memberLinkedin} target="_blank">
                        <Image
                          src={linkedin}
                          alt="LinkedIn"
                          width={30}
                          className="hover:scale-110 duration-150"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          ))}
        </div>
      </div>

      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold pt-4">Student Heads</p>
        </div>
        <div className="flex justify-center mx-auto">
          <Coreteamslider />
        </div>
      </div>
    </section>
  );
}

export default coreTeam;
