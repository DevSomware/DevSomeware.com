import type { Metadata } from "next";


export const metadata: Metadata = {
    title: "Contact Us - DevSomeWare",
    description: "Get in touch with the DevSomeWare team. Reach out for partnership opportunities, community events, support, or general inquiries.",
    keywords: [
      "DevSomeWare Contact",
      "Contact DevSomeWare",
      "Developer Community Support",
      "Open Source Community Contact",
      "DevSomeWare Support",
      "DevSomeWare Events",
      "Developer Community Partnership"
    ],
    icons: {
      icon: '/favicon.ico',
    },
    openGraph: {
      title: "Contact Us - DevSomeWare",
      description: "Reach out to the DevSomeWare team for support, events, partnerships, and community inquiries.",
      url: "https://devsomeware.com/Contact",
      type: "website",
      images: [
        {
          url: "/alogo.png", // Path to a relevant Open Graph image
          width: 1200,
          height: 630,
          alt: "Contact DevSomeWare - Open Source Community",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@DevSomeWare",
      title: "Contact Us - DevSomeWare",
      description: "Get in touch with DevSomeWare for support, events, partnerships, and community inquiries.",
      images: "/alogo.png", // Path to your Open Graph image for the Contact page
    },
    robots: "index, follow",
  };
  


export default function RootLayout({
  children,
}: Readonly <{ 
  children: React.ReactNode;
}>) {
  return (
<>
        {children}
        </>
   
   
  );
}
