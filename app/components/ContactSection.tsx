import React from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const ContactSection = () => {
	return (
		<section className="container mt-20 md:my-32" id="contact">
			<div className="text-center">
				<h2 className="text-5xl font-bold text-white">Contact Me</h2>
				<p className="mt-4 text-lg text-gray-400">
					Feel free to reach out! I&apos;m always open to new opportunities and collaborations.
				</p>
			</div>
			<div className="flex flex-col lg:flex-row justify-center gap-8 mt-10">
				{/* Contact Information */}
				<div className="flex flex-col w-full lg:w-1/2 gap-6 text-left">
					{/* Email */}
					<div className="bg-slate-800 rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-blue-600 transition-all duration-300">
						<EnvelopeIcon className="h-6 w-6 text-blue-500" />
						<div>
							<h3 className="text-xl font-bold text-white">Email</h3>
							<a
								href="mailto:Iwanbijl@gmail.com"
								className="text-gray-400 hover:text-white transition-colors"
							>
								Iwanbijl@gmail.com
							</a>
						</div>
					</div>
					{/* Phone */}
					<div className="bg-slate-800 rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-blue-600 transition-all duration-300">
						<PhoneIcon className="h-6 w-6 text-blue-500" />
						<div>
							<h3 className="text-xl font-bold text-white">Phone</h3>
							<a href="tel:+31612490507" className=" text-gray-400 hover:text-white transition-colors">
								06 124 90 507
							</a>
						</div>
					</div>
					{/* Location */}
					<div className="bg-slate-800 rounded-lg shadow-lg p-6 flex items-center gap-4 hover:bg-blue-600 transition-all duration-300">
						<MapPinIcon className="h-6 w-6 text-blue-500" />
						<div>
							<h3 className="text-xl font-bold text-white">Location</h3>
							<p className=" text-gray-400">The Netherlands</p>
						</div>
					</div>
				</div>

				{/* Call-to-Action */}
				<div className="flex flex-col w-full lg:w-1/3 justify-center items-center lg:items-start space-y-6">
					{/* Strong CTA */}
					<div className="bg-blue-600 flex flex-col p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-center lg:text-left">
						<h3 className="text-2xl font-bold text-white">Let&apos;s work together!</h3>
						<p className="mt-4 text-gray-300">
							I&apos;m available for freelance projects, consultations, or collaborations.
						</p>
						<Link
							href="/#contact"
							className="self-center sm:self-start mt-6 w-fit px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold shadow-lg hover:bg-blue-100 transition duration-300"
						>
							Contact Me
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
