import dynamic from "next/dynamic";
import BannerScrollBar from "./components/UI/BannerScrollBar";
import TypingAnimationClient from "./components/TypingAnimationClient";
import Link from "next/link";
import ContactFormModalButtonOne from "./components/UI/ContactFormModalButtonOne";
import type { Metadata } from "next";

const ScrollVelocityImages = dynamic(
  () => import("./components/animation/ClientLogoSlider").then((m) => ({ default: m.ScrollVelocityImages })),
  { loading: () => <div className="min-h-[120px] w-full" /> }
);

const HomePageSections = dynamic(() => import("./components/home/HomePageSections"), {
  loading: () => <div className="min-h-[800px]" />,
});

const MapAndLocationMatch = dynamic(
  () => import("./components/UI/MapAndLocationMatch"),
  { loading: () => <div className="min-h-[420px] w-full max-w-7xl" /> },
);

export const revalidate = 3600;

export const metadata: Metadata = {
  metadataBase: new URL("https://rankraze.us"),
  title: "Digital Marketing Agency in Texas | 2000+ Brands, 233K+ Leads — Rankraze",
  description: "Trusted by top brands across the US. We deliver SEO, PPC & social media that generates qualified leads. 340% avg ROI. Free strategy call today.",
  keywords: [
    "digital marketing agency in Texas",
    "digital marketing company in Texas",
    "Texas digital marketing services",
    "best digital marketing agency Texas",
    "top digital marketing company Texas",
    "online marketing services Texas",
    "SEO company in Texas",
    "social media marketing Texas",
    "Texas digital marketing experts",
    "internet marketing agency Texas",
  ],
  alternates: {
    canonical: "https://rankraze.us/",
  },
  openGraph: {
    title: "Digital Marketing Agency in Texas | Digital Marketing Company",
    description: "Rankraze Is a Digital Marketing Company in Texas. Our Passionate Team Is Working Towards Finding the Best Digital Marketing Services for SME Business.",
    url: "https://rankraze.us/",
    siteName: "Rankraze",
    images: [
      {
        url: "/business-consultant-mobile.webp",
        width: 846,
        height: 822,
        alt: "business-consultant-mobile.webp",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Texas | Digital Marketing Company",
    description: "Rankraze Is a Digital Marketing Company in Texas. Our Passionate Team Is Working Towards Finding the Best Digital Marketing Services for SME Business.",
    site: "@YourTwitterHandle",
    creator: "@YourTwitterHandle",
    images: ["/business-consultant-mobile.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function Home() {
  return (
    <>
      <section className="grid justify-items-center dark:bg-[var(--prim-dark-bg)] mt-20 px-4 md:px-6 overflow-hidden lg:px-10 text-[var(--text-black)] transition-colors duration-300">
        <div className="flex flex-col items-center justify-center w-full min-h-dvh">
          <div className="w-full h-2/3 flex flex-col items-center justify-center relative before:content-[''] before:absolute before:w-full before:h-full before:rounded-t-4xl before:rounded-bl-4xl before:bg-[linear-gradient(135deg,_#e8f5f2_0%,_#f5fffd_100%)] dark:before:bg-[linear-gradient(75deg,_#0D2244_5%,_#050d1a_25%,_#0D2244_100%)] dark:before:invert-0 before:-z-10">
            <div className="w-full h-full max-w-[1700px] flex flex-col md:flex-row items-center xl:px-24 2xl:px-36 relative">
              <div className="flex items-center justify-end w-full md:w-1/2 h-full max-w-xl py-9 md:py-0">
                <div className="flex flex-col items-start justify-center gap-2.5 md:gap-3 lg:gap-3.5 xl:gap-4 px-9">
                  <h3 className="capitalize dark:bg-[linear-gradient(132deg,_#3dbc9b_0%,_#37a7ff_100%)] dark:text-gray-50 text-xs text-gray-900 bg-[var(--primary-green)] py-1.5 px-2 rounded-lg">
                    #1 digital Marketing Company in Texas, US
                  </h3>
                  <h2 className="capitalize font-black text-xl text-left dark:text-gray-100">
                    a <TypingAnimationClient /> driven
                  </h2>
                  <h1 className="text-xl xl:text-4xl font-black dark:text-gray-100 inline leading-tight">
                    Rankraze - Build Digital Products That Actually Grow Businesses
                  </h1>
                  <p className="text-sm text-gray-500 dark:text-gray-400 font-medium leading-relaxed">
                    Rankraze Helps Startups and Growing Business Design, Develop, Market, and Scale Digital Products Through One Connected Systems.
                  </p>
                  <p className="text-sm text-gray-400 dark:text-gray-500 font-medium leading-relaxed">
                    From Websites and Software to SEO, AI, and Digital Marketing - We Combine Technology, Creativity, and Growth Strategy to Help Business Move Forward with Clarity
                  </p>
                  <div className="flex items-center justify-center gap-4">
                    <ContactFormModalButtonOne Button={"get free consultation"} Dark={true} />
                    <Link
                      href="/case-study"
                      rel="preload"
                      className="capitalize cursor-pointer outline-1 outline-[var(--primary-green)] rounded-sm px-2 text-center py-2.5 text-sm hover:bg-[var(--primary-green)] font-medium hover:text-white dark:text-white"
                    >
                      Our Case Study
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-center 2xl:justify-start max-w-full w-full md:w-1/2 h-full z-10 pl-3 md:pl-6 xl:pl-12 2xl:pl-16 relative">
                <BannerScrollBar />
              </div>
            </div>
          </div>
          <div className="w-full h-1/3 flex items-center justify-center mt-20 md:mt-16">
            <div className="flex flex-col h-full items-center justify-center w-full max-w-7xl">
              <h2 className="text-xl font-bold whitespace-normal max-w-96 text-center dark:text-gray-100">
                Trusted by{" "}
                <span className="relative z-0 text-white dark:text-[#050D1A] after:content-[''] after:absolute after:w-[calc(100%+8px)] after:h-[calc(100%+4px)] after:-skew-3 after:bg-[var(--primary-green)] dark:after:bg-gradient-to-r dark:after:from-[#22D3EE] dark:after:to-[#5EEAD4] after:-z-10 after:-top-0.5 after:-left-1">
                  2,000+
                </span>{" "}
                world-class brands and organizations of all sizes
              </h2>
              <div className="flex flex-col w-full max-w-[calc(100vw-34px)] h-full min-h-60 overflow-x-hidden mt-2.5 relative before:absolute before:content-[''] before:w-5 before:h-full before:left-0 before:top-0 before:z-10 before:bg-gradient-to-r before:from-[#ffffff] dark:before:from-[var(--prim-dark-bg)] before:to-transparent after:absolute after:content-[''] after:h-full after:w-5 after:right-0 after:top-0 after:z-10 after:bg-gradient-to-r after:from-transparent after:to-[#ffffff] dark:after:to-[var(--prim-dark-bg)]">
                <ScrollVelocityImages
                  images={[
                    [
                      "/brand-logo/Anna-University-1-1.webp",
                      "/brand-logo/appolo.webp",
                      "/brand-logo/Bajaj_Finserv_logo.webp",
                      "/brand-logo/Cars-india.webp",
                      "/brand-logo/Clearone-1-1.webp",
                      "/brand-logo/europe-1.webp",
                      "/brand-logo/IIT_Madras.webp",
                      "/brand-logo/irqs-2-1.webp",
                      "/brand-logo/Johnson-Lifts-LOGO.webp",
                      "/brand-logo/k-link.webp",
                      "/brand-logo/motilal-oswal-logo.webp",
                      "/brand-logo/mp-developers-1-1.webp",
                      "/brand-logo/murugappa.webp",
                      "/brand-logo/arunexcello.webp",
                    ],
                    [
                      "/brand-logo/NDTV-2.webp",
                      "/brand-logo/omkar-share-banner.webp",
                      "/brand-logo/pizza-hut.webp",
                      "/brand-logo/puruvankara-1.webp",
                      "/brand-logo/renault-nissan.webp",
                      "/brand-logo/shizen-energy.webp",
                      "/brand-logo/shriram-finance-logo.webp",
                      "/brand-logo/silkway.webp",
                      "/brand-logo/TAFE-Logo.webp",
                      "/brand-logo/tradeachievers_official-1.webp",
                      "/brand-logo/ttgroup_logo.webp",
                      "/brand-logo/virginia-tech.webp",
                      "/brand-logo/yagen-logo.webp",
                      "/brand-logo/mv_logo_full.webp",
                    ],
                  ]}
                  velocity={80}
                  numCopies={2}
                  imageSizes="108px"
                  imageQuality={55}
                  className="custom-scroll-text"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomePageSections />

      <section className="flex items-center justify-center flex-col dark:bg-none pt-2 pb-12 md:pb-16 text-[var(--text-black)] w-full px-6 md:px-8 lg:px-10">
        <MapAndLocationMatch />
      </section>
    </>
  );
}
