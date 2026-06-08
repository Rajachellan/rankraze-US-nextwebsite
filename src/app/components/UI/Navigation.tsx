import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";

import ContactFormModalButtonOne from "./ContactFormModalButtonOne";

export default function NavigationBar() {
    return (
        <>
            <div className="hidden w-full h-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 xl:flex items-center gap-3 2xl:gap-5">
                <div className="shrink-0 py-2">
                    <Link href="/"><Image src="/rankraze-logo.webp" alt="Rankraze logo - home page" width={144} height={55} priority sizes="(max-width: 768px) 144px, 144px" quality={65} className="w-32 2xl:w-36 dark:invert dark:brightness-0 h-auto" style={{ height: 'auto' }}/></Link>
                </div>
                <nav className="capitalize flex-1 min-w-0 flex items-center justify-center">
                    <ul className="flex items-center justify-center gap-x-1.5 2xl:gap-x-3 h-full font-medium text-[13px] 2xl:text-sm text-[var(--text-gray)] dark:text-white">
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center whitespace-nowrap">
                                <Link href="/" className="px-1 2xl:px-1.5">Home</Link>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center whitespace-nowrap">
                                <Link href="/about-rankraze-digital-marketing-agency" className="">About Us</Link>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1.5 items-center group/services relative">
                                <Link href="" className="">Services</Link>
                                <i className="ri-arrow-down-s-line text-xl group-hover/services:-rotate-180 transform duration-300"></i>
                                <ul className="absolute hidden top-full left-0 group-hover/services:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md z-10 transform translate-all delay-1000 scale-in-ver-top">
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/digital relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)] rounded-t-md">
                                        <Link href="" className="whitespace-nowrap px-5 py-3">
                                            Digital Marketing Services
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/digital:rotate-90 transform duration-300 px-3"></i>
                                        <ul className="absolute hidden top-0 left-full group-hover/digital:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/seo-services-in-texas" className="whitespace-nowrap px-5 py-3">
                                                    SEO Services in Texas
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/social-media-marketing-services-in-texas" className="whitespace-nowrap px-5 py-3">
                                                    Social Media Marketing
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/content-writing-services-dallas" className="whitespace-nowrap px-5 py-3">
                                                    Content Writing
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/ppc-management-services-in-dallas" className="whitespace-nowrap px-5 py-3">
                                                    PPC Management Services
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/online-reputation-management-services-in-texas" className="whitespace-nowrap px-5 py-3">
                                                    Online Reputation Management
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/influencer-marketing" className="whitespace-nowrap px-5 py-3">
                                                    Influencer Marketing
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/vernacular-multilingual-marketing" className="whitespace-nowrap px-5 py-3">
                                                    Vernacular Multilingual Marketing
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/email-marketing" className="whitespace-nowrap px-5 py-3">
                                                    Email Marketing
                                                </Link>
                                            </li>
                                            {/* <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="ai-search-optimization" className="whitespace-nowrap px-5 py-3">
                                                    AI Search Optimization
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="social-commerce-optimization" className="whitespace-nowrap px-5 py-3">
                                                    Social Commerce Optimization
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/web relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="" className="whitespace-nowrap px-5 py-3">
                                            Web Services
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/web:rotate-90 transform duration-300 px-3"></i>
                                        <ul className="absolute hidden top-0 left-full group-hover/web:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/web-designing" className="whitespace-nowrap px-5 py-3">
                                                    Web Designing
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/web-hosting" className="whitespace-nowrap px-5 py-3">
                                                    Web Hosting
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/mobile-app-development" className="whitespace-nowrap px-5 py-3">
                                                    Mobile App Development
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/web-analytic" className="whitespace-nowrap px-5 py-3">
                                                    Web Analytics
                                                </Link>
                                            </li>
                                            {/* <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="e-commerce-website-development" className="whitespace-nowrap px-5 py-3">
                                                    E-commerce Website Development
                                                </Link>
                                            </li> */}
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)] rounded-b-md">
                                                <Link href="/react-js-development" className="whitespace-nowrap px-5 py-3">
                                                    ReactJs Development
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/video relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="/branding" className="whitespace-nowrap px-5 py-3">
                                            Branding
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/video:rotate-90 transform duration-300 px-3"></i>
                                        {/* <ul className="absolute hidden top-0 left-full group-hover/video:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="brand-strategy-and-consultation" className="whitespace-nowrap px-5 py-3">
                                                    Brand Strategy and consulation
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="logo-and-identity-design" className="whitespace-nowrap px-5 py-3">
                                                    Logo and identity design
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="brand-guidelines-development" className="whitespace-nowrap px-5 py-3">
                                                    Brand guidelines development
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="packaging-design" className="whitespace-nowrap px-5 py-3">
                                                    Packaging design
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="corporate-branding" className="whitespace-nowrap px-5 py-3">
                                                    Corporate Branding
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="digital-branding" className="whitespace-nowrap px-5 py-3">
                                                    Digital Branding
                                                </Link>
                                            </li>
                                        </ul> */}
                                    </li>

                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/video relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="" className="whitespace-nowrap px-5 py-3">
                                            Video Productions
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/video:rotate-90 transform duration-300 px-3"></i>
                                        <ul className="absolute hidden top-0 left-full group-hover/video:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/video-marketing" className="whitespace-nowrap px-5 py-3">
                                                    Video Marketing
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/video-production-services" className="whitespace-nowrap px-5 py-3">
                                                    Video Production Services
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/2d-and-3d-animation-services-in-dallas" className="whitespace-nowrap px-5 py-3">
                                                    2D and 3D Animation
                                                </Link>
                                            </li>
                                            {/* <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="add-flim-making" className="whitespace-nowrap px-5 py-3">
                                                    AD Flim Making
                                                </Link>
                                            </li> */}
                                        </ul>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/extend relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="" className="whitespace-nowrap px-5 py-3">
                                            Extended Reality
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/extend:rotate-90 transform duration-300 px-3"></i>
                                        <ul className="absolute hidden top-0 left-full group-hover/extend:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/virtual-reality-development-company-dallas" className="whitespace-nowrap px-5 py-3">
                                                    Virtual Reality Development
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/augmented-reality-development-in-texas" className="whitespace-nowrap px-5 py-3">
                                                    Augmented Reality Development
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/ai relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="" className="whitespace-nowrap px-5 py-3">
                                            AI Services
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/ai:rotate-90 transform duration-300 px-3"></i>
                                        <ul className="absolute hidden top-0 left-full group-hover/ai:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/ai-consulting" className="whitespace-nowrap px-5 py-2">
                                                    AI Consulting
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/computer-vision-services" className="whitespace-nowrap px-5 py-2">
                                                    Computer Vision Services
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/natural-language-processing-services" className="whitespace-nowrap px-5 py-2">
                                                    Natural Language Processing Services
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/machine-learning-development-service" className="whitespace-nowrap px-5 py-2">
                                                    Machine Learning Development Services
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/custom-ai-solutions" className="whitespace-nowrap px-5 py-2">
                                                    Custom AI Solutions
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/ai-powered-chatbot-services" className="whitespace-nowrap px-5 py-2">
                                                    AI-Powered Chatbot Services
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/sentiment-analysis-services" className="whitespace-nowrap px-5 py-2">
                                                    Sentiment Analysis
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="future-ready-ai-solutions" className="whitespace-nowrap px-5 py-2">
                                                    Future Ready AI Solutions
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="w-full transform ease-in-out duration-700 flex items-center group/ai relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="/software-development" className="whitespace-nowrap px-5 py-3">
                                            software Development
                                        </Link>
                                        <i className="ri-arrow-right-s-line text-xl group-hover/ai:rotate-90 transform duration-300 px-3"></i>
                                        <ul className="absolute hidden top-0 left-full group-hover/ai:flex flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-20 transform translate-all delay-1000 scale-in-ver-top-delay">
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/restaurant-billing-software" className="whitespace-nowrap px-5 py-2">
                                                    POS Software Development
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/raze-mail" className="whitespace-nowrap px-5 py-2">
                                                    Raze Mail
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/crm-software-in-texas" className="whitespace-nowrap px-5 py-2">
                                                    skalelit CRM
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/lms-software-india" className="whitespace-nowrap px-5 py-2">
                                                    LMS Software
                                                </Link>
                                            </li>
                                            <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                                <Link href="/property-management-software" className="whitespace-nowrap px-5 py-2">
                                                    Property Management Software
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                </ul>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center group/portfolio relative">
                                <Link href="" className="">Portfolio</Link>
                                <i className="ri-arrow-down-s-line text-xl group-hover/portfolio:-rotate-180 transform duration-300"></i>
                                <ul className="absolute hidden top-0 left-0 group-hover/portfolio:flex group-hover/portfolio:top-full flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-10 transform translate-all delay-1000 scale-in-ver-top">
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="/web-designing-portfolio" className="whitespace-nowrap px-5 py-3">
                                            Website Portfolio
                                        </Link>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="/social-media-marketing" className="whitespace-nowrap px-5 py-3">
                                            Social Media Marketing Portfolio
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center whitespace-nowrap">
                                <Link href="/case-study" className="">Case Studies</Link>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center">
                                <Link href="/blogs" className="">Blogs</Link>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center group/careers relative">
                                <Link href="/careers" className="hover:text-[var(--primary-green)] transition duration-300">Careers
                                </Link>
                                <i className="ri-arrow-down-s-line text-xl group-hover/careers:-rotate-180 transform duration-300"></i>
                                <ul className="absolute hidden top-0 left-0 group-hover/careers:flex group-hover/careers:top-full flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md overflow-hidden z-10 transform translate-all delay-1000 scale-in-ver-top">
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="/internship" className="whitespace-nowrap px-5 py-3">
                                            Internship
                                        </Link>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="https://www.learnfella.com/" className="whitespace-nowrap px-5 py-3" target="_blank">
                                            E Learning
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center group/geograp relative">
                                <Link href="" className="">Geographics</Link>
                                <i className="ri-arrow-down-s-line text-xl group-hover/geograp:-rotate-180 transform duration-300"></i>
                                <ul className="absolute hidden top-0 left-0 group-hover/geograp:flex group-hover/geograp:top-full flex-col items-center justify-center bg-white dark:bg-[var(--primary-green)] rounded-md text-left drop-shadow-md z-10 transform translate-all delay-1000 scale-in-ver-top">
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white pl-5 pr-6 py-3 hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)] rounded-t-md">
                                        <a href="https://rankraze.us" className="whitespace-nowrap">
                                            US
                                        </a>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white pl-5 pr-6 py-3 hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="https://rankraze.us" className="whitespace-nowrap">
                                            UK
                                        </Link>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white pl-5 pr-6 py-3 hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="https://rankraze.us.au" className="whitespace-nowrap">
                                            AU
                                        </Link>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white pl-5 pr-6 py-3 hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="https://rankraze.fr" className="whitespace-nowrap">
                                            FR
                                        </Link>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white pl-5 pr-6 py-3 hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)]">
                                        <Link href="https://rankraze.ae" className="whitespace-nowrap">
                                            AE
                                        </Link>
                                    </li>
                                    <li className="w-full transform ease-in-out duration-700 flex items-center group relative text-[var(--text-gray)] dark:text-white pl-5 pr-6 py-3 hover:bg-[var(--primary-green)] hover:text-white dark:hover:bg-white dark:hover:text-[var(--text-gray)] rounded-b-md">
                                        <Link href="https://rankraze.ca" className="whitespace-nowrap">
                                            CA
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="h-full hover:text-[var(--primary-green)] transform ease-in-out duration-700 py-7 flex gap-1 items-center whitespace-nowrap">
                                <Link href="/csr-activities" className="">CSR</Link>
                            </li>
                        </ul>
                </nav>
                <div className="shrink-0 flex items-center gap-2 2xl:gap-3">
                    <ContactFormModalButtonOne Button={"Get Started"} Dark={true} />
                    {/* <Link
                        href="/contact-us"
                        className="hidden 2xl:inline-block text-sm font-medium text-[var(--text-gray)] dark:text-white hover:text-[var(--primary-green)] whitespace-nowrap transition-colors duration-300"
                    >
                        Contact Us
                    </Link> */}
                    <ThemeSwitch />
                </div>
            </div>
        </>
    )
}