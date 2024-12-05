// app/layout.tsx
import '@/app/globals.css';
import { NavLinks } from '@/app/components/NavLinks';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className="flex flex-col min-h-screen bg-gray-900 text-gray-100 m-0 p-0">
				<header className="bg-gray-800 shadow-md">
					<NavLinks />
				</header>
				<main className="flex-1 container mx-auto px-4 py-6">{children}</main>
				{/* Sticky Footer */}
				<footer className="bg-gray-800 py-6 text-center text-gray-400 mt-auto">
					<p>&copy; 2024 Iwan Bijl. All rights reserved.</p>
				</footer>
			</body>
		</html>
	);
}
