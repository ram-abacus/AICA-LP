import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
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
        <head>
        {/* Meta Pixel Code */}
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1830738544193271');
              fbq('track', 'PageView');
            `,
          }}
        />
        
        {/* Google Tag Manager */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=AW-17631686555"
        />
        <Script
          id="google-analytics-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'AW-17631686555');
            `,
          }}
        />

        {/* Facebook Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1830738544193271&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        {children}
         <GoogleAnalytics gaId="G-HWXVN5D3HD" />
         <CookieConsent/>
      </body>
    </html>
  );
}