import React from 'react';
import Link from 'next/link';

// Component imports
import ProjectCard from './components/ProjectCard';
import BentoGrid from './components/BentoGrid';
import ContactSection from './components/ContactSection';

// Data imports
import projects from '@/data/projects.json';

export default function Homepage() {
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
							<Link href={'/#'} className="grid-highlight-text underline">
								Axedigital-solutions
							</Link>
							, I craft responsive designs, write clean, maintainable code, and deliver user-focused
							solutions. Let&apos;s transform ideas into impactful products together.
						</h3>

						{/* Call-to-Action Buttons */}
						<div className="flex flex-row gap-6 md:mt-8 justify-center lg:justify-start">
							<Link href="/#projects" className="btn-primary" aria-label="See my projects">
								See my projects
							</Link>
							<Link href="/#contact" className="btn-secondary" aria-label="Talk with me">
								Talk with me
							</Link>
						</div>
					</div>
				</div>
			</section>

			<BentoGrid />

			{/* Projects Section */}
			<section className="container mt-20 md:mt-32" id="projects">
				<div className="text-center">
					<h2 className="text-5xl font-bold">My Projects</h2>
				</div>
				<div className="flex flex-col justify-center md:justify-between items-center sm:flex-row mt-10 gap-4 sm:gap-0 flex-wrap">
					{threeProjects.map((projectcard) => (
						<ProjectCard key={projectcard.title} projectcard={projectcard} />
					))}
				</div>
				<div className="mt-10 text-right">
					<Link
						href={'/projects'}
						className="px-4 py-2 text-center bg-blue-600 text-white rounded-lg md:text-xl font-semibold shadow-lg hover:bg-blue-700 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
					>
						More projects
					</Link>
				</div>
			</section>

			{/* Contact Section */}
			<ContactSection />
		</section>
	);
}
