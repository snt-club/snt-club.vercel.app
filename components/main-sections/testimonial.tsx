import React from 'react';
import Testimonials from '@/components/testimonialslider';

const testimonials = [
  {
    message: 'All members of snt club increase our courage and support us in every queries.',
  },
  {
    message:
      "It's been a journey of 8 months with this club. I was introduced to so manythings for the first time here in this community. I have received constant support and motivation from all the coordinators and team members.",
  },
  {
    message: 'All in all it was a great experience to be part of the SNT Club.',
  },
  {
    message:
      'It was a wonderful experience with all the Coordinators and Members of S&T Club. We got to know and learn many new Technologies and because of the proper guidance and overall support of coordinators this Club is Growing.',
  },
  {
    message:
      'The sessions and bootcamps conducted by Snt club is very informative and helped me to develop my skills. I would like to thank all the working team for such amazing bootcamps.',
  },
  {
    message:
      'My experience till now in the club was awesome. Hope we would be doing such wonderful sessions in coming days.',
  },
  {
    message:
      'All the classes taken were very nice..... And every event is very well managed and amazing. Thank you SnT club.',
  },
  {
    message: 'All sessions were good and eager to earn more knowledge from the club.',
  },
  {
    message:
      "Thank you for taking extra effort to make sure the entire club was on the same page. It would have been easy for important details to slip through the cracks, but thanks to you, that didn't happen.",
  },
];

function testimonial() {
  return (
    <section className="container mx-auto h-fit">
      <div className="mx-8 mt-16 text-[#0A146E] lg:mx-12">
        <div className="text-center">
          <p className="pt-4 text-2xl font-bold md:text-5xl">When excellence turns into words!!!</p>
        </div>
        <div className="mt-[10px] md:mt-[20px]">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}

export default testimonial;
