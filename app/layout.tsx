import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { business, contact, location, socials, SITE_URL } from "./site";

const dreamboat = localFont({
	src: "../fonts/TAYDreamboat.otf",
	variable: "--font-dreamboat",
});

const dreamboatThin = localFont({
	src: "../fonts/TAYDreamboat-Thin.otf",
	variable: "--font-dreamboat-thin",
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: `${business.name} — Hair Salon in Austin, TX`,
		template: `%s — ${business.name}`,
	},
	description: business.description,
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
	sameAs: [socials.instagram],
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
				className={`${dreamboat.variable} ${dreamboatThin.variable} flex min-h-screen flex-col bg-sage antialiased`}
			>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				<Nav />
				<main className="flex-1">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
