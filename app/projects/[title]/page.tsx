import { notFound } from 'next/navigation';
import projects from '@/data/projects.json';
import Image from 'next/image';

// Utility function to slugify the title
const slugify = (str: string) => {
	return str
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/[^\w-]+/g, ''); // Remove non-alphanumeric characters except hyphens
};

interface ProjectDetailPageProps {
	params: { title: string };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
	// Await params to access the 'title' property
	const { title } = params;

	// Find the project based on the slugified title
	const project = projects.find((proj) => slugify(proj.title) === title);

	if (!project) {
		notFound(); // Trigger 404 if project is not found
	}

	return (
		<section className="container mt-10">
			<div className="text-center">
				<div className="w-full">
					<Image src={project.image} alt={project.title} width={1200} height={800} />
				</div>
				<h2 className="text-5xl font-bold">{project.title}</h2>
				<h3>{project.client}</h3>
				<p>{project.description}</p>
				<div className="mt-6">
					{/* Display the sectors */}
					<div className="flex gap-2 flex-wrap">
						{Array.isArray(project.sector)
							? project.sector.map((sector, idx) => (
									<span key={idx} className="text-sm text-gray-500 bg-gray-200 px-3 py-1 rounded-lg">
										{sector}
									</span>
							  ))
							: project.sector}
					</div>
				</div>
			</div>
		</section>
	);
}
