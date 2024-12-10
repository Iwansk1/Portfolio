import Image from 'next/image';
export default function Homepage() {
	return (
		<main>
			<section className="container h-[30vh] mt-10 flex flex-row justify-between items-center">
				<div className="flex flex-col">
					<h1 className="text-6xl font-bold max-w-2xl">
						Iwan Bijl <br />
						Full-Stack Developer{' '}
					</h1>
					<h2 className="text-xl mt-5 max-w-lg">
						With a strong focus on responsive design, clean code, and user-centric solutions, I help
						businesses turn ideas into impactful products.{' '}
					</h2>
				</div>
				<Image
					src="/img/honda.png"
					alt="Picture of the author"
					width={400}
					height={600}
					blurDataURL="data:..."
					placeholder="blur"
				/>
			</section>
		</main>
	);
}
