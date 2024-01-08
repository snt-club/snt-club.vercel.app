// memberPost = Faculty_Coordinator, Student_Coordinator, Student_Head, Student_Team

import {
    sharda_soni,
    vinay_marwal,
    shreyansh,
    chinkle,
    vanshaj,
    somya,
    unique,
    shailesh,
    parth,
    simran,
    laveena,
} from "./assets/index"

const sntTeamMember = [
    // Faculty Coordinators
    {
        memberName: "Dr. Sharda Soni",
        memberPost: "Faculty_Coordinator",
        memberTeam: "",
        memberPhoto: sharda_soni,
        memberRole: "Head of Department",
        memberDepartment: "Chemistry",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "",
    },
    {
        memberName: "Mr. Vinay Marwal",
        memberPost: "Faculty_Coordinator",
        memberTeam: "",
        memberPhoto: vinay_marwal,
        memberRole: "Associate Professor",
        memberDepartment: "Department of Mechanical Engineering",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "",

    },
    // Student Coordinators
    {
        memberName: "Vanshaj Kataria",
        memberPost: "Student_Coordinator",
        memberTeam: "",
        memberPhoto: vanshaj,
        memberRole: "Student Coordinator",
        memberDepartment: "",
        memberYear: "III yr",
        memberBranch: "ECE",
        memberInsta: "https://www.instagram.com/vanshaj_kataria/",
        memberLinkedin: "https://www.linkedin.com/in/vanshaj-kataria/",

    },
    // Student Heads
    // {
    //     memberName: "Shreyansh Agrawal",
    //     memberPost: "Student_Head",
    //     memberTeam: "",
    //     memberPhoto: shreyansh,
    //     memberRole: "Development Head",
    //     memberDepartment: "",
    //     memberYear: "III yr",
    //     memberBranch: "CSE",
    //     memberInsta: "https://www.instagram.com/sh_reyan_sh_/",
    //     memberLinkedin: "https://www.linkedin.com/in/shreyansh-agarwal-1060a4222/",
    // },
    // {
    //     memberName: "Chinkle Rathore",
    //     memberPost: "Student_Head",
    //     memberTeam: "",
    //     memberPhoto: chinkle,
    //     memberRole: "NOT DECIDED",
    //     memberDepartment: "",
    //     memberYear: "III yr",
    //     memberBranch: "CSE",
    //     memberInsta: "https://www.instagram.com/sh_reyan_sh_/",
    //     memberLinkedin: "https://www.linkedin.com/in/shreyansh-agarwal-1060a4222/",
    // },
    {
        memberName: "Somya Jain",
        memberPost: "Student_Head",
        memberTeam: "",
        memberPhoto: somya,
        memberRole: "Management Head",
        memberDepartment: "",
        memberYear: "III yr",
        memberBranch: "CSE",
        memberInsta: "https://www.instagram.com/somyaa_jain08/",
        memberLinkedin: "https://www.linkedin.com/in/somya-jain-76b230223/",

    },
    {
        memberName: "Unique Paliwal",
        memberPost: "Student_Head",
        memberTeam: "",
        memberPhoto: unique,
        memberRole: "Tutor Head",
        memberDepartment: "",
        memberYear: "III yr",
        memberBranch: "CSE",
        memberInsta: "https://www.instagram.com/paliwalunique/",
        memberLinkedin: "https://www.linkedin.com/in/unique-paliwal-6a3456226/",
    },
    {
        memberName: "Shailesh Purohit",
        memberPost: "Student_Head",
        memberTeam: "",
        memberPhoto: shailesh,
        memberRole: "Content Head",
        memberDepartment: "",
        memberYear: "III yr",
        memberBranch: "CSE",
        memberInsta: "https://www.instagram.com/bhaba_shailesh.raj/",
        memberLinkedin: "https://www.linkedin.com/in/shailesh-purohit-9917291b7/",

    },
    {
        memberName: "Parth Jain",
        memberPost: "Student_Head",
        memberTeam: "",
        memberPhoto: parth,
        memberRole: "Design Head",
        memberDepartment: "",
        memberYear: "III yr",
        memberBranch: "CSE",
        memberInsta: "https://www.instagram.com/art_at_adobe/",
        memberLinkedin: "https://www.linkedin.com/in/parth-jain-b95182214/",

    },
    {
        memberName: "Simran Rawat",
        memberPost: "Student_Head",
        memberTeam: "",
        memberPhoto: simran,
        memberRole: "Social Media/PR Head",
        memberDepartment: "",
        memberYear: "III yr",
        memberBranch: "CSE",
        memberInsta: "https://www.instagram.com/simranrawat2513/",
        memberLinkedin: "https://www.linkedin.com/in/simran-rawat-150554214/",

    },
    // Student Team
    // Development Team
    {
        memberName: "Prashant Singh",
        memberPost: "Student_Team",
        memberTeam: "Development_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/prashant-singh-529391250/"
    },
    {
        memberName: "Garvit Singhal",
        memberPost: "Student_Team",
        memberTeam: "Development_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/garvit-singhal-aa58b0254/"
    },
    // Tutor Team
    {
        memberName: "Aman Sharma",
        memberPost: "Student_Team",
        memberTeam: "Tutor_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/amansharma1609/"
    },
    {
        memberName: "Prakhar Singhal",
        memberPost: "Student_Team",
        memberTeam: "Tutor_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/prakhar-singhal-16536a25a/"
    },
    {
        memberName: "Yatharth Bajaj",
        memberPost: "Student_Team",
        memberTeam: "Tutor_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/yatharth-bajaj-77aa22261/"
    },
    // Design Team
    {
        memberName: "Nawel Asgar",
        memberPost: "Student_Team",
        memberTeam: "Design_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/nawel-asgar-448358263/"
    },
    // Content Team
    {
        memberName: "Puru Bhatt",
        memberPost: "Student_Team",
        memberTeam: "Content_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/puru-bhatt-96056a27a/"
    },
    {
        memberName: "Priyansh Agarwal",
        memberPost: "Student_Team",
        memberTeam: "Content_Team",
        memberPhoto: "",
        memberRole: "",
        memberDepartment: "",
        memberYear: "",
        memberBranch: "",
        memberInsta: "",
        memberLinkedin: "https://www.linkedin.com/in/priyansh-agrawal-6486b1260/"
    },
]


export {
    sntTeamMember
}
