import Link from "next/link";
import snt_main from "@/assets/images/snt-main.webp";
import Typewriter from "@/components/typewriter";

function section1() {
  const texts = [" Tech", " Events", " Facts"];
  const speed = 220;
  return (
    <section>
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed h-full"
        style={{
          backgroundImage: `url(${snt_main.src})`,
          width: "100%",
          height: "100vh",
        }}
      >
        <div className="w-full h-full bg-[#0A146E] bg-opacity-50">
          <div className="container mx-auto flex flex-col justify-left align-center pt-[10vh] lg:pt-[20vh]">
            <div>
              <p className=" text-white font-bold text-4xl md:text-8xl py-8 drop-shadow-md w-fit mx-auto ease-in-out ml-4 lg:ml-10 ">
                Keeping you Engaged
                <br />
                into diverse
                <Typewriter texts={texts} speed={speed} />
              </p>
            </div>
            <div className="">
              <Link href="/become-member">
                <p className="w-fit font-bold text-sm md:text-lg py-1 px-2 text-white bg-[#EE4B76] rounded-md border-2 border-[#EE4B76] hover:text-[#EE4B76] hover:bg-opacity-0 hover:border-[#EE4B76] ease-in-out duration-300  ml-4 lg:ml-10">
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
