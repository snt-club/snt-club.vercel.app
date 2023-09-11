import Image from "next/image";
import React from "react";

import python from "@/assets/images/python.webp";
import linux from "@/assets/images/linux.webp";
import c from "@/assets/images/c.webp";
import course_play from "@/assets/svg/course-arrow.svg";
import Link from "next/link";

function section6() {
  return (
    <section className="h-fit p-4" id="resources">
      <div>
        <div className="text-center text-[#0A146E] px-2 md:px-8">
          <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
            Online Courses
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto w-full gap-4 px-4 md:px-12">
          <div className="border-2 rounded-xl">
            <div className="relative">
              <Image
                src={python}
                alt="Python Online Course"
                className="w-full rounded-t-xl"
              />
              <div className="text-[#0A146E] p-4">
                <div>
                  <p className="text-2xl font-bold">PYTHON</p>
                </div>
                <div>
                  <p>
                    Tutorials covering all the concepts of python language in
                    detail.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <Link href="/">
                  <Image
                    src={course_play}
                    alt="Python Course Link"
                    className="hover:scale-125 ease-in-out duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-xl">
            <div className="relative">
              <Image
                src={linux}
                alt="Linux Online Course"
                className="w-full rounded-t-xl"
              />
              <div className="text-[#0A146E] p-4">
                <div>
                  <p className="text-2xl font-bold">LINUX</p>
                </div>
                <div>
                  <p>
                    Tutorials covering all the basic linux command for
                    administration and file system handling.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <Link href="/">
                  <Image
                    src={course_play}
                    alt="Python Course Link"
                    className="hover:scale-125 ease-in-out duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-xl">
            <div className="relative">
              <Image
                src={c}
                alt="C Language Online Course"
                className="w-full rounded-t-xl"
              />
              <div className="text-[#0A146E] p-4">
                <div>
                  <p className="text-2xl font-bold">C Language</p>
                </div>
                <div>
                  <p>
                    Tutorials covering all the concepts of C language in detail.
                  </p>
                </div>
              </div>
              <div className="absolute bottom-1/4 right-1/4">
                <Link href="/">
                  <Image
                    src={course_play}
                    alt="Python Course Link"
                    className="hover:scale-125 ease-in-out duration-300"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section6;
