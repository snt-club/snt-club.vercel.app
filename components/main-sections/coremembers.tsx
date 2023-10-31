import Link from "next/link";
import React from "react";

import { sntTeamMember } from "@/teamConstants";

function coremembers() {
  return (
    <section className="h-fit container mx-auto">
      <div className="bg-[#D9E4F7]">
        <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
          <div className="text-center">
            <p className="text-3xl md:text-5xl font-bold pt-4">Team Members</p>
          </div>
          <div className="flex flex-wrap justify-between gap-x-[80px] mt-[10px] md:mt-[20px]">
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
                  Development Team
                </p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === "Student_Team" &&
                    memberDetails.memberTeam == "Development_Team" ? (
                      <Link
                        key={index}
                        href={memberDetails.memberLinkedin}
                        target="_blank"
                      >
                        <p className="text-xs md:text-sm hover:underline">
                          {memberDetails.memberName}
                        </p>
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
                  Tutor Team
                </p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === "Student_Team" &&
                    memberDetails.memberTeam == "Tutor_Team" ? (
                      <Link
                        key={index}
                        href={memberDetails.memberLinkedin}
                        target="_blank"
                      >
                        <p className="text-xs md:text-sm hover:underline">
                          {memberDetails.memberName}
                        </p>
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
                  Designing Team
                </p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === "Student_Team" &&
                    memberDetails.memberTeam == "Design_Team" ? (
                      <Link
                        key={index}
                        href={memberDetails.memberLinkedin}
                        target="_blank"
                      >
                        <p className="text-xs md:text-sm hover:underline">
                          {memberDetails.memberName}
                        </p>
                      </Link>
                    ) : (
                      ""
                    )}
                  </>
                ))}
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
                  Content Team
                </p>
              </div>
              <div>
                {sntTeamMember.map((memberDetails, index) => (
                  <>
                    {memberDetails.memberPost === "Student_Team" &&
                    memberDetails.memberTeam == "Content_Team" ? (
                      <Link
                        key={index}
                        href={memberDetails.memberLinkedin}
                        target="_blank"
                      >
                        <p className="text-xs md:text-sm hover:underline">
                          {memberDetails.memberName}
                        </p>
                      </Link>
                    ) : (
                      ""
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
