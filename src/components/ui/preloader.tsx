"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 0.5 }} // Smooth fade-out over 0.5 seconds
      className="fixed inset-0 flex items-center justify-center bg-black z-50"
    >
      <div className="relative flex items-center justify-center">
        {/* Responsive logo text */}
        <div className="relative text-4xl md:text-6xl font-bold text-white logo">
          <span className="shine-text">DevSomeware</span>
        </div>

        <div className="absolute top-0 left-0 w-full h-full shine-animation"></div>
      </div>
    </motion.div>
  );
};
