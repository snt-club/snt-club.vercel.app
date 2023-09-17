import Image from "next/image";
import React from "react";
import Link from "next/link";

import sntLogo from "@/assets/icons/snt-logo.png";
import instagram from "@/assets/svg/instagram.png";
import linkedin from "@/assets/svg/linkedin.png";
import github from "@/assets/svg/github.png";
import youtube from "@/assets/svg/youtube.png";
import discord from "@/assets/svg/discord.png";

function Footer() {
  const socials = [
    {
      id: 1,
      url: "https://www.instagram.com/snt_club",
      src: instagram,
      alt: "Instagram",
    },
    {
      id: 2,
      url: "https://www.linkedin.com/company/sntclub/mycompany/",
      src: linkedin,
      alt: "LinkedIn",
    },
    {
      id: 3,
      url: "https://github.com/snt-club",
      src: github,
      alt: "GitHub",
    },
    {
      id: 4,
      url: "https://www.youtube.com/channel/UCs7cNBZzRubgSe-zZJWif8A",
      src: youtube,
      alt: "Youtube",
    },
    {
      id: 5,
      url: "https://discord.com/invite/5EtXmVp3qM",
      src: discord,
      alt: "Discord",
    },
  ];
  return (
    <footer className="bg-[#0A146E] p-4 text-white divide-y-2" id="footer">
      <div className="grid grid-cols-2 lg:grid-cols-5 p-2 w-fit mx-auto max-lg:text-center gap-6">
        <div className="col-span-2 lg:col-span-1 max-lg:ml-4">
          <div className="mb-2">
            <Link href="/">
              <Image
                src={sntLogo}
                alt="S&T Logo"
                width={250}
                className="px-8 mx-auto"
              />
            </Link>
          </div>
          <div className="flex gap-4 justify-center">
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
            <p className="text-xl font-bold pb-2">S&T Club</p>
          </div>
          <div>
            <Link href="/">
              <p className="text-sm hover:underline">About Us</p>
            </Link>
            <Link href="/">
              <p className="text-sm hover:underline">Copyright</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold pb-2">Resources</p>
          </div>
          <div>
            <Link href="/">
              <p className="text-sm hover:underline">Python</p>
            </Link>
            <Link href="/">
              <p className="text-sm hover:underline">Linux</p>
            </Link>
            <Link href="/">
              <p className="text-sm hover:underline">C Language</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold pb-2">Team</p>
          </div>
          <div>
            <Link href="/">
              <p className="text-sm hover:underline">Faculty Coordinators</p>
            </Link>
            <Link href="/">
              <p className="text-sm hover:underline">Student Coordinators</p>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <p className="text-xl font-bold pb-2">Contact Us</p>
          </div>
          <div className="truncate">
            <Link href="mailto:info.sntclub@gmail.com">
              <p className="text-sm hover:underline">info.sntclub@gmail.com</p>
            </Link>
            <Link href="tel:8290955338">
              <p className="text-sm hover:underline">8290955338(M)</p>
            </Link>
            <Link href="tel:6376422702">
              <p className="text-sm hover:underline">6376422702(M)</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="pt-2 text-center">
        <p className="text-xs">
          © Copyright 2023 @ Science and Technology Club, SKIT Jaipur
        </p>
      </div>
    </footer>
  );
}

export default Footer;
