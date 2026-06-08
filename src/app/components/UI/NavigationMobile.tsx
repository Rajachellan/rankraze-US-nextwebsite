"use client";


import Link from "next/link";
import Image from "next/image";
import ThemeSwitch from "../ThemeSwitch";
import { usePathname } from "next/navigation";

import { useState } from "react";

export default function MobileNavigationBar () {
    const [menuButton, setMenuButton] = useState(false);
    
    type SubMenus = {
        service: boolean;
        portfolio: boolean;
        careers: boolean;
        geograph: boolean;
    };

    type ServicesGeoMenu = {
        digital: boolean,
        web: boolean,
        video: boolean,
        extend: boolean,
        ai: boolean,
        software: boolean,
        brand: boolean,
    }

    const pathName = usePathname();

    const [subMenus, setSubMenus] = useState<SubMenus>({
        service: false,
        portfolio: false,
        careers: false,
        geograph: false,
    });

    const [servicesGeoMenu, setServicesGeoMenu] = useState<ServicesGeoMenu> ({
        digital: false,
        web: false,
        video: false,
        extend: false,
        ai: false,
        software: false,
        brand: false,
    })

    const handleSetMenuButton = () => {
        setMenuButton(!menuButton)
        setServicesGeoMenu(() => {
            const newState: ServicesGeoMenu = {
                digital: false,
                web: false,
                brand: false,
                video: false,
                extend: false,
                software: false,
                ai: false,
            };
            return newState
        });

        setSubMenus(() => {
            const newState: SubMenus = {
            service: false,
            portfolio: false,
            careers: false,
            geograph: false,
            };
            return newState;
        });
    }

    const handleSubMenusClick = (menu: keyof SubMenus) => {
        setServicesGeoMenu(() => {
            const newState: ServicesGeoMenu = {
                digital: false,
                web: false,
                video: false,
                extend: false,
                software: false,
                brand: false,
                ai: false,
            };
            return newState
        });

        setSubMenus(prev => {
            const newState: SubMenus = {
            service: false,
            portfolio: false,
            careers: false,
            geograph: false,
            };

            newState[menu] = !prev[menu]; // toggle the clicked one
            return newState;
        });
    };

    const handleServicesGeoMenuClick = (menu: keyof ServicesGeoMenu) => {
        setServicesGeoMenu(prev => {
            const newState: ServicesGeoMenu = {
                digital: false,
                web: false,
                video: false,
                extend: false,
                ai: false,
                brand: false,
                software: false,
            };

            newState[menu] = !prev[menu];
            return newState
        });
    }

    return (
        <>
        <div className="w-full h-full flex items-center justify-between xl:hidden relative">
            <div className="p-1.5 cursor-pointer dark:invert dark:brightness-0">
                <Link href="/">
                <Image
               src="/rankraze-logo.webp"
                alt="Rankraze logo - home page"
                width={144}
                height={55}
                priority   
                sizes="(max-width: 768px) 144px, 144px"
                quality={65}
                className="w-36 dark:invert dark:brightness-0 h-auto"
                style={{ height: 'auto' }}/>
                          </Link>        
            </div>
            <div className="flex items-center justify-center gap-5 pl-4 pr-6">
                {/* <div className="sm:flex flex-col items-center justify-center p-1 hidden">
                    <ThemeSwitch />
                </div> */}
                <div className={`flex flex-col items-center h-6 w-6 cursor-pointer dark:invert brightness-0 ${menuButton ? 'justify-center' : 'justify-around'}`} 
                    onClick={() => handleSetMenuButton() }>
                    <div className={`w-6 h-1 bg-[var(--primary-blue)] rounded-full ${menuButton ? 'rotate-45 absolute' : ''} transform transition-all`}></div>
                    <div className={`w-6 h-1 bg-[var(--primary-blue)] rounded-full ${menuButton ? 'hidden' : ''} transform transition-all`}></div>
                    <div className={`w-6 h-1 bg-[var(--primary-blue)] rounded-full ${menuButton ? '-rotate-45 absolute' : ''} transform transition-all`}></div>
                </div>
            </div>
            {
                menuButton && (
                    <nav className="capitalize w-full px-1 pr-4 absolute top-full right-0 z-50 bg-white dark:bg-[var(--primary-green)] text-[var(--primary-blue)] dark:text-white shadow-md rounded-lg flip-in-hor-bottom">
                        <ul className="flex flex-col items-center justify-center text-sm text-left">
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                <Link href="/" className={`px-6 ${pathName === "/" ? "" : ""}`}>home</Link>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                <Link href="/about-rankraze-digital-marketing-agency" className={`px-6 ${pathName === "/about-rankraze-digital-marketing-agency" ? "" : ""}`}>About Us</Link>
                            </li>
                            <li className="w-full flex flex-col items-left justify-start">
                                <div className={`w-full flex items-left justify-start py-2 ${subMenus.service ? 'bg-[var(--primary-green)] text-white rounded-xs dark:bg-white dark:text-[var(--primary-blue)]' : ''}`} onClick={() => handleSubMenusClick("service")}>  
                                    <Link href="" className="pl-6 pr-2">services</Link>
                                    <i className={`ri-arrow-down-s-line ${subMenus.service ? '-rotate-90' : ''}`}></i>
                                </div>
                                <ul className={`${subMenus.service ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.digital ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("digital")}>  
                                            <Link href="" className="pl-6 pr-2">Digital Marketing services</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.digital ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        <ul className={`${servicesGeoMenu.digital ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/seo-services-in-texas" className={`px-6 ${pathName === "/seo-services-in-texas" ? "" : ""}`}>SEO Services in Texas</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/social-media-marketing-services-in-texas" className={`px-6 ${pathName === "/social-media-marketing-services-in-texas" ? "" : ""}`}>Social Media Marketing</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/content-writing-services-dallas" className={`px-6 ${pathName === "/content-writing-services-dallas" ? "" : ""}`}>Content Writing</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/ppc-management-services-in-dallas" className={`px-6 ${pathName === "/ppc-management-services-in-dallas" ? "" : ""}`}>PPC Management Services</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/online-reputation-management-services-in-texas" className={`px-6 ${pathName === "/online-reputation-management-services-in-texas" ? "" : ""}`}>Online Reputation Management</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/influencer-marketing" className={`px-6 ${pathName === "/influencer-marketing" ? "" : ""}`}>Influencer Marketing</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/vernacular-multilingual-marketing" className={`px-6 ${pathName === "/vernacular-multilingual-marketing" ? "" : ""}`}>Vernacular Multilingual Marketing</Link>
                                            </li>
                                             <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/email-marketing" className={`px-6 ${pathName === "/email-marketing" ? "" : ""}`}>Email Marketing</Link>
                                            </li>
                                            {/* <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="ai-search-optimization" className={`px-6 ${pathName === "ai-search-optimization" ? "" : ""}`}>AI search Optimization</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="social-commerce-optimization" className={`px-6 ${pathName === "social-commerce-optimization" ? "" : ""}`}>Social Commerce Optimization</Link>
                                            </li> */}
                                        </ul>
                                    </li>
                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.web ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("web")}>  
                                            <Link href="" className="pl-6 pr-2">web services</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.web ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        <ul className={`${servicesGeoMenu.web ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()} >
                                                <Link href="/web-designing" className="px-6">Web Designing</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()} >
                                                <Link href="/web-hosting" className="px-6">Web Hosting</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()} >
                                                <Link href="/mobile-app-development" className="px-6">Mobile App Development</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()} >
                                                <Link href="/web-analytic" className="px-6">Web Analytics</Link>
                                            </li>
                                            {/* <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()} >
                                                <Link href="e-commerce-website-development" className="px-6">E-Commerce Website Development</Link>
                                            </li> */}
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()} >
                                                <Link href="/react-js-development" className="px-6">ReactJs Development</Link>
                                            </li>
                                        </ul>
                                    </li>


                                    {/* Brand */}
                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.brand ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("brand")}>  
                                            <Link href="" className="pl-6 pr-2">Branding</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.brand ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        {/* <ul className={`${servicesGeoMenu.brand ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="brand-strategy-and-consultation" className={`px-6 ${pathName === "brand-strategy-and-consultation" ? "" : ""}`}>Brand Strategy And Consultation</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="logo-and-identity-design" className={`px-6 ${pathName === "logo-and-identity-design" ? "" : ""}`}>Logo and Identity Design</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="brand-guidelines-development" className={`px-6 ${pathName === "brand-guidelines-development" ? "" : ""}`}>Brand Guidelines Development</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="packaging-design" className={`px-6 ${pathName === "packaging-design" ? "" : ""}`}>Packaging Design</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="corporate-branding" className={`px-6 ${pathName === "corporate-branding" ? "" : ""}`}>Corporate Branding</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="digital-branding" className={`px-6 ${pathName === "digital-branding" ? "" : ""}`}>Digital Branding</Link>
                                            </li>
                                            
                                        </ul> */}
                                    </li>


                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.video ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("video")}>  
                                            <Link href="" className="pl-6 pr-2">video Production</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.video ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        <ul className={`${servicesGeoMenu.video ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/video-marketing" className="px-6">Video Marketing</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/video-production-services" className="px-6">Video Production Services</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="/2d-and-3d-animation-services-in-dallas" className="px-6">2D and 3D Animation</Link>
                                            </li>
                                            {/* <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                                <Link href="add-flim-making" className="px-6">AD Flim Making</Link>
                                            </li> */}
                                        </ul>
                                    </li>
                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.extend ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("extend")}>  
                                            <Link href="" className="pl-6 pr-2">Extended Reality</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.extend ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        <ul className={`${servicesGeoMenu.extend ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/virtual-reality-development-company-dallas" className="px-6">Virtual Reality Development</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/augmented-reality-development-in-texas" className="px-6">Augmented Reality Development</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.ai ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("ai")}>  
                                            <Link href="" className="pl-6 pr-2">AI services</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.ai ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        <ul className={`${servicesGeoMenu.ai ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/ai-consulting" className="px-6">AI consulting</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/computer-vision-services" className="px-6">computer vision services</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/natural-language-processing-services" className="px-6">natural language processing services</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/machine-learning-development-service" className="px-6">machine learning development services</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/custom-ai-solutions" className="px-6">custom AI Solutions</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/ai-powered-chatbot-services" className="px-6">AI-powered chatbot services</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/sentiment-analysis-services" className="px-6">Sentiment Analysis</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/future-ready-ai-solutions" className="px-6">Future Ready AI Solutions</Link>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* software development */}
                                    <li className="w-full flex flex-col items-left justify-start pt-0.5">
                                        <div className={`w-full flex items-left justify-start py-2 ${servicesGeoMenu.software ? 'bg-[var(--primary-green)] text-white rounded-xs' : ''}`} onClick={() => handleServicesGeoMenuClick("software")}>  
                                            <Link href="" className="pl-6 pr-2">software Development</Link>
                                            <i className={`ri-arrow-down-s-line ${servicesGeoMenu.software ? '-rotate-90' : ''}`}></i>
                                        </div>
                                        <ul className={`${servicesGeoMenu.software ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/restaurant-billing-software" className="px-6">POS Software Development</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/raze-mail" className="px-6">Raze Mail</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/crm-software-in-texas" className="px-6">skalelit CRM</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/lms-software-india" className="px-6">LMS Software</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/property-management-software" className="px-6">Property Management Software</Link>
                                            </li>
                                            {/* <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/hr-automation-process" className="px-6">Hr Automation Process</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/event-management" className="px-6">Event Management</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/lms" className="px-6">LMS</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/video-email-automation" className="px-6">Video Email Automation</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/response-handling-system" className="px-6">Response Handling System </Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/property-management-software" className="px-6">Property Management Software</Link>
                                            </li>
                                            <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/invoice-software" className="px-6">Invoice Software</Link>
                                            </li>
                                             <li className="w-full flex flex-col items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                                <Link href="/meeting-room-booking" className="px-6">Meeting Room Booking </Link>
                                            </li> */}
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                <Link href="/lms-software-india" className={`px-6 ${pathName === "/lms-software-india" ? "" : ""}`}>
                                    LMS Software
                                </Link>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                <Link href="/property-management-software" className={`px-6 ${pathName === "/property-management-software" ? "" : ""}`}>
                                    Property Management Software
                                </Link>
                            </li>
                            <li className="w-full flex flex-col items-left justify-start">
                                <div className={`w-full flex items-left justify-start py-2 ${subMenus.portfolio ? 'bg-[var(--primary-green)] text-white rounded-xs dark:bg-white dark:text-[var(--primary-blue)]' : ''}`} onClick={() => handleSubMenusClick("portfolio")}>  
                                    <Link href="" className="pl-6 pr-2">portfolio</Link>
                                    <i className={`ri-arrow-down-s-line ${subMenus.portfolio ? '-rotate-90' : ''}`}></i>
                                </div>
                                <ul className={`${subMenus.portfolio ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3`}>
                                    <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                        <Link href="/web-designing-portfolio" className="px-6">Website Portfolio</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                        <Link href="/social-media-marketing" className="px-6">Social Media Marketing portfolio</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                <Link href="/case-study" className="px-6" >case studies</Link>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                <Link href="/blogs" className="px-6">blogs</Link>
                            </li>
                            <li className="w-full flex flex-col items-left justify-start">
                                <div className={`w-full flex items-left justify-start py-2 ${subMenus.careers ? 'bg-[var(--primary-green)] text-white rounded-xs dark:bg-white dark:text-[var(--primary-blue)]' : ''}`} onClick={() => handleSubMenusClick("careers")}>  
                                    <Link href="/careers" className="pl-6 pr-2">careers</Link>
                                    <i className={`ri-arrow-down-s-line ${subMenus.careers ? '-rotate-90' : ''}`}></i>
                                </div>
                                <ul className={`${subMenus.careers ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex flex-col items-center justify-center text-sm text-left pl-3`}>
                                    <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                        <Link href="/internship" className="px-6">Internship</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton() }>
                                        <Link href="https://www.learnfella.com" className="px-6">E Learning</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full flex flex-col items-left justify-start">
                                <div className={`w-full flex items-left justify-start py-2 ${subMenus.geograph ? 'bg-[var(--primary-green)] text-white rounded-xs dark:bg-white dark:text-[var(--primary-blue)]' : ''}`} onClick={() => handleSubMenusClick("geograph")}>  
                                    <Link href="" className="pl-6 pr-2">geographics</Link>
                                    <i className={`ri-arrow-down-s-line ${subMenus.geograph ? '-rotate-90' : ''}`}></i>
                                </div>
                                <ul className={`${subMenus.geograph ? 'flex opacity-100 scale-in-ver-top' : 'hidden opacity-0 scale-out-ver-top'} flex-col items-center justify-center text-sm text-left pl-3 uppercase`}>
                                    <li className="w-full flex items-left justify-start py-2">
                                        <Link href="https://rankraze.us" className="px-6">us</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2">
                                        <Link href="https://rankraze.us" className="px-6">uk</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2">
                                        <Link href="https://rankraze.us.au" className="px-6">au</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2">
                                        <Link href="https://rankraze.fr" className="px-6">fr</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2">
                                        <Link href="https://rankraze.ae" className="px-6">ae</Link>
                                    </li>
                                    <li className="w-full flex items-left justify-start py-2">
                                        <Link href="https://rankraze.ca" className="px-6">ca</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                <Link href="/csr-activities" className="px-6">CSR activities</Link>
                            </li>
                            <li className="w-full flex items-left justify-start py-2" onClick={() => handleSetMenuButton()}>
                                <Link href="/contact-us" className="px-6">contact us</Link>
                            </li>
                        </ul>
                    </nav>
                )
            }
        </div>
        </>
    )
}