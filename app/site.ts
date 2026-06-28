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
		"Lucky Hare Salon is a private, by-appointment studio in Austin, TX where Devon and Neva see one client at a time — personalized cuts, color, and styling in a relaxed, unhurried setting.",
};

export const contact = {
	// Main studio line: a call menu that routes to a stylist (press 1 Devon,
	// 2 Neva), then forwards to their cell. CALL-ONLY — do NOT present it as
	// textable (the number isn't SMS/10DLC-registered). LISTINGS-ONLY: this is
	// the single public number for Google/Apple/Yelp + the JSON-LD telephone
	// (NAP consistency). It is intentionally NOT shown on the site — the site
	// surfaces each stylist's own cell directly (see each Stylist below).
	phone: "(737) 353-7755",
	// Shared email — reaches both Devon and Neva.
	bookingEmail: "info@luckyharesalon.com",
	helloEmail: "info@luckyharesalon.com",
};

export const location = {
	street: "5350 Burnet Rd",
	suite: "Suite 304",
	city: "Austin",
	state: "TX",
	zip: "78756",
	// Customer-facing directions for finding the suite once on-site. Two ways in
	// depending on where you parked, then a shared final step at the door.
	findUs: {
		routes: [
			{
				from: "From the parking garage",
				steps: "Exit and walk up the steps, past the pilates studio, then through the door into the lobby.",
			},
			{
				from: "From street parking",
				steps: "Head to the front of the building facing Burnet Rd — there's no entry from the side door.",
			},
		],
		atDoor:
			"At the entrance there's a small screen — scroll to your stylist's name and call, and we'll come out to meet you.",
	},
	parking:
		"There's a free parking garage attached to the building, plus street parking on Lawnmont St.",
	// Accessibility for the shared My Salon Suites building (garage handicap parking + ramp
	// to the entrance). The studio is wheelchair accessible. Owners: review wording / suite specifics.
	accessibility:
		"The studio is wheelchair accessible. The parking garage has handicap spaces near the entrance, and a ramp on the left-hand side leads up to the My Salon Suites entrance — heads up, it can be a little steep. The entrance has two heavy, pull-to-open doors with a small lobby between them; if you'd like a hand getting in, call or text when you arrive and one of us will come out to meet you. The hallways and our suite have room for a wheelchair, and we're glad to rearrange to make you comfortable. If you have a specific access need, reach out before your visit and we'll make sure everything's ready.",
	// Map links. Replace once the listing exists; a plain query works meanwhile.
	googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=5350+Burnet+Rd+Suite+304+Austin+TX+78756",
	appleMapsUrl: "https://maps.apple.com/?q=5350+Burnet+Rd+Suite+304+Austin+TX+78756",
	// Google Business Profile "leave a review" short-link. Empty string hides the
	// footer review link until the listing exists.
	googleReviewUrl: "https://g.page/r/CXsg_Tdvcyr8EBI/review",
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
	// No shared salon Instagram account — Devon and Neva each link their own (see
	// `stylists` below). Leave null; the site links the stylists individually and
	// skips a standalone salon-IG link.
	instagram: null as string | null,
};

export type Stylist = {
	name: string; // full name, shown as the heading (e.g. "Devon Williams")
	firstName: string; // friendly first name for CTAs ("Book with Devon")
	role: string;
	// This stylist's own business number — clients call/text them directly.
	phone: string;
	// This stylist's own mailbox (real Zoho address). The shared info@ in
	// `contact` reaches both; use this for booking a specific person.
	email: string;
	specialties: string[];
	bio: string;
	instagram: string; // full URL
	// Path under /public (e.g. "/stylists/devon.webp"). Leave "" until a real
	// photo is added — pages show an initials fallback when empty.
	photo: string;
	// How this stylist takes new clients (contact-only — no online booking).
	bookingNote: string;
};

export const stylists: Stylist[] = [
	{
		name: "Devon Williams",
		firstName: "Devon",
		role: "Hairstylist",
		phone: "(512) 369-2670",
		email: "devon@luckyharesalon.com",
		specialties: ["Fantasy color", "Lived-in blondes"],
		bio: "I'm Devon! Originally from the Reno/Tahoe area in Nevada, I've called Austin home for the past five years. An introvert at heart, I strive to create a calm space where you can just be yourself — a safe space to express who you are, no matter how you identify.",
		instagram: "https://instagram.com/devluckyhare",
		photo: "/stylists/devon.webp",
		bookingNote: "Text, email devon@luckyharesalon.com, or DM on Instagram to request an appointment with Devon.",
	},
	{
		name: "Neva Gregory",
		firstName: "Neva",
		role: "Hairstylist",
		phone: "(785) 840-6441",
		email: "neva@luckyharesalon.com",
		specialties: ["Dimensional blondes & brunettes", "Lived-in, low-maintenance color", "Cuts"],
		bio: "I'm Neva. I moved to Austin right after graduating high school in Lawrence, KS and started doing hair shortly after. I specialize in low-maintenance, lived-in color and cuts — my goal is to give you hair that needs minimal styling and upkeep. I love working out of a private suite where you can be comfortable, whatever that looks like for you.",
		instagram: "https://instagram.com/neva.does.hair",
		photo: "/stylists/neva.webp",
		bookingNote: "Text, email neva@luckyharesalon.com, or DM on Instagram to request an appointment with Neva.",
	},
];

export type ServiceItem = { name: string; price: string; description?: string };
export type ServiceCategory = { category: string; blurb?: string; items: ServiceItem[] };
// Pricing is per-stylist (Devon and Neva set their own). `stylist` matches a
// Stylist.firstName above. An empty `categories` array renders the `note` instead.
export type StylistMenu = {
	stylist: string;
	note?: string;
	categories: ServiceCategory[];
};

export const serviceMenus: StylistMenu[] = [
	{
		stylist: "Devon",
		categories: [
			{
				category: "Haircuts",
				items: [
					{ name: "Haircut", price: "$100", description: "Includes wash, blow-dry & style." },
					{
						name: "Transformation cut",
						price: "$135",
						description:
							"Includes wash, blow-dry & style. For a big change, or a lot of hair that needs more time.",
					},
				],
			},
			{
				category: "Color",
				items: [
					{ name: "All-over color", price: "$200" },
					{ name: "Dimensional color", price: "$300" },
					{ name: "Lowlights", price: "$200" },
					{ name: "Single process (grey coverage)", price: "$100" },
					{ name: "Single process + gloss", price: "$125" },
				],
			},
			{
				category: "Styling & treatments",
				items: [
					{ name: "Wash, blow-dry & style", price: "$65" },
					{ name: "Deep conditioning treatment", price: "$25" },
					{ name: "Scalp treatment", price: "$40" },
					{ name: "Consultation", price: "Free" },
				],
			},
			{
				category: "Fantasy color",
				blurb: "All fantasy services include a treatment, trim, and blow-dry/style.",
				items: [
					{
						name: "Tier 1",
						price: "$200",
						description: "Tip-outs or mini placement (money piece, small panel) with a single color.",
					},
					{
						name: "Tier 2",
						price: "$300",
						description: "Partial placement (peekaboo, halo) with a single color.",
					},
					{ name: "Tier 3", price: "$400", description: "Full lightening service with a single color." },
					{ name: "Tier 4", price: "$500", description: "Full blonding service with a single color." },
					{ name: "Additional colors", price: "$25 each" },
					{
						name: "Small design",
						price: "$50",
						description: "e.g. raccoon tails, one rainbow stripe, a design on 1–2 panels.",
					},
					{
						name: "Medium design",
						price: "$100",
						description: "Partial placement — e.g. a ¼-head color block or 2–6 rainbow panels.",
					},
					{
						name: "Large design",
						price: "$200",
						description: "Full head of prisms, checkers, leopard print, etc.",
					},
				],
			},
		],
	},
	{
		stylist: "Neva",
		categories: [
			{
				category: "Lightening",
				items: [
					{ name: "Blonding", price: "$330" },
					{ name: "Full lightening", price: "$270" },
					{ name: "Partial", price: "$230" },
					{ name: "Mini", price: "$200" },
					{ name: "Grey coverage + partial", price: "$305" },
					{ name: "Grey coverage + mini", price: "$265" },
					{ name: "Highs & lows", price: "$270" },
					{ name: "Express toner", price: "$45", description: "No blow-dry" },
				],
			},
		],
	},
];

// Work gallery. Photos live in /public/gallery (stripped of EXIF/GPS, WebP).
// `stylist` matches a Stylist.firstName so we can label/filter later.
export type GalleryImage = { src: string; alt: string; stylist: string };
// Order matters: the first images lead the gallery page AND feed the homepage
// teaser strip (gallery.slice(0, 6)), so the top six are a deliberate, varied spread.
// Devon and Neva interleaved so the homepage teaser (gallery.slice(0,6)) and the
// gallery's lead show both stylists' work. Devon = vivid/fantasy color; Neva =
// dimensional blondes, bronde balayage, lived-in brunettes.
export const gallery: GalleryImage[] = [
	{ src: "/gallery/devon-01.webp", alt: "Rainbow color melt with curtain bangs", stylist: "Devon" },
	{ src: "/gallery/neva-01.webp", alt: "Long blonde balayage with layered ends, back view", stylist: "Neva" },
	{ src: "/gallery/devon-07.webp", alt: "Electric blue streaks through black hair", stylist: "Devon" },
	{ src: "/gallery/neva-02.webp", alt: "Soft brunette waves with a face-framing money piece", stylist: "Neva" },
	{ src: "/gallery/devon-11.webp", alt: "Blonde balayage with loose waves", stylist: "Devon" },
	{ src: "/gallery/neva-03.webp", alt: "Long, sleek dimensional blonde with a bright money piece", stylist: "Neva" },
	{ src: "/gallery/devon-08.webp", alt: "Green pixie cut with a red money piece", stylist: "Devon" },
	{ src: "/gallery/neva-04.webp", alt: "Lived-in dimensional blonde, smoothed straight", stylist: "Neva" },
	{ src: "/gallery/devon-05.webp", alt: "Vivid magenta-pink color, front view", stylist: "Devon" },
	{ src: "/gallery/neva-05.webp", alt: "Warm bronde balayage on long waves", stylist: "Neva" },
	{ src: "/gallery/devon-03.webp", alt: "Fiery orange-to-purple color in side-swept waves", stylist: "Devon" },
	{ src: "/gallery/neva-06.webp", alt: "Lived-in bronde with soft blonde-kissed waves", stylist: "Neva" },
	{ src: "/gallery/devon-02.webp", alt: "Multi-tonal rainbow color on long layered waves", stylist: "Devon" },
	{ src: "/gallery/neva-07.webp", alt: "Bright blonde beachy waves", stylist: "Neva" },
	{ src: "/gallery/devon-09.webp", alt: "Teal-to-blue ombre on natural curls", stylist: "Devon" },
	{ src: "/gallery/neva-08.webp", alt: "Dimensional blonde with soft waves and a money piece", stylist: "Neva" },
	{ src: "/gallery/devon-12.webp", alt: "Glossy burgundy waves", stylist: "Devon" },
	{ src: "/gallery/neva-09.webp", alt: "Low-maintenance brunette with subtle dimension", stylist: "Neva" },
	{ src: "/gallery/devon-04.webp", alt: "Magenta and pink color, side profile", stylist: "Devon" },
	{ src: "/gallery/neva-10.webp", alt: "Lived-in bronde with face-framing layers", stylist: "Neva" },
	{ src: "/gallery/devon-06.webp", alt: "Bright pink color with a soft shadow root", stylist: "Devon" },
	{ src: "/gallery/neva-11.webp", alt: "Long bronde balayage with sun-kissed dimension", stylist: "Neva" },
	{ src: "/gallery/devon-10.webp", alt: "Soft violet money piece on dark hair", stylist: "Devon" },
	{ src: "/gallery/neva-12.webp", alt: "Sleek, dimensional blonde worn straight", stylist: "Neva" },
	{ src: "/gallery/devon-13.webp", alt: "Rich red-burgundy color, front view", stylist: "Devon" },
	{ src: "/gallery/neva-13.webp", alt: "Effortless lived-in bronde, long waves", stylist: "Neva" },
	{ src: "/gallery/devon-14.webp", alt: "Dark bob blended to blonde ends", stylist: "Devon" },
];

// Real reviews only — leave empty until the Google Business Profile has some.
// Do NOT fabricate reviews. Shape: { quote, author }.
export const reviews: { quote: string; author: string }[] = [];

export const fullAddress = `${location.street}, ${location.suite}, ${location.city}, ${location.state} ${location.zip}`;
