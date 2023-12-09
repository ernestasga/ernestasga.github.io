import { type ExperienceJob } from "@/types/experience";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const experienceContent = {
    title: "Experience",
    icon: faBriefcase,
    description: "My proffesional work experience",
}

export const experienceJobs: ExperienceJob[] = [
    {
        role: "Full-stack developer",
        company: "Freelance",
        companylogo: "/img/icons/common/freelancer.png",
        date: "June 2014 – ",
        desc: "Built solutions for various clients.",
        descBullets: [
            "Building front-end from designs and templates",
            "Building responsive web and mobile applications",
            "Writing python automatization scripts"
        ],
    },
    {
        role: "Programmer",
        company: "Profitus",
        companylogo: "/img/icons/common/profitusLogo.png",
        date: "September 2021 – June 2022",
        desc: "Mailtaining and developing new features for fast growing fintech startup",
        descBullets: [
            "Develop both front-end and backend",
            "HTML, CSS, JAVASCRIPT and PHP",
            "Python automatization scripts",
        ]
    },
    {
        role: "Software Engineer",
        company: "Dobele Media",
        companylogo: "/img/icons/common/dobeleLogo.png",
        date: "June 2022 –",
        desc: "Developing and maintaining various projects",
        descBullets: [
            "Finding solutions for highly customized backend services",
            "Contributing to open source projects used in the company",
            "Creating SAAS products from scratch"
        ]
    }
];
