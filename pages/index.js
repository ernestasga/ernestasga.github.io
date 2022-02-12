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
import Particles from "react-tsparticles";

export default function Home({ githubProfileData }) {
	const particlesInit = (main) => {
		console.log(main);
	
		// you can initialize the tsParticles instance (main) here, adding custom shapes or presets
	  };
	
	  const particlesLoaded = (container) => {
		console.log(container);
	  };
	return (
		<div>
		<Particles
			id="tsparticles"
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
		
				fpsLimit: 120,
				interactivity: {
				events: {
					onClick: {
					enable: true,
					mode: "push",
					},
					onHover: {
					enable: true,
					mode: "repulse",
					},
					resize: true,
				},
				modes: {
					bubble: {
					distance: 400,
					duration: 2,
					opacity: 0.8,
					size: 40,
					},
					push: {
					quantity: 4,
					},
					repulse: {
					distance: 200,
					duration: 0.4,
					},
				},
				},
				particles: {
				color: {
					value: "#325aa8",
				},
				links: {
					color: "#325aa8",
					distance: 150,
					enable: true,
					opacity: 1,
					width: 2,
				},
				collisions: {
					enable: true,
				},
				move: {
					direction: "none",
					enable: true,
					outMode: "bounce",
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
					enable: true,
					area: 1000,
					},
					value: 60,
				},
				opacity: {
					value: 1,
				},
				shape: {
					type: "circle",
				},
				size: {
					random: true,
					value: 2,
				},
				},
				detectRetina: true,
			}}
			/>
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
