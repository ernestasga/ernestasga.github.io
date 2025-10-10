import { Metadata } from "next";

const seoConfig: Metadata = {
    metadataBase: new URL('https://ernestasga.github.io'),
    title: {
        default: 'Ernestas Garjonis | Senior Full-Stack Developer | AI & Blockchain Expert',
        template: '%s | Ernestas Garjonis'
    },
    description: "Senior Full-Stack Developer with 10+ years of experience building production-grade web applications. Specialized in React, Node.js, Python, Django, AI/ML integration, blockchain development, and cloud architecture. Available for freelance projects and consulting.",
    authors: [{ name: 'Ernestas Garjonis', url: 'https://ernestasga.github.io' }],
    creator: 'Ernestas Garjonis',
    publisher: 'Ernestas Garjonis',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/favicon.ico',
        apple: '/favicon.png',
    },
    // Open Graph (Facebook) metadata
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://ernestasga.github.io',
        siteName: 'Ernestas Garjonis Portfolio',
        title: 'Ernestas Garjonis | Senior Full-Stack Developer | AI & Blockchain Expert',
        description: 'Senior Full-Stack Developer with 10+ years of experience. Specializing in React, Node.js, Python, AI/ML, blockchain, and cloud technologies. View portfolio and hire for your next project.',
        images: [
            {
                url: '/img/background.png',
                width: 1200,
                height: 630,
                alt: 'Ernestas Garjonis - Full-Stack Developer Portfolio',
            }
        ]
    },
    // Twitter Card metadata
    twitter: {
        card: 'summary_large_image',
        title: 'Ernestas Garjonis | Senior Full-Stack Developer',
        description: '10+ years building scalable web applications. React, Node.js, Python, AI/ML, Blockchain expert.',
        images: ['/img/background.png'],
        creator: '@ernestasga',
        site: '@ernestasga',
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