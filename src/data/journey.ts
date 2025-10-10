import { TimelineMilestone, JourneyContent } from "@/types/journey";
import {
  faRocket,
  faCode,
  faShieldAlt,
  faCertificate,
  faBriefcase,
  faCrown,
  faInfinity
} from "@fortawesome/free-solid-svg-icons";

export const journeyContent: JourneyContent = {
  title: "My Journey",
  subtitle: "From curious beginner to seasoned developer. A decade of building, breaking, and mastering technology.",
  icon: faRocket
};

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: "2014-spark",
    year: "2014-2015",
    title: "The Spark",
    subtitle: "Discovered my passion for technology",
    description: "Started experimenting with code, broke things, fixed them, and realized this was more than a hobby—it was my calling.",
    icon: faRocket,
    side: 'left',
    achievements: [
      "Wrote first lines of code",
      "Built first functional website",
      "Fell in love with problem-solving",
      "Decided to pursue development full-time"
    ],
    techStack: ["HTML", "CSS", "JavaScript", "PHP"],
    badge: "🎯 Origin Story",
    color: "#f59e0b"
  },
  {
    id: "2015-foundation",
    year: "2015-2017",
    title: "Foundation Years",
    subtitle: "Junior Freelance Developer",
    description: "Dove headfirst into client work, learning by doing. Every project taught me something new about development, clients, and delivery.",
    icon: faCode,
    side: 'right',
    achievements: [
      "Launched first client projects",
      "Mastered full-stack development",
      "Learned client communication & project management",
      "Built web & mobile applications",
      "Created workflow automation scripts"
    ],
    techStack: ["PHP", "JavaScript", "Python", "Java", "MySQL"],
    badge: "💼 First Clients",
    color: "#6366f1"
  },
  {
    id: "2017-expansion",
    year: "2017-2019",
    title: "Expanding Horizons",
    subtitle: "Broadening the Stack",
    description: "Ventured into cybersecurity, participated in CTFs, and built my first homelab. Started exploring blockchain and emerging technologies.",
    icon: faShieldAlt,
    side: 'left',
    achievements: [
      "Competed in CTF challenges",
      "Built personal homelab infrastructure",
      "Explored blockchain & smart contracts",
      "Implemented cybersecurity best practices",
      "Deployed first Docker containers"
    ],
    techStack: ["Docker", "Linux", "Security", "Blockchain"],
    badge: "🛡️ Security Sentinel",
    color: "#06b6d4"
  },
  {
    id: "2019-validation",
    year: "2019-2021",
    title: "Professional Validation",
    subtitle: "Earning Industry Recognition",
    description: "While continuing freelance work, formalized knowledge through structured learning and earned industry-recognized certifications.",
    icon: faCertificate,
    side: 'right',
    achievements: [
      "AWS Cloud Practitioner certified",
      "Mastered Python automation",
      "Completed data analytics training",
      "Expanded DevOps knowledge",
      "Continued delivering client projects"
    ],
    techStack: ["AWS", "Python", "SQL", "R", "Tableau", "DevOps"],
    badge: "📜 Certification Master",
    color: "#f59e0b"
  },
  {
    id: "2021-corporate",
    year: "2021-2022",
    title: "Corporate Experience",
    subtitle: "Full-Stack Developer @ Profitus",
    description: "Applied skills in fast-paced FinTech startup, working on payment processing platform with modern tech stack and agile methodologies.",
    icon: faBriefcase,
    side: 'left',
    achievements: [
      "Maintained production FinTech platform",
      "Contributed to cloud-native architecture",
      "Collaborated in agile team environment",
      "Optimized MySQL databases at scale",
      "Built features with React & modern JS"
    ],
    techStack: ["React", "PHP", "MySQL", "Cloud", "AWS"],
    badge: "🏢 Enterprise Ready",
    color: "#6366f1"
  },
  {
    id: "2022-architect",
    year: "2022-Present",
    title: "Architecting Solutions",
    subtitle: "Senior Software Engineer",
    description: "Leading full project lifecycles, designing complex systems, and solving sophisticated problems across multiple domains.",
    icon: faCrown,
    side: 'right',
    achievements: [
      "Architected enterprise software solutions",
      "Developed SaaS products from scratch",
      "Implemented ML/AI integrations",
      "Built ETL pipelines & analytics dashboards",
      "Mastered Kubernetes & container orchestration",
      "Contributed to open-source projects"
    ],
    techStack: ["Kubernetes", "React", "Node.js", "Python", "ML/AI", "Docker"],
    badge: "👑 Master Architect",
    color: "#06b6d4"
  },
  {
    id: "ongoing-evolution",
    year: "Ongoing",
    title: "Continuous Evolution",
    subtitle: "Never Stop Learning, Never Stop Building",
    description: "Running a sophisticated homelab with Kubernetes clusters, contributing to open source, exploring AI/ML, and pushing boundaries every day.",
    icon: faInfinity,
    side: 'left',
    achievements: [
      "Multi-server homelab infrastructure",
      "Kubernetes cluster management",
      "Active security research & CTFs",
      "AI/ML experimentation",
      "Blockchain development",
      "Open-source contributions",
      "Mentoring aspiring developers"
    ],
    techStack: ["Everything", "Always", "Learning"],
    badge: "🚀 Unstoppable",
    color: "#f59e0b"
  }
];

export const journeyStats = {
  yearsExperience: "10+",
  projectsCompleted: "50+",
  certifications: "5+",
  technologiesMastered: "20+"
};
