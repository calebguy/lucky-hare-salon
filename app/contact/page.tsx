import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
					We book by text, call, email, and Instagram DM — no online scheduler. Reach out and
					we’ll find a time that works. New clients are always welcome.
				</p>
			</section>

			<section className="px-6 pb-16">
				<div className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow-sm md:p-8">
					<h2 className="font-dreamboat text-2xl text-blue">Book a stylist</h2>
					<p className="mt-2 text-sm text-foreground/70">
						Reach whichever of us you’d like — call or text directly, DM on Instagram, or
						email. New clients are always welcome.
					</p>

					<div className="mt-6 grid gap-8 md:grid-cols-2">
						{stylists.map((s) => (
							<div key={s.name}>
								<div className="flex items-center gap-4">
									<div className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-light-blue/40">
										{s.photo ? (
											<Image
												src={s.photo}
												alt={`Portrait of ${s.name}, hairstylist at Lucky Hare Salon`}
												fill
												sizes="64px"
												className="object-cover"
											/>
										) : (
											// Initials fallback until a real photo is added to /public/stylists
											<span className="font-dreamboat text-2xl text-blue">
												{s.name.charAt(0)}
											</span>
										)}
									</div>
									<p className="font-dreamboat text-xl text-blue">{s.name}</p>
								</div>
								<p className="mt-3 text-sm text-foreground/70">{s.bookingNote}</p>
								<div className="mt-3 flex flex-col gap-1 text-sm">
									<a href={`tel:${s.phone}`} className="text-blue underline">
										Call or text {s.phone}
									</a>
									<a href={`mailto:${s.email}`} className="text-blue underline">
										{s.email}
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
							</div>
						))}
					</div>

					<p className="mt-6 border-t border-light-blue/40 pt-4 text-sm text-foreground/70">
						Prefer email? Reach us both at{" "}
						<a href={`mailto:${contact.bookingEmail}`} className="text-blue underline">
							{contact.bookingEmail}
						</a>
						{socials.instagram && (
							<>
								{" "}
								or DM the studio on{" "}
								<Link
									href={socials.instagram}
									target="_blank"
									rel="noopener noreferrer"
									className="text-blue underline"
								>
									Instagram
								</Link>
							</>
						)}
						.
					</p>
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
						<h2 className="font-dreamboat text-2xl text-blue">Booking</h2>
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
