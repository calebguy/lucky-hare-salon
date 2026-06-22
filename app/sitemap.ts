import type { MetadataRoute } from "next";
import { SITE_URL } from "./site";

// Emit a static sitemap.xml at build time (required for `output: export`).
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const routes = ["", "/about", "/services", "/gallery", "/location", "/contact"];
	return routes.map((path) => ({
		url: `${SITE_URL}${path}`,
		changeFrequency: "monthly",
		priority: path === "" ? 1 : 0.8,
	}));
}
