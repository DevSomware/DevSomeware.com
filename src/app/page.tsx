import { CardsSection } from "@/sections/CardsSection";
import { Hero } from "@/sections/Hero";
import { LogoMotion } from "@/sections/LogoMotion";
import { WavyBackgroundDemo } from "@/sections/WavyBackground";

export default function Home() {
  return (
    <>
      <Hero />
      <WavyBackgroundDemo />
      <CardsSection />
      <LogoMotion />
    </>
  );
}
