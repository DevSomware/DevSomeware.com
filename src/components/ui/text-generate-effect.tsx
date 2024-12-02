"use client";
import { useLayoutEffect } from "react";
import { stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useLayoutEffect(() => {
    if (scope.current) {
      const elements = scope.current.querySelectorAll(".animated-span");
      console.log("Elements found:", elements.length);

      if (elements.length === 0) {
        console.error("No elements found with the selector '.animated-span'");
        return;
      }

      const loopAnimation = async () => {
        await animate(
          ".animated-span",
          {
            opacity: [0, 1],
            filter: filter ? ["blur(10px)", "blur(0px)"] : ["none", "none"],
          },
          {
            duration: duration ? duration : 1,
            delay: stagger(0.2),
          }
        );

        loopAnimation();
      };

      loopAnimation();
    } else {
      console.error("scope.current is null");
    }
  }, [animate, duration, filter, scope]);

  const renderWords = () => {
    return (
      <div ref={scope}>
        {wordsArray.map((word, idx) => (
          <span
            key={`${word}-${idx}`}
            className="animated-span dark:text-purple-200 text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn(className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black lg:text-2xl sm:text-lg leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
