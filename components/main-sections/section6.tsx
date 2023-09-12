import Image from "next/image";
import React from "react";

import python from "@/assets/images/python.webp";
import linux from "@/assets/images/linux.webp";
import c from "@/assets/images/c.webp";
import course_button from "@/assets/svg/course-arrow.svg";
import Link from "next/link";

const online_course = [
  {
    name: "Python",
    img: python,
    course_link:
      "https://www.youtube.com/watch?v=3qUtoMz8snk&list=PL5ypxwCMSutByMEIf2DYLnW2JZKBTUZQP",
    course_desc:
      "Tutorials covering all the concepts of Python language in detail.",
  },
  {
    name: "Linux",
    img: linux,
    course_link:
      "https://www.youtube.com/watch?v=3qUtoMz8snk&list=PL5ypxwCMSutByMEIf2DYLnW2JZKBTUZQP",
    course_desc:
      "Tutorials covering all the basic linux command for administration and file system handling.",
  },
  {
    name: "C",
    img: c,
    course_link:
      "https://www.youtube.com/watch?v=8Y9QaGx3-qI&list=PL5ypxwCMSutAzvXwGb8VD8CfqEQhL0lud",
    course_desc: "Tutorials covering all the concepts of C language in detail.",
  },
];

function section6() {
  return (
    <section className="h-fit p-4" id="resources">
      <div className="text-center mt-[20px]">
        <span className="font-extrabold text-[36px] md:text-[48px] text-[#022f84]">
          Online Courses
        </span>
      </div>
      <div className="flex flex-wrap justify-evenly mt-[20px] mx-[20px]">
        {online_course.map((course, index) => (
          <div key={index} className="border-2  w-[400px]  rounded-[20px]">
            <div className="-z-10">
              <Image
                src={course.img}
                alt={course.name}
                className="rounded-t-[20px]"
              />
            </div>
            <div className="-mt-[20px] md:-mt-[30px] ml-[70%] ">
              <Link href={course.course_link} target="blank">
                <Image
                  src={course_button}
                  alt="button"
                  className="w-[40px] md:w-[60px] hover:scale-110 duration-200"
                />
              </Link>
            </div>
            <div className="px-[20px] pb-[20px]">
              <div>
                <span className="text-[30px] font-bold text-[#022f84] uppercase">
                  {course.name}
                </span>
              </div>
              <div>
                <span>{course.course_desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default section6;
