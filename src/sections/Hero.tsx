"use client";
import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";
import {motion,useScroll,useTransform} from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export const Hero = () => {
 const sectionRef = useRef(null);
 const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end','end start']
  });
  
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <motion.section
    ref={sectionRef}
      className="flex h-[600px] md:h-[800px] items-center overflow-hidden relative [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]"
      style={{
        backgroundImage: `url(${starsBg.src})`,
        backgroundPositionY,
      }}
      animate={{
        backgroundPositionX: starsBg.width,
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: 'linear',
      }}
    > 
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
    
     <div className="absolute h-64 w-64 md:h-96 md:w-96 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      
      <motion.div style={{
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate={{
        rotate: '1turn',
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: 'linear',
       }}
       className="absolute h-[344px] w-[344px] md:h-[580px] md:w-[580px] border-white border opacity-20  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <div className="absolute h-2 w-2  left-0 bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "> </div>
         <div className="absolute h-2 w-2  left-1/2 bg-white rounded-full  top-0 -translate-x-1/2 -translate-y-1/2 "> </div>
         <div className="absolute h-5 w-5  left-full border border-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center  "> 
         <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
      </motion.div>
      <motion.div
       style={{
        translateY: '-50%',
        translateX: '-50%',
        }}
       animate={{
        rotate : '-1turn',
        
       }}
       transition={{
        repeat: Infinity,
        duration: 60,
        ease: 'linear',
       }}
      className="absolute h-[444px] w-[444px] md:h-[780px] md:w-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "></motion.div>
      <motion.div
      style={{
        translateY: '-50%',
        translateX: '-50%',
      }}
      animate={{
        rotate: '1turn',
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: 'linear',
       }}
      className="absolute h-[544px] w-[544px] md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed ">
      <div className="absolute h-2 w-2  left-0 bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "> </div>
      <div className="absolute h-2 w-2  left-full bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "> </div>
      </motion.div>
      
      <div className="container relative mt-28">
        <h1 className="text-5xl md:text-[140px] lg:text-[150px] md:leading-none bg-white lg:text-8xl font-semibold text-center tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          DevSomeware
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-white/70 mt-5 text-center max-w-xl mx-auto">
          DevSomeware is an open-source community that believes in working and growing together
        </p>
        <div className="flex justify-center mt-5 lg:mt-10">
         <Link href="/Contact"> <Button>( Contact Us )</Button></Link>
        </div>
      </div>
    </motion.section>
  );
}; 
