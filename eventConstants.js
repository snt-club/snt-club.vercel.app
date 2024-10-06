// EVENT STATUS = upcoming, ongoing, past
// EVENT REG STATUS = live, closed

import { flutterworkshop_img, c_bootcamp_img, windows_img } from '@/assets/index';

const eventDetails = [
  {
    eventName: 'Git And Github Session',
    eventDesc: 'Want to code smarter and work together like a pro? Jump into our Git & GitHub session and get hands-on!"',
    eventImg: c_bootcamp_img,
    eventStatus: 'upcoming',
    eventRegLink: '/events/',
    eventRegStatus: 'closed',
  },

  
  {
    eventName: 'C Bootcamp',
    eventDesc: 'Join the C Bootcamp to master C programming through flexible hybrid classes, hands-on tasks, and real-time support.',
    eventImg: c_bootcamp_img,
    eventStatus: 'ongoing',
    eventRegLink: '/events/cbootcamp24',
    eventRegStatus: 'live',
  },
  {
    eventName: 'CodeFormers',
    eventDesc: 'Join us for Codeformers, a thrilling monthly coding series that transforms the C programming skills, evolve and claim interesting victory taglines every month!',
    eventImg: windows_img,
    eventStatus: 'ongoing',
    eventRegLink: '/events/codeformers',
    eventRegStatus: 'live',
  },
  {
    eventName: 'Tech Talk With Alumni 2.0',
    eventDesc: 'Chart your future with insider tips at Tech Talk with Alumni 2.0 - where experience meets inspiration!',
    eventImg: windows_img,
    eventStatus: 'ongoing',
    eventRegLink: '/events/techtalkwithalumni',
    eventRegStatus: 'live',
  },
  {
    eventName: 'Ask S&T',
    eventDesc: 'Join us for ASK S&T, an interactive session where 1st-year students / (freshers) can get all their technical and non-technical questions answered by our expert club members!',
    eventImg: windows_img,
    eventStatus: 'past',
    eventRegLink: '/events/AskSnT',
    eventRegStatus: 'closed',
  },
  {
    eventName: 'Aarambh-2024',
    eventDesc: "Join us at AARAMBH for an exciting session where we'll welcome freshers and introduce them to the Science and Technology Club, showcasing innovation, insights, and opportunities!",
    eventImg: flutterworkshop_img,
    eventStatus: 'past',
    eventRegLink: '/events/aarambh24',
    eventRegStatus: 'closed',
  },
  {
    eventName: 'Tech Talk With Alumni',
    eventDesc: 'Tech talk with alumni Join us for an Expert talk session, connecting students with industry pioneers for insightful tech guidance!',
    eventImg: windows_img,
    eventStatus: 'past',
    eventRegLink: '/events/techTalkWithAlumni',
    eventRegStatus: 'closed',
  },
  // {
  //   eventName: 'CODE WITH S&T 3.0',
  //   eventDesc: 'Science and Technology Club is back with next chapter of Code With S&T - this time bigger and better!',
  //   eventImg: c_bootcamp_img,
  //   eventStatus: 'past',
  //   eventRegLink: 'https://forms.gle/PchzxHMUSfkU68sy7',
  //   eventRegStatus: 'closed',
  // },

  // {
  //   eventName: 'Clash of Coders - Pravah Event',
  //   eventDesc:'Science and Technology Club is organising a Clash of Coders. Event will be live at SKIT during Pravah 2024.',
  //   eventImg: flutterworkshop_img,
  //   eventStatus: 'past',
  //   eventRegLink: 'https://pravah.skit.ac.in/events/tech/',
  //   eventRegStatus: 'closed',
  // },
  // {
  //   eventName: 'Introductory session on DSA',
  //   eventDesc: 'Science and Technology Club is organising Introductory session on DSA',
  //   eventImg: windows_img,
  //   eventStatus: 'past',
  //   eventRegLink: '/events/dsa-session',
  //   eventRegStatus: 'closed',
  // },
  // {
  //   eventName: 'Web-Development Workshop',
  //   eventDesc:
  //     'Science and Technology Club is organising a Web-Development for all students who want to build their portfolio.',
  //   eventImg: windows_img,
  //   eventStatus: 'past',
  //   eventRegLink: '/events/web-dev',
  //   eventRegStatus: 'closed',
  // },
  // {
  //   eventName: 'Flutter Workshop',
  //   eventDesc:
  //     'Science and Technology Club is organising a Flutter Workshop for all those App Development Enthusiasts out there.',
  //   eventImg: flutterworkshop_img,
  //   eventStatus: 'past',
  //   eventRegLink: ' +',
  //   eventRegStatus: 'closed',
  // },

  // {
  //   eventName: 'C++ Workshop',
  //   eventDesc:
  //     'Science and Technology Club is organising a C++ Workshop for the students where you will be taught the concepts of C++ Programming.',
  //   eventImg: c_bootcamp_img,
  //   eventStatus: 'past',
  //   eventRegLink: '/events/cbootcamp23',
  //   eventRegStatus: 'closed',
  // },
];

export { eventDetails };
