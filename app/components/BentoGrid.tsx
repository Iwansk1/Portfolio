import React from 'react';
import { Typewriter } from 'nextjs-simple-typewriter';
import TechStack from './TechTabs';
import TimeLine from './TimeLine';

interface TypewriterSectionProps {
	title: string;
	words: string[];
}

const TypewriterSection: React.FC<TypewriterSectionProps> = ({ title, words }) => (
	<div>
		<p className="text-xl font-semibold">{title}</p>
		<p className="grid-highlight-text">
			<Typewriter words={words} loop={0} cursor={true} />
		</p>
	</div>
);

const whoAmIWords = ['A Full-Stack Developer. ', 'A Tech Enthusiast. ', 'Your next collaborator! '];
const whatDoIDoWords = ['testing ', 'testing '];

const BentoGrid = () => {
	return (
		<section className="container mx-auto mt-10" id="about">
			<h2 className="text-5xl font-bold mb-8 text-center">About Me</h2>
			<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 xl:grid-rows-3 gap-5">
				{/* Grid Item 1 */}
				<div className="col-span-1 md:col-span-2 xl:col-span-2 xl:row-span-1">
					<div className="grid-container">
						<img src="/img/david.jpg" alt="Profile" className="w-full h-64 object-contain rounded-lg" />
						<div className="flex flex-col gap-4 mt-6 w-full">
							<p className="grid-headtext">Hello</p>
							<TypewriterSection title="Who am I?" words={whoAmIWords} />
							<TypewriterSection title="What do I do?" words={whatDoIDoWords} />
						</div>
					</div>
				</div>

				{/* Grid Item 2 */}
				<div className="col-span-1 xl:col-span-2 xl:row-span-1">
					<div className="grid-container">
						<img src="/img/grid2.png" alt="TechStack" className="w-full h-64 object-contain rounded-lg" />
						<div>
							<p className="grid-headtext">Experience</p>
							<div className="mt-6">
								<p className="grid-subtext">
									With <span className="grid-highlight-text">5+</span> years of experience, having worked
									with <span className="grid-highlight-text">10+</span> clients, and completed{' '}
									<span className="grid-highlight-text">15+</span> projects, I bring expertise and dedication
									to every task.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Grid Item 3 */}
				<TechStack></TechStack>
				{/* Grid Item 4 */}
				<TimeLine></TimeLine>

				<div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-3 xl:row-span-1">
					<div className="grid-container">
						<img
							src="/img/grid2.png"
							alt="Achievements"
							className="w-full h-64 object-contain rounded-lg"
						/>
						<div>
							<p className="grid-headtext">Why I do what I do</p>
							<p className="grid-subtext">
								I love solving problems and building things through code. Programming isn&apos;t just my
								profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my
								skills.
							</p>
						</div>
					</div>
				</div>

				{/* Grid Item 6 */}
				<div className="col-span-1 md:col-span-3 lg:col-span-3 xl:col-span-4 xl:row-span-1">
					<div className="grid-container">
						<img src="/img/grid2.png" alt="Gallery" className="w-full h-64 object-contain rounded-lg" />
						<div>
							<p className="grid-headtext">Gallery</p>
							<p className="grid-subtext">A visual representation of my work and skills...</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BentoGrid;
