import type { Metadata } from "next";
import Link from "next/link";
import { business, contact } from "../site";
import ServiceMenuTabs from "./ServiceMenuTabs";

export const metadata: Metadata = {
	title: "Services",
	description: `Cuts, color, lightening, fantasy color, and styling at ${business.name} in Austin, TX.`,
	alternates: { canonical: "/services" },
};

export default function Services() {
	return (
		<div className="bg-sage">
			<section className="px-6 pt-12 pb-10 text-center">
				<h1 className="font-dreamboat text-4xl text-blue md:text-5xl">Services</h1>
				<p className="mx-auto mt-4 max-w-2xl text-foreground/70">
					Devon and Neva each set their own menu. Pricing varies with length, density, and the
					time your hair needs — the prices below are a guide, so reach out for an exact quote or
					a consultation.
				</p>
			</section>

			<section className="px-6 pb-16">
				<div className="mx-auto max-w-3xl">
					<ServiceMenuTabs />
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
