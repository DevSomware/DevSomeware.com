"use client";
import { Dock, DockIcon } from "@/components/ui/dock";
import { buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { navItems } from "@/data/nav.config";
import cn from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function BottomNavbar() {
  const pathname = usePathname();
  const [pressedIcon, setPressedIcon] = useState<string | null>(null);

  const navItemLinks = navItems.map((item) => item.link);
  const duplicateLinks = navItemLinks.filter(
    (item, index) => navItemLinks.indexOf(item) !== index
  );
  if (duplicateLinks.length > 0) {
    console.warn("Duplicate navItem links detected:", duplicateLinks);
  }

  return (
    <div className="block md:hidden">
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-10 flex origin-bottom h-full max-h-14">
        <div className="fixed bottom-0 inset-x-0 h-16 w-full bg-background to-transparent  [-webkit-mask-image:linear-gradient(to_top,black,transparent)] dark:bg-background"></div>

        <TooltipProvider>
          <Dock className="z-50 pointer-events-auto backdrop-blur-3xl relative mx-auto flex min-h-full h-full items-center px-1 bg-background [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
            {navItems.map((item) => {
              const key = `nav-${item.id}`;
              console.log(`Rendering DockIcon with key: ${key}`);
              return (
                <DockIcon key={key}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link
                        href={item.link}
                        onClick={() => setPressedIcon(item.name)}
                        className={cn(
                          buttonVariants({ variant: "ghost", size: "icon" }),
                          "w-12 h-12 flex items-center justify-center"
                        )}
                      >
                        <span
                          className={cn(
                            "text-xl",
                            pathname === item.link
                              ? "text-purple-500"
                              : "text-gray-600 dark:text-gray-400 hover:text-purple-500"
                          )}
                        >
                          {item.icon}
                        </span>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="top">
                      <p>{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </DockIcon>
              );
            })}
          </Dock>
        </TooltipProvider>

        {pressedIcon && (
          <div className="absolute bottom-16 mx-auto text-center w-full">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {" "}
              <span className="font-bold text-white">{pressedIcon}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
