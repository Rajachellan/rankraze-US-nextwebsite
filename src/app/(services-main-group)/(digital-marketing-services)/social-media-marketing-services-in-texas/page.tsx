import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";

export const metadata:Metadata = {
    title: "Social Media Marketing Agency in Texas | Social Media Services | SMO, SMM",
    description: "Rankraze, a leading Social Media Marketing Agency in Texas, helps you connect with a larger audience through social media marketing channels like Facebook, Twitter, LinkedIn, Instagram, etc. We are here to meet your digital marketing objectives.",
    keywords: [
        "social media ad agency",
        "social media advertising agencies",
        "social media agencies",
        "social media agency near me",
        "social media marketing agencies",
        "social media marketing agency in Texas",
        "social media marketing agency in USA",
        "social media marketing agency Texas",
        "social media marketing agency near me",
        "social media marketing and digital marketing",
        "social media marketing companies",
        "social media marketing companies Texas",
        "social media marketing companies near me",
        "social media marketing firm",
        "social media marketing in digital marketing"
    ],
                
    alternates: {
        canonical: "https://rankraze.us/social-media-marketing-services-in-texas",
    },

    openGraph: {
        title: "Social Media Marketing Agency in Texas | Social Media Services | SMO, SMM",
        description: "Rankraze, a leading Social Media Marketing Agency in Texas, helps you connect with a larger audience through social media marketing channels like Facebook, Twitter, LinkedIn, Instagram, etc. We are here to meet your digital marketing objectives.",
        url: "https://rankraze.us/social-media-marketing-services-in-texas",
        siteName: "Rankraze",
        images: [
        {
            url: "/upload/SMM-company-chennai.webp",
            width: 600,
            height: 500,
            alt: "Social media marketing in Texas",
            type: "image/webp"
        },
        ],
        locale: "en_US",
        type: "article",
    },
}

export default function page () {
    return (
        <>
        <section className="w-full grid place-items-center mt-24 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full grid place-items-center px-3 md:px-5 lg:px-8 xl:px-12 2xl:px-14 py-10 md:py-20 overflow-hidden relative rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl 2xl:rounded-4xl before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:[background-image:linear-gradient(to_bottom,#ffffff44,#ffffffbb,white),linear-gradient(to_right,#DAF2EC,#D0EBFB)] before:-z-10 dark:before:invert shadow-xs dark:shadow-white">
                <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-between gap-3.5 md:gap-0">
                    <div className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center gap-4 pl-2.5">
                        <h1 className="text-5xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                            Best Social Media Marketing Agency
                        </h1>
                        <p className="text-sm md:text-sm text-gray-700 dark:text-gray-300 text-center md:text-left pr-4">
                            Your next-generation marketing solution
                        </p>
                        <Link href={"https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1"} target="_blank" className="overflow-hidden capitalize text-sm text-white px-6 py-2.5 relative bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] rounded-lg">request quote</Link>
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col items-center justify-center py-2.5">
                        <ContactForm />
                    </div>
                </div>
                <div className="absolute flex items-end justify-start w-full h-full bottom-0 left-0 -z-10 opacity-100 dark:opacity-75 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-cover bg-bottom">
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-10 md:mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 px-4 md:px-6 lg:px-10 z-10">
                <h2 className="text-2xl md:text-4xl lg:text-4xl font-semibold text-center lg:text-left dark:text-gray-200">
                    Social Media Marketing
                </h2>
                <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-3.5 text-[var(--primary-blue)] dark:text-[var(--primary-green)]">
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <i className="ri-megaphone-fill text-2xl md:text-4xl"></i>
                        <h3 className="text-sm md:text-sm font-medium md:px-0 px-2.5 lg:px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            3.5 billion people use social media daily
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <i className="ri-group-fill text-2xl md:text-4xl"></i>
                        <h3 className="text-sm md:text-sm font-medium md:px-0 px-2.5 lg:px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            3.5 billion people use social media daily
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <i className="ri-smartphone-line text-2xl md:text-4xl"></i>
                        <h3 className="text-sm md:text-sm font-medium md:px-0 px-2.5 lg:px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            91% of social media users access via mobile phones
                        </h3>
                    </div>
                    <div className="w-full flex flex-col items-center justify-start px-2 py-3.5 md:px-5 md:py-6 gap-3.5">
                        <i className="ri-facebook-circle-fill text-2xl md:text-4xl"></i>
                        <h3 className="text-sm md:text-sm font-medium md:px-0 px-2.5 lg:px-2.5 dark:text-gray-300 text-gray-500 text-center leading-tight">
                            An average person spends 3 hours on social media everyday
                        </h3>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h3 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Why Rankraze – SMM Company in Texas, USA
                    </h3>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Social Media is the new-generation platform to connect with friends, share pictures, videos, documents, and build new relationships.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        About 3.5 billion people use Social Media every day for different purposes. People use it to gain information, for entertainment, to share their everyday life with friends, and to connect with people.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Everyone has a distinctive purpose to be on social media. But they all have one thing in common. That is: They are your potential customers. Social media is the best way to reach your customers, to stay up-to-date with them and their needs.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        A quote by Bill Gates goes like this, “If your business is not on the internet, then your business will be out of business.” And the best way to stay in business is to have a strong online presence, especially on social media platforms.
                    </p>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/SMM-company-chennai.webp"}
                    alt="social media marketing services in Texas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center dark:bg-none mt-10 text-[var(--text-black)] gap-4 w-full max-w-5xl p-6 md:p-8 lg:p-10 mb-2.5 bg-[#c7ffdf] rounded-2xl relative before:content-[''] before:w-full before:h-full before:absolute before:bg-[url('/upload/background-style.webp')] before:bg-cover before:bg-no-repeat before:opacity-45 before:rounded-2xl before:bg-center before:z-0">
                <div className="w-full md:w-2/3 flex flex-col z-10 gap-2.5">
                <h3 className="text-2xl md:text-4xl text-gray-800 text-center md:text-left font-bold z-10">
                    Explore Our Portfolio
                </h3>
                <p className="text-[10px] md:text-sm lg:text-sm text-gray-600 text-center md:text-left tracking-tight md:tracking-tight">
                    See how we’ve helped businesses like yours succeed.
                </p>
                </div>
                <div className="w-full md:w-1/3 flex items-center justify-center z-10">
                <Link href="" className="text-sm md:text-sm xl:text-base text-white font-semibold px-3.5 py-2.5 rounded-md relative before:content-[''] before:absolute before:w-full before:h-full before:bg-linear-to-br before:from-[#3DBC9C] before:to-[#37A8F9] before:top-0 before:left-0 before:rounded-md hover:before: before:-z-10 hover:before:from-[#37A8F9] hover:before:to-[#3DBC9C]">
                    View Portfolio
                </Link>
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5 pl-2.5">
                    <h2 className="text-2xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                        Why does your brand need a social presence?
                    </h2>
                    <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-justify md:text-left text-sm md:text-base max-w-5xl">
                        About 73% of marketers believe that Social Media Marketing has been highly effective compared to other marketing platforms. Having a strong online presence is the main factor in getting real conversions via these social media platforms.
                    </p>
                    <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-justify md:text-left text-sm md:text-base max-w-5xl">
                        When an ad campaign is run across any media platform, the first thing that people do is to stop by your page. Your company/ brand’s social profile is what makes people take the next step. Having a strong social media presence helps your business in:
                    </p>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Brand Awareness
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Increases Brand Authority
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Ensures trust factor
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Connect & Engage with your target audience
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Understand your customers’ needs better
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Show Authenticity & Authority
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Provide instant support
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Grow affordably
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl bg-[url('/upload/SEO-image3-scaled.webp')] bg-no-repeat bg-cover bg-center relative before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#00000090] overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-10 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl lg:text-4xl text-white font-semibold text-center lg:text-left">
                    Our Social Media Marketing Services
                </h2>
                <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-3 lg:gap-4 xl:gap-5 max-w-sm md:max-w-none">
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/SMM-image.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Social Media Optimization (SMO)</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify md:text-left px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            A lot of brands and companies have an account on every social media platform but they don’t get the expected traffic from social media or get any conversions. This is because of non-optimized social profiles and content. Optimizing for social media is completely different from optimizing a website. When you think about all of this, it is very easy to feel overwhelmed.
                        </p>
                        <p className="text-sm md:text-base font-medium text-justify md:text-left px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            That is why Rankraze is there to help you with all your needs. Our Social Media Marketing team will completely take care of optimizing all your social media profiles. It doesn’t matter if you’ve had an account for a very long time or if you’ve just started one. We know the exact optimizing strategy that will work for you and your business. Social Media Optimization and Engaging Content Creation are the two most important factors to gain organic reach and drive traffic organically. Having a well-optimized social page and content makes you look more professional, drives more visibility from your target audience, and establishes you as an authority in the subject matter.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 bg-white rounded-xl gap-5">
                        <div className="w-full flex items-center justify-center gap-2">
                            <Image 
                            src={"/icons/SMO-image.png"}
                            alt="seo and video marketing icon"
                            width={100} height={100}
                            className="w-1/5"
                            />
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2">Social Media Marketing (SMM)</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            There are always thousands of content posted under each category, hashtag, topic, etc., every passing hour. To reach a wider audience and to drive traffic and conversions, sometimes organic methods won’t be very effective. That is when a business takes the step of running effective ads via social media.
                        </p>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Running an ad on social media is cost-effective and it also gives an opportunity to learn more about your target audience personally.
                        </p>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            A person’s social profile reveals a lot about them. It helps you understand their personality, likes & dislikes, etc. Understanding your customers is very important for any business if you want to offer products and services that would be useful to them.
                        </p>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            Our Social Media Marketing team of experts is there to make this step completely simple for your business and your needs. We define a specific goal for each ad campaign that you want to run on any social media platform and we will give you the results that you’re looking for.
                        </p>
                        <p className="text-sm md:text-base font-medium text-justify px-2.5 md:px-3.5 pb-3.5 text-gray-700">
                            We have years of experience working with many different brands and businesses. We know where your target audience is and how to make your content visible to them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 relative">
            <div className="w-full max-w-7xl flex flex-col md:flex-row items-stretch justify-center">
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center gap-3 md:gap-3.5 p-2.5">
                    <h2 className="text-4xl xl:text-[42px] font-semibold text-center md:text-left capitalize dark:text-gray-200 pr-4">
                        Social Media Platforms we focus on
                    </h2>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        Being one of the leading social media marketing companies in Texas, USA we focus on giving you the highest possible reach across all the leading social media platforms. Do you know that over 2 million businesses today use Facebook advertising for promoting their products and services? That’s how powerful social media marketing is for businesses.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        We offer Social Media Optimization and Social Media Marketing (Organic & Paid) across all the leading platforms. The top most used social platforms are our primary focus. But, if you want your presence on other social media platforms as well, we are always there to help you and make your work easy.
                    </p>
                    <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-justify text-sm md:text-base">
                        To understand which social media platform your potential customers spend most of their time on and to know what they expect from you, you need to be where they are. That is why we take the top most used social media platforms into account and increase your presence in them. Running ads and creating engaging, relatable content for your target audience in the most popular platforms is the key to be successful in social media marketing.
                    </p>
                    <div className="w-full flex items-center justify-center gap-6 md:gap-10">
                        <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                            <h3 className="text-base md:text-lg dark:text-gray-300 font-bold">
                                Social Media Platforms we focus on
                            </h3>
                            <div className="w-full md:w-1/2 px-2.5">
                                <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Facebook
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Twitter
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Instagram
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            LinkedIn
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            YouTube
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Pinterest
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="w-1/2 flex flex-col items-start justify-start gap-2">
                            <h3 className="text-base md:text-lg dark:text-gray-300 font-bold">
                                We also offer marketing across a few other platforms:
                            </h3>
                            <div className="w-full md:w-1/2 px-2.5">
                                <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            Quora
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <i className="ri-arrow-right-double-line text-lg text-[var(--primary-green)]"></i>
                                        <span className="">
                                            TikTok, etc.
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 overflow-hidden flex items-center justify-center px-4 py-2.5 rounded-md">
                    <Image 
                    src={"/upload/Our-services-include-platforms-such-as-insta.webp"}
                    alt="social media marketing services in Texas"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
            <div className="w-full max-w-7xl flex flex-col md:flex-row-reverse items-center justify-center gap-6 px-4 md:px-6 lg:px-10 mt-8 md:mt-10">
                <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-5 pl-2.5">
                    <p className="text-gray-700 dark:text-gray-100 leading-relaxed text-justify md:text-left text-sm md:text-base max-w-5xl">
                        When an ad campaign is run across any media platform, the first thing that people do is to stop by your page. Your company/ brand’s social profile is what makes people take the next step. Having a strong social media presence helps your business:
                    </p>
                    <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                        <li className="flex items-start gap-2">
                            <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Our years of experience in digital marketing, our social media marketing experts, and our clientele of varied backgrounds give us the advantage to learn more every day and get better at the work we do.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We offer you complete support and we connect with you in a way that you’ll feel like we’re the cool work friend you have in the next room.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                We have clients from many countries, and working with us will take away all your stress about marketing.
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                            <span className="">
                                Relax and focus on your business while we focus on making you famous and reaching greater heights.
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="w-full md:w-1/2 px-2.5 md:px-4 lg:px-6 2xl:px-8">
                    <Image 
                    src={"/upload/SMM-image3.webp"}
                    alt="SMM-image"
                    width={800} height={600} layout="responsive"
                    objectFit="cover"          
                    className="rounded-xl dark:grayscale-25"                                 
                    />
                </div>
            </div>
        </section>
        <section className="w-full grid place-items-center mt-20 text-[var(--text-black)] gap-6 md:gap-12 lg:gap-14 xl:gap-16 rounded-xl md:rounded-4xl overflow-hidden">
            <div className="w-full max-w-7xl flex flex-col items-center justify-center gap-6 md:gap-10 px-4 md:px-6 lg:px-10 my-20 z-10">
                <h2 className="text-2xl md:text-4xl lg:text-4xl dark:text-gray-200 font-semibold text-center lg:text-left">
                    Our services include platforms such as
                </h2>
                <div className="flex gap-2.5 md:gap-3.5 xl:gap-5">
                    <i className="ri-facebook-circle-fill text-2xl md:text-4xl lg:text-4xl text-[#1877F2] dark:text-white"></i>
                    <i className="ri-twitter-x-fill text-2xl md:text-4xl lg:text-4xl dark:text-white"></i>
                    <i className="ri-youtube-fill text-2xl md:text-4xl lg:text-4xl text-[#FF0000] dark:text-white"></i>
                    <i className="ri-linkedin-box-fill text-2xl md:text-4xl lg:text-4xl text-[#0A66C2] dark:text-white"></i>
                    <i className="ri-instagram-fill text-2xl md:text-4xl lg:text-4xl bg-[linear-gradient(45deg,_#405DE6,_#833AB4,_#E1306C,_#FD1D1D,_#F77737,_#FCAF45)] text-transparent dark:text-white bg-clip-text"></i>
                </div>
                <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4 md:gap-3 lg:gap-4 xl:gap-5 max-w-sm md:max-w-none">
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 shadow-md shadow-gray-300 dark:shadow-gray-700">
                        <div className="w-full flex items-center justify-center gap-2">
                            <i className="ri-medal-line text-3xl lg:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-center">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">What makes Rankraze the best SMM Company</p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base font-medium text-justify md:text-left px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            We, at Rankraze, offer you a one-stop solution for all your digital marketing needs. Being one of the leading digital marketing agencies in Texas, USA, we always provide you with nothing but the best.
                        </p>
                        <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    Our years of experience in digital marketing, our social media marketing experts, and our clientele of varied backgrounds give us the advantage to learn more every day and get better at the work we do.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    We offer you complete support and we connect with you in a way that you’ll feel like we’re the cool work friend you have in the next room.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    We have clients from many countries, and working with us will take away all your stress about marketing.
                                </span>
                            </li>
                        </ul>
                        <p className="text-sm md:text-base font-medium text-justify md:text-left px-2.5 md:px-3.5 pb-3.5 text-gray-700 dark:text-gray-400">
                            Relax and focus on your business while we focus on making you famous and reaching greater heights.
                        </p>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start px-5 py-6 rounded-xl gap-5 border border-gray-200 shadow-md shadow-gray-300 dark:shadow-gray-700">
                        <div className="w-full flex items-center justify-center gap-2">
                            <i className="ri-customer-service-2-line text-3xl lg:text-5xl text-[var(--primary-green)]"></i>
                            <div className="w-4/5 flex items-center justify-start">
                                <p className="text-base md:text-lg xl:text-xl font-medium leading-tight w-fit pl-2 dark:text-gray-200">Our services include</p>
                            </div>
                        </div>
                        <ul className="pl-8 flex flex-col gap-1.5 md:gap-2 list-disc marker:text-[var(--primary-green)] text-gray-700 dark:text-gray-300 leading-relaxed">
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    <span className="font-bold">Social media strategy development:</span> We’ll work with you to understand your business objectives and target audience, and then create a customized social media strategy that aligns with your overall marketing plan.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    <span className="font-bold">Content creation:</span> From crafting compelling social media posts to designing eye-catching graphics, our team can help you create engaging content that resonates with your audience and drives results.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    <span className="font-bold">Social media advertising:</span> We can help you create and manage targeted social media advertising campaigns to reach a larger audience and drive traffic to your website.
                                </span>
                            </li>
                            <li className="flex items-start gap-2">
                                <i className="ri-share-forward-line text-lg text-[var(--primary-green)]"></i>
                                <span className="">
                                    <span className="font-bold">Social media management:</span> Our team can handle all aspects of your social media presence, including scheduling and publishing content, interacting with followers, and analyzing the results of your campaigns.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}