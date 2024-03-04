// EVENT STATUS = upcoming, ongoing, past
// EVENT REG STATUS = live, closed

import { aarambh_img, flutterworkshop_img, c_bootcamp_img, windows_img } from "@/assets/index"

const eventDetails = [

    {
        eventName: "Clash of Coders - Pravah Event",
        eventDesc: "Science and Technology Club is organising a Clash of Coders. Event will be live at SKIT during Pravah 2024.",
        eventImg: flutterworkshop_img,
        eventStatus: "ongoing",
        eventRegLink: "https://pravah.skit.ac.in/events/tech/",
        eventRegStatus: "live"
    },
    {
        eventName: "Introductory session on DSA",
        eventDesc: "Science and Technology Club is organising Introductory session on DSA",
        eventImg: windows_img,
        eventStatus: "ongoing",
        eventRegLink: "/events/dsa-session",
        eventRegStatus: "live"
    },
    {
        eventName: "Flutter Workshop",
        eventDesc: "Science and Technology Club is organising a Flutter Workshop for all those App Development Enthusiasts out there.",
        eventImg: flutterworkshop_img,
        eventStatus: "past",
        eventRegLink: " +",
        eventRegStatus: "closed"
    },

    {
        eventName: "C++ Workshop",
        eventDesc: "Science and Technology Club is organising a C++ Workshop for the students where you will be taught the concepts of C++ Programming.",
        eventImg: c_bootcamp_img,
        eventStatus: "past",
        eventRegLink: "/events/cbootcamp23",
        eventRegStatus: "closed"
    },
    {
        eventName: "C Bootcamp",
        eventDesc: "Science and Technology Club is organising a C Bootcamp for the students where you will be taught the concepts of C Programming.",
        eventImg: aarambh_img,
        eventStatus: "past",
        eventRegLink: "/events/cbootcamp23",
        eventRegStatus: "closed"
    },

]

export { eventDetails }