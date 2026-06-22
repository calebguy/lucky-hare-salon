import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	// Build a fully static site (HTML/CSS/JS in `out/`) — portable to any static
	// host (Cloudflare Pages, Netlify, GitHub Pages, S3, …). The site has no
	// server code, so nothing is lost. Vercel also serves this output fine.
	output: "export",
	// next/image's on-the-fly optimization needs a server; with a static export
	// there isn't one, so serve the (already-optimized, pre-sized WebP) files
	// as-is. Our images are small, so this is a non-issue.
	images: { unoptimized: true },
};

export default nextConfig;
