"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    const loopAnimation = async () => {
      while (true) {
        await animate(
          "span", // Target all span elements
          {
            opacity: [0, 1], // Fade in only
            filter: filter ? ["blur(10px)", "blur(0px)"] : ["none", "none"],
          },
          {
            duration: duration ? duration : 1,
            delay: stagger(0.2), // Sequential delay for each span
          }
        );
      }
    };

    if (scope) {
      loopAnimation();
    }
  }, [animate, duration, filter, scope]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className="dark:text-purple-200 text-black opacity-0"
            style={{
              filter: filter ? "blur(10px)" : "none",
            }}
          >
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
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
