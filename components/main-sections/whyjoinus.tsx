import React from 'react';

function section2() {
  return (
    <section className="container mx-auto h-fit" id="about">
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div>
          <p className="pt-4 text-5xl font-bold md:text-7xl">Why Join Us?</p>
        </div>
        <div className="mx-auto mt-[10px] grid w-fit grid-cols-1 gap-10 md:mt-[20px] lg:grid-cols-2">
          <div className="flex align-middle">
            <p className="ml-1 mt-4 h-fit text-justify text-sm sm:my-auto md:text-base lg:ml-4">
              To facilitate students with easy self-learning, here at Science and Technology Club we provide a technical
              exposure to students by having them engaged in Conferences, Seminars and Workshops of National and
              International level. Students get thoroughly guided regarding research,research journals and in writing
              research papers. You will also be nurtured in a way that will help you build several projects and organize
              events. At the end of the day a college club is for your development and here at Science and Technology
              Club we value that aspect by mentoring and providing best guidance, resources while also introducing you
              to a community of like minded people looking forward to each other&apos;s progress and being there for
              each other.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <iframe
              className="aspect-video w-4/5 rounded-xl"
              src="https://www.youtube.com/embed/GtLxHohHEJ4?si=JGRX9g7X94UU7Dkm"
              title="YouTube video player"
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
