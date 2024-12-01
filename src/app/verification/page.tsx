"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "@/components/ui/lamp";

const page = () => {
  return (
    <LampContainer>
      <AnimatedText />
    </LampContainer>
  );
};

const AnimatedText = () => {
  return (
    <motion.h1
      initial={{ opacity: 0.8, y: 50 }}
      animate={{
        opacity: [0.8, 1, 0.8],
        scale: [1, 1.05, 1],
        y: [50, 45, 50],
      }}
      transition={{
        repeat: Infinity,
        duration: 3,
        ease: "easeInOut",
      }}
      className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 sm:-mt-[10rem] lg:mt-10 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
    >
      Your Application <br /> is under Verification ...
    </motion.h1>
  );
};

export default page;
