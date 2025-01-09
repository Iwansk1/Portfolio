'use client';
import React, { useState } from 'react';

const TechStack = () => {
	const [activeTab, setActiveTab] = useState('frontend');

	return (
		<div className="col-span-1 md:col-span-3 xl:col-span-4 xl:row-span-1">
			<div className="grid-container">
				<img
					src="/img/grid3.png"
					alt="Tech Stack"
					className="w-full md:w-fit self-center h-64 object-contain rounded-lg hover:rotate-[720deg] transition-all duration-[5500ms]"
				/>
				<div>
					<p className="grid-headtext">TechStack</p>
					<div className="my-4">
						<ul className="flex flex-wrap gap-4">
							<li
								className={`cursor-pointer py-2 px-4 rounded-md ${
									activeTab === 'frontend' ? 'btn-primary' : 'btn-secondary'
								}`}
								onClick={() => setActiveTab('frontend')}
							>
								Frontend
							</li>
							<li
								className={`cursor-pointer py-2 px-4 rounded-md ${
									activeTab === 'backend' ? 'btn-primary' : 'btn-secondary'
								}`}
								onClick={() => setActiveTab('backend')}
							>
								Backend
							</li>
							<li
								className={`cursor-pointer py-2 px-4 rounded-md ${
									activeTab === 'tools' ? 'btn-primary' : 'btn-secondary'
								}`}
								onClick={() => setActiveTab('tools')}
							>
								Tools
							</li>
						</ul>
					</div>

					{activeTab === 'frontend' && (
						<p className="grid-subtext">
							For frontend development, I use{' '}
							<span className="grid-highlight-text">HTML, CSS, and JavaScript</span> to build interactive
							and visually appealing websites. I also use{' '}
							<span className="grid-highlight-text">NextJS</span> for fast, SEO-friendly{' '}
							<span className="grid-highlight-text">React </span>apps. For the design of the website, I use{' '}
							<span className="grid-highlight-text">Figma.</span>
						</p>
					)}

					{activeTab === 'backend' && (
						<p className="grid-subtext">
							For backend development, I work with{' '}
							<span className="grid-highlight-text">PHP and WordPress</span> for content management and
							dynamic website functionalities.
						</p>
					)}

					{activeTab === 'tools' && (
						<p className="grid-subtext">
							My toolset includes <span className="grid-highlight-text">Tailwind CSS</span> for rapid
							styling and <span className="grid-highlight-text">TypeScript</span> for ensuring type safety
							and reducing errors in <span className="grid-highlight-text">JavaScript</span> code.
						</p>
					)}
				</div>
			</div>
		</div>
	);
};

export default TechStack;
