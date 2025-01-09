import React from 'react';
import Link from 'next/link';

// Component imports
import ProjectCard from './components/ProjectCard';
import BentoGrid from './components/BentoGrid';
import ContactSection from './components/ContactSection';
import HeroSection from './components/HeroSection';
// Data imports
import projects from '@/data/projects.json';

export default function Homepage() {
	const threeProjects = projects.slice(0, 3);
	return (
		<section>
			{/* Hero Section */}
			<HeroSection />
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
					<Link href={'/projects'} className="btn-primary">
						More projects
					</Link>
				</div>
			</section>

			{/* Contact Section */}
			<ContactSection />
		</section>
	);
}
