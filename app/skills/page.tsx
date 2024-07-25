import { MarkGithubIcon, PersonIcon, StarIcon } from '@primer/octicons-react';
import Link from "next/link";
import { Navigation } from "../components/nav";
import SuspenseWrapper from '../components/SuspenseWrapper';
import { Card } from "../components/card";

export const runtime = 'nodejs';

const skills = [
	{ name: "JavaScript", level: "Expert", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", icon: <StarIcon size={20} /> },
	{ name: "React", level: "Advanced", url: "https://reactjs.org", icon: <StarIcon size={20} /> },
	{ name: "Next.js", level: "Advanced", url: "https://nextjs.org", icon: <StarIcon size={20} /> },
	{ name: "MongoDB", level: "Intermediate", url: "https://www.mongodb.com", icon: <StarIcon size={20} /> },
	{ name: "Node.js", level: "Advanced", url: "https://nodejs.org", icon: <StarIcon size={20} /> },
	{ name: "Tailwind CSS", level: "Advanced", url: "https://tailwindcss.com", icon: <StarIcon size={20} /> },
];

export default function Skills() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
            <SuspenseWrapper>
              <Navigation/>
            </SuspenseWrapper>
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 mb-10 sm:mt-32 sm:grid-cols-3 lg:gap-16 xl:mt-32">
					{skills.map((skill) => (
						<Card key={skill.name}>
							<Link
								href={skill.url}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24 lg:pb-48 md:p-16 sm:p-8"
							>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{skill.icon}
								</span>
								<div className="z-10 flex flex-col items-center">
									<span className="whitespace-nowrap text-xl font-medium duration-150 lg:text-3xl text-zinc-200 group-hover:text-white font-display">
										{skill.name}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{skill.level}
									</span>
								</div>
							</Link>
						</Card>
					))}
				</div>
			</div>
		</div>
	);
}
