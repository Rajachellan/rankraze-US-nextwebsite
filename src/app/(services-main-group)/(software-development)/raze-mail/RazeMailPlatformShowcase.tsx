"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import type { CSSProperties, ReactElement } from "react";

/** Section comment kept ASCII-only — Next.js code-frame can panic on unicode box chars + TS diagnostics. */

const BOOK_DEMO = "#book-demo";

type VisualKey =
  | "bulkSend"
  | "template"
  | "workflow"
  | "drip"
  | "audience"
  | "analytics"
  | "integrations"
  | "api";

const PLATFORM_TABS = [
  {
    id: "campaigns",
    label: "Campaigns",
    accent: "#3DBC9C",
    accentDark: "#2aa880",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    cards: [
      {
        title: "Bulk Email Automation",
        description: "Schedule and send at scale—bulk sends, audience-based delivery, and campaign-ready operations without manual repetition.",
        tag: "Broadcast",
        href: BOOK_DEMO,
        visual: "bulkSend",
      },
      {
        title: "Email Template Builder",
        description: "Drag-and-drop layouts, reusable blocks, responsive previews, and brand-consistent sections for every send.",
        tag: "Templates",
        href: BOOK_DEMO,
        visual: "template",
      },
    ],
  },
  {
    id: "automation",
    label: "Automation",
    accent: "#36aaf1",
    accentDark: "#2490d8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
    cards: [
      {
        title: "Workflow Automation",
        description: "Trigger-based journeys, onboarding sequences, lead nurturing, and follow-ups that run while your team focuses on strategy.",
        tag: "Workflows",
        href: "#how",
        visual: "workflow",
      },
      {
        title: "Drip & Recurring Sends",
        description: "Drip campaigns, automated follow-ups, and recurring workflows so subscribers always hear from you at the right time.",
        tag: "Drip & nurture",
        href: BOOK_DEMO,
        visual: "drip",
      },
    ],
  },
  {
    id: "audience",
    label: "Audience & Data",
    accent: "#a78bfa",
    accentDark: "#8b5cf6",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
      </svg>
    ),
    cards: [
      {
        title: "Subscriber & Contact Management",
        description: "Segmentation, tags, groups, and filters so every list stays organized as you grow—no spreadsheet chaos.",
        tag: "Contacts",
        href: BOOK_DEMO,
        visual: "audience",
      },
      {
        title: "Campaign Analytics & Reporting",
        description: "Opens, clicks, bounces, and campaign-level insight in one dashboard so you can iterate with confidence.",
        tag: "Insights",
        href: "#faq",
        visual: "analytics",
      },
    ],
  },
  {
    id: "integrations",
    label: "Integrations",
    accent: "#fb923c",
    accentDark: "#ea7316",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
        <rect x="2" y="7" width="7" height="7" rx="1"/><rect x="15" y="7" width="7" height="7" rx="1"/>
        <path d="M9 10.5h6M12 7V4M12 20v-3"/>
      </svg>
    ),
    cards: [
      {
        title: "Integrations Hub",
        description: "Connect CRMs, ecommerce, WordPress, and the tools your team already uses—fewer copy-paste handoffs between systems.",
        tag: "Your stack",
        href: BOOK_DEMO,
        visual: "integrations",
      },
      {
        title: "API & Connectivity",
        description: "API-friendly workflows for custom stacks, automation tools, and deeper integrations when you outgrow point-and-click.",
        tag: "API & webhooks",
        href: BOOK_DEMO,
        visual: "api",
      },
    ],
  },
];

/* Card visuals */
function CardVisual({ visual, accent }: { visual: VisualKey; accent: string }) {
  const visuals: Record<VisualKey, ReactElement> = {
    bulkSend: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        <rect x="20" y="18" width="160" height="84" rx="8" fill="currentColor" fillOpacity=".07" stroke="currentColor" strokeOpacity=".18" strokeWidth="1"/>
        {[30,46,62,78,94].map((y,i) => (
          <g key={y}>
            <rect x="32" y={y} width="24" height="8" rx="4" fill="currentColor" fillOpacity={0.25 - i*0.02}/>
            <rect x="64" y={y} width={60 + i*6} height="8" rx="4" fill="currentColor" fillOpacity={0.13}/>
            <circle cx="174" cy={y+4} r="4" fill="currentColor" fillOpacity={i===0?0.7:0.2}/>
          </g>
        ))}
        <rect x="32" y="78" width="136" height="1" fill="currentColor" fillOpacity=".12"/>
        <rect x="32" y="88" width="80" height="8" rx="4" fill="currentColor" fillOpacity=".5"/>
      </svg>
    ),
    template: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        <rect x="20" y="12" width="75" height="96" rx="6" fill="currentColor" fillOpacity=".08" stroke="currentColor" strokeOpacity=".2" strokeWidth="1"/>
        <rect x="105" y="12" width="75" height="45" rx="6" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
        <rect x="105" y="63" width="75" height="45" rx="6" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".15" strokeWidth="1"/>
        {[22,32,42,52,62].map(y => <rect key={y} x="28" y={y} width={Math.random()>0.5?55:40} height="6" rx="3" fill="currentColor" fillOpacity=".2"/>)}
        <rect x="113" y="20" width="59" height="12" rx="3" fill="currentColor" fillOpacity=".35"/>
        <rect x="113" y="38" width="40" height="6" rx="3" fill="currentColor" fillOpacity=".2"/>
        <rect x="113" y="71" width="59" height="20" rx="3" fill="currentColor" fillOpacity=".12"/>
      </svg>
    ),
    workflow: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        {[[20,52],[80,28],[80,76],[140,52],[170,52]].map(([x,y],i) => (
          <circle key={i} cx={x} cy={y} r={i===4?8:14} fill="currentColor" fillOpacity={i===0||i===3?0.5:0.15} stroke="currentColor" strokeOpacity=".4" strokeWidth="1"/>
        ))}
        <line x1="34" y1="52" x2="66" y2="34" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeDasharray="4 2"/>
        <line x1="34" y1="52" x2="66" y2="70" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeDasharray="4 2"/>
        <line x1="94" y1="28" x2="126" y2="48" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeDasharray="4 2"/>
        <line x1="94" y1="76" x2="126" y2="56" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5" strokeDasharray="4 2"/>
        <line x1="154" y1="52" x2="162" y2="52" stroke="currentColor" strokeOpacity=".4" strokeWidth="1.5"/>
      </svg>
    ),
    drip: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        {[0,1,2,3].map(i => (
          <g key={i}>
            <circle cx={30+i*46} cy="30" r="10" fill="currentColor" fillOpacity={0.6 - i*0.1} stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            {i < 3 && <line x1={40+i*46} y1="30" x2={76+i*46} y2="30" stroke="currentColor" strokeOpacity=".3" strokeWidth="1.5" strokeDasharray="4 2"/>}
            <rect x={20+i*46} y="50" width="20" height={30 + i*10} rx="3" fill="currentColor" fillOpacity={0.15 + i*0.05}/>
            <text x={30+i*46} y="110" textAnchor="middle" fill="currentColor" fillOpacity=".5" fontSize="8">D{(i+1)*3}</text>
          </g>
        ))}
      </svg>
    ),
    audience: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        <circle cx="100" cy="48" r="28" fill="currentColor" fillOpacity=".1" stroke="currentColor" strokeOpacity=".2" strokeWidth="1"/>
        <circle cx="100" cy="48" r="18" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
        <circle cx="100" cy="48" r="9" fill="currentColor" fillOpacity=".5"/>
        {[0,60,120,180,240,300].map((deg,i) => {
          const r=38, rx = 100 + r*Math.cos(deg*Math.PI/180), ry = 48 + r*Math.sin(deg*Math.PI/180);
          return <circle key={i} cx={rx} cy={ry} r="5" fill="currentColor" fillOpacity={0.3+i*0.05}/>;
        })}
        <rect x="30" y="88" width="140" height="8" rx="4" fill="currentColor" fillOpacity=".12"/>
        <rect x="30" y="88" width="90" height="8" rx="4" fill="currentColor" fillOpacity=".35"/>
      </svg>
    ),
    analytics: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        {[0,1,2,3,4,5,6].map(i => {
          const h = [30,55,40,70,45,60,50][i];
          return <rect key={i} x={20+i*24} y={90-h} width="18" height={h} rx="3" fill="currentColor" fillOpacity={i===3?0.7:0.2}/>;
        })}
        <polyline points="29,60 53,38 77,50 101,22 125,40 149,28 173,35" fill="none" stroke="currentColor" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        {[29,53,77,101,125,149,173].map((x,i) => {
          const y = [60,38,50,22,40,28,35][i];
          return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" fillOpacity={i===3?1:0.5}/>;
        })}
        <line x1="20" y1="90" x2="180" y2="90" stroke="currentColor" strokeOpacity=".2" strokeWidth="1"/>
      </svg>
    ),
    integrations: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        <rect x="80" y="44" width="40" height="32" rx="6" fill="currentColor" fillOpacity=".4" stroke="currentColor" strokeOpacity=".5" strokeWidth="1"/>
        {[[20,24],[20,72],[150,24],[150,72]].map(([x,y],i) => (
          <g key={i}>
            <rect x={x} y={y} width="28" height="24" rx="5" fill="currentColor" fillOpacity=".15" stroke="currentColor" strokeOpacity=".3" strokeWidth="1"/>
            <line x1={x+(i%2===0?28:0)} y1={y+12} x2={i%2===0?80:120} y2={i<2?54:66} stroke="currentColor" strokeOpacity=".3" strokeWidth="1.2" strokeDasharray="3 2"/>
          </g>
        ))}
      </svg>
    ),
    api: (
      <svg viewBox="0 0 200 120" className="w-full h-full" style={{ color: accent }}>
        <rect x="24" y="30" width="152" height="60" rx="6" fill="currentColor" fillOpacity=".06" stroke="currentColor" strokeOpacity=".15" strokeWidth="1"/>
        {[["POST /subscribe", 44, 0.6],["GET  /contacts",  58, 0.4],["DEL  /unsubscribe",72, 0.3]].map(([txt,y,op]) => (
          <text key={y} x="34" y={y} fontFamily="monospace" fontSize="9" fill="currentColor" fillOpacity={op}>{txt}</text>
        ))}
        <rect x="130" y="36" width="38" height="16" rx="3" fill="currentColor" fillOpacity=".3"/>
        <text x="149" y="47" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="currentColor" fillOpacity=".9">200 OK</text>
        <rect x="130" y="58" width="38" height="16" rx="3" fill="currentColor" fillOpacity=".15"/>
        <text x="149" y="69" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="currentColor" fillOpacity=".6">200 OK</text>
      </svg>
    ),
  };
  return visuals[visual] ?? null;
}

/* Main component */
export function RazeMailPlatformShowcase({ leadFormUrl = "#start" }) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const panelRefs = useRef<Array<HTMLDivElement | null>>(
    Array.from({ length: PLATFORM_TABS.length }, () => null)
  );

  /* Intersection observer — track which panel is in view */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    panelRefs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveIdx(i); },
        { threshold: 0.45 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach(o => o.disconnect());
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="platform"
        className="pm-root w-full bg-[#f0f9f6] dark:bg-[#080B0F] relative overflow-clip"
      >
        {/* Background noise grain */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] dark:opacity-[0.025]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundSize: '256px 256px',
        }} aria-hidden />

        {/* Ambient glow orbs - Sticky Parallax Container */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="sticky top-0 h-screen w-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-[0.15] dark:opacity-10"
              style={{ background: PLATFORM_TABS[activeIdx].accent, transition: 'background 0.8s' }} aria-hidden/>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-[100px] opacity-[0.12] dark:opacity-8"
              style={{ background: PLATFORM_TABS[activeIdx].accentDark, transition: 'background 0.8s' }} aria-hidden/>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24 relative z-10">

          {/* Top header */}
          <div className="mb-20 max-w-2xl">
            <p className="syne text-xs font-700 tracking-widest uppercase mb-4"
              style={{ color: PLATFORM_TABS[activeIdx].accent, transition: 'color 0.4s' }}>
              Platform capabilities
            </p>
            <h2 className="syne text-4xl md:text-5xl font-800 text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Everything you need<br/>
              <span style={{ color: PLATFORM_TABS[activeIdx].accent, transition: 'color 0.4s' }}>in one platform</span>
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-base leading-relaxed max-w-lg">
              Sending newsletters, onboarding sequences, promotional campaigns, or follow-ups—
              built for both small teams and large-scale email workflows.
            </p>
            <Link
              href={leadFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-all hover:scale-[1.03]"
              style={{ background: `linear-gradient(135deg, ${PLATFORM_TABS[activeIdx].accent}, ${PLATFORM_TABS[activeIdx].accentDark})`, transition: 'background 0.4s, transform 0.2s' }}
            >
              Start free trial
              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>

          {/* Main layout — sticky nav + scrolling panels */}
          <div className="lg:flex lg:gap-16 xl:gap-24">

            {/* LEFT — sticky nav */}
            <div className="hidden lg:block w-56 xl:w-64 flex-shrink-0">
              <div className="pm-sticky-nav">
                <p className="text-xs font-600 tracking-widest uppercase text-slate-500 dark:text-slate-500 mb-4 pl-5">Features</p>

                {/* progress track */}
                <div className="relative pl-5">
                  <div className="pm-progress-track"/>
                  <div className="pm-progress-fill" style={{ height: `${((activeIdx + 0.5) / PLATFORM_TABS.length) * 100}%` }}/>

                  <div className="space-y-1">
                    {PLATFORM_TABS.map((tab, i) => (
                      <div
                        key={tab.id}
                        className={`pm-nav-pill ${activeIdx === i ? 'active' : ''}`}
                        style={{ '--pill-accent': tab.accent } as CSSProperties}
                        aria-current={activeIdx === i ? 'true' : undefined}
                      >
                        <span className="pm-dot" style={{ '--pill-accent': tab.accent } as CSSProperties}/>
                        <span className="pm-icon">{tab.icon}</span>
                        <span>{tab.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* small legend */}
                <div className="mt-10 pl-5 space-y-2">
                  <p className="text-xs text-slate-500 dark:text-slate-600 leading-relaxed">
                    Scroll to explore all four platform areas.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT — scrolling panels */}
            <div className="flex-1 min-w-0 top-0">
              {PLATFORM_TABS.map((tab, i) => (
                <div
                  key={tab.id}
                  ref={(el) => {
                    panelRefs.current[i] = el;
                  }}
                  className="pm-panel"
                  style={{ '--sec-accent': tab.accent } as CSSProperties}
                >
                  <div className="pm-panel-content w-full">

                    {/* Section label row */}
                    <div className="flex items-center gap-3 mb-6 relative">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: `color-mix(in srgb, ${tab.accent} 18%, transparent)`, color: tab.accent }}>
                        {tab.icon}
                      </div>
                      <div>
                        <span className="pm-tag" style={{
                          background: `color-mix(in srgb, ${tab.accent} 12%, transparent)`,
                          color: tab.accent,
                          border: `1px solid color-mix(in srgb, ${tab.accent} 30%, transparent)`
                        }}>
                          0{i + 1}
                        </span>
                      </div>
                      <span className="pm-section-number">{String(i + 1).padStart(2, '0')}</span>
                    </div>

                    <h3 className="syne text-3xl md:text-4xl font-800 text-slate-900 dark:text-white tracking-tight mb-2">
                      {tab.label}
                    </h3>
                    <div className="pm-divider" style={{ background: `linear-gradient(90deg, ${tab.accent}, transparent)` }}/>

                    {/* Cards grid */}
                    <div className="grid sm:grid-cols-2 gap-5 mt-8">
                      {tab.cards.map((card, ci) => (
                        <article key={card.title} className="pm-card group">
                          {/* Visual area */}
                          <div className="relative h-44 overflow-hidden flex items-center justify-center p-6 pm-card-visual">
                            {/* subtle grid */}
                            <div className="absolute inset-0 opacity-[0.1] dark:opacity-[0.07]" style={{
                              backgroundImage: `linear-gradient(${tab.accent} 1px, transparent 1px), linear-gradient(90deg, ${tab.accent} 1px, transparent 1px)`,
                              backgroundSize: '28px 28px',
                            }} aria-hidden/>
                            <div className="relative w-full h-full">
                              <CardVisual visual={card.visual as VisualKey} accent={tab.accent} />
                            </div>
                          </div>

                          {/* Content */}
                          <div className="p-5">
                            <div className="flex items-start justify-between gap-3 mb-3">
                              <h4 className="syne text-base font-700 text-slate-900 dark:text-white leading-snug">{card.title}</h4>
                              <span className="pm-tag flex-shrink-0 mt-0.5" style={{
                                background: `color-mix(in srgb, ${tab.accent} 10%, transparent)`,
                                color: tab.accent,
                                border: `1px solid color-mix(in srgb, ${tab.accent} 25%, transparent)`
                              }}>
                                {card.tag}
                              </span>
                            </div>
                            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">{card.description}</p>
                            <Link
                              href={card.href}
                              className="pm-learn"
                              style={{ color: tab.accent }}
                            >
                              Learn more
                              <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none">
                                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Link>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}