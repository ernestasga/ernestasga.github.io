import React from 'react';
import faqData from '@/data/faq';

export default function StructuredData() {
  // Person Schema - Professional Profile
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ernestas Garjonis",
    "jobTitle": "Senior Full-Stack Developer",
    "description": "Senior Full-Stack Developer with 10+ years of experience in web development, AI/ML integration, blockchain, and cloud architecture.",
    "url": "https://ernestasga.github.io",
    "image": "https://ernestasga.github.io/img/icons/common/ernestas_avatar.jpg",
    "email": "garjonisernestas@gmail.com",
    "telephone": "+370-695-87828",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mažeikiai",
      "addressCountry": "LT"
    },
    "sameAs": [
      "https://linkedin.com/in/ernestas-garjonis",
      "https://github.com/ernestasga"
    ],
    "knowsAbout": [
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "Python",
      "Django",
      "AWS",
      "Docker",
      "Kubernetes",
      "Machine Learning",
      "Blockchain",
      "Cybersecurity"
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Coursera, Google IT Automation with Python"
    }
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ernestas Garjonis Portfolio",
    "url": "https://ernestasga.github.io",
    "description": "Professional portfolio of Ernestas Garjonis, Senior Full-Stack Developer specializing in modern web development, AI/ML, and cloud technologies.",
    "author": {
      "@type": "Person",
      "name": "Ernestas Garjonis"
    },
    "inLanguage": "en-US"
  };

  // ProfessionalService Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ernestas Garjonis - Software Development Services",
    "description": "Full-stack web development, cloud architecture, AI/ML integration, blockchain development, and technical consulting services.",
    "provider": {
      "@type": "Person",
      "name": "Ernestas Garjonis"
    },
    "areaServed": "Worldwide",
    "availableLanguage": ["en", "lt", "ru", "es"],
    "priceRange": "$$",
    "serviceType": [
      "Web Development",
      "Cloud Architecture",
      "DevOps Consulting",
      "AI/ML Integration",
      "Blockchain Development",
      "Technical Consulting"
    ]
  };

  // FAQPage Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ernestasga.github.io"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://ernestasga.github.io/#projects"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Experience",
        "item": "https://ernestasga.github.io/#experience"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Contact",
        "item": "https://ernestasga.github.io/#get-in-touch"
      }
    ]
  };

  const escapeJsonForScript = (obj: any) => {
    return JSON.stringify(obj).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');
  };

  return (
    <>
      {/* Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escapeJsonForScript(personSchema) }}
      />

      {/* Website Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escapeJsonForScript(websiteSchema) }}
      />

      {/* Professional Service Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escapeJsonForScript(professionalServiceSchema) }}
      />

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escapeJsonForScript(faqSchema) }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: escapeJsonForScript(breadcrumbSchema) }}
      />
    </>
  );
}
