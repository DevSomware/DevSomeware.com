import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Footers } from "@/sections/Footers";
const dmSans = DM_Sans({ subsets: ["latin"] });
import NextTopLoader from "nextjs-toploader";
import { Navbar } from "@/components/Navbar";
import BottomNavbar from "@/components/B-Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";

export const metadata: Metadata = {
  title: "DevSomeWare - Open Source Developer Community",
  description:
    "Join DevSomeWare, an open-source community for developers to learn, grow, and collaborate. Participate in hackathons, events, and build exciting projects while contributing to open source.",
  keywords: [
    "DevSomeWare",
    "Open Source Community",
    "Developer Community",
    "Hackathons",
    "Coding Events",
    "Open Source Contributions",
    "Developer Workshops",
    "Software Development",
    "Collaborate on Projects",
    "Learning Community for Developers",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "DevSomeWare - Open Source Developer Community",
    description:
      "DevSomeWare is a thriving community for developers to learn, participate in hackathons, and contribute to open source projects.",
    url: "https://devsomeware.com",
    type: "website",
    images: [
      {
        url: "/alogo.png",
        width: 1200,
        height: 630,
        alt: "DevSomeWare Open Source Developer Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@DevSomeWare",
    title: "DevSomeWare - Open Source Developer Community",
    description:
      "A community where developers can learn, grow, and contribute to open source. Join us for hackathons, workshops, and collaborative projects.",
    images: "/alogo.png",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="relative" suppressHydrationWarning>
      <body className={clsx(dmSans.className, "antialiased bg-black")}>
        <NextTopLoader
          color="#800080"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          template='<div class="bar" role="bar"><div class="peg"></div></div> 
            <div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
          zIndex={1600}
          showAtBottom={false}
        />
        <ThemeProvider attribute="class" defaultTheme="dark">
          <Navbar />
          {children}
          <div className="block md:hidden">
            <BottomNavbar />
          </div>
          <Footers />
        </ThemeProvider>
      </body>
    </html>
  );
}
