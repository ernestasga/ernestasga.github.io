import { Metadata } from "next";

const seoConfig: Metadata = {
    title: 'Ernestas Garjonis - Software Engineer',
    description: "This is my personal portfolio website. I am a software engineer with years of experience in developing various IT solutions, such as web and mobile applications, microservices.",
    // Open Graph (Facebook) metadata
    openGraph: {
        type: 'website',
        url: 'https://ernestasga.github.io', // Replace with your website URL
        title: 'Ernestas Garjonis - Software Engineer',
        description: 'Portfolio of Ernestas Garjonis, a software engineer specialized in web and mobile applications development.',
        images: [{url: 'https://ernestasga.github.io/img/background.png'}]
    },
    // Twitter Card metadata
    twitter: {
        title: 'Ernestas Garjonis - Software Engineer',
        site: '@yourHandle', // Replace with your Twitter handle
        images: 'https://ernestasga.github.io/img/background.png',
    },
    keywords: [
        "Garjonis",
        "Ernestas Garjonis",
        "Portfolio",
        "Garjonis Portfolio ",
        "Ernestas Garjonis Portfolio",
        "software engineer",
        "software developer",
        "software architect",
        "web developer",
        "full stack",
        "full stack web developer",
        "backend developer",
        "frontend developer",
        "mobile app developer",
        "python developer",
        "django developer",
        "javascript developer",
        "react developer",
        "reactjs developer",
        "nextjs developer",
        "IT solutions",
    ]
}

export default seoConfig;