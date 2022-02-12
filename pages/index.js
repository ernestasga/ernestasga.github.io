import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { openSource } from "../portfolio";
import SEO from "../components/SEO";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO
				data={{
					title: "Ernestas Garjonis",
					description:
						"A passionate Full Stack Web Developer and Mobile App Developer.",
					image: "https://avatars.githubusercontent.com/u/36332719?v=4",
					url: "https://ernestasga.github.io",
					keywords: [
						"Garjonis",
						"Ernestas Garjonis",
						"Portfolio",
						"Garjonis Portfolio ",
						"Ernestas Garjonis Portfolio",
						"web developer",
						"full stack",
						"full stack web developer",
						"backend developer",
						"frontend developer",
						"mobile app developer",
						"android developer",
						"django",
						"php",
						"laravel",
						"cakephp",
						"django rest framework",
						"nodejs",
						"expressjs",
						"reactjs",
						"react native",
						"redux",
						"flutter",
						"docker",
						"aws",
						"data analytics"
					],
				}}
			/>
			<Navigation />
			<Greetings />
			<Skills />
			<Proficiency />
			<Education />
			<Experience />
			<Projects />
			<GithubProfileCard prof={githubProfileData} />
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
