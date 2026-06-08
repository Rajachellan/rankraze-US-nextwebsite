"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

const BOOK_DEMO = "#book-demo";

const AUDIENCE_TABS = [
  {
    id: "small-landlords",
    label: "Small landlords",
    accent: "#3DBC9C",
    accentDark: "#2aa880",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    headline: "Property Management Software for Small Landlords",
    body:
      "If you manage a modest portfolio you need software that stays simple yet practical. RankRaze helps small landlords organise tenants rent reminders records and maintenance without spreadsheets.",
    bullets: [
      "Ideal for roughly 1 to 10 rental units",
      "Houses apartments small commercial spaces and family-owned portfolios",
      "Keeps workflows clear without enterprise complexity",
    ],
  },
  {
    id: "owners",
    label: "Owners",
    accent: "#36aaf1",
    accentDark: "#2490d8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
    headline: "Property Management Software for Owners",
    body:
      "Owners need clarity on occupancy, rent status, open maintenance, and performance. RankRaze gives structured visibility without asking teams for endless manual snapshots.",
    bullets: [
      "See which units are occupied and payments pending",
      "Track maintenance workload at a glance",
      "Confidence for owners overseeing multiple holdings",
    ],
  },
  {
    id: "multi-family",
    label: "Multi-family",
    accent: "#a78bfa",
    accentDark: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h0.01M12 6h0.01M16 6h0.01M8 10h0.01M12 10h0.01M16 10h0.01M8 14h0.01M12 14h0.01M16 14h0.01" />
      </svg>
    ),
    headline: "Multi-Family Property Management Software",
    body:
      "Managing multiple tenants shared maintenance staggered rents and dense communication demands structure RankRaze helps unify unit records workloads and histories.",
    bullets: [
      "Apartments rental communities shared housing complexes",
      "Unit-centric records with stronger coordination",
      "Less chaos as portfolio density grows",
    ],
  },
  {
    id: "web-based",
    label: "Web-based",
    accent: "#fb923c",
    accentDark: "#ea7316",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    headline: "Web-Based Property Management Software",
    body:
      "RankRaze runs in the browser so teams avoid offline file sprawl Collaboration between owners managers and assistants stays synced with cloud-friendly access.",
    bullets: [
      "Access dashboards anywhere you have connectivity",
      "Easier operational updates versus local spreadsheets",
      "Shared truth for dispersed teams",
    ],
  },
  {
    id: "online-rental",
    label: "Online rental",
    accent: "#2dd4bf",
    accentDark: "#14b8a6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    headline: "Online Rental Property Management Software",
    body:
      "Digitise tenancy operations from listings through rent collection and upkeep logging RankRaze supports a scalable professional rental workflow versus manual trackers.",
    bullets: [
      "Central tenant property rent and maintenance data",
      "Modernises previously manual repetitive processes",
      "Foundation for ambitious rental portfolios",
    ],
  },
];

type PropertyAudienceShowcaseProps = {
  leadFormUrl?: string;
};

export function PropertyAudienceShowcase({ leadFormUrl = BOOK_DEMO }: PropertyAudienceShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>(Array.from({ length: AUDIENCE_TABS.length }, () => null));

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveIdx(i);
        },
        { threshold: 0.45 },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section id="audiences" className="pm-root w-full bg-[#f0f9f6] dark:bg-[#080B0F] relative overflow-clip scroll-mt-24">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: "256px 256px",
        }}
        aria-hidden
      />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="sticky top-0 h-screen w-full">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-[0.15] dark:opacity-10"
            style={{ background: AUDIENCE_TABS[activeIdx].accent, transition: "background 0.8s" }}
            aria-hidden
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-[0.12]"
            style={{ background: AUDIENCE_TABS[activeIdx].accentDark, transition: "background 0.8s" }}
            aria-hidden
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative z-10">
        <div className="mb-20 max-w-2xl">
          <p
            className="syne text-xs font-700 tracking-widest uppercase mb-4"
            style={{ color: AUDIENCE_TABS[activeIdx].accent, transition: "color 0.4s" }}
          >
            Fit your portfolio shape
          </p>
          <h2 className="syne text-4xl md:text-5xl font-800 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Built for Different <br />
            <span style={{ color: AUDIENCE_TABS[activeIdx].accent, transition: "color 0.4s" }}>
              Property Management Needs
            </span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg">
            Solo landlords boutique managers and growing portfolios each get pragmatic workflows centred on rents
            upkeep and stakeholder visibility without enterprise bloat.
          </p>
          <Link
            href={leadFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.03]"
            style={{
              background: `linear-gradient(135deg, ${AUDIENCE_TABS[activeIdx].accent}, ${AUDIENCE_TABS[activeIdx].accentDark})`,
              transition: "background 0.4s, transform 0.2s",
            }}
          >
            Start Free Trial
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div className="lg:flex lg:gap-16 xl:gap-24">
          <div className="hidden lg:block w-56 xl:w-64 shrink-0">
            <div className="pm-sticky-nav">
              <p className="text-xs font-600 tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-4 pl-5">
                Audiences
              </p>
              <div className="relative pl-5">
                <div className="pm-progress-track" />
                <div className="pm-progress-fill" style={{ height: `${((activeIdx + 0.5) / AUDIENCE_TABS.length) * 100}%` }} />

                <div className="space-y-1">
                  {AUDIENCE_TABS.map((tab, i) => (
                    <div
                      key={tab.id}
                      className={`pm-nav-pill ${activeIdx === i ? "active" : ""}`}
                      style={{ "--pill-accent": tab.accent } as CSSProperties}
                      aria-current={activeIdx === i ? "true" : undefined}
                    >
                      <span className="pm-dot" style={{ "--pill-accent": tab.accent } as CSSProperties} />
                      <span className="pm-icon">{tab.icon}</span>
                      <span>{tab.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="mt-10 pl-5 text-xs text-slate-500 dark:text-slate-600 leading-relaxed">
                Scroll each panel to preview how RankRaze maps to different rental operators.
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-0 top-0">
            {AUDIENCE_TABS.map((tab, i) => (
              <div
                key={tab.id}
                ref={(el) => {
                  panelRefs.current[i] = el;
                }}
                className="pm-panel"
                style={{ "--sec-accent": tab.accent } as CSSProperties}
              >
                <div className="pm-panel-content w-full">
                  <div className="flex items-center gap-3 mb-6 relative">
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: `color-mix(in srgb, ${tab.accent} 18%, transparent)`,
                        color: tab.accent,
                      }}
                    >
                      {tab.icon}
                    </div>
                    <span
                      className="pm-tag"
                      style={{
                        background: `color-mix(in srgb, ${tab.accent} 12%, transparent)`,
                        color: tab.accent,
                        border: `1px solid color-mix(in srgb, ${tab.accent} 30%, transparent)`,
                      }}
                    >
                      0{i + 1}
                    </span>
                    <span className="pm-section-number">{String(i + 1).padStart(2, "0")}</span>
                  </div>

                  <h3 className="syne text-3xl md:text-4xl font-800 text-slate-900 dark:text-white tracking-tight mb-2">
                    {tab.headline}
                  </h3>
                  <div className="pm-divider" style={{ background: `linear-gradient(90deg, ${tab.accent}, transparent)` }} />

                  <div className="grid sm:grid-cols-2 gap-5 mt-8">
                    <article className="pm-card group sm:col-span-2">
                      <div className="relative h-44 overflow-hidden flex items-center justify-center p-6 pm-card-visual">
                        <div
                          className="absolute inset-0 opacity-[0.1] dark:opacity-[0.07]"
                          style={{
                            backgroundImage: `linear-gradient(${tab.accent} 1px, transparent 1px), linear-gradient(90deg, ${tab.accent} 1px, transparent 1px)`,
                            backgroundSize: "28px 28px",
                          }}
                          aria-hidden
                        />
                        <svg viewBox="0 0 200 120" className="relative w-full h-full max-h-32" style={{ color: tab.accent }}>
                          <rect x="24" y="28" width="56" height="72" rx="6" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeOpacity="0.25" />
                          <rect x="88" y="20" width="88" height="88" rx="8" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" />
                          <rect x="100" y="36" width="64" height="8" rx="3" fill="currentColor" fillOpacity="0.25" />
                          <rect x="100" y="52" width="48" height="6" rx="2" fill="currentColor" fillOpacity="0.15" />
                          <circle cx="48" cy="52" r="8" fill="currentColor" fillOpacity="0.45" />
                          <path d="M36 94h24" stroke="currentColor" strokeOpacity="0.35" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="p-5">
                        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">{tab.body}</p>
                        <ul className="space-y-2 mb-6">
                          {tab.bullets.map((b) => (
                            <li key={b} className="text-sm text-slate-700 dark:text-slate-300 flex gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: tab.accent }} />
                              {b}
                            </li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-3">
                          <Link href={BOOK_DEMO} className="pm-learn" style={{ color: tab.accent }}>
                            Book a demo
                            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                              <path
                                d="M3 8h10M9 4l4 4-4 4"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </Link>
                          <Link
                            href={leadFormUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold hover:underline"
                            style={{ color: tab.accent }}
                          >
                            Start free trial
                          </Link>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
