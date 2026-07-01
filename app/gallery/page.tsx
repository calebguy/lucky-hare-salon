import StarCharm from "@/components/icons/StarCharm";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { business, gallery } from "../site";

export const metadata: Metadata = {
	title: "Gallery",
	description: `A look at the cuts, color, and fantasy color work from ${business.name} in Austin, TX.`,
	alternates: { canonical: "/gallery" },
};

export default function Gallery() {
	return (
		<div className="bg-sage">
			<section className="px-6 pt-12 pb-10 text-center">
				<StarCharm className="mx-auto w-12 text-orange" />
				<h1 className="mt-4 font-dreamboat text-4xl text-blue md:text-5xl">
					Gallery
				</h1>
				<p className="mx-auto mt-4 max-w-2xl text-foreground/70">
					A few of our favorite looks — vivid fantasy color, lived-in blondes,
					and fresh cuts.
				</p>
			</section>

			<section className="px-6 pb-16">
				<div className="mx-auto grid max-w-5xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
					{gallery.map((img) => (
						<div
							key={img.src}
							className="group relative aspect-[3/4] overflow-hidden rounded-lg bg-light-blue/40 shadow-sm"
						>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								sizes="(min-width: 768px) 33vw, 50vw"
								className="object-cover transition-transform duration-500 group-hover:scale-105"
							/>
							<div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent px-3 pb-2 pt-8">
								<span className="font-dreamboat-thin text-[11px] uppercase tracking-wide text-white/95 md:text-xs">
									Hair by {img.stylist}
								</span>
							</div>
						</div>
					))}
				</div>
			</section>

			<section className="bg-blue px-6 py-16 text-center text-sage">
				<h2 className="font-dreamboat text-3xl md:text-4xl">
					Love what you see?
				</h2>
				<p className="mt-3 font-dreamboat-thin uppercase tracking-widest text-light-blue">
					Text, call, email, or DM to book
				</p>
				<Link
					href="/contact"
					className="mt-6 inline-block rounded bg-sage px-8 py-3 font-dreamboat-thin text-base uppercase tracking-widest text-blue transition-colors duration-300 hover:bg-light-blue"
				>
					Get in touch
				</Link>
			</section>
		</div>
	);
}
