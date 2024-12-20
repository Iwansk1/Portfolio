import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import Image from 'next/image';
import Link from 'next/link';
import projectsinfo from '@/data/projects-info.json';

// Utility function to slugify the title
const slugify = (str: string) => {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/[^\w-]+/g, ''); // Remove non-alphanumeric characters except hyphens
};

interface ProjectDetailPageProps {
	params: Promise<{ title: string }>;
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
	const params = await props.params;
	const { title } = params;

	// Find the project based on the slugified title
	const project = projects.find((proj) => slugify(proj.title) === title);

	if (!project) {
		notFound();
	}

	// Find the corresponding project info
	const projectIndex = projects.indexOf(project);
	const projectInfo = projectsinfo[projectIndex];

	return (
		<section className="container flex flex-col sm:flex-row gap-8 mt-10">
			{/* Sidebar */}
			<aside className="w-full sm:w-64 h-fit pb-8 bg-gray-800 p-6 rounded-lg shadow-md sticky top-10">
				<div className="mb-6">
					<Link
						href="/projects"
						className="text-sm font-semibold text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
					>
						&larr; Back to Projects
					</Link>
				</div>

				{/* Display the sectors */}
				<div className="mt-4">
					<h4 className="text-lg font-semibold text-white">Sectors</h4>
					<div className="mt-2 flex gap-2 flex-wrap">
						{Array.isArray(project.sector) ? (
							project.sector.map((sector, idx) => (
								<span key={idx} className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-lg">
									{sector}
								</span>
							))
						) : (
							<span className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-lg">
								{project.sector}
							</span>
						)}
					</div>
				</div>
			</aside>

			{/* Main Content */}
			<section className="flex-1">
				<div className="text-center">
					<div className="mb-10">
						<div className="relative w-full h-[500px]">
							<Image src={project.image} alt={project.title} fill className="object-cover" priority />
						</div>
						<h2 className="text-5xl font-bold mt-6">{project.title}</h2>
						<h3 className="text-xl text-gray-700">{project.client}</h3>
					</div>
					<div className="text-left">
						{/* Display Project Info */}
						<div className="mb-10">
							{' '}
							<h4 className="text-3xl text-center font-semibold mb-4">Problem:</h4>
							<p className="mt-2 text-gray-200">{projectInfo.problem}</p>
						</div>

						<div className="mb-10">
							{' '}
							<h4 className="text-3xl text-center font-semibold mb-4">Solution:</h4>
							<p className="mt-2 text-gray-200">{projectInfo.solution}</p>
						</div>

						<div className="mb-10">
							{' '}
							<h4 className="text-3xl text-center font-semibold mb-4">Result:</h4>
							<p className="mt-2 text-gray-200">{projectInfo.outcome}</p>
						</div>
					</div>

					<div className="mb-10">
						{' '}
						<h4 className="text-3xl text-center font-semibold mb-4">Technologies used:</h4>
						<div className="mt-2 text-gray-200 flex justify-center gap-4">
							{projectInfo.technology.map((tech, idx) => (
								<div key={idx} className="text-xl mt-1 text-black w-fit bg-gray-200 px-3 py-1 rounded-lg">
									{tech}
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}
