import type { Metadata } from "next";
import localFont from "next/font/local";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { business, contact, location, socials, stylists, SITE_URL } from "./site";

// Display/script font — reserved for the logo, headings, and short accents.
const dreamboat = localFont({
	src: "../fonts/TAYDreamboat.otf",
	variable: "--font-dreamboat",
});

const dreamboatThin = localFont({
	src: "../fonts/TAYDreamboat-Thin.otf",
	variable: "--font-dreamboat-thin",
});

// Clean, legible body font for paragraphs, lists, and small UI text.
const body = Nunito_Sans({
	subsets: ["latin"],
	variable: "--font-body",
	display: "swap",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${business.name} — Hair Salon in Austin, TX`,
		template: `%s — ${business.name}`,
	},
	description: business.description,
	alternates: { canonical: "/" },
	openGraph: {
		title: business.name,
		description: business.description,
		url: SITE_URL,
		siteName: business.name,
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: business.name,
		description: business.description,
	},
};

// LocalBusiness structured data helps Google connect the site to the Maps
// listing. Keep this in sync with app/site.ts.
const jsonLd = {
	"@context": "https://schema.org",
	"@type": "HairSalon",
	name: business.name,
	description: business.description,
	url: SITE_URL,
	// Primary phone = the studio line (matches listings for NAP consistency);
	// each stylist is also listed as an employee with their own cell below.
	telephone: contact.phone,
	email: contact.bookingEmail,
	address: {
		"@type": "PostalAddress",
		streetAddress: `${location.street}, ${location.suite}`,
		addressLocality: location.city,
		addressRegion: location.state,
		postalCode: location.zip,
		addressCountry: "US",
	},
	employee: stylists.map((s) => ({
		"@type": "Person",
		name: s.name,
		jobTitle: s.role,
		telephone: s.phone,
	})),
	sameAs: [socials.instagram, ...stylists.map((s) => s.instagram)].filter(Boolean),
	image: `${SITE_URL}/opengraph-image.png`,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${dreamboat.variable} ${dreamboatThin.variable} ${body.variable} flex min-h-screen flex-col bg-sage font-body antialiased`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<a
					href="#main"
					className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-blue focus:px-4 focus:py-2 focus:text-sage"
				>
					Skip to content
				</a>
				<Nav />
				<main id="main" className="flex-1">
					{children}
				</main>
				<Footer />
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	);
}
