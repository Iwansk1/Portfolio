import React from 'react';
import Link from 'next/link';

// Library imports
import { Typewriter } from 'nextjs-simple-typewriter';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';

// Component imports
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';

// Data imports
import skills from '@/data/skills.json';
import projects from '@/data/projects.json';

interface TypewriterSectionProps {
	title: string;
	words: string[];
}

const TypewriterSection: React.FC<TypewriterSectionProps> = ({ title, words }) => (
	<div className="mb-8">
		<p className="text-2xl">{title}</p>
		<p className="text-green-400 text-xl">
			<Typewriter words={words} loop={0} cursor={true} />
		</p>
	</div>
);

export default function Homepage() {
	const whoAmIWords = [
		'A Full-Stack Developer. ',
		'A Tech Enthusiast. ',
		'Your next collaborator! ',
	];
	const whatDoIDoWords = ['testing ', 'testing '];
	const threeProjects = projects.slice(0, 3);
	return (
		<section>
			{/* Hero Section */}
			<section className="w-screen md:pt-10 bg-waveBlue bg-[length:200%_100%] animate-waveGradient">
				<div className="container mx-auto flex flex-col md:items-center justify-center text-white lg:flex-row lg:justify-between h-[60vh] px-6">
					{/* Hero Text */}
					<div className="max-w-4xl mb-10 md:mb-0 ">
						<h1 className="text-3xl mb-4 sm:text-7xl leading-tight font-bold">
							Hello! I am <br />
							Iwan Bijl
						</h1>
						<span className="text-md md:text-2xl font-bold text-left lg:text-left">
							Owner of <br />
							<Link
								className="underline flex items-center gap-1 hover:text-blue-500 transition"
								href="#"
								aria-label="Visit Axedigital-solutions"
							>
								Axedigital-solutions
								<ArrowTopRightOnSquareIcon className="h-5 w-5" />
							</Link>
						</span>
					</div>

					{/* Hero Description */}
					<div className="max-w-lg md:mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
						<h2 className="text-lg md:text-2xl font-semibold mb-4 text-center lg:text-left">
							A Full-Stack Developer based in The Netherlands.
						</h2>
						<h3 className="text-base md:text-lg leading-relaxed lg:text-left hidden md:block">
							With a strong focus on responsive design, clean code, and user-centric solutions, I help
							people and businesses turn ideas into impactful products.
						</h3>

						{/* Call-to-Action Buttons */}
						<div className="flex flex-row gap-6 mt-8 justify-center lg:justify-start">
							<Link
								href="/#projects"
								className="md:px-6 md:py-3 px-4 py-2 text-center bg-blue-600 text-white rounded-lg md:text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
								aria-label="See my projects"
							>
								See my projects
							</Link>
							<Link
								href="/#contact"
								className="md:px-6 md:py-3 px-4 py-2  bg-slate-100 text-center text-blue-600 rounded-lg md:text-lg font-semibold shadow-lg hover:bg-slate-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
								aria-label="Talk with me"
							>
								Talk with me
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section className="container mt-10" id="about">
				<div className="text-center">
					<h2 className="text-5xl font-bold">About me</h2>
				</div>
				<div className="flex flex-col mt-10 lg:flex-row justify-between gap-8">
					{/* Typewriter Text Section */}
					<div className="flex flex-col gap-6 mt-6 w-full lg:w-2/3">
						<TypewriterSection title="Who am I?" words={whoAmIWords} />
						<TypewriterSection title="What do I do?" words={whatDoIDoWords} />
						<TypewriterSection title="What have I done?" words={whatDoIDoWords} />
						<TypewriterSection title="What are my plans?" words={whatDoIDoWords} />
					</div>

					{/* Stats Section */}
					<div className="flex flex-col gap-6 mt-6 w-full lg:w-1/3">
						<div className="bg-blue-600 p-5 text-center rounded-lg sm:self-start hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
							<p className="text-4xl font-extrabold mb-2">5</p>
							<p className="text-xl">Years of experience</p>
						</div>
						<div className="bg-blue-600 p-5 text-center rounded-lg sm:self-end hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
							<p className="text-4xl font-extrabold mb-2">5</p>
							<p className="text-xl">Clients worked for</p>
						</div>
						<div className="bg-blue-600 p-5 text-center rounded-lg sm:self-start hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
							<p className="text-4xl font-extrabold mb-2">5</p>
							<p className="text-xl">Projects worked on</p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="container mt-20 sm:mt-10" id="skills">
				<div className="text-center">
					<h2 className="text-5xl font-bold">Skills</h2>
				</div>
				<div className="flex flex-col justify-center md:justify-evenly items-center sm:flex-row gap-8 my-10 flex-wrap">
					{skills.map((card) => (
						<SkillCard key={card.skill} card={card} />
					))}
				</div>
			</section>

			<section className="container mt-20 sm:mt-10" id="projects">
				<div className="text-center">
					<h2 className="text-5xl font-bold">My Projects</h2>
				</div>
				<div className="flex flex-col justify-center md:justify-evenly items-center sm:flex-row gap-4 mt-10 flex-wrap">
					{threeProjects.map((projectcard) => (
						<ProjectCard key={projectcard.title} projectcard={projectcard} />
					))}
				</div>
				<div className="mt-5 text-center text-xl ">
					<Link href={'/projects'} className="underline">
						More projects +
					</Link>
				</div>
			</section>
		</section>
	);
}
