import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const dreamboat = localFont({
	src: "../fonts/TAYDreamboat.otf",
	variable: "--font-dreamboat",
});

const dreamboatThin = localFont({
	src: "../fonts/TAYDreamboat-Thin.otf",
	variable: "--font-dreamboat-thin",
});

export const metadata: Metadata = {
	title: "Lucky Hare Salon",
	description: "Lucky Hare Salon",
	openGraph: {
		title: "Lucky Hare Salon",
		description: "Lucky Hare Salon",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Lucky Hare Salon",
		description: "Lucky Hare Salon",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${dreamboat.variable} ${dreamboatThin.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
