// =============================================================================
// Lucky Hare Salon — site content (single source of truth)
// -----------------------------------------------------------------------------
// Edit THIS file to update the site's content. Pages read from here, so you
// never have to touch JSX to change an address, a price, hours, or a bio.
// Anything marked `TODO:` is a placeholder waiting on real content.
// =============================================================================

/** Canonical production URL. Primary domain is the .com (see plan). */
export const SITE_URL = "https://www.luckyharesalon.com";

export const business = {
	name: "Lucky Hare Salon",
	// Short tagline shown under the logo on the homepage. Edit freely.
	tagline: "An intimate hair studio in Austin, Texas",
	// One–two sentence description used for SEO and the homepage intro.
	description:
		"Lucky Hare Salon is a private, two-chair studio in Austin, TX where Devon and Neva offer personalized cuts, color, and styling in a relaxed, unhurried setting.",
};

export const contact = {
	// Devon and Neva each take clients on their OWN business number — there is no
	// single salon line. Per-stylist numbers live on each Stylist below; the site
	// shows each person's own number. This shared email reaches both of them.
	bookingEmail: "info@luckyharesalon.com",
	helloEmail: "info@luckyharesalon.com",
};

export const location = {
	// TODO: confirm exact street + suite number.
	street: "TODO_STREET", // e.g. "1234 South Lamar Blvd"
	suite: "TODO_SUITE", // e.g. "Suite 210"
	city: "Austin",
	state: "TX",
	zip: "TODO_ZIP",
	// Customer-facing directions for finding the suite once on-site.
	// TODO: real wayfinding details (which building/door, floor, suite signage).
	findUs: "TODO: How to find the suite once you arrive (building, floor, door).",
	// TODO: parking specifics (free lot, street, garage, validation, etc.).
	parking: "TODO: Parking details — where to park and any tips.",
	// Map links. Replace once the listing exists; a plain query works meanwhile.
	googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Lucky+Hare+Salon+Austin+TX",
	appleMapsUrl: "https://maps.apple.com/?q=Lucky+Hare+Salon+Austin+TX",
};

// Lucky Hare is a private studio — appointment only, no walk-ins. We deliberately
// do NOT publish open "business hours" (that invites drop-ins). Devon and Neva keep
// a shared schedule and book by request.
export const availability = {
	// Short line shown wherever hours used to appear.
	summary: "By appointment only",
	// Optional: the general days they typically take clients. Shown only if set —
	// leave "" to show just the summary. e.g. "Tuesday–Saturday".
	days: "",
};

export const socials = {
	// TODO: salon Instagram handle/url (or leave null and link stylists individually).
	instagram: "https://instagram.com/", // TODO
};

export type Stylist = {
	name: string; // full name, shown as the heading (e.g. "Devon Williams")
	firstName: string; // friendly first name for CTAs ("Book with Devon")
	role: string;
	// This stylist's own business number — clients call/text them directly.
	phone: string;
	specialties: string[];
	bio: string;
	instagram: string; // full URL
	// Path under /public (e.g. "/stylists/devon.jpg"). Leave "" until a real
	// photo is added — pages show an initials fallback when empty.
	photo: string;
	// How this stylist takes new clients (contact-only — no online booking).
	bookingNote: string;
};

// TODO: real bios, specialties, Instagram handles, and photos.
export const stylists: Stylist[] = [
	{
		name: "Devon Williams",
		firstName: "Devon",
		role: "Hairstylist",
		phone: "TODO_DEVON_PHONE", // e.g. "(512) 555-0123"
		specialties: ["TODO", "TODO"], // e.g. "Lived-in color", "Cuts"
		bio: "TODO: Devon's bio — background, philosophy, what clients can expect.",
		instagram: "https://instagram.com/", // TODO
		photo: "", // TODO: add photo to /public/stylists/ then set "/stylists/devon.jpg"
		bookingNote: "Text, email info@luckyharesalon.com, or DM on Instagram to request an appointment with Devon.",
	},
	{
		name: "Neva Gregory",
		firstName: "Neva",
		role: "Hairstylist",
		phone: "TODO_NEVA_PHONE", // e.g. "(512) 555-0123"
		specialties: ["TODO", "TODO"],
		bio: "TODO: Neva's bio — background, philosophy, what clients can expect.",
		instagram: "https://instagram.com/", // TODO
		photo: "", // TODO: add photo to /public/stylists/ then set "/stylists/neva.jpg"
		bookingNote: "Text, email info@luckyharesalon.com, or DM on Instagram to request an appointment with Neva.",
	},
];

export type ServiceItem = { name: string; price: string; description?: string };
export type ServiceCategory = { category: string; blurb?: string; items: ServiceItem[] };

// TODO: real service list + pricing (ranges are fine).
export const services: ServiceCategory[] = [
	{
		category: "Haircuts",
		items: [
			{ name: "TODO: Haircut", price: "TODO: $$" },
			{ name: "TODO: Cut & style", price: "TODO: $$" },
		],
	},
	{
		category: "Color",
		items: [
			{ name: "TODO: Single process", price: "TODO: $$" },
			{ name: "TODO: Balayage / highlights", price: "TODO: $$" },
		],
	},
	{
		category: "Extensions",
		items: [{ name: "TODO: Hand-tied / consultation", price: "TODO: $$" }],
	},
	{
		category: "Styling",
		items: [{ name: "TODO: Blowout / event styling", price: "TODO: $$" }],
	},
];

// Real reviews only — leave empty until the Google Business Profile has some.
// Do NOT fabricate reviews. Shape: { quote, author }.
export const reviews: { quote: string; author: string }[] = [];

export const fullAddress = `${location.street}, ${location.suite}, ${location.city}, ${location.state} ${location.zip}`;
