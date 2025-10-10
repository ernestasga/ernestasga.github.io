export interface Project {
    name: string;
    desc: string;
    link?: { name: string, path: string };
    link2?: { name: string, path: string };
    github?: string;
    techStack: string[];
    status: 'live' | 'active' | 'archived' | 'open-source';
    featured?: boolean;
    year?: string;
    impact?: string;
    category?: 'web' | 'mobile' | 'api' | 'automation' | 'ml';
}