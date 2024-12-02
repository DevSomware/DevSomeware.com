import { AnimatedBeamMultipleOutputDemo } from "@/sections/BeamSection";
import { CardsSection } from "@/sections/CardsSection";
import GlobeSection from "@/sections/GlobeSection";

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
      <GlobeSection />
      <AnimatedBeamMultipleOutputDemo />
    </>
  );
}
