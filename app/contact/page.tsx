import type { Metadata } from "next";
import Link from "next/link";
import StarCharm from "@/components/icons/StarCharm";
import { business, contact, location, availability, stylists, socials } from "../site";

export const metadata: Metadata = {
	title: "Contact",
	description: `Get in touch with ${business.name} in Austin, TX to book an appointment.`,
	alternates: { canonical: "/contact" },
};

export default function Contact() {
	return (
		<div className="bg-sage">
			<section className="px-6 pt-12 pb-10 text-center">
				<StarCharm className="mx-auto w-12 text-orange" />
				<h1 className="mt-4 font-dreamboat text-4xl text-blue md:text-5xl">Get in touch</h1>
				<p className="mx-auto mt-4 max-w-xl text-foreground/70">
					We book by text, call, and email — no online scheduler. Reach out and we’ll find a
					time that works. New clients are always welcome.
				</p>
			</section>

			<section className="px-6 pb-16">
				<div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
					{/* Ways to reach us */}
					<div className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="font-dreamboat text-2xl text-blue">Reach the studio</h2>
						<p className="mt-2 text-sm text-foreground/70">
							Devon and Neva each book their own clients — call or text the stylist you’d
							like to see (numbers on the right), or email us and we’ll point you to the
							right chair.
						</p>
						<ul className="mt-4 space-y-3 text-foreground/80">
							<li>
								<span className="font-dreamboat-thin text-sm uppercase tracking-widest text-brown">
									Email
								</span>
								<br />
								<a href={`mailto:${contact.bookingEmail}`} className="text-blue underline">
									{contact.bookingEmail}
								</a>
							</li>
							<li>
								<span className="font-dreamboat-thin text-sm uppercase tracking-widest text-brown">
									Instagram
								</span>
								<br />
								<Link
									href={socials.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue underline"
								>
									Follow & DM us
								</Link>
							</li>
						</ul>
					</div>

					{/* Book a specific stylist */}
					<div className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="font-dreamboat text-2xl text-blue">Book a stylist</h2>
						<ul className="mt-4 space-y-4">
							{stylists.map((s) => (
								<li key={s.name}>
									<p className="font-dreamboat text-xl text-blue">{s.name}</p>
									<p className="mt-1 text-sm text-foreground/70">{s.bookingNote}</p>
									<div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
										<a href={`tel:${s.phone}`} className="text-blue underline">
											Call or text {s.phone}
										</a>
										<Link
											href={s.instagram}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue underline"
										>
											Instagram
										</Link>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Where to find us */}
			<section className="bg-light-blue/40 px-6 py-12">
				<div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
					<div>
						<h2 className="font-dreamboat text-2xl text-blue">Where</h2>
						<address className="mt-3 not-italic leading-relaxed text-foreground/80">
							{location.street}
							<br />
							{location.suite}
							<br />
							{location.city}, {location.state} {location.zip}
						</address>
						<Link
							href="/location"
							className="mt-3 inline-block font-dreamboat-thin text-sm uppercase tracking-widest text-blue underline"
						>
							Directions & parking
						</Link>
					</div>
					<div>
						<h2 className="font-dreamboat text-2xl text-blue">Appointments</h2>
						<p className="mt-3 leading-relaxed text-foreground/80">
							{availability.summary}
							{availability.days ? ` · ${availability.days}` : ""}. Lucky Hare is a
							private studio — reach out and we’ll find a time that works.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
