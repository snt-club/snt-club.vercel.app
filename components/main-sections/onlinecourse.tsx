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

function onlinecourse() {
  return (
    <section className="h-fit container mx-auto" id="resources">
      <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
        <div className="text-center">
          <p className="text-2xl md:text-5xl font-bold pt-4">
            Online Courses
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-[50px] mt-[10px] md:mt-[20px]">
          {online_course.map((course, index) => (
            <div key={index} className="border-2  w-[300px]  rounded-[20px]">
              <div className="-z-10">
                <Image
                  src={course.img}
                  alt={course.name}
                  className="rounded-t-[20px]"
                />
              </div>
              <div className="-mt-[30px] ml-[70%] ">
                <Link href={course.course_link} target="blank">
                  <Image
                    src={course_button}
                    alt="button"
                    className="w-[60px] hover:scale-110 duration-200"
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
      </div>
    </section>
  );
}

export default onlinecourse;
