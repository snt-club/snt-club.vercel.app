import Image from 'next/image';
import React from 'react';

import python from '@/assets/images/python.webp';
import linux from '@/assets/images/linux.webp';
import c from '@/assets/images/c.webp';
import course_button from '@/assets/svg/course-arrow.svg';
import Link from 'next/link';

const online_course = [
  {
    name: 'Python',
    img: python,
    course_link: 'https://www.youtube.com/watch?v=3qUtoMz8snk&list=PL5ypxwCMSutByMEIf2DYLnW2JZKBTUZQP',
    course_desc: 'Tutorials covering all the concepts of Python language in detail.',
  },
  {
    name: 'Linux',
    img: linux,
    course_link: 'https://www.youtube.com/watch?v=3qUtoMz8snk&list=PL5ypxwCMSutByMEIf2DYLnW2JZKBTUZQP',
    course_desc: 'Tutorials covering all the basic linux command for administration and file system handling.',
  },
  {
    name: 'C',
    img: c,
    course_link: 'https://www.youtube.com/watch?v=8Y9QaGx3-qI&list=PL5ypxwCMSutAzvXwGb8VD8CfqEQhL0lud',
    course_desc: 'Tutorials covering all the concepts of C language in detail.',
  },
];

function onlinecourse() {
  return (
    <section className="container mx-auto h-fit" id="resources">
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div className="text-center">
          <p className="pt-4 text-2xl font-bold md:text-5xl">Online Courses</p>
        </div>
        <div className="mt-[10px] flex flex-wrap justify-center gap-[50px] md:mt-[20px]">
          {online_course.map((course, index) => (
            <div key={index} className="w-[300px] rounded-[20px] border-2">
              <div className="-z-10">
                <Image src={course.img} alt={course.name} className="rounded-t-[20px]" />
              </div>
              <div className="-mt-[30px] ml-[70%]">
                <Link href={course.course_link} target="blank">
                  <Image src={course_button} alt="button" className="w-[60px] duration-200 hover:scale-110" />
                </Link>
              </div>
              <div className="px-[20px] pb-[20px]">
                <div>
                  <span className="text-[30px] font-bold uppercase text-[#022f84]">{course.name}</span>
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
