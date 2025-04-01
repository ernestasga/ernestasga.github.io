import { type ExperienceJob } from "@/types/experience";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

export const experienceContent = {
    title: "Experience",
    icon: faBriefcase,
    description: "My proffesional work experience",
}

export const experienceJobs: ExperienceJob[] = [
    {
        role: "Junior-Mid Developer",
        company: "Freelance",
        companylogo: "/img/icons/common/freelancer.png",
        date: "2015 - 2021",
        desc: "Developed diverse web and mobile applications while mastering essential skills",
        descBullets: [
            "Developed web and mobile apps using Java, PHP, JavaScript, and Python",
            "Crafted efficient automation scripts for workflow optimization",
            "Mastered client communication and project management skills",
            "Implemented cybersecurity best practices in application development"
        ],
    },
    {
        role: "Full-Stack Web Developer",
        company: "Profitus",
        companylogo: "/img/icons/common/profitusLogo.png",
        date: "2021 - 2022",
        desc: "Contributed to platform development in fintech startup environment",
        descBullets: [
            "Maintained and enhanced existing platform with new features",
            "Contributed to new platform architecture using cloud and SPA technologies",
            "Built robust solutions using PHP, JavaScript, React, and MySQL",
            "Participated in agile ceremonies and code reviews"
        ]
    },
    {
        role: "Software Engineer",
        company: "Freelance",
        companylogo: "/img/icons/common/freelancer.png",
        date: "2022 - Present",
        desc: "Designing and implementing diverse software solutions, solving complex problems",
        descBullets: [
            "Architected software solutions for affiliate marketing and analytics",
            "Developed internal tools, landing pages, and SaaS products",
            "Created ETL pipelines and custom analytics dashboards",
            "Implemented ML solutions and contributed to open-source projects"
        ]
    }
];
