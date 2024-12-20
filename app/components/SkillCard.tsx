'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Card {
	skill: string;
	progress: number;
	logo: string;
	description: string;
	years: number;
	skillType: string;
}

interface SkillCardProps {
	card: Card;
}

const SkillCard: React.FC<SkillCardProps> = ({ card }) => {
	const [isFlipped, setIsFlipped] = useState(false);
	const [isMobile, setIsMobile] = useState(false);

	// Detect screen size to determine mobile view
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	// Toggle card flip (on mobile devices)
	const handleCardClick = () => {
		if (isMobile) setIsFlipped((prev) => !prev);
	};

	return (
		<div
			className="card relative w-full shadow-2xl max-w-80 md:w-80 h-96 perspective-[1000px]"
			onClick={handleCardClick}
		>
			<div
				className={`card__content w-full h-full transform-style-preserve-3d transition-all duration-500 ${
					isFlipped ? 'rotate-y-180' : ''
				}`}
			>
				{/* Front Side */}
				<div className="card__front text-white hover:scale-105 relative w-full h-full bg-slate-800 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-2xl backface-hidden transition">
					{isMobile && (
						<span className="absolute top-2 right-2 bg-blue-600  text-xs px-2 py-1 rounded-md shadow-md">
							Expand
						</span>
					)}
					<div className="bg-slate-900 shadow-lg w-full h-full flex justify-center rounded-md items-center">
						<Image src={card.logo} alt={card.skill} width={50} height={50} className="rounded-md mb-5" />
					</div>
					<h2 className="text-xl font-bold">{card.skill}</h2>
					<h3 className="text-lg">{card.skillType}</h3>
					<div className="mt-4 text-lg w-full">
						<span className="font-bold">Experience:</span> {card.years} years
					</div>
				</div>

				{/* Back Side */}
				<div className="card__back absolute inset-0 bg-blue-600 text-white flex flex-col items-center justify-evenly gap-4 p-4 rounded-lg shadow-2xl transform rotate-y-180 backface-hidden">
					<h3 className="text-2xl font-semibold m-6">{card.skill}</h3>
					<p className="mt-2 text-md text-left flex-grow">{card.description}</p>
					<div className="w-full shadow-xl">
						<div className="text-base font-medium text-white mb-2">
							Progress: <span className="text-green-400">{card.progress}%</span>
						</div>
						<div className="w-full h-4 bg-gray-800 rounded-full shadow-inner relative overflow-hidden">
							<div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-300 opacity-25 rounded-full"></div>
							<div
								className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-300 ease-in-out"
								style={{ width: `${card.progress}%` }}
							></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillCard;
