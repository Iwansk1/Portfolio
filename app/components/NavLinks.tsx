'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const navLinks = [
	{ name: 'Home', path: '/' },
	{ name: 'Cars', path: '/cars' },
	{ name: 'Brands', path: '/brands' },
];

export const NavLinks = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-end gap-10 bg-white p-6">
			{navLinks.map((link) => (
				<Link
					key={link.path}
					href={link.path}
					className={`hover:text-blue-600 transition-colors duration-150 ${
						pathname === link.path ? 'font-bold text-blue-600' : 'text-black'
					}`}
				>
					{link.name}
				</Link>
			))}
		</nav>
	);
};
