import Logo from "@/assets/logo.svg";
import Image from "next/image";

export const Footers = () => {
    return (
       <footer className="py-5 border-t border-white/15">
          <div className="container mx-auto px-4">
             <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                {/* Left Side: Logo and Title */}
                <div className="flex items-center gap-2">
                   <Image src={Logo} alt="DWS Logo" width={80} height={20} className="sm:w-20 sm:h-6 md:w-24 md:h-8 lg:w-28 lg:h-10" />
                   {/* <div className="font-medium text-white text-sm sm:text-base md:text-lg lg:text-xl">
                      DevSomeware
                   </div> */}
                </div>

                {/* Right Side: All Rights Reserved */}
                <div className="font-medium text-white text-xs sm:text-sm md:text-base lg:text-lg text-center md:text-right">
                   All rights reserved devsomeware.com   
                </div>
             </div>
          </div>
       </footer> 
    );
};
