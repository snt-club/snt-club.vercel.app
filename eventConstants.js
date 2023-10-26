// EVENT STATUS = upcoming, ongoing, past
// EVENT REG STATUS = live, closed

import { aarambh_img, flutterworkshop_img, c_bootcamp_img, windows_img } from "@/assets/index"

const eventDetails = [
    {
        eventName: "Flutter Workshop",
        eventDesc: "Science and Technology Club is organising a Flutter Workshop for all those App Development Enthusiasts out there.",
        eventImg: flutterworkshop_img,
        eventStatus: "past",
        eventRegLink: "/events/flutterworkshop",
        eventRegStatus:"closed"
    },
    {
        eventName: "C Bootcamp",
        eventDesc: "Science and Technology Club is organising a C Bootcamp for the students where you will be taught the concepts of C Programming.",
        eventImg: c_bootcamp_img,
        eventStatus: "ongoing",
        eventRegLink: "/events/cbootcamp23",
        eventRegStatus:"closed"
    },
    {
        eventName: "Windows Power User",
        eventDesc: "Science and Technology Club is organising an event on being a Windows Power User and be a PRO.",
        eventImg: windows_img,
        eventStatus: "past",
        eventRegLink: "/events/windowspro",
        eventRegStatus:"closed"
    },
    {
        eventName: "AARAMBH 2023",
        eventDesc: "S&T is excited to announce an introduction session for the first year students and welcome them to their journey of becoming an engineer.",
        eventImg: aarambh_img,
        eventStatus: "past",
        eventRegLink: "/events/aarambh2023",
        eventRegStatus:"closed"
    },

]

export { eventDetails }