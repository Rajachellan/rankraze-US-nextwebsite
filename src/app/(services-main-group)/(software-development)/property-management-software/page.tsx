import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { PropertyManagementHero } from "./PropertyManagementHero";
import { PropertyAudienceShowcase } from "./PropertyAudienceShowcase";
import {
  ArrowRight,
  Building2,
  Users,
  Wallet,
  Wrench,
  LayoutDashboard,
  BarChart3,
  Smartphone,
  Layers,
  Check,
  Sparkles,
  HelpCircle,
} from "lucide-react";

const LEAD_FORM =
  "https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1";

const PROPERTY_PAGE_URL = "https://rankraze.us/property-management-software";

export const metadata: Metadata = {
  title: "Property Management Software for Landlords & Owners | RankRaze",
  description:
    "Manage tenants, rent, maintenance, properties, reports, and communication in one platform. Try RankRaze Property Management Software with mobile app access and a 1-month free trial.",
  keywords: [
    "property management software",
    "landlord software",
    "rent tracking software",
    "tenant management software",
    "maintenance request software",
    "property management CRM",
    "web-based property management",
    "online rental management",
    "property management India",
    "mobile property management app",
    "multi-family property software",
    "small landlord software",
  ],
  alternates: {
    canonical: PROPERTY_PAGE_URL,
  },
  openGraph: {
    title: "Property Management Software for Landlords & Owners | RankRaze",
    description:
      "Centralise tenants, rent, upkeep, communications, and reports—web-first with Play Store mobile access and a guided trial.",
    url: PROPERTY_PAGE_URL,
    siteName: "Rankraze",
    images: [
      {
        url: "/upload/software-develop1.webp",
        width: 826,
        height: 590,
        alt: "Rankraze web-based property management software dashboard",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "article",
  },
};

const TRUSTED_LOGOS = [
  { src: "/brand-logo/IIT_Madras.webp", alt: "IIT Madras", className: "px-2" },
  { src: "/brand-logo/murugappa.webp", alt: "Murugappa", className: "px-2" },
  { src: "/brand-logo/Bajaj_Finserv_logo.webp", alt: "Bajaj Finserv", className: "px-2" },
  { src: "/brand-logo/pizza-hut.webp", alt: "Pizza Hut", className: "px-2" },
  { src: "/brand-logo/Johnson-Lifts-LOGO.webp", alt: "Johnson Lifts", className: "px-2" },
];

const KEY_BENEFITS = [
  {
    title: "One platform for property operations",
    body:
      "Manage tenants, properties, rent, maintenance, documents, and reports without hopping between disparate tools.",
  },
  {
    title: "Web-based and mobile app access",
    body:
      "Work from desktop or Android via the Play Store so field teams landlords and managers stay aligned.",
  },
  {
    title: "Built for small landlords & growing teams",
    body:
      "Stay lightweight when you begin with pathways to extend processes as occupancy and locations scale.",
  },
  {
    title: "1-month free trial",
    body: "Stress-test onboarding rent cadence upkeep flows and dashboards before committing long-term.",
  },
  {
    title: "Custom support from RankRaze",
    body:
      "Blend software CRM thinking digital visibility and rollout guidance from a multidisciplinary delivery team.",
  },
];

const FEATURES = [
  {
    icon: Building2,
    title: "Property & Unit Management",
    body:
      "Maintain property locations unit mix occupancy rents tenant assignments documents and contextual notes centrally so nothing hides in disparate folders.",
    usefulFor:
      "Rental houses apartments commercial pads multi-unit buildings small portfolios and growing property enterprises.",
    maintenanceExamples: [] as string[],
  },
  {
    icon: Users,
    title: "Tenant Management",
    body:
      "Capture structured profiles leases documents rent posture communication logs and onboarding touchpoints for faster lookups between owners tenants and coordinators.",
    usefulFor: "",
    maintenanceExamples: [] as string[],
  },
  {
    icon: Wallet,
    title: "Rent Tracking & Payment Follow-Up",
    body:
      "Observe due dates statuses paid totals pending arrears historical patterns and escalation reminders to protect cash-flow visibility.",
    usefulFor: "",
    maintenanceExamples: [] as string[],
  },
  {
    icon: Wrench,
    title: "Maintenance Request Management",
    body:
      "Elevate chats into trackable tickets with statuses assignments vendor collaboration and completion proof for repeatable quality.",
    usefulFor: "",
    maintenanceExamples: [
      "Plumbing issues",
      "Electrical complaints",
      "Cleaning requests",
      "Repair work",
      "Inspection updates",
      "Vendor coordination",
    ],
  },
  {
    icon: LayoutDashboard,
    title: "Owner & Manager Dashboard",
    body:
      "Surface occupancy rents maintenance hotspots and actionable highlights so oversight happens without spreadsheets.",
    usefulFor: "",
    maintenanceExamples: [] as string[],
  },
  {
    icon: BarChart3,
    title: "Reports & Business Insight",
    body:
      "Generate views for monthly rent arrears tenant mix property KPIs upkeep history exports for owners and auditors.",
    usefulFor: "",
    maintenanceExamples: [] as string[],
  },
  {
    icon: Smartphone,
    title: "Mobile App Access",
    body:
      "React from the field approvals messages quick stats and audit trails synced with the hub experience backed by Play listing.",
    usefulFor: "",
    maintenanceExamples: [] as string[],
  },
  {
    icon: Layers,
    title: "CRM-Based Workflow",
    body:
      "Treat tenants like customers—pipeline stages communications templates follow-ups onboarding automation and longevity initiatives live beside operations.",
    usefulFor: "",
    maintenanceExamples: [] as string[],
  },
];

const STEPS = [
  { n: "1", title: "Add your properties", desc: "Bring property unit location and contractual metadata into RankRaze." },
  { n: "2", title: "Add tenants & records", desc: "Profile renters documents payment posture and onboarding packets." },
  { n: "3", title: "Track rent & follow-ups", desc: "Observe dues confirmations reminders and arrears contextually." },
  { n: "4", title: "Manage maintenance", desc: "Log triage allocate vendors and archive outcomes without noise." },
  { n: "5", title: "View reports", desc: "Export insights for stakeholders owners and finance partners." },
  { n: "6", title: "Use web & mobile", desc: "Switch between browser control and handset convenience anytime." },
];

const WHO_CAN_USE = [
  "Landlords",
  "Property owners",
  "Real estate companies",
  "Rental property managers",
  "Apartment managers",
  "Commercial property owners",
  "Small property businesses",
  "Multi-family property managers",
  "Developers managing rental units",
  "Businesses overseeing staff accommodations",
];

const RANKRAZE_ADVANTAGE = [
  "Easy adoption path with guided onboarding cues",
  "Mobile-ready teams via Play listing",
  "1-month structured trial sandbox",
  "Tailored workflows for emerging Indian landlords & enterprises",
  "Built beside CRM marketing and automation competency",
  "CRM mindset across tenant lifecycle engagements",
  "Human support spanning software rollout and optimisation",
  "Elastic architecture for burgeoning portfolios",
];

const FAQ = [
  {
    q: "What is property management software?",
    a:
      "It is the digital backbone for tenancy operations—leases rent capture maintenance ticketing documents communications and dashboards—rather than improvised spreadsheets.",
  },
  {
    q: "What is the best software for real estate management?",
    a:
      "Selection depends on mix of tenancy maintenance finance integrations and usability RankRaze emphasises approachable landlord-owner workflows web mobile cohesion and pragmatic analytics.",
  },
  {
    q: "What is Zoho property management?",
    a:
      "Zoho Creator offers configurable templates Bills statements mobility and integrations RankRaze instead ships a cohesive CRM-led property narrative with concierge implementation support.",
  },
  {
    q: "What is the best free property management software?",
    a:
      "Free tiers may cap users integrations or SLA RankRaze supplies a purposeful one-month evaluation window before commercial commitment.",
  },
  {
    q: "Is RankRaze Property Management Software suitable for small landlords?",
    a:
      "Yes—solo operators can manage handfuls of dwellings with rent reminders ticketing and secure storage minus enterprise overhead.",
  },
  {
    q: "Can I use RankRaze Property Management Software on mobile?",
    a:
      "Yes Android users can harness the RankRaze property companion on the Play Store for audits notices and approvals.",
  },
  {
    q: "Is this a web-based property management software?",
    a:
      "Absolutely—responsive browser workspaces pair with handset apps so dispersed teams converge on unified data.",
  },
  {
    q: "Does the software support multi-family property management?",
    a:
      "Yes—density-friendly views help managers juggle simultaneous tenant lifecycles shared infrastructure and nuanced rent schedules.",
  },
  {
    q: "Can property owners use this software?",
    a:
      "Owners gain transparent dashboards outlining occupancy arrears upkeep cadence attachments and historical communications.",
  },
  {
    q: "Is RankRaze Property Management Software available in India?",
    a:
      "Yes—the experience is calibrated for landlords owners and leasing teams operating across Indian metros and corridors.",
  },
];

const SCHEMA = {
  softwareApp: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RankRaze Property Management Software",
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web, Android",
    description:
      "CRM-oriented property operations platform for landlords owners and leasing teams tackling tenants rent maintenance analytics and mobilised workflows.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "1-month free trial",
    },
    provider: { "@type": "Organization", name: "Rankraze", url: "https://rankraze.us" },
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rankraze",
    url: "https://rankraze.us",
    description:
      "Software and digital marketing partner delivering CRM LMS property tooling and bespoke automation engagements.",
  },
  faqSchema: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
  breadcrumbs: {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://rankraze.us/" },
      { "@type": "ListItem", position: 2, name: "Software Development", item: "https://rankraze.us/software-development" },
      {
        "@type": "ListItem",
        position: 3,
        name: "Property Management Software",
        item: PROPERTY_PAGE_URL,
      },
    ],
  },
};

export default function PropertyManagementSoftwarePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.breadcrumbs) }} />

      <PropertyManagementHero leadFormUrl={LEAD_FORM} trustedLogos={TRUSTED_LOGOS} />

      <Link
        href={LEAD_FORM}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 z-50 rounded-full px-5 py-3 text-sm font-semibold text-white shadow-lg bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] hover:opacity-95"
      >
        Start Free Trial
      </Link>

      <section
        id="book-demo"
        className="w-full grid place-items-center mt-12 md:mt-16 px-4 md:px-6 lg:px-10 scroll-mt-24 text-[var(--text-black)]"
      >
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-10 items-start rounded-2xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161B22]/40 p-6 md:p-10">
          <div className="flex flex-col justify-center gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-200">Book a free demo</h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Walk through tenancy onboarding rent cadence ticketing reporting and handset workflows with RankRaze so you
              can validate fit before rollout.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              {[
                "1-month sandbox for serious evaluations",
                "Guidance from software + CRM specialists",
                "Quick responses during business hours",
              ].map((line) => (
                <li key={line} className="flex gap-2 items-start">
                  <Check className="w-4 h-4 text-[var(--primary-green)] shrink-0 mt-0.5" />
                  {line}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full min-w-0">
            <ContactForm />
          </div>
        </div>
      </section>

      <section id="problem" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl rounded-2xl border border-orange-100 dark:border-orange-900/40 bg-orange-50/60 dark:bg-orange-950/20 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Manage Your Properties Without Daily Confusion
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-6">
            Disjointed spreadsheets, chats, calls, and improvised reporting amplify mistakes. RankRaze Property Management
            Software unifies tenancy cash flow maintenance and stakeholder communication.
          </p>
          <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600 dark:text-gray-300">
            {[
              "Tenant files isolated from reminders",
              "Rent escalation buried in unstructured threads",
              "Maintenance bouncing between calls WhatsApp spreadsheets",
              "Manual stakeholder reporting eating leadership time",
              "Owners improvising KPI views",
              "Managers repeating context across channels",
            ].map((pain) => (
              <li key={pain} className="flex gap-2 items-start rounded-lg bg-white/60 dark:bg-[#161B22]/40 p-3 border border-orange-50 dark:border-orange-950/60">
                <span className="text-[var(--primary-green)]">•</span>
                <span>{pain}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="what-is" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200 mb-4">What Is Property Management Software?</h2>
          <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
            Property management software centralises tenancy, asset, financial, and upkeep workflows. Platforms usually cover leases, rent collection, maintenance requests, inventory, stakeholder messaging, auxiliary accounting, dashboards, document storage, and audit trails—so landlords know who owes rent, where maintenance stands, how occupancy looks, and how the portfolio behaves. Owners gain visibility, teams coordinate cleanly, and small portfolios avoid needless chaos.
          </p>
        </div>
      </section>

      <section id="why" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
            Why Choose RankRaze Property Management Software?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed text-center max-w-4xl mx-auto mb-12">
            RankRaze bridges digital marketing and product engineering—CRM, LMS, bespoke apps, and implementation playbooks. Property Management inherits that pairing: disciplined operations plus growth-minded tenant experience backed by RankRaze and early adopter portfolios.
          </p>
          <h3 id="benefits" className="text-2xl font-semibold dark:text-gray-100 text-center mb-8 scroll-mt-24">
            Key Benefits
          </h3>
          <div className="grid md:grid-cols-2 gap-5">
            {KEY_BENEFITS.map((b) => (
              <article key={b.title} className="flex gap-3 border border-gray-100 dark:border-gray-800 rounded-xl p-5 bg-gray-50/70 dark:bg-[#0f1418]">
                <Sparkles className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-1" strokeWidth={1.75} />
                <div>
                  <h4 className="font-semibold dark:text-gray-100 mb-2">{b.title}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{b.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200 mb-4">Property Management Software Features</h2>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Eight pragmatic modules translate documentation into repeatable execution from inventory through analytics.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURES.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <article
                  key={feature.title}
                  className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80 p-6 space-y-3"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-[#ecfdf5] dark:bg-teal-900/40 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[var(--primary-green)]" />
                    </div>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-400">Feature {idx + 1}</p>
                  </div>
                  <h3 className="text-xl font-semibold dark:text-gray-100">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature.body}</p>
                  {feature.usefulFor ? (
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                      <span className="font-semibold text-gray-800 dark:text-gray-100">Ideal for:</span> {feature.usefulFor}
                    </p>
                  ) : null}
                  {feature.maintenanceExamples.length > 0 ? (
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">Maintenance workflows:</p>
                      <ul className="text-xs md:text-sm text-gray-700 dark:text-gray-300 grid sm:grid-cols-2 gap-2">
                        {feature.maintenanceExamples.map((item) => (
                          <li key={item} className="flex gap-2 items-center">
                            <span className="text-[var(--primary-green)]">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <PropertyAudienceShowcase leadFormUrl={LEAD_FORM} />

      <section id="versus" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-5xl text-center mb-12">
          <h2 className="text-3xl font-semibold dark:text-gray-100 mb-4">
            Why RankRaze Can Fit Better Than Generic Property Tools
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed mb-10">
            Many tools built for distant markets overload Indian landlords—or price them out. RankRaze focuses on the essentials landlords and growing teams rely on daily, backed by builders who customise CRM workflows, mobile experiences, and future automation.
          </p>
          <div className="rounded-3xl bg-white dark:bg-[#161B22] border border-gray-100 dark:border-gray-800 px-8 py-10 text-left shadow-sm">
            <h3 className="text-xl font-semibold mb-6 text-center dark:text-gray-50">RankRaze advantage</h3>
            <ul className="grid md:grid-cols-2 gap-4">
              {RANKRAZE_ADVANTAGE.map((bullet) => (
                <li key={bullet} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-1" />
                  <span className="text-gray-700 dark:text-gray-200 text-sm">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="who" className="w-full grid place-items-center mt-18 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-6xl rounded-3xl border border-teal-100 dark:border-teal-900/30 bg-teal-50/40 dark:bg-[#081512] px-8 py-10">
          <h2 className="text-3xl font-semibold dark:text-gray-50 text-center mb-6">
            Who Can Use RankRaze Property Management Software?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8 text-sm md:text-base">
            If your work spans tenants, rent, maintenance, follow-ups, records, or reports, RankRaze can help you centralise it.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 text-sm text-gray-800 dark:text-gray-200">
            {WHO_CAN_USE.map((role) => (
              <div key={role} className="flex gap-3 items-start bg-white/70 dark:bg-white/5 border border-teal-100/60 dark:border-teal-900/40 rounded-xl p-4">
                <Check className="w-4 h-4 text-[var(--primary-green)] shrink-0 mt-1" />
                <span>{role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <h2 className="text-3xl font-semibold dark:text-gray-100 mb-4">How RankRaze Property Management Software Works</h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300">
            From setup through rent cycles, maintenance, insights, and mobile access—a practical sequence ranked teams repeat.
          </p>
        </div>
        <div className="w-full max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div key={step.n} className="rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/75 p-6">
              <div className="w-12 h-12 rounded-full border-2 border-[var(--primary-green)] text-[var(--primary-green)] font-bold flex items-center justify-center mb-4">{step.n}</div>
              <h3 className="text-lg font-semibold mb-3 dark:text-gray-100">{step.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="trial"
        className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24 mb-14 py-16 rounded-3xl max-w-6xl mx-auto bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] text-white"
      >
        <div className="text-center max-w-3xl px-4 space-y-4">
          <h2 className="text-3xl md:text-4xl font-semibold">Start with a 1-month free trial</h2>
          <p className="text-sm md:text-base text-white/90 leading-relaxed">
            Choosing property software should feel intentional. RankRaze gives you a full month to walk properties, rents,
            upkeep, dashboards, and mobile flows before committing.
          </p>
          <p className="text-lg md:text-xl font-semibold">Ready to manage your properties smarter?</p>
          <p className="text-sm md:text-base text-white/95">
            Use RankRaze Property Management Software to manage tenants, rent, maintenance, reports, and communication
            from one platform.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              href={LEAD_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#0f766e] px-8 py-3 rounded-lg font-semibold"
            >
              Start Free Trial
            </Link>
            <Link href="#book-demo" className="inline-flex items-center border-2 border-white px-8 py-3 rounded-lg font-semibold text-white">
              Book Demo
            </Link>
            <Link
              href="/contact-us"
              className="inline-flex items-center border border-white/60 px-8 py-3 rounded-lg font-semibold text-white/90 hover:bg-white/10"
            >
              Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full grid place-items-center px-4 md:px-6 lg:px-10">
        <h2 className="text-2xl font-semibold text-center dark:text-gray-100 mb-6">Explore more from Rankraze</h2>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {[
            { href: "/software-development", label: "Software development capabilities" },
            { href: "/blogs", label: "Insights on leasing & SaaS tooling" },
            { href: "/contact-us", label: "Speak with specialists" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex items-center gap-1 text-[var(--primary-green)] dark:text-teal-300 hover:underline px-4"
            >
              {item.label}
              <ArrowRight className="w-4 h-4" />
            </Link>
          ))}
        </div>
      </section>

      <section id="faq" className="w-full grid place-items-center mt-16 px-4 md:px-6 lg:px-10 pb-16 scroll-mt-24">
        <div className="flex items-center gap-3 mb-10">
          <HelpCircle className="w-6 h-6 text-[var(--primary-green)]" />
          <h2 className="text-3xl font-semibold dark:text-gray-50">FAQ</h2>
        </div>
        <div className="w-full max-w-3xl space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group border border-gray-200 dark:border-gray-800 rounded-2xl bg-white dark:bg-[#161B22] px-4 py-4 open:shadow-lg"
            >
              <summary className="cursor-pointer font-semibold text-gray-900 dark:text-gray-50 flex justify-between items-center gap-3 list-none [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-[var(--primary-green)] text-xl group-open:rotate-45 motion-safe:transition-transform">+</span>
              </summary>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed mt-3">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
