"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <div className="relative flex flex-col items-center justify-center space-y-6">
        <div className="text-5xl md:text-7xl font-extrabold text-transparent logo">
          <span className="shine-text">DevSomeware</span>
        </div>
        <div className="line-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </motion.div>
  );
};
