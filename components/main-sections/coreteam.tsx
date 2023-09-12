import Image from "next/image";
import React from "react";
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

function coreTeam() {
  return (
    <section className="h-fit container mx-auto">
      <div className="p-8">
        <div className="text-center text-[#0A146E]">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Student Coordinators
          </p>
        </div>
        <div className="">
          <div className="text-[#0A146E] grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24">
            <div className="w-fit mx-auto">
              <div>
                <Image
                  src={shreyansh}
                  alt="Student Coordinator - Shreyansh Agarwal"
                  width={150}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">
                    Shreyansh Agrawal
                  </p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                </div>
                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/sh_reyan_sh_/"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/shreyansh-agarwal-1060a4222/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-fit mx-auto">
              <div>
                <Image
                  src={chinkle}
                  alt="Student Coordinator - Chinkle Rathore"
                  width={150}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">
                    Chinkle Rathore
                  </p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/chinklerathore11/?igshid=MzRlODBiNWFlZA%3D%3D"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/chinkle-rathore-7a5519252/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="text-center text-[#0A146E]">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Student Heads
          </p>
        </div>
        <div className="flex justify-center">
          <div className="text-[#0A146E] grid grid-flow-col auto-cols-max gap-8 overflow-scroll team-scroll">
            <div>
              <div>
                <Image
                  src={vanshaj}
                  alt="Development Head - Vanshaj Kataria"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div>
                <div className="w-fit mx-auto">
                  <p className="text-2xl font-bold pb-2 pt-1 text-center">
                    Vanshaj Kataria
                  </p>
                </div>
                <div className="w-fit mx-auto text-center">
                  <p className="text-base">III Yr, ECE</p>
                  <p className="text-base">Development Head</p>
                </div>
                <div className="w-fit mx-auto">
                  <div className="gap-6 flex">
                    <div>
                      <Link
                        href="https://www.instagram.com/vanshaj_kataria/"
                        target="_blank"
                      >
                        <Image
                          src={instagram}
                          alt="Instagram"
                          width={30}
                          className="hover:scale-110 ease-in-out duration-300"
                        />
                      </Link>
                    </div>
                    <div>
                      <Link
                        href="https://www.linkedin.com/in/vanshaj-kataria-3730731b2/"
                        target="_blank"
                      >
                        <Image
                          src={linkedin}
                          alt="LinkedIn"
                          width={30}
                          className="hover:scale-110 ease-in-out duration-300"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src={somya}
                  alt="Management Head - Somya Jain"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Somya Jain</p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                  <p className="text-base">Management Head</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/somyaa_jain08/"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/somya-jain-76b230223/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src={unique}
                  alt="Tutor Head - Unique Paliwal"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Unique Paliwal</p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                  <p className="text-base">Tutor Head</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/paliwalunique/"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/unique-paliwal-6a3456226/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src={shailesh}
                  alt="Content Head - Shailesh Purohit"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">
                    Shailesh Purohit
                  </p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                  <p className="text-base">Content Head</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/bhaba_shailesh.raj/"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/shailesh-purohit-9917291b7/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src={parth}
                  alt="Design Head - Parth Jain"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Parth Jain</p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                  <p className="text-base">Design Head</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/art_at_adobe/?igshid=YmMyMTA2M2Y%3D"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/parth-jain-b95182214/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src={simran}
                  alt="Social Media/PR Head - Simran Rawat"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Simran Rawat</p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                  <p className="text-base">Social Media/PR Head</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/simranrawat2513/?igshid=NGExMmI2YTkyZg%3D%3D"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/simran-rawat-150554214/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <Image
                  src={laveena}
                  alt="Technical Head - Laveena Goyal"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Laveena Goyal</p>
                </div>
                <div>
                  <p className="text-base">III Yr, CSE</p>
                  <p className="text-base">Technical Head</p>
                </div>

                <div className="flex gap-6 justify-center">
                  <div>
                    <Link
                      href="https://www.instagram.com/lavigoyal8303/"
                      target="_blank"
                    >
                      <Image
                        src={instagram}
                        alt="Instagram"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                  <div>
                    <Link
                      href="https://www.linkedin.com/in/laveena-goyal-05680b223/"
                      target="_blank"
                    >
                      <Image
                        src={linkedin}
                        alt="LinkedIn"
                        width={30}
                        className="hover:scale-110 ease-in-out duration-300"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Faculty Coordinators
          </p>
        </div>
        </div> */}
    </section>
  );
}

export default coreTeam;
