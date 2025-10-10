import { type Project } from "@/types/project";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const projectContent = {
    title: "Featured Work",
    icon: faCode,
    description: "A selection of impactful projects spanning web platforms, mobile apps, and open-source contributions",
}

export const projects: Project[] = [
    // FEATURED PROJECTS
    {
        name: "iSearchFrom",
        desc: "SaaS platform for testing search engine ad placements from different geolocations, serving thousands of queries daily.",
        link: { name: "WEB", path: "https://isearchfrom.com" },
        techStack: ["Next.js", "TypeScript", "Node.js"],
        status: "live",
        featured: true,
        year: "2023",
        category: "web"
    },
    {
        name: "Reivyčių Sodai",
        desc: "E-commerce website for a plant nursery business, featuring product catalog and online ordering system.",
        link: { name: "WEB", path: "https://reivyciusodai.lt"},
        techStack: ["WordPress", "WooCommerce", "PHP", "MySQL"],
        status: "live",
        featured: true,
        year: "2021",
        category: "web"
    },
    {
        name: "Pakeliui",
        desc: "Rideshare platform connecting drivers and passengers with route matching and user management system.",
        github: "https://github.com/ernestasga/pakeliui",
        techStack: ["Laravel", "PHP", "MySQL", "Bootstrap"],
        status: "archived",
        featured: true,
        year: "2022",
        category: "web"
    },

    // ACTIVE PROJECTS
    {
        name: "KadaIšeis.lt",
        desc: "TV series episode release tracking application with automated notifications.",
        techStack: ["Next.js", "TypeScript", "MongoDB"],
        status: "archived",
        year: "2020",
        category: "web"
    },

    // OPEN SOURCE CONTRIBUTIONS
    {
        name: "Home Assistant Integration",
        desc: "Home Assistant integration for Solar Frontier solar panels with energy monitoring capabilities.",
        github: "https://github.com/ernestasga/ha-solarfrontier",
        techStack: ["Python", "Home Assistant", "YAML"],
        status: "open-source",
        year: "2023",
        category: "automation"
    },
    {
        name: "Solar Frontier API",
        desc: "Python library for retrieving data from Solar Frontier solar panel systems.",
        github: "https://github.com/ernestasga/python-solarfrontier",
        techStack: ["Python", "aiohttp"],
        status: "open-source",
        year: "2023",
        category: "api"
    },

    // MOBILE APPS
    {
        name: "Tax Calculator",
        desc: "Mobile app for calculating Lithuanian salary taxes including net salary, social insurance, and income tax.",
        link2: { name: "MOBILE", path: "https://play.google.com/store/apps/details?id=com.ernestasg.mokesciuskaiciuokle"},
        github: "https://github.com/ernestasga/mokesciu_skaiciuokle",
        techStack: ["React Native", "JavaScript"],
        status: "active",
        year: "2019",
        category: "mobile"
    },
    {
        name: "Coordinate Converter",
        desc: "Mobile app for converting between LKS-94 and WGS-84 coordinate systems.",
        link2: { name: "MOBILE", path: "https://play.google.com/store/apps/details?id=com.ernestasg.lks94tool"},
        github: "https://github.com/ernestasga/lks94tool",
        techStack: ["Flutter", "Dart"],
        status: "active",
        year: "2019",
        category: "mobile"
    },

    // PORTFOLIO & DEMOS
    {
        name: "StudyBud",
        desc: "Django portfolio project featuring real-time chatrooms with user authentication and room management.",
        github: "https://github.com/ernestasga/StudyBud",
        techStack: ["Django", "Python", "SQLite"],
        status: "archived",
        year: "2021",
        category: "web"
    },
    {
        name: "Tenders System",
        desc: "Laravel/React demo project with separated backend and frontend connecting through a RESTful API.",
        github: "https://github.com/ernestasga/tenders",
        techStack: ["Laravel", "React", "MySQL"],
        status: "archived",
        year: "2020",
        category: "web"
    },
    {
        name: "Python Scripts",
        desc: "Collection of Python utilities for automation and system tasks.",
        github: "https://github.com/ernestasga/my-scripts",
        techStack: ["Python", "Bash"],
        status: "active",
        year: "2018-2024",
        category: "automation"
    },
    {
        name: "Neural Style Transfer",
        desc: "Machine learning demo implementing artistic style transfer using TensorFlow.",
        github: "https://github.com/ernestasga/artify",
        techStack: ["Python", "TensorFlow", "Jupyter"],
        status: "archived",
        year: "2020",
        category: "ml"
    },
    {
        name: "Arduino Game Controller",
        desc: "Custom USB game controller built with Arduino Leonardo.",
        github: "https://github.com/ernestasga/leonardo-joystick",
        techStack: ["C++", "Arduino"],
        status: "archived",
        year: "2019",
        category: "automation"
    }
];
