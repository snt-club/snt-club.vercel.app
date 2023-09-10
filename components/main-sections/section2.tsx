import React from "react";

function section2() {
  return (
    <section className="h-fit p-4" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 md:px-4">
        <div className="text-[#0A146E] text-center">
          <div>
            <p className="text-3xl md:text-6xl font-extrabold mb-2 md:mb-8">Why Join Us?</p>
          </div>
          <div>
            <p className="text-justify whitespace-normal text-sm md:text-lg">
              To facilitate students with easy self-learning, here at Science
              and Technology Club we provide a technical exposure to students by
              having them engaged in Conferences, Seminars and Workshops of
              National and International level. Students get thoroughly guided
              regarding research,research journals and in writing research
              papers. You will also be nurtured in a way that will help you
              build several projects and organize events. At the end of the day
              a college club is for your development and here at Science and
              Technology Club we value that aspect by mentoring and providing
              best guidance, resources while also introducing you to a community
              of like minded people looking forward to each other&apos;s
              progress and being there for each other.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="p-4">
            <iframe
              className="rounded-xl"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/GtLxHohHEJ4?si=FfzZj2A_Ojs5yLZy"
              title="S&T Intro Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default section2;
