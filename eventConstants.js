// EVENT STATUS = upcoming, ongoing, past
// EVENT REG STATUS = live, closed

import { aarambh_img, flutterworkshop_img, c_bootcamp_img, windows_img } from "@/assets/index"

const eventDetails = [

    {
        eventName: "Clash of Coders - Pravah Event",
        eventDesc: "Science and Technology Club is organising a Clash of Coders. Event will be live at SKIT during Pravah 2024.",
        eventImg: flutterworkshop_img,
        eventStatus: "upcoming",
        eventRegLink: "/events/flutterworkshop",
        eventRegStatus: "closed"
    },
    {
        eventName: "Flutter Workshop",
        eventDesc: "Science and Technology Club is organising a Flutter Workshop for all those App Development Enthusiasts out there.",
        eventImg: flutterworkshop_img,
        eventStatus: "past",
        eventRegLink: "/events/flutterworkshop",
        eventRegStatus: "closed"
    },

    {
        eventName: "C++ Workshop",
        eventDesc: "Science and Technology Club is organising a C++ Workshop for the students where you will be taught the concepts of C++ Programming.",
        eventImg: c_bootcamp_img,
        eventStatus: "ongoing",
        eventRegLink: "/events/cbootcamp23",
        eventRegStatus: "live"
    },
    {
        eventName: "C Bootcamp",
        eventDesc: "Science and Technology Club is organising a C Bootcamp for the students where you will be taught the concepts of C Programming.",
        eventImg: c_bootcamp_img,
        eventStatus: "past",
        eventRegLink: "/events/cbootcamp23",
        eventRegStatus: "closed"
    },
    {
        eventName: "Windows Power User",
        eventDesc: "Science and Technology Club is organising an event on being a Windows Power User and be a PRO.",
        eventImg: windows_img,
        eventStatus: "past",
        eventRegLink: "/events/windowspro",
        eventRegStatus: "closed"
    },

]

export { eventDetails }