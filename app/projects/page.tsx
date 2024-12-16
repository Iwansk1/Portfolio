import ProjectCard from '../components/ProjectCard';
import projects from '@/data/projects.json';

export default function Projects() {
	return (
		<section className="container">
			<div className="text-center">
				<h2 className="text-5xl font-bold">Projects</h2>
			</div>
			<div className="flex flex-col justify-center md:justify-evenly items-center sm:flex-row gap-4 gap-y-6 mt-10 flex-wrap">
				{projects.map((projectcard) => (
					<ProjectCard key={projectcard.title} projectcard={projectcard} />
				))}
			</div>
		</section>
	);
}
