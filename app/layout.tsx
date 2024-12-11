import '@/app/globals.css';
import { NavLinks } from '@/app/components/NavLinks';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google'; // Import the font

const poppins = Poppins({
	subsets: ['latin'],
	weight: ['400', '500', '700'], // Include the weights you need
	style: ['normal', 'italic'],
	variable: '--font-poppins', // Optional: create a custom CSS variable
});

export const metadata: Metadata = {
	title: 'Iwan Bijl',
	description: 'Personal portfolio site made for and by Iwan Bijl using Nextjs',
};

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body
				className={`${poppins.variable} relative font-sans flex flex-col min-h-screen overflow-x-hidden bg-gray-900 text-gray-100 m-0 p-0`}
			>
				<header className="sticky top-0 bg-slate-900 bg-opacity-95 shadow-2xl z-10">
					<NavLinks />
				</header>
				<main className="max-w-full flex-1 mx-auto overflow-hidden mb-5">{children}</main>
				{/* Sticky Footer */}
				<footer className="bg-gray-800 py-6 text-center text-gray-400 mt-auto">
					<p>&copy; 2024 Iwan Bijl. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}
