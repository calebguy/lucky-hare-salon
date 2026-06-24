import type { Metadata } from "next";
import Link from "next/link";
import { business, serviceMenus, stylists, contact } from "../site";

export const metadata: Metadata = {
	title: "Services",
	description: `Cuts, color, lightening, fantasy color, and styling at ${business.name} in Austin, TX.`,
	alternates: { canonical: "/services" },
};

// Full name for a menu, falling back to the firstName the menu is keyed by.
function stylistName(firstName: string) {
	return stylists.find((s) => s.firstName === firstName)?.name ?? firstName;
}

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

				{/* Quick-jump: both stylists are one tap away, no scrolling required. */}
				<div className="mt-8 flex flex-wrap items-center justify-center gap-3">
					<span className="font-dreamboat-thin text-sm uppercase tracking-widest text-foreground/50">
						Jump to
					</span>
					{serviceMenus.map((menu) => (
						<a
							key={menu.stylist}
							href={`#menu-${menu.stylist}`}
							className="rounded-full border border-blue/30 px-6 py-2 font-dreamboat-thin text-base uppercase tracking-widest text-blue transition-colors duration-300 hover:bg-blue hover:text-sage"
						>
							{menu.stylist}
						</a>
					))}
				</div>
			</section>

			<section className="px-6 pb-16">
				<div className="mx-auto max-w-3xl space-y-16">
					{serviceMenus.map((menu) => (
						<div key={menu.stylist} id={`menu-${menu.stylist}`} className="scroll-mt-32">
							<h2 className="font-dreamboat text-3xl text-blue md:text-4xl">
								{stylistName(menu.stylist)}
							</h2>

							{menu.categories.length === 0 ? (
								<p className="mt-3 italic text-foreground/60">{menu.note}</p>
							) : (
								<div
									className={`mt-6 ${
										menu.categories.length > 1
											? "grid gap-x-10 gap-y-10 md:grid-cols-2"
											: "space-y-10"
									}`}
								>
									{menu.categories.map((cat) => (
										<div key={cat.category}>
											<h3 className="border-b border-blue/20 pb-2 font-dreamboat-thin text-xl uppercase tracking-widest text-brown">
												{cat.category}
											</h3>
											{cat.blurb && (
												<p className="mt-2 text-sm text-foreground/60">{cat.blurb}</p>
											)}
											<ul className="mt-4 space-y-3">
												{cat.items.map((item) => (
													<li
														key={item.name}
														className="flex items-baseline justify-between gap-4"
													>
														<div>
															<span className="text-foreground/90">{item.name}</span>
															{item.description && (
																<p className="text-sm text-foreground/60">
																	{item.description}
																</p>
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
							)}
						</div>
					))}
				</div>
				<p className="mx-auto mt-10 max-w-3xl text-sm italic text-foreground/60">
					* Pricing is subject to change based on the amount of color or lightener your hair
					needs — reach out for an exact quote.
				</p>
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
