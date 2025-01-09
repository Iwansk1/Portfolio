'use client';
import React from 'react';
import Link from 'next/link';

import { DotLottieReact } from '@lottiefiles/dotlottie-react';
const HeroSection = () => {
	return (
		<section className="w-screen bg-gradient-to-r from-slate-950 to-75% to-slate-900">
			<div className="container mx-auto flex flex-col sm:items-center justify-evenly text-white lg:flex-row lg:justify-between h-fit px-6 py-12 sm:py-20 md:py-24 big:h-[60vh] big:py-0">
				<div className="flex flex-col justify-center">
					<div className="flex flex-col gap-6 max-w-xl">
						<p className="hero-subtitle">Hello and welcome to my portfolio site</p>
						<h1 className="hero-title-big">I&apos;m Iwan Bijl</h1>
						<h1 className="hero-title-big">A full-stack Developer</h1>
						<h2 className="hero-infotext">
							Dit is voor nu nog opvullingstekst hier zal ik binnenkort even een mooi verhaaltje moeten
							neerzetten met een beetje informatie over mij en mijn motivatie
						</h2>
					</div>

					<div className="flex gap-4 mt-4">
						<Link href="/#projects" className="btn-primary" aria-label="See my projects">
							Talk with me
						</Link>
					</div>
				</div>
				<DotLottieReact
					className="w-fit hidden md:w-full md:max-w-[600px] lg:max-w-[600px] xl:max-w-[900px] sm:block"
					src="https://lottie.host/4431af59-557e-4d25-8710-28f57ddb8e4a/v2JCgTCJKL.lottie"
					loop
					autoplay
				/>
			</div>
		</section>
	);
};

export default HeroSection;
