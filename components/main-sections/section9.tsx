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
import instagram from "@/assets/svg/in.svg";
import linkedin from "@/assets/svg/li.svg";

function section9() {
  return (
    <section className="h-fit p-4">
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Student Coordinators
          </p>
        </div>
        <div className="text-[#0A146E] grid grid-cols-1 md:grid-cols-2 gap-y-8 pb-4">
          <div>
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
                <p className="text-lg">III Yr, CSE</p>
              </div>
              <div className="flex gap-2 justify-center">
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
          <div>
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
                <p className="text-2xl font-bold pb-2 pt-1">Chinkle Rathore</p>
              </div>
              <div>
                <p className="text-lg">III Yr, CSE</p>
              </div>

              <div className="flex gap-2 justify-center">
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
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Student Heads
          </p>
        </div>
        <div className="container mx-auto">
          <div className="text-[#0A146E] grid grid-flow-col auto-cols-max gap-8 overflow-scroll">
            <div>
              <div>
                <Image
                  src={vanshaj}
                  alt="Development Head - Vanshaj Kataria"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">
                    Vanshaj Kataria
                  </p>
                </div>
                <div>
                  <p className="text-lg">III Yr, ECE</p>
                  <p className="text-lg">Development Head</p>
                </div>

                <div className="flex gap-2 justify-center">
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
            <div>
              <div>
                <Image
                  src={somya}
                  alt="Student Coordinator - Chinkle Rathore"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Somya Jain</p>
                </div>
                <div>
                  <p className="text-lg">III Yr, CSE</p>
                  <p className="text-lg">Management Head</p>
                </div>

                <div className="flex gap-2 justify-center">
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
                  alt="Student Coordinator - Chinkle Rathore"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Unique Paliwal</p>
                </div>
                <div>
                  <p className="text-lg">III Yr, CSE</p>
                  <p className="text-lg">Tutor Head</p>
                </div>

                <div className="flex gap-2 justify-center">
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
                  alt="Student Coordinator - Chinkle Rathore"
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
                  <p className="text-lg">III Yr, CSE</p>
                  <p className="text-lg">Content Head</p>
                </div>

                <div className="flex gap-2 justify-center">
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
                  alt="Student Coordinator - Chinkle Rathore"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Parth Jain</p>
                </div>
                <div>
                  <p className="text-lg">III Yr, CSE</p>
                  <p className="text-lg">Design Head</p>
                </div>

                <div className="flex gap-2 justify-center">
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
                  alt="Student Coordinator - Chinkle Rathore"
                  width={125}
                  className="mx-auto rounded-full"
                />
              </div>
              <div className="text-center">
                <div>
                  <p className="text-2xl font-bold pb-2 pt-1">Simran Rawat</p>
                </div>
                <div>
                  <p className="text-lg">III Yr, CSE</p>
                  <p className="text-lg">Social Media/PR Head</p>
                </div>

                <div className="flex gap-2 justify-center">
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

export default section9;
