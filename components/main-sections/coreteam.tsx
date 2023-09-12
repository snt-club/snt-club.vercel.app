import React from "react";
import Image from "next/image";
import Link from "next/link";

import shreyansh from "@/assets/people/shreyansh.png";
import chinkle from "@/assets/people/chinkle.png";
import vanshaj from "@/assets/people/vanshaj.png";
import somya from "@/assets/people/somya.png";
import unique from "@/assets/people/unique.png";
import shailesh from "@/assets/people/shailesh.png";
import parth from "@/assets/people/parth.png";
import simran from "@/assets/people/simran.png";
import laveena from "@/assets/people/laveena.png";
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

const studenthead = [
  {
    name: "Vanshaj Kataria",
    profile_pic: vanshaj,
    alt: "Development Head - Vanshaj Kataria",
    year: "III yr",
    branch: "ECE",
    role: "Development Head",
    instagram_link: "https://www.instagram.com/vanshaj_kataria/",
    linkedin_link: "https://www.linkedin.com/in/vanshaj-kataria/",
  },
  {
    name: "Somya Jain",
    profile_pic: somya,
    alt: "Management Head - Somya Jain",
    year: "III yr",
    branch: "CSE",
    role: "Management Head",
    instagram_link: "https://www.instagram.com/somyaa_jain08/",
    linkedin_link: "https://www.linkedin.com/in/somya-jain-76b230223/",
  },
  {
    name: "Unique Paliwal",
    profile_pic: unique,
    alt: "Tutor Head - Unique Paliwal",
    year: "III yr",
    branch: "CSE",
    role: "Tutor Head",
    instagram_link: "https://www.instagram.com/paliwalunique/",
    linkedin_link: "https://www.linkedin.com/in/unique-paliwal-6a3456226/",
  },
  {
    name: "Shailesh Purohit",
    profile_pic: shailesh,
    alt: "Content Head - Shailesh Purohit",
    year: "III yr",
    branch: "CSE",
    role: "Content Head",
    instagram_link: "https://www.instagram.com/bhaba_shailesh.raj/",
    linkedin_link: "https://www.linkedin.com/in/shailesh-purohit-9917291b7/",
  },
  {
    name: "Parth Jain",
    profile_pic: parth,
    alt: "Design Head - Parth Jain",
    year: "III yr",
    branch: "CSE",
    role: "Design Head",
    instagram_link: "https://www.instagram.com/art_at_adobe/",
    linkedin_link: "https://www.linkedin.com/in/parth-jain-b95182214/",
  },
  {
    name: "Simran Rawat",
    profile_pic: simran,
    alt: "Social Media/PR Head - Simran Rawat",
    year: "III yr",
    branch: "CSE",
    role: "Social Media/PR Head",
    instagram_link: "https://www.instagram.com/simranrawat2513/",
    linkedin_link: "https://www.linkedin.com/in/simran-rawat-150554214/",
  },
  {
    name: "Laveena Goyal",
    profile_pic: laveena,
    alt: "Technical Head - Laveena Goyal",
    year: "III yr",
    branch: "CSE",
    role: "Technical Head",
    instagram_link: "https://www.instagram.com/lavigoyal8303/",
    linkedin_link: "https://www.linkedin.com/in/laveena-goyal-05680b223/",
  },
];

function coreTeam() {
  return (
    <section className="h-fit container mx-auto">
      {/* Student Coordinator */}
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center text-[#0A146E]">
          <p className="text-2xl md:text-6xl font-extrabold pt-4">
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
                <span className="text-2xl font-bold">{coordinator.name}</span>
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
          <p className="text-2xl md:text-6xl font-extrabold pt-4">
            Student Heads
          </p>
        </div>
        <div className="flex justify-center mx-auto">
          <div className="text-[#0A146E] grid grid-flow-col auto-cols-max h-fit gap-8 lg:gap-16 overflow-y-scroll scroll-smooth team-scroll snap-x scroll-ml-12 scroll-pl-12">
            {studenthead.map((coordinator, index) => (
              <div key={index} className="snap-start p-4 lg:p-16">
                <div className="w-fit mx-auto">
                  <Image
                    src={coordinator.profile_pic}
                    alt={coordinator.alt}
                    width={150}
                    className="mx-auto rounded-full"
                  />
                </div>
                <div className="mt-[10px] text-center">
                  <p className="text-2xl font-bold">{coordinator.name}</p>
                </div>
                <div className="w-fit mx-auto">
                  <div>
                    <p>{coordinator.year},</p>
                  </div>
                  <div>
                    <p>&nbsp;{coordinator.branch}</p>
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
      </div>
    </section>
  );
}

export default coreTeam;
