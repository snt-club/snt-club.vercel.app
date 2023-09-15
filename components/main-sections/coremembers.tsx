import Link from "next/link";
import React from "react";

function coremembers() {
  return (
    <section className="h-fit container mx-auto">
      <div className="bg-[#D9E4F7]">
        <div className="text-[#0A146E] mx-8 lg:mx-12 mt-16">
          <div className="text-center">
            <p className="text-2xl md:text-5xl font-extrabold pt-4">
              Team Members
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-x-[80px] mt-[10px] md:mt-[20px]">
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
                  Development Team
                </p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/prashant-singh-529391250/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Prashant Singh</p>
                </Link>
                <Link href="https://www.linkedin.com/in/garvit-singhal-aa58b0254/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Garvit Singhal</p>
                </Link>
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
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
                <Link href="https://www.linkedin.com/in/yatharth-bajaj-77aa22261/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Yatharth Bajaj</p>
                </Link>
              </div>
            </div>
            <div className="w-fit mx-auto text-center p-4">
              <div>
                <p className="text-base md:text-xl font-semibold mb-4">
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
                <p className="text-base md:text-xl font-semibold mb-4">
                  Content Team
                </p>
              </div>
              <div>
                <Link href="https://www.linkedin.com/in/puru-bhatt-96056a27a/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Puru Bhatt</p>
                </Link>
                <Link href="https://www.linkedin.com/in/priyansh-agrawal-6486b1260/" target="_blank">
                  <p className="text-sm md:text-base hover:underline">Priyansh Agarwal</p>
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
