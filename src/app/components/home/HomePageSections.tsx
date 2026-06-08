"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Eye,
  Target,
  Layers,
  Monitor,
  Globe,
  BarChart3,
  Clapperboard,
  Glasses,
  Headset,
  Search,
  Palette,
  Cpu,
  Link2,
  TrendingUp,
  Wrench,
  Handshake,
  Network,
  Paintbrush,
  Rocket,
  Lightbulb,
  MonitorSmartphone,
  Users,
  ArrowRight,
  SearchCheck,
  Hammer,
  Sprout,
  LineChart,
  Check,
} from "lucide-react";
import ContactFormModalButtonOne from "../UI/ContactFormModalButtonOne";
import {
  fadeUp,
  fadeLeft,
  fadeRight,
  scaleIn,
  staggerContainer,
  viewportOnce,
  easeTransition,
  springTransition,
} from "./motion";
import SectionBadge from "./SectionBadge";
import {
  SectionShell,
  SectionHeader,
  ShimmerStyles,
  HoverCard,
  TagPill,
  IconBox,
  GradientIconBox,
  UkServiceCard,
  UkWhyCard,
} from "./ukDesign";

// ─── About ────────────────────────────────────────────────────
const aboutPoints = [
  {
    num: "01",
    icon: Eye,
    title: "Visibility Matters",
    desc: "A website without visibility struggles to attract traffic, generate leads, and support sustainable business growth.",
  },
  {
    num: "02",
    icon: Target,
    title: "Positioning Drives Growth",
    desc: "Marketing without clear positioning wastes budget, weakens messaging, and reduces campaign performance.",
  },
  {
    num: "03",
    icon: Layers,
    title: "Strategy Creates Consistency",
    desc: "Design without strategy creates inconsistency across platforms and weakens long-term brand trust.",
  },
];

function AboutSection() {
  return (
    <SectionShell variant="white">
      <SectionHeader
        badge="About Rankraze"
        title={
          <>
            Most Businesses Don&apos;t Need More Services{" "}
            <em className="not-italic text-[#3cba99]">They Need Better Digital Systems</em>
          </>
        }
        subtitle="Many companies invest in websites, marketing, branding, or software separately without creating a clear connection between them. As a result, campaigns lose consistency, customer experiences become fragmented, and growth becomes difficult to sustain long-term."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {aboutPoints.map((point) => (
          <HoverCard key={point.num} className="p-8">
            <span className="absolute top-7 right-8 font-['Sora'] text-[52px] font-extrabold text-[rgba(60,186,153,0.08)] leading-none select-none pointer-events-none group-hover:text-[rgba(60,186,153,0.14)] transition-colors duration-[280ms]">
              {point.num}
            </span>
            <IconBox size="md" className="mb-5">
              <point.icon size={22} strokeWidth={2} className="text-[#3cba99] group-hover:text-white transition-colors duration-[250ms]" />
            </IconBox>
            <h3 className="relative z-10 font-['Sora'] text-[18px] font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.28] mb-3">
              {point.title}
            </h3>
            <p className="relative z-10 text-[14.5px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.78]">
              {point.desc}
            </p>
          </HoverCard>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ ...easeTransition, delay: 0.2 }}
        className="mt-10 max-w-[760px] mx-auto"
      >
        <p className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] text-center px-5 py-4 rounded-2xl bg-[#f4fcf9] dark:bg-[#0A1628]/40 border border-[#e8f2ef] dark:border-white/10">
          Instead of treating development, marketing, and creative as separate departments, we build connected systems where every part works together strategically. That&apos;s what helps businesses scale sustainably with stronger digital foundations, better visibility, and long-term growth. That&apos;s how modern businesses build connected digital ecosystems that improve customer experience, strengthen brand presence, and support scalable long-term growth.
        </p>
      </motion.div>
    </SectionShell>
  );
}

// ─── Services ─────────────────────────────────────────────────
const mainServices = [
  {
    icon: Monitor,
    title: "Software Development",
    desc: "We develop custom software solutions tailored to business operations, automation, scalability, and long-term digital growth.",
    tags: ["CRM Systems", "SaaS Platforms", "Automation Systems", "Customer Portals", "Dashboard Systems", "Workflow Tools"],
    href: "/software-development",
  },
  {
    icon: Globe,
    title: "Web Development",
    desc: "We create modern websites and web applications designed with performance, usability, business strategy, and customer experience in mind.",
    tags: ["Business Websites", "Corporate Websites", "eCommerce", "Landing Pages", "Portfolio Sites", "Web Apps"],
    href: "/web-designing",
  },
  {
    icon: BarChart3,
    title: "Digital Marketing",
    desc: "Structured marketing systems designed to improve visibility, audience targeting, engagement, and measurable long-term growth.",
    tags: ["SEO", "Paid Ads", "Content Marketing", "Social Media", "Conversion Optimisation", "Brand Positioning"],
    href: "/seo-services-in-texas",
  },
  {
    icon: Clapperboard,
    title: "Video Marketing",
    desc: "Video content has become one of the most powerful forms of communication in the digital world. Customers engage with visual storytelling faster than traditional static content. At Rankraze, we create video marketing content designed to improve engagement, visibility, and audience connection.",
    tags: ["Promotional Videos", "Brand Videos", "Product Showcases", "Corporate Presentations", "Social Media Ads", "Motion Graphics", "Marketing Visuals"],
    href: "/video-marketing",
  },
  {
    icon: Glasses,
    title: "AR Development",
    desc: "Augmented Reality allows businesses to create more interactive digital experiences for customers and audiences. At Rankraze, we develop AR solutions designed to improve engagement and digital interaction.",
    tags: ["Production Visualization", "Interactive Marketing Experiences", "Educational Tools", "Digital Product Demonstrations", "Customer Engagement Systems"],
    href: "/augmented-reality-development-in-texas",
  },
  {
    icon: Headset,
    title: "VR Development",
    desc: "Virtual Reality creates fully immersive digital environments that support engagement, training, education, and simulation. Our VR development services focus on building experiences tailored to specific business goals and industries.",
    tags: ["Training Environment", "Virtual Walkthroughs", "Simulation", "Product Demonstrations", "Educational Experience"],
    href: "/virtual-reality-development-company-dallas",
  },
];

const compactServices = [
  {
    icon: Search,
    title: "SEO Services",
    desc: "Search optimisation strategies focused on improving rankings, visibility, traffic quality, and digital authority.",
    href: "/seo-services-in-texas",
  },
  {
    icon: Palette,
    title: "Graphic Designing",
    desc: "Modern branding and visual communication systems that strengthen recognition, engagement, and digital consistency.",
    href: "/branding",
  },
  {
    icon: Cpu,
    title: "AI Services",
    desc: "Intelligent AI-powered systems and automation solutions designed to improve workflows, customer support, and operational efficiency.",
    href: "/ai-consulting",
  },
];

function ServicesSection() {
  return (
    <SectionShell variant="white">
      <SectionHeader
        badge="Our Services"
        title="Digital Services Built Around Growth"
        subtitle="At Rankraze, we build digital products and services designed to support practical business goals. Every service is connected strategically so businesses can grow with stronger digital foundations instead of fragmented systems."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {mainServices.map((service) => (
          <UkServiceCard key={service.title} variants={scaleIn}>
            <div className="relative z-10 mb-5">
              <GradientIconBox size="md">
                <service.icon size={24} strokeWidth={2} className="text-white" />
              </GradientIconBox>
            </div>
            <h3 className="relative z-10 font-['Sora'] text-[18px] font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-3">
              {service.title}
            </h3>
            <p className="relative z-10 text-[14.5px] text-[#5a6b66] dark:text-[#94B4D4] leading-[1.78] mb-5">
              {service.desc}
            </p>
            <div className="relative z-10 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
          </UkServiceCard>
        ))}
      </motion.div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6"
      >
        {compactServices.map((service) => (
          <UkServiceCard key={service.title}>
            <div className="relative z-10 mb-4">
              <GradientIconBox size="sm">
                <service.icon size={20} strokeWidth={2} className="text-white" />
              </GradientIconBox>
            </div>
            <h3 className="relative z-10 font-['Sora'] text-base font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-2">
              {service.title}
            </h3>
            <p className="relative z-10 text-[14px] text-[#5a6b66] dark:text-[#94B4D4] leading-[1.72] mb-4">
              {service.desc}
            </p>
            <Link
              href={service.href}
              className="relative z-10 inline-flex items-center gap-1.5 text-sm font-semibold text-[#3cba99] hover:gap-2.5 transition-all"
            >
              Explore <ArrowRight size={14} />
            </Link>
          </UkServiceCard>
        ))}
      </motion.div>
    </SectionShell>
  );
}

// ─── Why Choose Us ────────────────────────────────────────────
const whyChooseItems = [
  { icon: Link2, title: "Connected Thinking", desc: "We connect development, marketing, branding, and technology strategically." },
  { icon: TrendingUp, title: "Long-Term Growth", desc: "Sustainable digital systems designed beyond short-term marketing tactics." },
  { icon: Wrench, title: "Practical Execution", desc: "Clear communication, structured workflows, and practical strategies." },
  { icon: Handshake, title: "Flexible Collaboration", desc: "Every business is different, so our approach adapts to your goals and stage." },
];

function WhyChooseSection() {
  return (
    <SectionShell variant="white">
      <SectionHeader
        badge="Why Choose Us"
        title={
          <>
            Why Businesses Choose{" "}
            <em className="not-italic text-[#3cba99]">Rankraze</em>
          </>
        }
        subtitle="We combine technology, creativity, strategy, and execution into one connected digital ecosystem designed for practical and sustainable business growth."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
      >
        {whyChooseItems.map((item, i) => (
          <UkWhyCard
            key={item.title}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
            gradientIndex={i}
            variants={i % 2 === 0 ? fadeLeft : fadeRight}
          />
        ))}
      </motion.div>
    </SectionShell>
  );
}

// ─── Process (horizontal step cards) ────────────────────────
const processSteps = [
  {
    num: "01",
    tag: "STEP 01",
    icon: SearchCheck,
    title: "Understand",
    desc: "We go beyond surface-level metrics and understand the real drivers behind growth.",
    bullets: ["Revenue drivers", "Customer behavior", "Decision triggers"],
  },
  {
    num: "02",
    tag: "STEP 02",
    icon: Hammer,
    title: "Build",
    desc: "We create the digital foundation — websites, software, branding, and systems designed for growth.",
    bullets: ["Acquisition channels", "Conversion paths", "Retention opportunities"],
  },
  {
    num: "03",
    tag: "STEP 03",
    icon: Sprout,
    title: "Grow",
    desc: "We improve visibility through SEO, content strategy, paid campaigns, and digital marketing.",
    bullets: ["Repeatable frameworks", "Automated workflows", "Scalable campaigns"],
  },
  {
    num: "04",
    tag: "STEP 04",
    icon: LineChart,
    title: "Improve",
    desc: "We continuously optimise performance based on real user behavior and data.",
    bullets: ["Campaign optimization", "Messaging refinement", "Audience targeting"],
  },
];

function ProcessSection() {
  return (
    <SectionShell variant="white">
      <SectionHeader
        badge="Process"
        title="How We Work"
        subtitle="Our process focuses on building connected systems that improve visibility, customer experience, and scalable digital growth."
      />

      {/* Desktop horizontal step indicator */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={easeTransition}
        className="hidden lg:flex items-center justify-between mb-10 px-4"
      >
        {processSteps.map((step, i) => (
          <div key={step.num} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2 min-w-[80px]">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#5fe0c2] to-[#2a9d82] flex items-center justify-center font-['Sora'] text-sm font-extrabold text-white shadow-[0_6px_18px_rgba(60,186,153,0.3)]">
                {step.num}
              </div>
              <span className="font-['Sora'] text-xs font-bold text-[#0a2218] dark:text-[#E2EEFF]">
                {step.title}
              </span>
            </div>
            {i < processSteps.length - 1 && (
              <div className="flex-1 h-[2px] mx-3 bg-gradient-to-r from-[#3cba99] to-[#c8ede4] rounded-full" />
            )}
          </div>
        ))}
      </motion.div>

      {/* Step cards */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5"
      >
        {processSteps.map((step, i) => (
          <UkServiceCard key={step.num} variants={fadeUp}>
            <div className="relative z-10 flex items-center justify-between mb-5">
              <GradientIconBox gradientIndex={i} size="md">
                <step.icon size={22} strokeWidth={2} className="text-white" />
              </GradientIconBox>
              <span className="font-['Sora'] text-[28px] font-extrabold text-[rgba(60,186,153,0.12)] leading-none">
                {step.num}
              </span>
            </div>
            <span className="relative z-10 inline-block font-['Sora'] text-[10px] font-bold tracking-[0.09em] uppercase text-[#0f6e56] dark:text-[#3CBA99] bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] border border-[rgba(60,186,153,0.25)] rounded-full px-3 py-1 mb-3">
              {step.tag}
            </span>
            <h3 className="relative z-10 font-['Sora'] text-[17px] font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-2">
              {step.title}
            </h3>
            <p className="relative z-10 text-[13.5px] text-[#5a6b66] dark:text-[#94B4D4] leading-[1.72] mb-4">
              {step.desc}
            </p>
            <ul className="relative z-10 space-y-2">
              {step.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-2 text-[13px] text-[#1c3d34] dark:text-gray-300">
                  <Check size={14} strokeWidth={2.5} className="text-[#3cba99] shrink-0 mt-0.5" />
                  {bullet}
                </li>
              ))}
            </ul>
          </UkServiceCard>
        ))}
      </motion.div>
    </SectionShell>
  );
}

// ─── Connected Growth ─────────────────────────────────────────
const growthPillars = [
  { icon: Network, title: "Connected Systems", desc: "Every digital component works together strategically for sustainable growth." },
  { icon: BarChart3, title: "Better Visibility", desc: "Stronger visibility improves trust, reach, and long-term customer growth." },
  { icon: Paintbrush, title: "Brand Consistency", desc: "Unified branding creates stronger customer experience and trust." },
  { icon: Rocket, title: "Long-Term Growth", desc: "Scalable systems designed to support sustainable business expansion." },
];

function ConnectedGrowthSection() {
  return (
    <SectionShell variant="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={easeTransition}
        >
          <SectionHeader
            badge="Connected Digital Growth"
            title={
              <>
                We Believe Digital Growth{" "}
                <em className="not-italic text-[#3cba99]">Should Feel Connected</em>
              </>
            }
            centered={false}
          />
          <div className="space-y-4 -mt-6">
            {[
              "Today, businesses don't grow through isolated tools alone. Your website, branding, marketing, software, content, and customer experience all influence each other.",
              "If one part becomes weak, the entire system suffers. That's why Rankraze focuses on building connected digital products instead of disconnected services.",
              "The goal isn't simply to launch something online. The goal is to create systems that continue supporting business growth over time.",
            ].map((text) => (
              <p key={text} className="text-[15px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82]">
                {text}
              </p>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {growthPillars.map((pillar, i) => (
            <UkServiceCard key={pillar.title} variants={scaleIn} className="p-6">
              <GradientIconBox size="sm" gradientIndex={i} className="mb-4">
                <pillar.icon size={18} strokeWidth={2} className="text-white" />
              </GradientIconBox>
              <h3 className="relative z-10 font-['Sora'] text-sm font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-2">
                {pillar.title}
              </h3>
              <p className="relative z-10 text-[13px] text-[#5a6b66] dark:text-[#94B4D4] leading-[1.72]">
                {pillar.desc}
              </p>
            </UkServiceCard>
          ))}
        </motion.div>
      </div>
    </SectionShell>
  );
}

// ─── Who We Work With ─────────────────────────────────────────
const audienceItems = [
  { icon: Rocket, label: "Launch digital products" },
  { icon: Lightbulb, label: "Improve online visibility" },
  { icon: Users, label: "Generate qualified leads" },
  { icon: MonitorSmartphone, label: "Modernise outdated systems" },
  { icon: Paintbrush, label: "Strengthen digital branding" },
  { icon: Cpu, label: "Scale operations through technology" },
];

function WhoWeWorkWithSection() {
  return (
    <SectionShell variant="white">
      <SectionHeader
        badge="Who We Work With"
        title="Built for Startups, Growing Businesses, and Modern Brands"
        subtitle="Whether you're launching from scratch or improving existing systems, our approach adapts to your business stage and long-term goals."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
          {audienceItems.map((item) => (
          <motion.div
            key={item.label}
            variants={fadeUp}
            transition={easeTransition}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
            className="flex items-center gap-4 bg-white dark:bg-[#0A1628] border border-[#e8f2ef] dark:border-white/10 rounded-[16px] px-5 py-[18px] shadow-[0_4px_20px_rgba(15,40,30,0.05)] hover:border-[#c8ede4] hover:shadow-[0_8px_24px_rgba(60,186,153,0.1)] transition-all duration-200"
          >
            <GradientIconBox size="sm">
              <item.icon size={18} strokeWidth={2} className="text-white" />
            </GradientIconBox>
            <span className="font-['Sora'] text-[13px] font-bold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.25]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </SectionShell>
  );
}

// ─── Let's Build ──────────────────────────────────────────────
function LetsBuildSection() {
  return (
    <SectionShell variant="white" glow={false} className="pt-16 md:pt-20 pb-6 md:pb-8">
      <motion.div
        variants={scaleIn}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={springTransition}
        className="max-w-4xl mx-auto text-center relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#edf9f6] via-white to-[#e8f5f2] dark:from-[#0A1628] dark:via-[#0D2244] dark:to-[#050d1a] border-[1.5px] border-[#c8ede4] dark:border-[#5EEAD4]/20 px-8 py-10 md:px-14 md:py-14"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.08)_0%,transparent_70%)] pointer-events-none" />

        <SectionBadge label="Let's Build" />
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...easeTransition, delay: 0.12 }}
          className="mt-4 font-['Sora'] text-3xl md:text-[2.5rem] font-extrabold text-[#0a2218] dark:text-[#E2EEFF] tracking-[-0.032em]"
        >
          Let&apos;s Build Something Better
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...easeTransition, delay: 0.2 }}
          className="mt-4 text-[15.5px] text-[#3a5550] dark:text-[#94B4D4] max-w-2xl mx-auto leading-[1.82]"
        >
          If you&apos;re looking for a digital partner that combines strategy, technology,
          creativity, and growth into one connected system, Rankraze is ready to help.
        </motion.p>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...easeTransition, delay: 0.28 }}
          className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <ContactFormModalButtonOne Button="Start Your Project" Dark={true} />
          <Link
            href="/contact-us"
            className="inline-flex items-center gap-2 capitalize cursor-pointer outline-1 outline-[var(--primary-green)] rounded-sm px-6 py-2.5 text-sm font-medium hover:bg-[var(--primary-green)] hover:text-white dark:text-white transition-colors"
          >
            Talk With Our Team
          </Link>
        </motion.div>
      </motion.div>
    </SectionShell>
  );
}

export default function HomePageSections() {
  return (
    <>
      <ShimmerStyles />
      <AboutSection />
      <ServicesSection />
      <WhyChooseSection />
      <ProcessSection />
      <ConnectedGrowthSection />
      <WhoWeWorkWithSection />
      <LetsBuildSection />
    </>
  );
}
