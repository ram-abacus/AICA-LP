import "./globals.css";
import type { Metadata } from "next";
import { GoogleAnalytics } from '@next/third-parties/google'
import CookieConsent from "components/CookiesConsent";

export const metadata: Metadata = {
  title: "AICA SUNMICA Decorative Laminates | Get Free Sample Kit & Price",
  description: "Premium Decorative Laminates for kitchens, wardrobes, wall panels & furniture. Scratch-resistant, heat & moisture resistant, stain-free. Get catalogue & best quote.",
  metadataBase: new URL("https://aicasunmica.com"),
  alternates: { canonical: "/decorative-laminates" },
  themeColor: "#8e082e",
  icons: {
    icon: "favicon.ico",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">  
      <body>
        {children}
         <GoogleAnalytics gaId="G-HWXVN5D3HD" />
         <CookieConsent/>
      </body>
    </html>
  );
}