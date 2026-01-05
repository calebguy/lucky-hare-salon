import Image from "next/image";
import { Cedarville_Cursive } from "next/font/google";

const cedarville = Cedarville_Cursive({ weight: "400", subsets: ["latin"] });

export default function Home() {
  return (
    <div className="relative flex min-h-screen items-center justify-center bg-white">
      <h1 className={`absolute top-8 text-6xl text-black ${cedarville.className}`}>
        Lucky Hair
      </h1>
      <Image
        src="/lucky-hare.png"
        alt="Lucky Hare"
        width={800}
        height={1035}
        priority
        className="max-h-[80vh] w-auto"
      />
    </div>
  );
}
