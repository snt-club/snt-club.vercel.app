import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import sntLogo from '@/assets/icons/snt-logo.png';
import instagram from '@/assets/svg/instagram.png';
import linkedin from '@/assets/svg/linkedin.png';
import github from '@/assets/svg/github.png';
import youtube from '@/assets/svg/youtube.png';
import discord from '@/assets/svg/discord.png';

function Footer() {
  const socials = [
    {
      id: 1,
      url: 'https://www.instagram.com/snt_club',
      src: instagram,
      alt: 'Instagram',
    },
    {
      id: 2,
      url: 'https://www.linkedin.com/company/sntclub/mycompany/',
      src: linkedin,
      alt: 'LinkedIn',
    },
    {
      id: 3,
      url: 'https://github.com/snt-club',
      src: github,
      alt: 'GitHub',
    },
    {
      id: 4,
      url: 'https://www.youtube.com/channel/UCs7cNBZzRubgSe-zZJWif8A',
      src: youtube,
      alt: 'Youtube',
    },
    {
      id: 5,
      url: 'https://discord.com/invite/5EtXmVp3qM',
      src: discord,
      alt: 'Discord',
    },
  ];
  return (
    <footer className="divide-y-2 bg-[#0A146E] p-4 text-white" id="footer">
      <div className="mx-auto grid w-fit grid-cols-2 gap-6 p-2 max-lg:text-center lg:grid-cols-5">
        <div className="col-span-2 max-lg:ml-4 lg:col-span-1">
          <div className="mb-2">
            <Link href="/">
              <Image src={sntLogo} alt="S&T Logo" width={250} className="mx-auto px-8" />
            </Link>
          </div>
          <div className="flex justify-center gap-4">
            {socials.map((social) => (
              <div key={social.id}>
                <Link href={social.url} target="_blank">
                  <Image src={social.src} alt={social.alt} width={30} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div>
            <p className="pb-2 text-xl font-bold">S&T Club</p>
          </div>
          <div>
            <Link href="/#about">
              <p className="text-sm hover:underline">About Us</p>
            </Link>
            <Link href="/">
              <p className="text-sm hover:underline">Copyright</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="pb-2 text-xl font-bold">Resources</p>
          </div>
          <div>
            <Link href="/#resources">
              <p className="text-sm hover:underline">Python</p>
            </Link>
            <Link href="/#resources">
              <p className="text-sm hover:underline">Linux</p>
            </Link>
            <Link href="/#resources">
              <p className="text-sm hover:underline">C Language</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="pb-2 text-xl font-bold">Team</p>
          </div>
          <div>
            <Link href="/#faculty">
              <p className="text-sm hover:underline">Faculty Coordinators</p>
            </Link>
            <Link href="/#coreteam">
              <p className="text-sm hover:underline">Student Coordinators</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="pb-2 text-xl font-bold">Contact Us</p>
          </div>
          <div className="truncate">
            <Link href="mailto:info.sntclub@gmail.com">
              <p className="text-sm hover:underline">info.sntclub@gmail.com</p>
            </Link>
            <Link href="tel:9214905733">
              <p className="text-sm hover:underline">9214905733(M)</p>
            </Link>
            <Link href="tel:7877727703">
              <p className="text-sm hover:underline">7877727703(M)</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-2 text-center">
        <p className="text-xs">© Copyright {new Date().getFullYear()} @ Science and Technology Club, SKIT Jaipur</p>
      </div>
    </footer>
  );
}

export default Footer;
