'use client';
import React from 'react';

interface Job {
	title: string;
	company: string;
	duration: string;
	description: string;
}

const TimeLine = () => {
	const jobs: Job[] = [
		{
			title: 'Full Stack Developer',
			company: 'ABC Corp.',
			duration: '2022 - Present',
			description: 'Developing web applications using React, Node.js, and MongoDB.',
		},
		{
			title: 'Frontend Developer',
			company: 'XYZ Ltd.',
			duration: '2020 - 2022',
			description: 'Building responsive user interfaces with HTML, CSS, and JavaScript.',
		},
		{
			title: 'Junior Developer',
			company: 'Tech Innovations',
			duration: '2018 - 2020',
			description: 'Assisted in building websites using WordPress and custom PHP solutions.',
		},
	];

	return (
		<div className="col-span-1 xl:row-span-1">
			<div className="grid-container">
				<div>
					<p className="grid-headtext">Timeline</p>

					{/* Timeline */}
					<div className="flex flex-col gap-8 mt-4 pl-3 border-dashed border-l-2 border-green-400">
						{jobs.map((job, index) => (
							<div key={index} className="flex items-start gap-6">
								{/* Job Event Circle */}
								<div className="grid-highlight-text px-4 py-2 bg-gray-900 rounded-full">
									<span>{index + 1}</span>
								</div>

								{/* Job Details */}
								<div className="flex-grow">
									<p className="lg:text-lg text-base font-semibold">{job.title}</p>
									<p className="lg:text-md text-sm text-gray-200">{job.company}</p>
									<p className="lg:text-md text-gray-200">{job.duration}</p>
									<p className="mt-1 lg:text-sm hidden text-gray-400">{job.description}</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeLine;
