import Link from "next/link";
import PrimaryLogo from "@/components/icons/PrimaryLogo";

const links = [
	{ href: "/about", label: "About" },
	{ href: "/services", label: "Services" },
	{ href: "/location", label: "Visit" },
	{ href: "/contact", label: "Contact" },
];

export default function Nav() {
	return (
		<header className="w-full bg-sage">
			<nav className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-5 md:flex-row md:justify-between">
				<Link href="/" aria-label="Lucky Hare Salon — home">
					<PrimaryLogo className="w-24 text-blue transition-colors duration-300 hover:text-brown md:w-28" />
				</Link>
				<ul className="flex flex-wrap items-center justify-center gap-5 font-dreamboat-thin text-sm uppercase tracking-widest text-blue md:gap-8 md:text-base">
					{links.map((l) => (
						<li key={l.href}>
							<Link
								href={l.href}
								className="transition-colors duration-300 hover:text-brown"
							>
								{l.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>
		</header>
	);
}
