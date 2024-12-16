import '@/app/globals.css';
import { NavLinks } from '@/app/components/NavLinks';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react';

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700'],
	style: ['normal', 'italic'],
	variable: '--font-poppins',
});

export const metadata: Metadata = {
	title: 'Iwan Bijl',
	description: 'Personal portfolio site made using Nextjs as a Fullstack Developer',
	// OpenGraph metadata for better social media preview
	openGraph: {
		title: 'Iwan Bijl',
		description: 'Personal portfolio site showcasing projects by Iwan Bijl.',
		url: 'https://iwanbijl.com/',
		siteName: 'Iwan Bijl Portfolio',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Iwan Bijl',
		description: 'Personal portfolio site by Iwan Bijl',
	},
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="scroll-smooth">
			<body
				className={`${poppins.variable} relative font-sans flex flex-col min-h-screen overflow-x-hidden bg-gray-900 text-gray-100 m-0 p-0`}
			>
				{/* Sticky Navbar */}
				<header className="sticky top-0 bg-slate-900 bg-opacity-95 shadow-2xl z-10">
					<NavLinks />
				</header>

				{/* Main Content */}
				<main className="max-w-full flex-1 overflow-x-hidden mb-5">{children}</main>

				{/* Sticky Footer */}
				<footer className="bg-gray-800 py-6 text-center text-gray-400 mt-auto">
					<p>&copy; {new Date().getFullYear()} Iwan Bijl. All rights reserved.</p>
				</footer>

				{/* Vercel Analytics */}
				<Analytics />
			</body>
		</html>
	);
}
