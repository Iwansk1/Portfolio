import React from 'react';
import Link from 'next/link';

// Library imports
import { Typewriter } from 'nextjs-simple-typewriter';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';

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
		<p className="text-3xl font-semibold">{title}</p>
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
				<div className="container mx-auto flex flex-col md:items-center justify-evenly text-white lg:flex-row lg:justify-between h-[60vh] px-6">
					{/* Hero Text */}
					<div className="max-w-4xl text-center sm:text-left md:mb-0 ">
						<h1 className="text-4xl mb-4 sm:text-7xl leading-tight font-bold">
							Hello! I&apos;m <br />
							Iwan Bijl
						</h1>
						<h2 className="text-base md:text-2xl md:font-semibold mb-4 text-left">
							A Full-Stack Developer based in The Netherlands. <br />{' '}
							<span className="sm:hidden">
								and founder of{' '}
								<Link href={'/#'} className="font-bold underline">
									Axedigital-solutions
								</Link>
							</span>
						</h2>
					</div>

					{/* Hero Description */}
					<div className="max-w-lg md:mt-8 lg:mt-0 flex flex-col items-center lg:items-start">
						<h3 className="text-base md:text-lg leading-relaxed lg:text-left hidden md:block">
							Through my company,{' '}
							<Link href={'/#'} className="font-bold underline">
								Axedigital-solutions
							</Link>
							, I craft responsive designs, write clean, maintainable code, and deliver user-focused
							solutions. Let&apos;s transform ideas into impactful products together.
						</h3>

						{/* Call-to-Action Buttons */}
						<div className="flex flex-row gap-6 md:mt-8 justify-center lg:justify-start">
							<Link
								href="/#projects"
								className="md:px-6 md:py-3 px-4 py-2 text-center bg-blue-600 text-white rounded-lg md:text-lg font-semibold shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
								aria-label="See my projects"
							>
								See my projects
							</Link>
							<Link
								href="/#contact"
								className="md:px-6 md:py-3 px-4 py-2 bg-slate-100 text-center text-blue-600 rounded-lg md:text-lg font-semibold shadow-lg hover:bg-slate-300 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
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
					<div className="flex flex-col gap-6 mt-6 w-full">
						<TypewriterSection title="Who am I?" words={whoAmIWords} />
						<TypewriterSection title="What do I do?" words={whatDoIDoWords} />
						<TypewriterSection title="What have I done?" words={whatDoIDoWords} />
						<TypewriterSection title="What are my plans?" words={whatDoIDoWords} />
					</div>

					{/* Stats Section */}
					<div className="flex flex-col gap-6 mt-6 md:w-1/4 items-end">
						<div className="bg-blue-600 p-5 text-center rounded-lg w-full hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
							<p className="text-4xl font-extrabold mb-2">5</p>
							<p className="text-xl">Years of experience</p>
						</div>
						<div className="bg-blue-600 p-5 text-center rounded-lg w-full hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
							<p className="text-4xl font-extrabold mb-2">5</p>
							<p className="text-xl">Clients worked for</p>
						</div>
						<div className="bg-blue-600 p-5 text-center rounded-lg w-full hover:scale-105 hover:shadow-lg transition-all duration-300 ease-in-out">
							<p className="text-4xl font-extrabold mb-2">5</p>
							<p className="text-xl">Projects worked on</p>
						</div>
					</div>
				</div>
			</section>

			{/* Skills Section */}
			<section className="container mt-20 md:mt-32" id="skills">
				<div className="text-center">
					<h2 className="text-5xl font-bold">Skills</h2>
				</div>
				<div className="flex flex-col justify-center md:justify-evenly items-center sm:flex-row gap-8 my-10 flex-wrap">
					{skills.map((card) => (
						<SkillCard key={card.skill} card={card} />
					))}
				</div>
			</section>

			{/* Projects Section */}
			<section className="container mt-20 md:mt-32" id="projects">
				<div className="text-center">
					<h2 className="text-5xl font-bold">My Projects</h2>
				</div>
				<div className="flex flex-col justify-center md:justify-evenly items-center sm:flex-row gap-4 mt-10 flex-wrap">
					{threeProjects.map((projectcard) => (
						<ProjectCard key={projectcard.title} projectcard={projectcard} />
					))}
				</div>
				<div className="mt-10 text-center">
					<Link
						href={'/projects'}
						className="px-4 py-2 text-center bg-blue-600 text-white rounded-lg md:text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
					>
						More projects
					</Link>
				</div>
			</section>

			{/* Contact Section */}
			<section className="container mt-20 md:mt-32" id="contact">
				<div className="text-center">
					<h2 className="text-5xl font-bold text-white">Contact Me</h2>
					<p className="mt-4 text-lg text-gray-400">
						Feel free to reach out! I&apos;m always open to new opportunities and collaborations.
					</p>
				</div>
				<div className="flex flex-col lg:flex-row justify-center gap-8 mt-10">
					{/* Contact Information */}
					<div className="flex flex-col w-full lg:w-1/2 gap-6 text-left">
						{/* Email */}
						<div className="bg-slate-800 rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-blue-600 transition-all duration-300">
							<EnvelopeIcon className="h-6 w-6 text-blue-500" />
							<div>
								<h3 className="text-xl font-bold text-white">Email</h3>
								<a
									href="mailto:Iwanbijl@gmail.com"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Iwanbijl@gmail.com
								</a>
							</div>
						</div>
						{/* Phone */}
						<div className="bg-slate-800 rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-blue-600 transition-all duration-300">
							<PhoneIcon className="h-6 w-6 text-blue-500" />
							<div>
								<h3 className="text-xl font-bold text-white">Phone</h3>
								<a href="tel:+31612490507" className=" text-gray-400 hover:text-white transition-colors">
									06 124 90 507
								</a>
							</div>
						</div>
						{/* Location */}
						<div className="bg-slate-800 rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-blue-600 transition-all duration-300">
							<MapPinIcon className="h-6 w-6 text-blue-500" />
							<div>
								<h3 className="text-xl font-bold text-white">Location</h3>
								<p className=" text-gray-400">The Netherlands</p>
							</div>
						</div>
					</div>

					{/* Call-to-Action */}
					<div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:items-start space-y-6">
						{/* Strong CTA */}
						<div className="bg-blue-600 flex flex-col p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-center lg:text-left">
							<h3 className="text-2xl font-bold text-white">Let&apos;s work together!</h3>
							<p className="mt-4 text-gray-300">
								I&apos;m available for freelance projects, consultations, or collaborations.
							</p>
							<Link
								href="/#contact"
								className="self-center sm:self-start mt-6 w-fit px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
							>
								Contact Me
							</Link>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
