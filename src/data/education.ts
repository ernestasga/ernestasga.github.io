import { type Education } from "@/types/education";
import { faSchool } from "@fortawesome/free-solid-svg-icons";

export const educationContent = {
    title: "Education",
    icon: faSchool,
    description: "My education and certificates",
}

export const education: Education[] = [
    {
        schoolName: "Self Taught",
        subHeader: "Passion for tech and knowledge",
        duration: "January 2014 - ",
        desc: "It's a neverending process of learning and keeping up to date with the latest tech...",
        descBullets: [
            "Learning from various sources",
            "Creating and managing my own projects",
            "Freelancing and solving problems for clients",
        ],
    },
    {
        schoolName: "Coursera",
        subHeader: "Google IT Automation with Python",
        duration: "June 2021",
        desc: "Gained knowledge of Python and where to use it to ease the systems administration tasks",
        descBullets: [
            "System automation",
            "Git",
            "Debugging",
        ],
    },
    {
        schoolName: "Coursera",
        subHeader: "Google Data Analytics",
        duration: "July 2021",
        desc: "Learned to use tools available to analyse large datasets",
        descBullets: [
            "Excel, Spreadsheets",
            "SQL",
            "R, PYTHON",
            "Tableau",
        ],
    },
    {
        schoolName: "AWS",
        subHeader: "AWS Cloud Practitioner",
        duration: "December 2021",
        desc: "Learned about various AWS cloud services and when to use them",
        descBullets: [
            "S3, EC2, Lambda...",
            "AWS",
            "DevOps",
        ],
    }
];

