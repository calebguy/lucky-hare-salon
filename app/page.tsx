import Illustration from "@/components/icons/Illustration";
import PrimaryLogo from "@/components/icons/PrimaryLogo";

export default function Home() {
	return (
		<div className="flex min-h-screen flex-col items-center bg-sage px-6 [&:has(a:hover)_svg]:text-brown [&:has(a:active)_svg]:text-brown">
			<PrimaryLogo className="mt-8 w-40 text-light-blue transition-colors duration-300 md:w-64" />
			<div className="flex flex-1 items-center justify-center">
				<a
					href="https://app.squareup.com/appointments/buyer/widget/6o52ec1jl8364f/L1Y7A1WJ7A1MW"
					className="inline-block rounded bg-light-blue px-8 py-3 text-center font-dreamboat-thin text-base uppercase tracking-widest text-sage transition-colors duration-300 hover:bg-brown active:bg-brown md:px-10 md:py-4 md:text-lg"
				>
					Book an appointment
				</a>
			</div>
			<div className="flex justify-center pb-8">
				<Illustration className="w-32 text-light-blue transition-colors duration-300 md:w-48" />
			</div>
		</div>
	);
}
