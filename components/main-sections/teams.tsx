import React from 'react';
import snt_teams from '@/assets/images/snt-member-form.webp';
import Image from 'next/image';
import alpha from '@/assets/icons/alpha.png';
import beta from '@/assets/icons/beta.png';
import gamma from '@/assets/icons/gamma.png';

function section4() {
  return (
    <section className="h-fit">
      <div
        className="bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${snt_teams.src})`,
          width: '100%',
          height: '100%',
        }}
      >
        <div className="flex h-fit w-full items-center justify-center bg-[#0A146E] bg-opacity-25 text-white">
          <div className="container mx-auto">
            <div className="w-full divide-y-2 px-8 py-12">
              <div className="block items-center justify-center p-8 pb-12 md:grid md:grid-cols-2">
                <div className="mx-auto w-fit max-md:pb-4">
                  <Image src={alpha} alt="Alpha Team" width={125} className="bg-[#EE4B76]" />
                </div>
                <div className="mx-auto w-full text-center md:w-fit md:text-right">
                  <p className="text-xl font-bold">
                    Alpha comprises of <span className="text-[#EE4B76]">1st year</span> students
                  </p>
                  <p className="text-sm">Enthusiasts will experience a basic level in Alpha team</p>
                </div>
              </div>
              <div className="flex flex-col-reverse items-center justify-center p-8 py-12 md:grid md:grid-cols-2">
                <div className="mx-auto w-full text-center md:w-fit md:text-left">
                  <p className="text-xl font-bold">
                    Beta comprises of <span className="text-[#EE4B76]">2nd year</span> students
                  </p>
                  <p className="text-sm">Enthusiasts will experience an intermediate level in Beta team</p>
                </div>
                <div className="mx-auto w-fit max-md:pb-4">
                  <Image src={beta} alt="Beta Team" width={125} className="bg-[#EE4B76]" />
                </div>
              </div>
              <div className="block items-center justify-center p-8 pt-12 md:grid md:grid-cols-2">
                <div className="mx-auto w-fit max-md:pb-4">
                  <Image src={gamma} alt="Gamma Team" width={125} className="bg-[#EE4B76]" />
                </div>
                <div className="mx-auto w-full text-center md:w-fit md:text-right">
                  <p className="text-xl font-bold">
                    Gamma comprises of <span className="text-[#EE4B76]">3rd and 4th year</span> students
                  </p>
                  <p className="text-sm">Enthusiasts will experience an expertise level in Gamma team</p>
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
