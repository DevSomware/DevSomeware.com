import Logo from '@/assets/logo.svg';
import Image from 'next/image';

export const Navbar = () => {
    return (
      <header className="sticky top-0 left-0  bg-background-1/5 z-[999] w-full backdrop-blur-lg border-b border-white/10">
        <div className="py-2">
          <div className="container mx-auto px-4 sm:ml-4 lg:ml-40 md:ml-32">

            <div className="flex items-center">
            <div className="relative  hover:shadow-[0_0_30px_15px_rgba(140,69,255,0.6)] transition duration-300 ease-in-out p-2 rounded-lg">
               <div className="absolute inset-0 bg-gradient-to-b from-transparent  to-purple-900 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg "></div>
                 <Image src={Logo} alt="DWS Logo" width={110} height={40} className="relative z-10" />
               </div>
               <button className="relative md:left-0 sm:left-20 py-2 px-3  text-white ml-auto text-xl font-medium rounded-full bg-gradient-to-b from-[#190d2e] to-[#4a208a] shadow-[0px_0px_12px_#8c45ff] hover:shadow-[0px_0px_20px_#8c45ff] transition-all duration-300 ease-in-out overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-r from-[#190d2e] via-[#4a208a] to-[#8c45ff] bg-[length:400%_400%] animate-gradientMove">
              <div className="rounded-full border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="rounded-full border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_15px_rgb(140,69,255,0.8)_inset] full animate-glow"></div>
             </div>
             <span className="relative z-10">("Join Us")</span>
            </button>
                 
            </div>
          </div>
        </div>
      </header>
    );
};