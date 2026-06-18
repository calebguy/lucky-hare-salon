import type { Metadata } from "next";
import Link from "next/link";
import { business, location, hours, fullAddress } from "../site";

export const metadata: Metadata = {
	title: "Visit",
	description: `Directions, parking, and hours for ${business.name} in Austin, TX.`,
};

export default function Location() {
	// Keyless Google Maps embed driven by the address query.
	const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(
		fullAddress
	)}&output=embed`;

	return (
		<div className="bg-sage">
			<section className="px-6 pt-12 pb-10 text-center">
				<h1 className="font-dreamboat text-4xl text-blue md:text-5xl">Visit us</h1>
				<address className="mt-4 not-italic text-lg leading-relaxed text-foreground/80">
					{location.street}, {location.suite}
					<br />
					{location.city}, {location.state} {location.zip}
				</address>
				<div className="mt-6 flex flex-wrap justify-center gap-4">
					<Link
						href={location.googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded bg-blue px-6 py-3 font-dreamboat-thin text-sm uppercase tracking-widest text-sage transition-colors hover:bg-brown"
					>
						Google Maps
					</Link>
					<Link
						href={location.appleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-block rounded border border-blue px-6 py-3 font-dreamboat-thin text-sm uppercase tracking-widest text-blue transition-colors hover:bg-blue hover:text-sage"
					>
						Apple Maps
					</Link>
				</div>
			</section>

			<section className="px-6 pb-12">
				<div className="mx-auto max-w-4xl overflow-hidden rounded-lg shadow-sm">
					<iframe
						title={`Map to ${business.name}`}
						src={mapSrc}
						className="h-80 w-full border-0"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					/>
				</div>
			</section>

			<section className="px-6 pb-20">
				<div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
					<div className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="font-dreamboat text-2xl text-blue">Finding the suite</h2>
						<p className="mt-3 leading-relaxed text-foreground/80">{location.findUs}</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="font-dreamboat text-2xl text-blue">Parking</h2>
						<p className="mt-3 leading-relaxed text-foreground/80">{location.parking}</p>
					</div>
					<div className="rounded-lg bg-white p-6 shadow-sm">
						<h2 className="font-dreamboat text-2xl text-blue">Hours</h2>
						<ul className="mt-3 space-y-1 text-foreground/80">
							{hours.map((h) => (
								<li key={h.day} className="flex justify-between gap-4">
									<span>{h.day}</span>
									<span>{h.hours}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</div>
	);
}
