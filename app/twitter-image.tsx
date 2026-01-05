import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Lucky Hare Salon";
export const size = {
	width: 1200,
	height: 630,
};
export const contentType = "image/png";

export default async function Image() {
	const cedarvilleCursive = fetch(
		new URL(
			"https://fonts.gstatic.com/s/cedarvillecursive/v17/yYL00g_a2veiHDToR2Fj2f1c8R8tq.woff2",
		),
	).then((res) => res.arrayBuffer());

	return new ImageResponse(
		<div
			style={{
				background: "white",
				width: "100%",
				height: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<div
				style={{
					fontSize: 120,
					fontFamily: "Cedarville Cursive",
					color: "black",
				}}
			>
				Lucky Hare Salon
			</div>
		</div>,
		{
			...size,
			fonts: [
				{
					name: "Cedarville Cursive",
					data: await cedarvilleCursive,
					style: "normal",
				},
			],
		},
	);
}
