import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Building2,
  HelpCircle,
  Home,
  Layers,
  LayoutDashboard,
  Sparkles,
} from "lucide-react";

export type TrustedLogo = {
  src: string;
  alt: string;
  className?: string;
};

type PropertyManagementHeroProps = {
  leadFormUrl: string;
  trustedLogos: TrustedLogo[];
};

const PILL_LINKS = [
  { href: "#features", label: "Features", Icon: Layers },
  { href: "#why", label: "Why RankRaze", Icon: Sparkles },
  { href: "#audiences", label: "Use Cases", Icon: Building2 },
  { href: "#how", label: "How it works", Icon: LayoutDashboard },
  { href: "#trial", label: "Free Trial", Icon: Check },
  { href: "#faq", label: "FAQ", Icon: HelpCircle },
];

function HeroBeams() {
  return (
    <div
      className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none motion-reduce:opacity-60"
      aria-hidden
    >
      <div className="absolute -right-16 top-0 h-[140%] w-28 -skew-x-12 bg-linear-to-b from-[#3DBC9C]/30 via-[#3DBC9C]/10 to-transparent blur-[1px] motion-reduce:transform-none motion-reduce:blur-none" />
      <div className="absolute right-1/4 top-12 h-full w-20 -skew-x-12 bg-linear-to-b from-[#36aaf1]/25 to-transparent opacity-80 motion-reduce:transform-none" />
      <div className="absolute -right-8 bottom-0 h-48 w-40 skew-x-6 rounded-full bg-[#3DBC9C]/15 blur-3xl motion-reduce:blur-none" />
    </div>
  );
}

function PropertyDashboardVisual() {
  return (
    <svg
      viewBox="0 0 460 340"
      className="relative z-1 w-full max-w-lg mx-auto drop-shadow-lg text-[#3DBC9C] dark:text-teal-400"
      aria-hidden
    >
      <defs>
        <linearGradient id="propHeroBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3DBC9C" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#36aaf1" stopOpacity="0.14" />
        </linearGradient>
      </defs>
      <rect x="8" y="20" width="312" height="288" rx="18" fill="url(#propHeroBg)" />
      <rect
        x="28"
        y="42"
        width="274"
        height="242"
        rx="12"
        fill="white"
        className="dark:fill-[#161B22]"
        stroke="currentColor"
        strokeOpacity="0.26"
        strokeWidth="2"
      />
      <rect x="28" y="42" width="274" height="34" rx="12" fill="#3DBC9C" fillOpacity="0.14" />
      <text x="42" y="64" fill="currentColor" fillOpacity="0.85" fontSize="11" fontWeight="bold">
        Property Dashboard
      </text>
      <rect x="40" y="88" width="72" height="52" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.15" />
      <path d="M56 132 L66 118 L74 126 L92 106" stroke="currentColor" strokeOpacity="0.45" strokeWidth="2" fill="none" />
      <text x="48" y="104" fill="currentColor" fillOpacity="0.65" fontSize="8">
        Occupancy
      </text>
      <text x="48" y="124" fill="currentColor" fillOpacity="0.95" fontSize="13" fontWeight="bold">
        94%
      </text>
      <rect x="124" y="88" width="82" height="52" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.15" />
      <text x="132" y="104" fill="currentColor" fillOpacity="0.65" fontSize="8">
        Rent collected
      </text>
      <rect x="132" y="112" width="62" height="6" rx="3" fill="currentColor" fillOpacity="0.1" />
      <rect x="132" y="112" width="52" height="6" rx="3" fill="#3DBC9C" fillOpacity="0.65" />
      <text x="132" y="132" fill="currentColor" fillOpacity="0.95" fontSize="12" fontWeight="bold">
        12 / 14
      </text>
      <rect x="216" y="88" width="70" height="52" rx="8" fill="currentColor" fillOpacity="0.06" stroke="currentColor" strokeOpacity="0.15" />
      <text x="224" y="104" fill="currentColor" fillOpacity="0.65" fontSize="8">
        Open repairs
      </text>
      <circle cx="250" cy="122" r="14" fill="#36aaf1" fillOpacity="0.35" />
      <text x="245" y="127" fill="currentColor" fillOpacity="0.95" fontSize="11" fontWeight="bold">
        3
      </text>
      <rect x="40" y="152" width="246" height="56" rx="10" fill="currentColor" fillOpacity="0.04" stroke="currentColor" strokeOpacity="0.12" />
      <text x="52" y="172" fill="currentColor" fillOpacity="0.7" fontSize="9">
        Maintenance queue
      </text>
      {[166, 180, 194].map((y, i) => (
        <g key={y}>
          <rect x="48" y={y - 6} width="10" height="10" rx="2" fill={i === 1 ? "#3DBC9C" : "currentColor"} fillOpacity={i === 1 ? 0.5 : 0.15} />
          <rect x="64" y={y - 4} width={100 + i * 22} height="7" rx="3" fill="currentColor" fillOpacity="0.1" />
        </g>
      ))}
      <rect x="252" y="122" width="144" height="198" rx="22" fill="#1e293b" className="dark:fill-gray-950" stroke="currentColor" strokeOpacity="0.35" />
      <rect x="264" y="138" width="120" height="16" rx="5" fill="white" fillOpacity="0.1" />
      <rect x="272" y="168" width="104" height="36" rx="8" fill="#3DBC9C" fillOpacity="0.3" />
      <rect x="280" y="178" width="72" height="5" rx="2" fill="white" fillOpacity="0.35" />
      <rect x="280" y="188" width="56" height="5" rx="2" fill="white" fillOpacity="0.2" />
      <rect x="272" y="216" width="104" height="8" rx="3" fill="white" fillOpacity="0.1" />
      <rect x="272" y="232" width="76" height="8" rx="3" fill="white" fillOpacity="0.08" />
      <rect x="272" y="248" width="88" height="8" rx="3" fill="white" fillOpacity="0.08" />
      <circle cx="324" cy="294" r="13" fill="#36aaf1" fillOpacity="0.85" />
    </svg>
  );
}

function FloatingCards() {
  return (
    <>
      <div className="absolute top-4 right-0 md:right-4 z-2 max-w-[210px] rounded-2xl border border-white/80 bg-white/95 dark:bg-[#161B22]/95 dark:border-gray-600/80 px-4 py-3 shadow-lg transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-reduce:hover:translate-y-0">
        <p className="text-[10px] font-bold uppercase tracking-wider text-[#3DBC9C] dark:text-teal-300">
          Property Suite
        </p>
        <p className="text-xs font-semibold text-gray-800 dark:text-gray-100 leading-snug">
          Tenant &amp; rent CRM
        </p>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">Powered by Rankraze</p>
      </div>
      <div className="absolute bottom-8 left-0 md:left-2 z-2 max-w-[220px] rounded-2xl border border-gray-100 bg-white/95 dark:bg-[#161B22]/95 dark:border-gray-600/80 px-4 py-3 shadow-lg transition-transform duration-300 motion-safe:hover:-translate-y-1 motion-reduce:hover:translate-y-0">
        <p className="text-[10px] font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
          Portfolio snapshot
        </p>
        <div className="mt-2 flex items-baseline gap-2">
          <Home className="w-6 h-6 text-[#3DBC9C]" strokeWidth={1.75} />
          <span className="text-2xl font-bold text-gray-900 dark:text-gray-50">8</span>
          <span className="text-xs text-[#36aaf1] font-medium">properties</span>
        </div>
        <div className="mt-2 h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <div className="h-full w-3/4 rounded-full bg-linear-to-r from-[#3DBC9C] to-[#36aaf1]" />
        </div>
      </div>
    </>
  );
}

export function PropertyManagementHero({ leadFormUrl, trustedLogos }: PropertyManagementHeroProps) {
  return (
    <div className="w-full text-(--text-black) mt-20 md:mt-24">
      <section className="relative overflow-hidden bg-linear-to-b from-[#f0fdf9] via-white to-white dark:from-[#0d1a16] dark:via-[#0B0E11] dark:to-[#0B0E11]">
        <div className="absolute inset-0 bg-[url('/upload/wave-image.png')] bg-no-repeat bg-bottom bg-cover opacity-[0.12] dark:opacity-[0.08] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pt-10 pb-28 md:pb-32 lg:pt-14 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.12em] text-[#3DBC9C] dark:text-teal-300 mb-3">
                Property Management Software
              </p>
              <h1 className="text-3xl sm:text-4xl xl:text-[44px] font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-gray-50 max-w-xl">
                <span className="bg-linear-to-r from-[#3DBC9C] to-[#0d9488] dark:from-teal-300 dark:to-teal-400 bg-clip-text text-transparent">
                  Property management software
                </span>{" "}
                <span className="text-gray-900 dark:text-gray-100">
                  built for landlords, owners &amp; property teams
                </span>
              </h1>
              <p className="mt-4 text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-lg">
                <span className="text-gray-700 dark:text-gray-300 font-medium">
                  Tenants · Rent · Maintenance · Reports · Mobile access
                </span>
                <span className="block mt-2 font-normal">
                  Managing properties should not depend on spreadsheets, chats, missed maintenance calls,
                  or scattered tenant records. RankRaze Property Management Software helps landlords, owners,
                  real estate teams, and rental businesses run daily operations from one platform.
                </span>
                <span className="block mt-3 font-normal">
                  Whether you manage a few units or multiple properties, our web-based experience helps you
                  reduce manual follow-ups and make faster decisions—start with a 1-month free trial.
                </span>
              </p>
              <ul className="mt-5 flex flex-wrap justify-center lg:justify-start gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {["1-month free trial", "Play Store mobile app", "CRM-style workflows"].map((t) => (
                  <li
                    key={t}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-gray-800/90 border border-gray-200/90 dark:border-gray-600 shadow-sm"
                  >
                    <Check className="w-3.5 h-3.5 text-[#3DBC9C] shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <Link
                  href={leadFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-[#3DBC9C] to-[#36aaf1] px-7 py-3 text-sm font-semibold text-white shadow-md hover:opacity-95 transition-opacity"
                >
                  Start Free Trial
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="#book-demo"
                  className="text-sm font-semibold text-[#0f766e] dark:text-teal-300 hover:underline px-2 py-3"
                >
                  Book a Free Demo
                </Link>
              </div>
              <p className="mt-5 text-xs sm:text-sm text-gray-500 dark:text-gray-500 max-w-lg">
                Used by RankRaze and selected clients—built from real daily operations and feedback.
              </p>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
              <div className="relative w-full max-w-xl mx-auto aspect-4/3 lg:aspect-auto lg:h-[440px]">
                <HeroBeams />
                <div className="relative flex items-center justify-center h-full pt-6 pb-16 px-2">
                  <PropertyDashboardVisual />
                  <FloatingCards />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 -mt-16 md:-mt-20 mb-6">
          <nav
            aria-label="Property management software page sections"
            className="rounded-2xl border border-gray-200/90 bg-white/95 dark:bg-[#161B22]/95 dark:border-gray-700 shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-sm px-2 py-2 md:px-4 md:py-3"
          >
            <ul className="flex gap-1 md:gap-2 overflow-x-auto snap-x snap-mandatory pb-1 md:pb-0 justify-start md:justify-center">
              {PILL_LINKS.map(({ href, label, Icon }) => (
                <li key={href} className="snap-start shrink-0">
                  <Link
                    href={href}
                    className="flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-xs sm:text-sm font-medium text-gray-600 hover:bg-[#ecfdf5] hover:text-[#0f766e] dark:text-gray-300 dark:hover:bg-teal-950/40 dark:hover:text-teal-200 transition-colors"
                  >
                    <Icon className="w-4 h-4 text-[#3DBC9C] shrink-0" strokeWidth={1.75} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="relative z-5 border-t border-gray-100 dark:border-gray-800 bg-white/60 dark:bg-[#0B0E11]/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-6">
              Trusted organisations Rankraze works with
            </p>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
              {trustedLogos.map((logo) => (
                <div
                  key={logo.src}
                  className="h-10 md:h-12 w-[100px] md:w-[120px] flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={120}
                    height={48}
                    className={`object-contain max-h-10 md:max-h-12 w-auto dark:grayscale-100 dark:invert dark:brightness-100 ${logo.className ?? ""}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
