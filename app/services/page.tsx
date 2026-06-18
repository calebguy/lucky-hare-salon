import type { Metadata } from "next";
import Link from "next/link";
import { business, services, contact } from "../site";

export const metadata: Metadata = {
	title: "Services",
	description: `Cuts, color, extensions, and styling at ${business.name} in Austin, TX.`,
};

export default function Services() {
	return (
		<div className="bg-sage">
			<section className="px-6 pt-12 pb-10 text-center">
				<h1 className="font-dreamboat text-4xl text-blue md:text-5xl">Services</h1>
				<p className="mx-auto mt-4 max-w-2xl text-foreground/70">
					Pricing varies with length, density, and the time your hair needs. The ranges below
					are a guide — reach out for an exact quote or a consultation.
				</p>
			</section>

			<section className="px-6 pb-16">
				<div className="mx-auto max-w-3xl space-y-10">
					{services.map((cat) => (
						<div key={cat.category}>
							<h2 className="border-b border-blue/20 pb-2 font-dreamboat text-2xl text-blue md:text-3xl">
								{cat.category}
							</h2>
							{cat.blurb && <p className="mt-2 text-sm text-foreground/60">{cat.blurb}</p>}
							<ul className="mt-4 space-y-3">
								{cat.items.map((item) => (
									<li key={item.name} className="flex items-baseline justify-between gap-4">
										<div>
											<span className="text-foreground/90">{item.name}</span>
											{item.description && (
												<p className="text-sm text-foreground/60">{item.description}</p>
											)}
										</div>
										<span className="whitespace-nowrap font-dreamboat-thin tracking-wide text-brown">
											{item.price}
										</span>
									</li>
								))}
							</ul>
						</div>
					))}
				</div>
			</section>

			<section className="bg-light-blue/40 px-6 py-12 text-center">
				<p className="font-dreamboat text-2xl text-blue">Not sure what you need?</p>
				<p className="mt-2 text-foreground/70">
					Email{" "}
					<a href={`mailto:${contact.bookingEmail}`} className="text-blue underline">
						{contact.bookingEmail}
					</a>{" "}
					and we’ll help you figure it out.
				</p>
				<Link
					href="/contact"
					className="mt-6 inline-block rounded bg-blue px-8 py-3 font-dreamboat-thin text-base uppercase tracking-widest text-sage transition-colors duration-300 hover:bg-brown"
				>
					Get in touch
				</Link>
			</section>
		</div>
	);
}
