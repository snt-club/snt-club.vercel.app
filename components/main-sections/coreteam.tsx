import React from "react";
import Image from "next/image";
import Link from "next/link";
import Coreteamslider from '@/components/coreteamslider'

import shreyansh from "@/assets/people/shreyansh.png";
import chinkle from "@/assets/people/chinkle.png";
import instagram from "@/assets/svg/in.svg";
import linkedin from "@/assets/svg/li.svg";

const studentcoordinator = [
  {
    name: "Shreyansh Agrawal",
    profile_pic: shreyansh,
    year: "III yr",
    branch: "CSE",
    instagram_link: "https://www.instagram.com/sh_reyan_sh_/",
    linkedin_link: "https://www.linkedin.com/in/shreyansh-agarwal-1060a4222/",
  },
  {
    name: "Chinkle Rathore",
    profile_pic: chinkle,
    year: "III yr",
    branch: "CSE",
    role: "Development Head",
    instagram_link:
      "https://www.instagram.com/chinklerathore11/?igshid=MzRlODBiNWFlZA%3D%3D",
    linkedin_link: "https://www.linkedin.com/in/chinkle-rathore-7a5519252/",
  },
];



function coreTeam() {
  return (
    <section className="h-fit container mx-auto" id="coreteam">
      {/* Student Coordinator */}
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center text-[#0A146E]">
          <p className="text-3xl md:text-5xl font-bold pt-4">
            Student Coordinators
          </p>
        </div>
        <div className="text-[#0A146E] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 mt-[10px] md:mt-[20px]">
          {studentcoordinator.map((coordinator, index) => (
            <div key={index}>
              <div className="w-fit mx-auto">
                <Image
                  src={coordinator.profile_pic}
                  alt={coordinator.name}
                  width={150}
                  className="rounded-full"
                />
              </div>
              <div className="mt-[10px] text-center">
                <span className="text-base md:text-xl font-bold">{coordinator.name}</span>
              </div>
              <div className="w-fit mx-auto">
                <div>
                  <span>{coordinator.year},</span>
                </div>
                <div>
                  <span>&nbsp;{coordinator.branch}</span>
                </div>
              </div>
              <div className="flex justify-center gap-5">
                <div>
                  <Link href={coordinator.instagram_link} target="_blank">
                    <Image
                      src={instagram}
                      alt="Instagram"
                      width={30}
                      className="hover:scale-110 duration-150"
                    />
                  </Link>
                </div>
                <div>
                  <Link href={coordinator.linkedin_link} target="_blank">
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
          ))}
        </div>
      </div>

      {/* Core Team */}
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-3xl md:text-5xl font-bold pt-4">
            Student Heads
          </p>
        </div>
        <div className="flex justify-center mx-auto">
          <Coreteamslider/>
        </div>
      </div>
    </section>
  );
}

export default coreTeam;
