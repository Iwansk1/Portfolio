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

	// Detect mobile screen size
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	// Toggle flip on mobile
	const handleCardClick = () => {
		if (isMobile) {
			setIsFlipped((prev) => !prev);
		}
	};

	return (
		<div
			className="card relative w-full md:w-80 h-96 perspective-[1000px]"
			onClick={handleCardClick} // Enable flip on mobile click
		>
			<div
				className={`card__content w-full h-full transform-style-preserve-3d transition-transform duration-1000 ${
					isFlipped ? 'rotate-y-180' : ''
				}`}
			>
				{/* Front of the card */}
				<div className="card__front absolute top-0 bottom-0 right-0 left-0 bg-slate-800 flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg backface-hidden">
					<Image src={card.logo} alt={card.skill} width={50} height={50} className="rounded-md mb-5" />
					<h2 className="mb-2 text-xl font-bold text-white">{card.skill}</h2>
					<h3 className="text-lg mt-2 text-white">{card.skillType}</h3>
					<div className="mt-4 text-lg">
						<span className="font-medium">Years of Experience:</span> {card.years} years
					</div>
				</div>

				{/* Back of the card */}
				<div className="card__back absolute top-0 bottom-0 right-0 left-0 bg-slate-700 text-white flex flex-col items-center justify-center gap-4 p-4 rounded-lg shadow-lg transform rotate-y-180 backface-hidden">
					<Image src={card.logo} alt={card.skill} width={50} height={50} className="rounded-md mb-5" />
					<h3 className="text-xl mb-2 font-semibold">{card.skill}</h3>
					<p className="mt-2 text-base text-center">{card.description}</p>

					{/* Progress Bar */}
					<div className="w-full mt-8">
						<div className="text-base font-medium text-white">Progress: {card.progress}%</div>
						<div className="w-full h-2 bg-gray-300 rounded-full mt-2">
							<div
								className="h-full bg-green-600 rounded-full"
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
