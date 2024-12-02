import React from "react";
import Earth from "@/components/ui/globe";
import { Sparkles } from "@/components/ui/sparkles";

function GlobeSection() {
  return (
    <>
      <div className="h-screen overflow-hidden bg-black text-white">
        <article className="grid gap-4 text-center relative z-10 pt-10">
          <span className="inline-block text-sm border p-1 px-3 w-fit mx-auto rounded-full border-[#9C27B0] bg-[#0f1c35]">
            Get Access
          </span>
          <h1 className="text-4xl  font-semibold bg-gradient-to-b from-[#edeffd] to-[#9C27B0] bg-clip-text text-transparent leading-[100%] tracking-tighter">
            Design with a Global
            <br />
            Perspective, Innovate with Ease.
          </h1>
          <Earth />
        </article>
        <div className="relative -mt-32 h-80 w-screen overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,#9C27B0,transparent_90%)] before:opacity-40 after:absolute after:-left-1/2 after:top-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[10%] after:border-t after:border-[#9C27B0] after:bg-[#2c0e31]">
          <Sparkles
            density={800}
            speed={1.2}
            size={1.2}
            direction="top"
            opacitySpeed={2}
            color="#9C27B0"
            className="absolute inset-x-0 bottom-0 h-full w-full "
          />
        </div>
      </div>
    </>
  );
}

export default GlobeSection;
