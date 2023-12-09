import { type Project } from "@/types/project";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const projectContent = {
    title: "Projects",
    icon: faCode,
    description: "Some of my work",
}

export const projects: Project[] = [
    {
        name: "SearchFrom.com",
        desc: "SAAS product for testing search engine ad placements",
        link: { name: "WEB", path: "https://searchfrom.com" },
    },
    {
        name: "KadaIšeis.lt",
        desc: "An application for keeping track of tv series episode release dates",
        link: { name: "WEB", path: "https://kadaiseis.lt" },
        link2: { name: "MOBILE", path: "https://play.google.com/store/apps/details?id=com.ernestasg.kadaiseis" },
    },
    {
        name: "Reivyčių Sodai",
        desc: "A web + mobile application for a client, who sells plants and seeding to attract more clients ",
        link: { name: "WEB", path: "https://reivyciusodai.lt"},
        link2: { name: "MOBILE", path: "https://play.google.com/store/apps/details?id=com.ernestasg.reivyciusodai" },
    },
    {
        name: "Tax Calculation Mobile App",
        desc: "A salary tax calculation app for residents of Lithuania",
        link2: { name: "MOBILE", path: "https://play.google.com/store/apps/details?id=com.ernestasg.mokesciuskaiciuokle"},
        github: "https://github.com/ernestasga/mokesciu_skaiciuokle",
    },
    {
        name: "Coordinate Converter Mobile App",
        desc: "An application for converting between two coordinate standards",
        link2: { name: "MOBILE", path: "https://play.google.com/store/apps/details?id=com.ernestasg.lks94tool"},
        github: "https://github.com/ernestasga/lks94tool",
    },
    {
        name: "Pakeliui",
        desc: "A rideshare platform for drivers and passengers",
        link: { name: "WEB", path: "https://pakeliui.lt" },
        github: "https://github.com/ernestasga/pakeliui",
    },
    {
        name: "StudyBud Portfolio Project",
        desc: "Django framework portfolio project. Discord-like chatrooms",
        github: "https://github.com/ernestasga/StudyBud",
    },
    {
        name: "Tenders Portfolio Project",
        desc: "Laravel/ReactJs demo project from job interview. Backend and frontend separated and connects through an API",
        github: "https://github.com/ernestasga/StudyBud",
    },
    {
        name: "Python Scripts",
        desc: "A humble collection of some python scripts",
        github: "https://github.com/ernestasga/my-scripts",
    },
    {
        name: "Neural Transfer Demo",
        desc: "Using machine learning I made this sript to transfer style of one image onto another.",
        github: "https://github.com/ernestasga/artify",
    },
    {
        name: "There are many more...",
        desc: "Those mentioned here are only simple projects that are either mine, or clients gave permission to share. Most of my work is under NDAs and cannot be shared.",
    }
];
