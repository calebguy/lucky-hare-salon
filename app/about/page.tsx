import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StarCharm from "@/components/icons/StarCharm";
import { business, stylists } from "../site";

export const metadata: Metadata = {
	title: "About",
	description: `Meet the stylists behind ${business.name}, a private hair studio in Austin, TX.`,
};

export default function About() {
	return (
		<div className="bg-sage">
			<section className="px-6 pt-12 pb-10 text-center">
				<StarCharm className="mx-auto w-12 text-orange" />
				<h1 className="mt-4 font-dreamboat text-4xl text-blue md:text-5xl">Our story</h1>
				<p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80">
					{business.description}
				</p>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto max-w-3xl space-y-12">
					{stylists.map((s) => (
						<div
							key={s.name}
							className="grid gap-6 rounded-lg bg-white p-6 shadow-sm md:grid-cols-[200px_1fr] md:items-start"
						>
							<div className="relative mx-auto flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-light-blue/40">
								{s.photo ? (
									<Image
										src={s.photo}
										alt={s.name}
										fill
										sizes="200px"
										className="object-cover"
									/>
								) : (
									// Initials fallback until a real photo is added to /public/stylists
									<span className="font-dreamboat text-5xl text-blue">{s.name.charAt(0)}</span>
								)}
							</div>
							<div>
								<h2 className="font-dreamboat text-3xl text-blue">{s.name}</h2>
								<p className="mt-1 font-dreamboat-thin text-sm uppercase tracking-widest text-brown">
									{s.role}
								</p>
								{s.specialties.length > 0 && (
									<p className="mt-2 text-sm text-foreground/60">
										{s.specialties.join(" · ")}
									</p>
								)}
								<p className="mt-4 leading-relaxed text-foreground/80">{s.bio}</p>
								<div className="mt-4 flex flex-wrap gap-4 font-dreamboat-thin text-sm uppercase tracking-widest">
									<Link
										href={s.instagram}
										target="_blank"
										rel="noopener noreferrer"
										className="text-blue underline transition-colors hover:text-brown"
									>
										Instagram
									</Link>
									<Link
										href="/contact"
										className="text-blue underline transition-colors hover:text-brown"
									>
										Book with {s.name}
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
