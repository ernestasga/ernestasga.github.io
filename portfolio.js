import emoji from "react-easy-emoji";

export const greetings = {
	name: "Ernestas Garjonis",
	title: "Hi, my name is Ernestas",
	description:
		`A passionate Full Stack Web and Mobile Developer, Cybersecurity and Blockchain enthusiast, 
		having an experience of building Web applications with JavaScript / Reactjs / PHP / Laravel 
		/ Django and some other cool libraries and frameworks and Cross Platform Mobile Apps With 
		Java, Flutter and React Native.
		`,
	resumeLink: "/files/resume.pdf",
};

export const openSource = {
	githubUserName: "ernestasga",
};

export const contact = {};

export const socialLinks = {
	facebook: "https://www.facebook.com/ernestas.garjonis",
	instagram: "https://www.instagram.com/ernestasga",
	github: "https://github.com/ernestasga",
	linkedin: "https://www.linkedin.com/in/ernestas-garjonis/",
};

export const skillsSection = {
	title: "What I do",
	subTitle:
		"FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
	skills: [
		emoji(
			"⚡ Develop Front end / User Interfaces for your web and mobile applications from designs or templates"
		),
		emoji(
			"⚡ Develop APIs and backend in various tech stacks"
		),
		emoji(
			"⚡ Plan and architecture your projects"
		),
		emoji(
			"⚡ Integration of third party services"
		),
	],

	softwareSkills: [
		{
			skillName: "html-5",
			fontAwesomeClassname: "vscode-icons:file-type-html",
		},
		{
			skillName: "css3",
			fontAwesomeClassname: "vscode-icons:file-type-css",
		},
		{
			skillName: "sass",
			fontAwesomeClassname: "logos:sass",
		},
		{
			skillName: "JavaScript",
			fontAwesomeClassname: "logos:javascript",
		},
		{
			skillName: "Php",
			fontAwesomeClassname: "logos:php",
		},
		{
			skillName: "Laravel",
			fontAwesomeClassname: "logos:laravel",
		},
		{
			skillName: "Cakephp",
			fontAwesomeClassname: "logos:cakephp",
		},
		{
			skillName: "reactjs",
			fontAwesomeClassname: "vscode-icons:file-type-reactjs",
		},
		{
			skillName: "nodejs",
			fontAwesomeClassname: "logos:nodejs-icon",
		},
		{
			skillName: "flutter",
			fontAwesomeClassname: "logos:flutter",
		},
		{
			skillName: "npm",
			fontAwesomeClassname: "vscode-icons:file-type-npm",
		},
		{
			skillName: "sql-database",
			fontAwesomeClassname: "vscode-icons:file-type-sql",
		},
		{
			skillName: "aws",
			fontAwesomeClassname: "logos:aws",
		},
		{
			skillName: "python",
			fontAwesomeClassname: "logos:python",
		},
		{
			skillName: "git",
			fontAwesomeClassname: "logos:git-icon",
		},
		{
			skillName: "docker",
			fontAwesomeClassname: "logos:docker-icon",
		}
	],
};

export const SkillBars = [
	{
		Stack: "Frontend", //Insert stack or technology you have experience in
		progressPercentage: "80", //Insert relative proficiency in percentage
	},
	{
		Stack: "Backend",
		progressPercentage: "90",
	},
	{
		Stack: "Linux",
		progressPercentage: "80",
	},
	{
		Stack: "Cybersecurity",
		progressPercentage: "70",
	},
	{
		Stack: "Data Analysis",
		progressPercentage: "80",
	}
];

export const educationInfo = [
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

export const experience = [
	{
		role: "Full-stack developer",
		company: "Freelance",
		companylogo: "/img/icons/common/freelancer.png",
		date: "June 2014 – ",
		desc: "Built solutions for various cliens.",
		descBullets: [
			"Building front-end from designs",
			"Building responsive web applications",
			"Building mobile applications",
			"Writing python automatization scripts"
		],
	},
	{
		role: "Programmer",
		company: "Profitus",
		companylogo: "/img/icons/common/profitusLogo.png",
		date: "September 2021 – ",
		desc: "Maintained old codebase and create new version of the platform.",
		descBullets: [
			"Develop both front-end and backend",
			"HTML, CSS, JAVASCRIPT and PHP",
			"Ocasional python automation"
		]
	}
];

export const projects = [
	{
		name: "KadaIšeis.lt",
		desc: "An application for keeping track of tv series episode release dates",
		link: "https://kadaiseis.lt",
		link2: "https://play.google.com/store/apps/details?id=com.ernestasga.kadaiseis",
		github: "https://github.com/ernestasga/kadaiseis",
	},
	{
		name: "Reivyčių Sodai",
		desc: "A web + mobile application for a client, who sells plants and seeding to attract more clients ",
		link: "https://reivyciusodai.lt",
		link2: "https://play.google.com/store/apps/details?id=com.ernestasg.reivyciu_sodai",
		github: "https://github.com/ernestasga/reivyciu_sodai",
	},
	{
		name: "Tax Calculation Mobile App",
		desc: "A salary tax calculation app for residents of Lithuania",
		link2: "https://play.google.com/store/apps/details?id=com.ernestasg.mokesciu_skaiciuokle",
		github: "https://github.com/ernestasga/mokesciu_skaiciuokle",
	},
	{
		name: "Coordinate Converter Mobile App",
		desc: "An application for converting between two coordinate standards",
		link2: "https://play.google.com/store/apps/details?id=com.ernestasg.lks94tool.full",
		github: "https://github.com/ernestasga/lks94tool",
	},
	{
		name: "Pakeliui",
		desc: "A rideshare platform for drivers and passengers",
		link: "https://pakeliui.lt",
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
		name: "Data Analytics",
		desc: "The final data analysis assignment to pass the GOOGLE DATA ANALYTICS course",
		github: "https://github.com/ernestasga/da-case-studies",
	},
	{
		name: "There are many more...",
		desc: "Those mentioned here are only simple projects that are either mine, or clients gave permission to share",
	}
];

export const feedbacks = [
	// {
	// 	name: "Hassan Mehmood",
	// 	feedback:
	// 		"We have been very happy with our new website! It looks professional and very easy to navigate. Our experience with the customer service at Hanzla tauqeer has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose hanzla web developer services for u.",
	// },
	// {
	// 	name: "Maheen Altaf",
	// 	feedback:
	// 		"the website is very nice, everything was perfectly made as i need. it just loads in moments, without giving u the chance to wait. the quality is also very amazing. i am using it without any problem. great job",
	// },
];

export const contacts = {
	email: "garjonisernestas@gmail.com",
	phone: "+370 695 87828",
}