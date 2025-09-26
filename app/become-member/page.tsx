import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


import alpha from '@/assets/icons/alpha.png'
import beta from '@/assets/icons/beta.png'
import gamma from '@/assets/icons/gamma.png';
import externa_link from '@/assets/svg/external-link.svg';


function BecomeMember(){

 const groups= [
  {
    name: 'Alpha',
    img: alpha,
    join_link: 'https://chat.whatsapp.com/I3xtsTXtiJQFobcpGyvRce?mode=ems_copy_c',
    course_desc: 'For 1st Year Students Join Alpha. ',
  },
  {
    name: 'Beta',
    img: beta,
    join_link: 'https://chat.whatsapp.com/DgMDbnq3vlk6oscFdT23Ua?mode=ems_copy_t',
    course_desc: 'For 2nd Year Students Join Beta.',
  },
  {
    name: 'Gamma',
    img: gamma,
    join_link: 'https://chat.whatsapp.com/Hgvn6rhASDK1Uu3zVHV6gP?mode=ems_copy_t',
    course_desc: 'For 3rd And 4th Year Students Join Gamma.',
  },
];

  return(
    <section className="container mx-auto py-10 h-fit" id="resources">
    <div className="mx-8 mt-6 text-[#0A146E] lg:mx-12">
      <div className="text-center">
        <p className="pt-4 text-2xl font-bold md:text-5xl">Join US</p>
      </div>
      <div className="mt-[10px] flex flex-wrap justify-center gap-[50px] md:mt-[20px]">
        {groups.map((group, index) => (
          <div key={index} className="w-[300px] border-2 p-5 rounded-3xl">
            <div className="-z-10">
              <Image src={group.img} width={200} alt={group.name} className="rounded-[20px] m-auto bg-[#a53da3]" />
            </div>
            <div className="-mt-[30px] ml-[70%]">
              <Link href={group.join_link} target="blank">
                <Image src={externa_link} alt="button" className="w-[50px] p-2 rounded-full bg-[#5bcef5] duration-200 hover:scale-110" />
              </Link>
            </div>
            <div className="px-[20px] pb-[20px]">
              <div>
                <span className="text-[30px] font-bold uppercase text-[#022f84]">{group.name}</span>
              </div>
              <div>
                <span>{group.course_desc}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default BecomeMember;
