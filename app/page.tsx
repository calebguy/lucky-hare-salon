import Link from "next/link";
import Image from "next/image";
import PrimaryLogo from "@/components/icons/PrimaryLogo";
import Illustration from "@/components/icons/Illustration";
import StarCharm from "@/components/icons/StarCharm";
import {
	business,
	contact,
	location,
	hours,
	stylists,
	reviews,
} from "./site";

export default function Home() {
	return (
		<div className="bg-sage">
			{/* Hero */}
			<section className="animate-fade-in flex flex-col items-center px-6 pt-10 pb-16 text-center">
				<PrimaryLogo className="w-52 text-blue md:w-72" />
				<p className="mt-6 max-w-xl font-dreamboat-thin text-lg uppercase tracking-widest text-brown md:text-xl">
					{business.tagline}
				</p>
				<div className="mt-8 flex flex-wrap items-center justify-center gap-4">
					<Link
						href="/contact"
						className="inline-block rounded bg-blue px-8 py-3 font-dreamboat-thin text-base uppercase tracking-widest text-sage transition-colors duration-300 hover:bg-brown md:px-10 md:py-4"
					>
						Book with us
					</Link>
					<Link
						href="/services"
						className="inline-block rounded border border-blue px-8 py-3 font-dreamboat-thin text-base uppercase tracking-widest text-blue transition-colors duration-300 hover:bg-blue hover:text-sage md:px-10 md:py-4"
					>
						Our services
					</Link>
				</div>
				<Illustration className="mt-12 w-28 text-light-blue md:w-36" />
			</section>

			{/* Welcome */}
			<section className="bg-white px-6 py-16">
				<div className="mx-auto max-w-2xl text-center">
					<StarCharm className="mx-auto w-12 text-orange" />
					<p className="mt-6 font-dreamboat text-2xl leading-relaxed text-blue md:text-3xl">
						{business.description}
					</p>
				</div>
			</section>

			{/* Stylists */}
			<section className="px-6 py-16">
				<h2 className="text-center font-dreamboat text-3xl text-blue md:text-4xl">
					Meet your stylists
				</h2>
				<div className="mx-auto mt-10 grid max-w-3xl gap-8 md:grid-cols-2">
					{stylists.map((s) => (
						<div key={s.name} className="rounded-lg bg-white p-6 text-center shadow-sm">
							<div className="relative mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-light-blue/40">
								{s.photo ? (
									<Image
										src={s.photo}
										alt={`Portrait of ${s.name}, hairstylist at Lucky Hare Salon`}
										fill
										sizes="96px"
										className="object-cover"
									/>
								) : (
									<span className="font-dreamboat text-3xl text-blue">{s.name.charAt(0)}</span>
								)}
							</div>
							<p className="mt-4 font-dreamboat text-2xl text-blue">{s.name}</p>
							<p className="mt-1 font-dreamboat-thin text-sm uppercase tracking-widest text-brown">
								{s.role}
							</p>
							{s.specialties.length > 0 && (
								<p className="mt-3 text-sm text-foreground/70">
									{s.specialties.join(" · ")}
								</p>
							)}
							<Link
								href="/about"
								className="mt-4 inline-block font-dreamboat-thin text-sm uppercase tracking-widest text-blue underline transition-colors hover:text-brown"
							>
								Read more
							</Link>
						</div>
					))}
				</div>
			</section>

			{/* Visit snapshot */}
			<section className="bg-light-blue/40 px-6 py-16">
				<div className="mx-auto grid max-w-3xl gap-8 md:grid-cols-2">
					<div>
						<h2 className="font-dreamboat text-2xl text-blue md:text-3xl">Visit the studio</h2>
						<address className="mt-4 not-italic leading-relaxed text-foreground/80">
							{location.street}
							<br />
							{location.suite}
							<br />
							{location.city}, {location.state} {location.zip}
						</address>
						<Link
							href="/location"
							className="mt-4 inline-block font-dreamboat-thin text-sm uppercase tracking-widest text-blue underline transition-colors hover:text-brown"
						>
							Directions & parking
						</Link>
					</div>
					<div>
						<h2 className="font-dreamboat text-2xl text-blue md:text-3xl">Hours</h2>
						<ul className="mt-4 space-y-1 text-foreground/80">
							{hours.map((h) => (
								<li key={h.day} className="flex justify-between gap-6">
									<span>{h.day}</span>
									<span>{h.hours}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>

			{/* Reviews — only render if real reviews exist */}
			{reviews.length > 0 && (
				<section className="px-6 py-16">
					<h2 className="text-center font-dreamboat text-3xl text-blue md:text-4xl">
						Kind words
					</h2>
					<div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">
						{reviews.map((r, i) => (
							<blockquote key={i} className="rounded-lg bg-white p-6 shadow-sm">
								<p className="text-lg italic text-foreground/80">“{r.quote}”</p>
								<footer className="mt-3 font-dreamboat-thin text-sm uppercase tracking-widest text-brown">
									— {r.author}
								</footer>
							</blockquote>
						))}
					</div>
				</section>
			)}

			{/* Contact CTA */}
			<section className="bg-blue px-6 py-16 text-center text-sage">
				<h2 className="font-dreamboat text-3xl md:text-4xl">Ready for a fresh look?</h2>
				<p className="mt-3 font-dreamboat-thin uppercase tracking-widest text-light-blue">
					Text, call, or email to book
				</p>
				<div className="mt-6 flex flex-wrap items-center justify-center gap-4">
					<a
						href={`mailto:${contact.bookingEmail}`}
						className="inline-block rounded bg-sage px-8 py-3 font-dreamboat-thin text-base uppercase tracking-widest text-blue transition-colors duration-300 hover:bg-light-blue"
					>
						Email to book
					</a>
					<Link
						href="/contact"
						className="inline-block rounded border border-sage px-8 py-3 font-dreamboat-thin text-base uppercase tracking-widest text-sage transition-colors duration-300 hover:bg-sage hover:text-blue"
					>
						All contact options
					</Link>
				</div>
			</section>
		</div>
	);
}
