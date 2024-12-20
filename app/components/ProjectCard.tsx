import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectCard {
	title: string;
	image: string;
	client: string;
	description: string;
	sector: string | string[];
}

interface ProjectCardProps {
	projectcard: ProjectCard;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectcard }) => {
	const sectors = Array.isArray(projectcard.sector) ? projectcard.sector : [projectcard.sector];

	const excerptDescription = (description: string, limit: number = 130) => {
		return description.length > limit ? `${description.slice(0, limit)}...` : description;
	};
	const excerptSectors = (sector: string | string[], limit: number = 3) => {
		return sectors.length > limit ? [...sectors.slice(0, limit)] : sectors;
	};
	return (
		<div className="relative flex flex-col w-72 sm:w-1/4 h-[25rem] pb-6 sm:h-[35rem] rounded-lg bg-slate-800 shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
			{/* Image Section */}
			<div className="relative max-h-52 h-full w-full overflow-hidden rounded-t-md">
				<Image
					src={projectcard.image}
					alt={projectcard.title}
					height={400}
					width={1000}
					className="object-cover transition-transform duration-300 hover:scale-105"
				/>
			</div>

			{/* Content Section */}
			<div className="mt-6 flex-grow px-4 text-sm">
				<h2 className="text-2xl font-bold text-white">{projectcard.client}</h2>
				<p className="mt-1 text-base text-gray-200">{projectcard.title}</p>
				{/* Description */}
				<p className="mt-3 hidden sm:block text-gray-300">
					{excerptDescription(projectcard.description)}
				</p>
			</div>

			{/* Sectors Section */}
			<div className="px-4 mt-4 flex flex-wrap gap-2">
				{excerptSectors(sectors).map((sectors, index) => (
					<span
						key={index}
						className="text-xs sm:text-sm text-gray-300 font-medium bg-gray-700 py-1 px-2 rounded-md"
					>
						{sectors}
					</span>
				))}
			</div>

			{/* Learn More Button */}
			<div className="flex justify-end mt-6 px-4">
				<Link
					href={`/projects/${projectcard.title
						.toLowerCase()
						.replace(/\s+/g, '-')
						.replace(/[^\w-]+/g, '')}`}
					className="text-sm font-semibold text-white bg-blue-600 py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300"
				>
					Learn More
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
