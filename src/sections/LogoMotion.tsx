"use client";
/* eslint-disable jsx-a11y/alt-text */
import Logo1 from "@/assets/logo1.png";
import Logo2 from "@/assets/logo2.png";
import Logo3 from "@/assets/logo3.png";
import Logo4 from "@/assets/logo4.png";
import Logo5 from "@/assets/logo5.png";
import Logo6 from "@/assets/logo6.png";
import Logo7 from "@/assets/logo1.png";
import Logo8 from "@/assets/logo2.png";
import Logo9 from "@/assets/logo3.png";
import Logo10 from "@/assets/logo4.png";
import Logo11 from "@/assets/logo5.png";
import Logo12 from "@/assets/logo6.png";
import Image from "next/image";
import { motion } from "framer-motion";
export const LogoMotion = () => {
  return (
    <section className="lg:py-10 md:py-8 sm:py-2">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="flex flex-none pr-14 gap-14 -translate-x-1/2"
            >
              {[
                Logo1,
                Logo2,
                Logo3,
                Logo4,
                Logo5,
                Logo6,
                Logo7,
                Logo8,
                Logo9,
                Logo10,
                Logo11,
                Logo12,
              ].map((logo, index) => (
                <Image
                  src={logo}
                  alt={`Logo ${index + 1}`}
                  key={index}
                  className="sm:h-10 md:h-16 lg:h-20 w-auto"
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
