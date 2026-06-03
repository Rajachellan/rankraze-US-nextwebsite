import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://rankraze.us"),
};
import { DM_Sans, Sora, Bricolage_Grotesque, Syne } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "./Providers";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import SlideOutDrawer from "./components/UI/SlideOutDrawer";
import NavigationBar from "./components/UI/Navigation";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import ModalProvider from "./components/provider/ModalProvider";
import WhatsappIcon from "./components/UI/WhatsappIcon"
import { ToastContainer } from 'react-toastify';
// import { SpeedInsights } from "@vercel/speed-insights/next";
// import { Analytics } from "@vercel/analytics/next";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
  weight: ["700", "800"],
});

const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Rankraze",
      "url": "https://rankraze.us",
      "logo": "https://rankraze.us/rankraze-logo.webp",
      "image": 
        [ "https://rankraze.us/rankraze-team.webp"
        ],
      "description": "AI-powered digital marketing agency in Texas delivering SEO, PPC, social media and performance marketing. Trusted by 2000+ brands.",
      "foundingDate": "2016",
      "telephone": "+19194551241",
      "email": "info@rankraze.us",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2801 W, Royal Lane, Apt # 1905",
        "addressLocality": "Irving",
        "addressRegion": "TX",
        "postalCode": "75063",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "32.8959",
        "longitude": "-96.9482"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "13",
        "bestRating": "5",
        "worstRating": "1"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "priceRange": "$$",
      "areaServed": {
        "@type": "State",
        "name": "Texas"
      },
      "sameAs": [
        "https://www.facebook.com/Rankraze",
        "https://www.youtube.com/@Rankraze",
        "https://www.linkedin.com/company/rankrazetechnologies",
        "https://www.instagram.com/rankraze/"
      ],
      "serviceType": [
        "SEO Services",
        "PPC Advertising",
        "Social Media Marketing",
        "Content Marketing",
        "Web Development",
        "Digital Marketing"
      ]
    },
    {
      "@type": "Organization",
      "name": "Rankraze",
      "url": "https://rankraze.us",
      "logo": {
        "@type": "ImageObject",
        "url": "https://rankraze.us/rankraze-logo.webp"
      },
      "founder": {
        "@type": "Person",
        "name": "Raja Chellan"
      },
      "sameAs": [
        "https://www.facebook.com/Rankraze",
        "https://www.youtube.com/@Rankraze",
        "https://www.linkedin.com/company/rankrazetechnologies",
        "https://www.instagram.com/rankraze/"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.clarity.ms" />
        <link rel="dns-prefetch" href="https://embed.tawk.to" />
        <link rel="dns-prefetch" href="https://cdn.jsdelivr.net" />
        {/* Load Remixicon non-blocking — injected after hydration to avoid render-blocking CSS */}
        <Script
          id="remixicon-css"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.min.css';document.head.appendChild(l);})();`,
          }}
        />
        {/* Microsoft Clarity Analytics */}
        <Script
          id="microsoft-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "v7xou0slrp");
            `,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

      </head>
      <body
        className={`${dmSans.variable} ${sora.variable} ${bricolage.variable} ${syne.variable} ${dmSans.className} font-[var(--font-dm-sans)] font-sans antialiased bg-white text-[#171717] dark:bg-[var(--prim-dark-bg)] dark:text-[#E2EEFF]`}
        suppressHydrationWarning={true}
      >
        {/* 🔹 Skip link (recommended but optional) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 z-50 bg-white text-black px-4 py-2 rounded-md shadow"
        >
          Skip to main content
        </a>

        <ToastContainer position="top-right" autoClose={3000} />
        <Provider>
          <ModalProvider>
            <Header data={<NavigationBar />} />
            {/* <SlideOutDrawer /> */}


            <main id="main-content" className="min-h-screen">
              {children}
            </main>

            <Footer />
          </ModalProvider>
        </Provider>

        {/* Tawk.to Chat Widget - Deferred until browser is fully idle */}
        <Script
          id="tawk-to-chat"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `
              function _loadTawk() {
                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/59fda9d3198bd56b8c0393c7/default';
                s1.charset='UTF-8';
                s0.parentNode.insertBefore(s1,s0);
              }
              if ('requestIdleCallback' in window) {
                requestIdleCallback(_loadTawk, { timeout: 5000 });
              } else {
                setTimeout(_loadTawk, 3000);
              }
            `,
          }}
        />
        <WhatsappIcon />
        <GoogleAnalytics gaId="G-VQNE3E4KHR" />
      </body>
    </html>
  );
}

