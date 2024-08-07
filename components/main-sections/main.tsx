import Link from 'next/link';
import snt_main from '@/assets/images/snt-main.webp';
import Typewriter from '@/components/typewriter';

function section1() {
  const texts = [' Tech', ' Events', ' Facts'];
  const speed = 220;
  return (
    <section>
      <div
        className="h-full bg-cover bg-fixed bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${snt_main.src})`,
          width: '100%',
          height: '100vh',
        }}
      >
        <div className="h-full w-full bg-[#0A146E] bg-opacity-50">
          <div className="justify-left align-center container mx-auto flex flex-col pt-[10vh] lg:pt-[20vh]">
            <div>
              <p className="mx-auto ml-4 w-fit py-8 text-4xl font-bold text-white drop-shadow-md ease-in-out md:text-8xl lg:ml-10">
                Keeping you Engaged
                <br />
                into diverse
                <Typewriter texts={texts} speed={speed} />
              </p>
            </div>
            <div className="">
              <Link href="/become-member">
                <p className="ml-4 w-fit rounded-md border-2 border-[#EE4B76] bg-[#EE4B76] px-2 py-1 text-sm font-bold text-white duration-300 ease-in-out hover:border-[#EE4B76] hover:bg-opacity-0 hover:text-[#EE4B76] md:text-lg lg:ml-10">
                  Become Member
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section1;
