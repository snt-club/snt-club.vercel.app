import Image from "next/image";
import React from "react";
import Link from "next/link";
import sntLogo from "@/assets/icons/snt-logo.png";

function Footer() {
  return (
    <footer className="bg-[#0A146E] p-4 text-white divide-y-2">
      <div className="grid grid-cols-5 max-md:grid-cols-2 p-2 w-fit mx-auto max-md:text-center max-md:gap-4">
        <div className="max-md:col-span-2">
          <div>
            <Link href="/">
              <Image
                src={sntLogo}
                alt="S&T Logo"
                width={250}
                className="px-8 mx-auto"
              />
            </Link>
          </div>
          <div></div>
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
              <p className="text-sm hover:underline">Linus</p>
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
          <div>
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
