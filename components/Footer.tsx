import Link from "next/link";
import Emblem from "@/components/icons/Emblem";
import { business, contact, location, socials, stylists, fullAddress } from "@/app/site";

export default function Footer() {
	return (
		<footer className="w-full bg-blue text-sage">
			<div className="mx-auto grid max-w-5xl gap-8 px-6 py-12 md:grid-cols-3">
				<div>
					<Emblem className="w-16" />
					<p className="mt-4 font-dreamboat text-xl">{business.name}</p>
					<p className="mt-1 font-dreamboat-thin text-sm uppercase tracking-widest text-light-blue">
						{location.city}, {location.state}
					</p>
				</div>

				<div className="font-dreamboat-thin text-sm uppercase tracking-widest text-light-blue">
					<p className="mb-3 text-sage">Visit</p>
					<address className="not-italic leading-relaxed normal-case tracking-normal">
						{location.street}
						<br />
						{location.suite}
						<br />
						{location.city}, {location.state} {location.zip}
					</address>
					<Link
						href={location.googleMapsUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 inline-block underline transition-colors hover:text-sage"
					>
						Get directions
					</Link>
				</div>

				<div className="font-dreamboat-thin text-sm uppercase tracking-widest text-light-blue">
					<p className="mb-3 text-sage">Reach us</p>
					<ul className="space-y-2 normal-case tracking-normal">
						{stylists.map((s) => (
							<li key={s.name}>
								<a href={`tel:${s.phone}`} className="underline hover:text-sage">
									{s.name} · {s.phone}
								</a>
							</li>
						))}
						<li>
							<a href={`mailto:${contact.bookingEmail}`} className="underline hover:text-sage">
								{contact.bookingEmail}
							</a>
						</li>
						<li>
							<Link
								href={socials.instagram}
								target="_blank"
								rel="noopener noreferrer"
								className="underline hover:text-sage"
							>
								Instagram
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className="border-t border-light-blue/30">
				<p className="mx-auto max-w-5xl px-6 py-4 text-center font-dreamboat-thin text-xs uppercase tracking-widest text-light-blue">
					© {business.name} · {fullAddress}
				</p>
			</div>
		</footer>
	);
}
