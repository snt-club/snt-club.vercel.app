import Main from '@/components/main-sections/main';
import WhyJoinUs from '@/components/main-sections/whyjoinus';
import Glimpses from '@/components/main-sections/glimpses';
import Teams from '@/components/main-sections/teams';
import Events from '@/components/main-sections/events';
import OnlineCourse from '@/components/main-sections/onlinecourse';
import Testimonials from '@/components/main-sections/testimonial';
import Faculty from '@/components/main-sections/faculty';
import CoreTeam from '@/components/main-sections/coreteam';
import CoreMembers from '@/components/main-sections/coremembers';
// import AarambhModal from '@/components/main-sections/modal';

export default function Home() {
  return (
    <main>
      <Main />
      {/* <AarambhModal/> */}
      <WhyJoinUs />
      <Glimpses />
      
      <Teams />
      <Events />
      <OnlineCourse />
      <Testimonials />
      <Faculty />
      <CoreTeam />
      <CoreMembers />
    </main>
  );
}
