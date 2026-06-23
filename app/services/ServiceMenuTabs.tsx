"use client";

import { useState } from "react";
import { serviceMenus, stylists } from "../site";

// Full name for a menu, falling back to the firstName the menu is keyed by.
function stylistName(firstName: string) {
	return stylists.find((s) => s.firstName === firstName)?.name ?? firstName;
}

// Tabbed service menu: pick a stylist up top, see just their menu — so you
// never have to scroll past one stylist's full list to reach the other.
export default function ServiceMenuTabs() {
	const [active, setActive] = useState(serviceMenus[0]?.stylist ?? "");
	const menu = serviceMenus.find((m) => m.stylist === active) ?? serviceMenus[0];

	if (!menu) return null;

	return (
		<div>
			<div
				role="tablist"
				aria-label="Choose a stylist"
				className="flex flex-wrap justify-center gap-3"
			>
				{serviceMenus.map((m) => {
					const isActive = m.stylist === active;
					return (
						<button
							key={m.stylist}
							type="button"
							role="tab"
							id={`tab-${m.stylist}`}
							aria-selected={isActive}
							aria-controls={`panel-${m.stylist}`}
							onClick={() => setActive(m.stylist)}
							className={`rounded-full px-7 py-2 font-dreamboat-thin text-base uppercase tracking-widest transition-colors duration-300 ${
								isActive
									? "bg-blue text-sage"
									: "border border-blue/30 text-blue hover:bg-blue/10"
							}`}
						>
							{m.stylist}
						</button>
					);
				})}
			</div>

			<div
				key={menu.stylist}
				role="tabpanel"
				id={`panel-${menu.stylist}`}
				aria-labelledby={`tab-${menu.stylist}`}
				className="mt-10"
			>
				<h2 className="font-dreamboat text-3xl text-blue md:text-4xl">
					{stylistName(menu.stylist)}
				</h2>

				{menu.categories.length === 0 ? (
					<p className="mt-3 italic text-foreground/60">{menu.note}</p>
				) : (
					<div className="mt-6 space-y-10">
						{menu.categories.map((cat) => (
							<div key={cat.category}>
								<h3 className="border-b border-blue/20 pb-2 font-dreamboat-thin text-xl uppercase tracking-widest text-brown">
									{cat.category}
								</h3>
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
				)}
			</div>
		</div>
	);
}
