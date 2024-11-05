import { Button } from "@/components/Button";
import starsBg from "@/assets/stars.png";

export const Hero = () => {
  return (
    <section
      className="h-[492px] min-h-screen flex items-center overflow-hidden relative"
      style={{
        backgroundImage: `url(${starsBg.src})`
      }}
    > 
    <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(140,69,255,.5)_15%,rgb(14,0,36,.5)_78%,transparent)]"></div>
     <div className="absolute h-64 w-64 bg-purple-500 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      <div className="absolute h-[344px] w-[344px] border-white border opacity-20  rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
         <div className="absolute h-2 w-2  left-0 bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "> </div>
         <div className="absolute h-2 w-2  left-1/2 bg-white rounded-full  top-0 -translate-x-1/2 -translate-y-1/2 "> </div>
         <div className="absolute h-5 w-5  left-full border border-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center  "> 
         <div className="h-2 w-2 bg-white rounded-full"></div>
          </div>
      </div>
      <div className="absolute h-[444px] w-[444px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "></div>
      <div className="absolute h-[544px] w-[544px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "></div>
      <div className="absolute h-2 w-2  left-0 bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "> </div>
      <div className="absolute h-2 w-2  left-full bg-white rounded-full  top-1/2 -translate-x-1/2 -translate-y-1/2 "> </div>
      <div className="container relative mt-28">
        <h1 className="sm:text-8xl md:text-7xl bg-white lg:text-8xl font-semibold text-center tracking-tighter bg-[radial-gradient(100%_100%_at_top_left,white,white,rgb(74,32,138,.5))] text-transparent bg-clip-text">
          Coming Soon
        </h1>
        <p className="text-lg text-white/70 mt-5 text-center">
          DevSomeware is an open-source community that believes in working and growing together
        </p>
        <div className="flex justify-center mt-5 lg:mt-10">
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}; 
