import React from "react";
import snt_teams from "@/assets/images/snt-member-form.webp";
import Image from "next/image";
import alpha from "@/assets/icons/alpha.png";
import beta from "@/assets/icons/beta.png";
import gamma from "@/assets/icons/gamma.png";

function section4() {
  return (
    <section className="h-fit">
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed"
        style={{
          backgroundImage: `url(${snt_teams.src})`,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="w-full h-fit bg-[#0A146E] bg-opacity-25 text-white items-center flex justify-center">
          <div className="container mx-auto">
            <div className="px-8 py-12 divide-y-2 w-full">
              <div className="p-8 pb-12 block justify-center items-center md:grid md:grid-cols-2">
                <div className="w-fit mx-auto max-md:pb-4">
                  <Image
                    src={alpha}
                    alt="Alpha Team"
                    width={125}
                    className="bg-[#EE4B76]"
                  />
                </div>
                <div className="text-center w-full md:w-fit md:text-right mx-auto">
                  <p className="font-bold text-xl">
                    Alpha comprises of <span className="text-[#EE4B76]">1st year</span> students
                  </p>
                  <p className="text-sm">Enthusiasts will experience a basic level in Alpha team</p>
                </div>
              </div>
              <div className="p-8 py-12 flex flex-col-reverse justify-center items-center md:grid md:grid-cols-2">
                <div className="text-center w-full md:w-fit md:text-left mx-auto">
                  <p className="font-bold text-xl">
                    Beta comprises of <span className="text-[#EE4B76]">2nd year</span> students
                  </p>
                  <p className="text-sm">
                    Enthusiasts will experience an intermediate level in Beta
                    team
                  </p>
                </div>
                <div className="w-fit mx-auto max-md:pb-4">
                  <Image
                    src={beta}
                    alt="Beta Team"
                    width={125}
                    className="bg-[#EE4B76]"
                  />
                </div>
              </div>
              <div className="p-8 pt-12 block justify-center items-center md:grid md:grid-cols-2">
                <div className="w-fit mx-auto max-md:pb-4">
                  <Image
                    src={gamma}
                    alt="Gamma Team"
                    width={125}
                    className="bg-[#EE4B76]"
                  />
                </div>
                <div className="text-center w-full md:w-fit md:text-right mx-auto">
                  <p className="font-bold text-xl">
                    Gamma comprises of <span className="text-[#EE4B76]">3rd and 4th year</span> students
                  </p>
                  <p className="text-sm">
                    Enthusiasts will experience an expertise level in Gamma team
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section4;
