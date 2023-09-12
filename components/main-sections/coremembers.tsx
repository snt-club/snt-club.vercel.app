import Link from "next/link";
import React from "react";

function coremembers() {
  return (
    <section className="h-fit container mx-auto">
      <div className="bg-[#D9E4F7]">
        <div className="p-8 text-[#0A146E]">
          <div className="text-center">
            <p className="text-2xl md:text-4xl font-extrabold mb-4 md:mb-12">
              Team Members
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-x-[80px]">
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Development Team
                </p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/prashant-singh-529391250/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Prashant Singh</p>
                </Link>
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Tutor Team
                </p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/amansharma1609/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Aman Sharma</p>
                </Link>
                <Link href="https://www.linkedin.com/in/prakhar-singhal-16536a25a/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Prakhar Singhal</p>
                </Link>
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Designing Team
                </p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/nawel-asgar-448358263/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Nawel Asgar</p>
                </Link>
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-lg font-semibold mb-4">
                  Content Team
                </p>
              </div>
              <div>
                <Link href="/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Puru Bhatt</p>
                </Link>
                <Link href="/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Priyansh</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default coremembers;
