'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
const navLinks = [
	{ name: 'About', path: '#about' },
	{ name: 'Skills', path: '#skills' },
	{ name: 'Home', path: '/', isImage: true, imageSrc: '/img/honda.png' },
	{ name: 'Projects', path: '#projects' },
	{ name: 'Contact', path: '#contact' },
];

export const NavLinks = () => {
	const pathname = usePathname();

	return (
		<nav className="flex items-center justify-evenly md:justify-around lg:gap-20 md:mx-14 my-5 w-auto">
			{navLinks.map((link, index) => (
				<Link
					key={link.path}
					href={link.path}
					className={`hover:text-blue-600 text-sm md:text-xl transition-colors duration-150 max-[768px]:w-full  text-center md:text-left ${
						pathname === link.path ? 'font-bold text-blue-600' : 'text-white'
					}`}
				>
					{/* Check if this is the third child and render accordingly */}
					{index === 2 && link.isImage ? (
						<Image src={link.imageSrc} alt={link.name} width={70} height={70} className="bg-white" />
					) : (
						link.name
					)}
				</Link>
			))}
		</nav>
	);
};
