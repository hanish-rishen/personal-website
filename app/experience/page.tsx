import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

export const runtime = 'nodejs';

const experiences = [
	{ title: "Software Engineering Fellow", company: "Headstarter AI", period: "Jul 2024 - Present", location: "Long Island City, NY · Remote", description: "✔ Selected from a pool of 41,803 applicants, with only 15,818 accepted, resulting in an acceptance rate of approximately 37.83%." },
	{ title: "AI & Cloud Virtual Internship", company: "Edunet Foundation", period: "Jun 2024 - Present", location: "Remote", description: "" },
	{ title: "Official Campus Ambassador", company: "Techfest, IIT Bombay", period: "Jun 2024 - Present", location: "Remote", description: "" },
	{ title: "Contributor", company: "GirlScript Summer of Code", period: "May 2024 - Present", location: "Remote", description: "" },
	{ title: "Member", company: "IAENG", period: "Jun 2024 - Present", location: "", description: "" },
	{ title: "Corporate Member", company: "The Grad Society", period: "Apr 2024 - Present", location: "", description: "" },
	{ title: "Web Developer", company: "BEYOND PAGES TRUST", period: "Jun 2024 - Jul 2024", location: "Chennai, Tamil Nadu, India · Hybrid", description: "✔ Worked collaboratively on the development, donation payment gateway integration (using Razorpay), design using Tailwind CSS, final touches, and testing of a community-focused website for an NGO." },
	{ title: "N&W S5 Builder (Guadmire)", company: "buildspace", period: "Jun 2024 - Jul 2024", location: "San Francisco, California · Remote", description: "✔ buildspace is an experimental school and community for builders, makers, and creators. They help people bring their ideas to life, whether it's a tech project, a creative endeavor, or something unique." },
	{ title: "Google AI-ML Virtual Internship", company: "AICTE", period: "Apr 2024 - Jun 2024", location: "", description: "" },
	{ title: "Committee Member", company: "SRM Alumni Affairs", period: "Feb 2024 - May 2024", location: "", description: "" },
];

export default function Experience({ searchParams: { customUsername } }) {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 mb-10 sm:mt-32 sm:grid-cols-3 lg:gap-16">
					{experiences.map((exp) => (
						<Card key={exp.title}>
							<div className="p-4 flex flex-col items-center gap-4">
								<h3 className="text-xl font-medium text-zinc-200">{exp.title}</h3>
								<h4 className="text-lg font-semibold text-zinc-400">{exp.company}</h4>
								<p className="text-sm text-zinc-400">{exp.period}</p>
								<p className="text-sm text-zinc-400">{exp.location}</p>
								{exp.description && (
									<Card>
										<p className="p-4 pt-0 text-sm text-zinc-400 mt-2 text-justify">{exp.description}</p>
									</Card>
								)}
							</div>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
