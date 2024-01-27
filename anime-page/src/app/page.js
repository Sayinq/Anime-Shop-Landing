import Image from "next/image";

{/* Sections */}
import Hero from "./sections/Hero";
import Intro from "./sections/Intro";
import Shop from "./sections/Shop";
import Gallery from "./sections/Gallery";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <Intro />
      <Shop />
      <Gallery />
    </main>
  );
}
