"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

const BOOK_DEMO = "#book-demo";

const USE_CASE_TABS = [
  {
    id: "schools",
    label: "Schools",
    accent: "#3DBC9C",
    accentDark: "#2aa880",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        <path d="M8 7h8M8 11h8M8 15h5" />
      </svg>
    ),
    headline: "LMS Software for Schools",
    body:
      "Schools can use RankRaze LMS to manage digital lessons, assignments, tests, student progress, study materials, and online learning programs. It helps teachers organise content and helps students access learning materials in a structured way.",
    bullets: [
      "Digital lessons and structured modules",
      "Assignments, quizzes, and progress tracking",
      "Central place for study materials",
    ],
  },
  {
    id: "institutes",
    label: "Training Institutes",
    accent: "#36aaf1",
    accentDark: "#2490d8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    headline: "LMS Software for Training Institutes",
    body:
      "Training institutes can create online courses, manage batches, conduct assessments, share certificates, and track student performance.",
    bullets: [
      "Digital marketing, software training, coaching programs",
      "Professional certifications and skill-based academies",
      "Batch management and learner reports",
    ],
  },
  {
    id: "corporate",
    label: "Corporate",
    accent: "#a78bfa",
    accentDark: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
    headline: "Corporate LMS Software",
    body:
      "Companies can use RankRaze LMS for employee onboarding, HR training, compliance training, sales training, product training, leadership programs, and internal knowledge sharing.",
    bullets: [
      "Reduce repetitive training work",
      "Clear visibility into employee progress",
      "Structured programs for onboarding and compliance",
    ],
  },
  {
    id: "small-business",
    label: "Small Business",
    accent: "#fb923c",
    accentDark: "#ea7316",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    headline: "LMS Software for Small Business",
    body:
      "Small businesses often need a simple, affordable way to train employees, partners, customers, or franchise teams.",
    bullets: [
      "Organise training without scattered documents",
      "Reduce repeated live sessions",
      "Practical LMS without heavy overhead",
    ],
  },
  {
    id: "enterprise",
    label: "Enterprise",
    accent: "#2dd4bf",
    accentDark: "#14b8a6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    headline: "Enterprise LMS Software",
    body:
      "For growing organisations, LMS software should support multiple teams, larger learner groups, structured training programs, reporting, and scalable administration.",
    bullets: [
      "Scaled learner groups and programmes",
      "Reporting for multiple teams",
      "Organised learning operations across the organisation",
    ],
  },
];

type LmsUseCasesShowcaseProps = {
  leadFormUrl?: string;
};

export function LmsUseCasesShowcase({ leadFormUrl = BOOK_DEMO }: LmsUseCasesShowcaseProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>(Array.from({ length: USE_CASE_TABS.length }, () => null));

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
    <section id="use-cases" className="pm-root w-full bg-[#f0f9f6] dark:bg-[#080B0F] relative overflow-clip scroll-mt-24">
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
            style={{ background: USE_CASE_TABS[activeIdx].accent, transition: "background 0.8s" }}
            aria-hidden
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-[0.12]"
            style={{ background: USE_CASE_TABS[activeIdx].accentDark, transition: "background 0.8s" }}
            aria-hidden
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative z-10">
        <div className="mb-20 max-w-2xl">
          <p
            className="syne text-xs font-700 tracking-widest uppercase mb-4"
            style={{ color: USE_CASE_TABS[activeIdx].accent, transition: "color 0.4s" }}
          >
            Who uses RankRaze LMS?
          </p>
          <h2 className="syne text-4xl md:text-5xl font-800 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
            Who Can Use RankRaze <br />
            <span style={{ color: USE_CASE_TABS[activeIdx].accent, transition: "color 0.4s" }}>LMS Software?</span>
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg">
            From schools and coaching centres to corporate teams and enterprises—every audience gets structured
            learning, assessments, and reports in one place.
          </p>
          <Link
            href={leadFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.03]"
            style={{
              background: `linear-gradient(135deg, ${USE_CASE_TABS[activeIdx].accent}, ${USE_CASE_TABS[activeIdx].accentDark})`,
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
                Use Cases
              </p>
              <div className="relative pl-5">
                <div className="pm-progress-track" />
                <div className="pm-progress-fill" style={{ height: `${((activeIdx + 0.5) / USE_CASE_TABS.length) * 100}%` }} />

                <div className="space-y-1">
                  {USE_CASE_TABS.map((tab, i) => (
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
                Scroll to explore audiences that fit your organisation.
              </p>
            </div>
          </div>

          <div className="flex-1 min-w-0 top-0">
            {USE_CASE_TABS.map((tab, i) => (
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
                          <rect x="20" y="20" width="160" height="80" rx="10" fill="currentColor" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.2" />
                          <circle cx="50" cy="55" r="18" fill="currentColor" fillOpacity="0.35" />
                          <rect x="80" y="40" width="88" height="10" rx="4" fill="currentColor" fillOpacity="0.2" />
                          <rect x="80" y="58" width="72" height="8" rx="3" fill="currentColor" fillOpacity="0.12" />
                          <rect x="80" y="74" width="92" height="8" rx="3" fill="currentColor" fillOpacity="0.1" />
                          <rect x="32" y="88" width="136" height="8" rx="4" fill="currentColor" fillOpacity="0.25" />
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
                            Book LMS Demo
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
