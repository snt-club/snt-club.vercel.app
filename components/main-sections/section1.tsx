import Link from "next/link";
import snt_main from "@/assets/images/snt-main.webp";
import Typewriter from "@/components/typewriter";

function section1() {
  const texts = [" Tech", " Events", " Facts"];
  const speed = 220;
  return (
    <section>
      <div
        className="bg-cover bg-no-repeat bg-center bg-fixed"
        style={{
          backgroundImage: `url(${snt_main.src})`,
          width: "100%",
          height: "80vh",
        }}
      >
        <div className="w-full h-full bg-[#0A146E] bg-opacity-25">
          <div>
            <p className="block justify-center text-white font-bold text-2xl md:text-6xl py-8 drop-shadow-md w-fit mx-auto ease-in-out">
              Keeping you Engaged
              <br />
              into diverse
              <Typewriter texts={texts} speed={speed} />
            </p>
          </div>
          <div className="">
            <Link href="/become-member">
              <p className="w-fit mx-auto font-bold text-sm md:text-lg py-1 px-2 text-white bg-[#EE4B76] rounded-md border-2 border-[#EE4B76] hover:text-[#EE4B76] hover:bg-opacity-0 hover:border-[#EE4B76] ease-in-out duration-300">
                Become Member
              </p>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section1;
