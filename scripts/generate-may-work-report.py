"""
Generate Monthly Work Report PDF for Rankraze Next.js Website
Period: May 1 - May 31, 2026
"""

from datetime import datetime
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import cm, inch
from reportlab.platypus import (
    HRFlowable,
    PageBreak,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT_PATH = "reports/Rankraze-Work-Report-May-2026.pdf"

# Brand colors
PRIMARY = colors.HexColor("#1a365d")
ACCENT = colors.HexColor("#2b6cb0")
LIGHT_BG = colors.HexColor("#edf2f7")
TEXT_DARK = colors.HexColor("#2d3748")
TEXT_MUTED = colors.HexColor("#718096")


def build_styles():
    base = getSampleStyleSheet()
    return {
        "title": ParagraphStyle(
            "Title",
            parent=base["Title"],
            fontSize=26,
            textColor=PRIMARY,
            spaceAfter=12,
            alignment=TA_CENTER,
            fontName="Helvetica-Bold",
        ),
        "subtitle": ParagraphStyle(
            "Subtitle",
            parent=base["Normal"],
            fontSize=14,
            textColor=ACCENT,
            spaceAfter=24,
            alignment=TA_CENTER,
            fontName="Helvetica",
        ),
        "h1": ParagraphStyle(
            "H1",
            parent=base["Heading1"],
            fontSize=16,
            textColor=PRIMARY,
            spaceBefore=18,
            spaceAfter=10,
            fontName="Helvetica-Bold",
        ),
        "h2": ParagraphStyle(
            "H2",
            parent=base["Heading2"],
            fontSize=13,
            textColor=ACCENT,
            spaceBefore=14,
            spaceAfter=8,
            fontName="Helvetica-Bold",
        ),
        "body": ParagraphStyle(
            "Body",
            parent=base["Normal"],
            fontSize=10,
            textColor=TEXT_DARK,
            spaceAfter=8,
            alignment=TA_JUSTIFY,
            leading=14,
        ),
        "bullet": ParagraphStyle(
            "Bullet",
            parent=base["Normal"],
            fontSize=10,
            textColor=TEXT_DARK,
            leftIndent=18,
            spaceAfter=4,
            leading=13,
        ),
        "small": ParagraphStyle(
            "Small",
            parent=base["Normal"],
            fontSize=9,
            textColor=TEXT_MUTED,
            alignment=TA_CENTER,
        ),
        "table_header": ParagraphStyle(
            "TableHeader",
            parent=base["Normal"],
            fontSize=9,
            textColor=colors.white,
            fontName="Helvetica-Bold",
        ),
        "table_cell": ParagraphStyle(
            "TableCell",
            parent=base["Normal"],
            fontSize=9,
            textColor=TEXT_DARK,
            leading=12,
        ),
    }


def make_table(data, col_widths, styles):
    wrapped = []
    for row_idx, row in enumerate(data):
        wrapped_row = []
        for cell in row:
            style = styles["table_header"] if row_idx == 0 else styles["table_cell"]
            wrapped_row.append(Paragraph(str(cell), style))
        wrapped.append(wrapped_row)

    table = Table(wrapped, colWidths=col_widths, repeatRows=1)
    table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), PRIMARY),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 9),
                ("ALIGN", (0, 0), (-1, -1), "LEFT"),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#cbd5e0")),
                (
                    "ROWBACKGROUNDS",
                    (0, 1),
                    (-1, -1),
                    [colors.white, LIGHT_BG],
                ),
                ("TOPPADDING", (0, 0), (-1, -1), 6),
                ("BOTTOMPADDING", (0, 0), (-1, -1), 6),
                ("LEFTPADDING", (0, 0), (-1, -1), 8),
                ("RIGHTPADDING", (0, 0), (-1, -1), 8),
            ]
        )
    )
    return table


def section_divider():
    return HRFlowable(
        width="100%",
        thickness=1,
        color=colors.HexColor("#e2e8f0"),
        spaceBefore=6,
        spaceAfter=12,
    )


def build_report():
    styles = build_styles()
    doc = SimpleDocTemplate(
        OUTPUT_PATH,
        pagesize=A4,
        rightMargin=2 * cm,
        leftMargin=2 * cm,
        topMargin=2 * cm,
        bottomMargin=2 * cm,
        title="Rankraze Work Report - May 2026",
        author="Rankraze Technologies",
    )

    story = []
    page_width = A4[0] - 4 * cm

    # --- Cover ---
    story.append(Spacer(1, 2.5 * cm))
    story.append(Paragraph("MONTHLY WORK REPORT", styles["title"]))
    story.append(Paragraph("Rankraze Next.js Website", styles["subtitle"]))
    story.append(Spacer(1, 0.5 * cm))
    story.append(
        Paragraph(
            "<b>Reporting Period:</b> May 1 – May 31, 2026",
            ParagraphStyle(
                "Period",
                parent=styles["body"],
                alignment=TA_CENTER,
                fontSize=12,
            ),
        )
    )
    story.append(Spacer(1, 0.3 * cm))
    story.append(
        Paragraph(
            "<b>Project:</b> rankraze-next-site (US Market Website)",
            ParagraphStyle(
                "Project",
                parent=styles["body"],
                alignment=TA_CENTER,
                fontSize=11,
            ),
        )
    )
    story.append(Spacer(1, 0.3 * cm))
    story.append(
        Paragraph(
            "<b>Prepared by:</b> Rajachellan | Rankraze Technologies Private Limited",
            ParagraphStyle(
                "Author",
                parent=styles["body"],
                alignment=TA_CENTER,
                fontSize=11,
            ),
        )
    )
    story.append(Spacer(1, 1 * cm))
    story.append(section_divider())
    story.append(
        Paragraph(
            f"Generated on {datetime.now().strftime('%B %d, %Y')}",
            styles["small"],
        )
    )
    story.append(PageBreak())

    # --- Executive Summary ---
    story.append(Paragraph("1. Executive Summary", styles["h1"]))
    story.append(section_divider())
    story.append(
        Paragraph(
            "May 2026 marked the launch and stabilization of the Rankraze US-market Next.js website "
            "(<b>rankraze-next-site</b>). All development activity occurred between <b>May 19–20, 2026</b>, "
            "comprising six commits that delivered the full website codebase, regional localization for the "
            "US market, infrastructure configuration, and production domain migration.",
            styles["body"],
        )
    )
    story.append(
        Paragraph(
            "The month&apos;s work transformed the India-focused Rankraze website into a US-targeted "
            "digital presence at <b>rankraze.us</b>, including 40+ service pages, careers portal, blog system, "
            "case studies, portfolio, and full CI/CD pipeline setup.",
            styles["body"],
        )
    )

    summary_data = [
        ["Metric", "Value"],
        ["Total Commits", "6"],
        ["Active Development Days", "2 (May 19–20, 2026)"],
        ["Files in Initial Push", "1,027 files (+61,144 lines)"],
        ["Net Change (May period)", "342 files changed (+1,519 / −11,731 lines)"],
        ["Service Pages Delivered", "40+ pages across 7 categories"],
        ["Primary Domain", "rankraze.us"],
        ["Tech Stack", "Next.js 16, React 19, TypeScript, Tailwind CSS 4"],
        ["Author", "Rajachellan"],
    ]
    story.append(Spacer(1, 0.3 * cm))
    story.append(make_table(summary_data, [5.5 * cm, 10.5 * cm], styles))
    story.append(PageBreak())

    # --- Project Overview ---
    story.append(Paragraph("2. Project Overview", styles["h1"]))
    story.append(section_divider())
    story.append(
        Paragraph(
            "The <b>Rankraze Next.js Website</b> is a comprehensive corporate and services website for "
            "Rankraze Technologies, repositioned for the United States market. The project is built on "
            "modern web technologies with server-side rendering, dynamic blog integration, job listings API, "
            "contact form handling, and automated sitemap generation.",
            styles["body"],
        )
    )

    story.append(Paragraph("2.1 Technology Stack", styles["h2"]))
    tech_data = [
        ["Layer", "Technology", "Version / Notes"],
        ["Framework", "Next.js (App Router)", "16.1.6 with Turbopack dev server"],
        ["UI Library", "React", "19.0.0"],
        ["Language", "TypeScript", "5.x"],
        ["Styling", "Tailwind CSS", "4.x with @tailwindcss/typography"],
        ["Animation", "Motion (Framer Motion)", "12.x"],
        ["Icons", "Lucide React, Remix Icon, React Icons", "—"],
        ["Carousel", "Swiper", "12.x"],
        ["Analytics", "Vercel Analytics & Speed Insights", "—"],
        ["SEO", "next-sitemap", "Auto-generated post-build"],
        ["Deployment", "Docker + Jenkins CI/CD", "Jenkinsfile included"],
        ["Code Quality", "ESLint 9, Codacy integration", "—"],
    ]
    story.append(make_table(tech_data, [3.5 * cm, 5 * cm, 7.5 * cm], styles))

    story.append(Paragraph("2.2 Repository Structure", styles["h2"]))
    structure_items = [
        "<b>src/app/</b> — Next.js App Router pages and layouts",
        "<b>src/app/(services-main-group)/</b> — Grouped service pages (AI, Digital Marketing, Web, Software, Video, XR, Branding)",
        "<b>src/app/components/</b> — Reusable UI components (Navigation, Footer, Forms, Animations)",
        "<b>src/app/api/</b> — API routes (Blog, Jobs, Contact Form, File Upload)",
        "<b>src/lib/</b> — Utility functions (blog fetching, image loader, animations)",
        "<b>public/</b> — Static assets (images, videos, brand logos, sitemaps)",
        "<b>scripts/</b> — Automation scripts (domain replacement, metadata patching)",
    ]
    for item in structure_items:
        story.append(Paragraph(f"• {item}", styles["bullet"]))

    story.append(PageBreak())

    # --- Commit Timeline ---
    story.append(Paragraph("3. Commit Timeline — May 2026", styles["h1"]))
    story.append(section_divider())

    commits_data = [
        ["#", "Date", "Commit", "Description", "Impact"],
        [
            "1",
            "May 19",
            "ADD: initial push",
            "Full codebase initial commit",
            "1,027 files, +61,144 lines",
        ],
        [
            "2",
            "May 19",
            "DET: delete unwanted file",
            "Cleanup & US localization prep",
            "28 files, route renames",
        ],
        [
            "3",
            "May 19",
            "UPT: update",
            "US market metadata & navigation",
            "79 files updated",
        ],
        [
            "4",
            "May 19",
            "UPT: update",
            "Remove legacy HTML exports",
            "246 files, −9,797 lines",
        ],
        [
            "5",
            "May 20",
            "FIX: domain → rankraze.uk",
            "UK domain & image fixes",
            "15 files updated",
        ],
        [
            "6",
            "May 20",
            "FIX: domain → rankraze.us",
            "Final US domain migration",
            "14 files updated",
        ],
    ]
    story.append(make_table(commits_data, [1 * cm, 2 * cm, 4.5 * cm, 4.5 * cm, 4 * cm], styles))
    story.append(Spacer(1, 0.5 * cm))

    story.append(Paragraph("3.1 Detailed Commit Breakdown", styles["h2"]))

    commits_detail = [
        (
            "Commit 1 — ADD: initial push (May 19, 2026)",
            [
                "Deployed the complete Rankraze Next.js website codebase to version control.",
                "Included 1,027 files spanning application code, public assets, configuration, and CI/CD.",
                "Established the full page architecture: homepage, 40+ service pages, blogs, careers, case studies, portfolio, and legal pages.",
                "Added Docker containerization (Dockerfile) and Jenkins pipeline (Jenkinsfile).",
                "Configured Next.js with sitemap generation, ESLint, Tailwind CSS, and TypeScript.",
                "Bundled extensive media assets: brand logos, service icons, portfolio images, social media marketing samples, and video content.",
            ],
        ),
        (
            "Commit 2 — DET: delete unwanted file (May 19, 2026)",
            [
                "Removed accidental git config artifact (er.emailgit config user.email).",
                "Renamed web-development route to web-designing for consistency.",
                "Updated SEO, PPC, SMM, and ORM service page routes for US market (Texas/Dallas targeting).",
                "Renamed CRM software page from Chennai to Texas variant.",
                "Refactored BusinessInChennai component to WhyDigitalMarketing for US relevance.",
                "Updated Navigation, Footer, and layout metadata for US positioning.",
            ],
        ),
        (
            "Commit 3 — UPT: update (May 19, 2026)",
            [
                "Major US market localization across 79 files.",
                "Created automation scripts: replace-rankraze-domain.mjs and patch-us-service-metadata.mjs.",
                "Updated next.config.ts with enhanced image domains and remote patterns (109 lines changed).",
                "Localized all AI service pages (consulting, chatbots, computer vision, NLP, ML, sentiment analysis).",
                "Updated digital marketing pages: branding, email marketing, influencer marketing, vernacular marketing.",
                "Refactored homepage (page.tsx) — removed 617 lines of India-specific content.",
                "Replaced Chennai-specific button components with generic service-page Buttons.tsx.",
                "Updated Navigation and NavigationMobile for US service links.",
                "Refreshed legal pages (privacy policy, refund policy, terms & conditions).",
            ],
        ),
        (
            "Commit 4 — UPT: update (May 19, 2026)",
            [
                "Major cleanup removing 9,797 lines of legacy exported HTML content.",
                "Deleted CSR Activities and Website Portfolio WordPress HTML exports and associated asset folders.",
                "Removed hundreds of legacy JS/CSS/download files from public/upload/ directories.",
                "Updated package.json dependencies and regenerated sitemap files.",
                "Significantly reduced repository bloat and improved build performance.",
            ],
        ),
        (
            "Commit 5 — FIX: image issues & domain changed to rankraze.uk (May 20, 2026)",
            [
                "Migrated domain references from rankraze.com to rankraze.uk across 15 files.",
                "Updated .env.local, Dockerfile, next.config.ts, and sitemap.ts.",
                "Fixed API base URLs in ContactFormAPI, JobAPI, and baseAPI.",
                "Updated Navigation, Footer, MapAndLocationMatch, and SeoAndSentimentComponent.",
                "Refactored social-media-component.tsx (386 lines reformatted).",
                "Regenerated sitemap-0.xml with updated URLs.",
            ],
        ),
        (
            "Commit 6 — FIX: domain changed to rankraze.us (May 20, 2026)",
            [
                "Final production domain migration to rankraze.us.",
                "Updated all environment, config, API, and component references (14 files).",
                "Confirmed sitemap, contact page, and blog fetching use US domain.",
                "Established rankraze.us as the live production endpoint for the US market website.",
            ],
        ),
    ]

    for title, bullets in commits_detail:
        story.append(Paragraph(title, styles["h2"]))
        for bullet in bullets:
            story.append(Paragraph(f"• {bullet}", styles["bullet"]))
        story.append(Spacer(1, 0.2 * cm))

    story.append(PageBreak())

    # --- Features Delivered ---
    story.append(Paragraph("4. Features & Modules Delivered", styles["h1"]))
    story.append(section_divider())

    story.append(Paragraph("4.1 Service Pages (40+ Pages)", styles["h2"]))
    services_data = [
        ["Category", "Pages / Services"],
        [
            "AI Services (8)",
            "AI Consulting, AI Chatbots, Computer Vision, Custom AI Solutions, "
            "Future-Ready AI, Machine Learning, NLP, Sentiment Analysis",
        ],
        [
            "Digital Marketing (9)",
            "SEO (Texas), PPC (Dallas), SMM (Texas), Email Marketing, Influencer Marketing, "
            "Content Writing (Dallas), ORM (Texas), Vernacular Marketing",
        ],
        [
            "Web Services (4)",
            "Web Designing, Mobile App Development, Web Analytics, Web Hosting",
        ],
        [
            "Software Development (6)",
            "Software Development Hub, CRM (Texas), Raze Mail, Restaurant Billing, "
            "React JS Development, LMS Software",
        ],
        [
            "Video Production (3)",
            "Video Marketing, Video Production Services, 2D/3D Animation (Dallas)",
        ],
        [
            "Extended Reality (2)",
            "Augmented Reality (Texas), Virtual Reality (Dallas)",
        ],
        ["Branding (1)", "Branding Services"],
    ]
    story.append(make_table(services_data, [4.5 * cm, 11.5 * cm], styles))

    story.append(Paragraph("4.2 Core Website Modules", styles["h2"]))
    modules = [
        (
            "Homepage",
            "Full landing page with hero section, service showcase, client logo slider, "
            "testimonials, success stories, FAQ, industries section, AI-powered section, "
            "count-up statistics, and lead capture form.",
        ),
        (
            "Blog System",
            "Dynamic blog listing with pagination, individual blog pages via [slug] route, "
            "BlogAPI integration, latest blogs component, and SEO-optimized content rendering.",
        ),
        (
            "Careers Portal",
            "Job listings with carousel, detail modals, application forms, slug-based job pages, "
            "JobAPI/JobSAPI integration, and error/loading states.",
        ),
        (
            "Contact & Lead Generation",
            "Contact Us page, modal contact forms, WhatsApp integration, home page lead form, "
            "and ContactFormAPI backend integration.",
        ),
        (
            "Case Studies & Portfolio",
            "Case study showcase, individual case studies (IRQS, IRCLASS, ClearOne), "
            "web design portfolio with slider, and client success stories.",
        ),
        (
            "Location Pages",
            "Digital marketing agency pages for Bangalore, Delhi, and Mumbai; "
            "MapAndLocationMatch component for geo-targeting.",
        ),
        (
            "Legal & Policy",
            "Privacy Policy, Refund Policy, Terms & Conditions, CSR Activities pages.",
        ),
        (
            "Client Landing Pages",
            "Dedicated pages for TT Group, Yeka, ILY, Europe Study Centre, Point of Sale, and more.",
        ),
    ]
    for title, desc in modules:
        story.append(Paragraph(f"<b>{title}:</b> {desc}", styles["bullet"]))

    story.append(PageBreak())

    # --- UI Components ---
    story.append(Paragraph("4.3 UI Components & Design System", styles["h2"]))
    components = [
        "Navigation & NavigationMobile — Responsive mega-menu with service categorization",
        "Footer — Multi-column links, social media, contact information",
        "Header — Sticky header with theme support",
        "ServiceSection — Comprehensive service grid with icons and CTAs",
        "BannerScrollBar — Animated scrolling banner for promotions",
        "ClientTestimonialSlider & SuccessStorySlider — Social proof carousels",
        "FAQ — Accordion-style frequently asked questions",
        "IndustriesSection — Industry vertical showcase",
        "AiPoweredSection — AI capabilities highlight section",
        "OurProcess — Step-by-step process visualization",
        "WhyChooseUs — Value proposition section",
        "PortfolioSection — Project showcase grid",
        "ContactFormModal & AllServicePageContactForm — Lead capture forms",
        "ThemeSwitch — Dark/light mode toggle",
        "WhatsappIcon — Floating WhatsApp chat button",
        "ScrollAnimationWrapper & TypingAnimation — Motion/animation effects",
        "BrandingButton, SEOButton, SMMButton, PPCButton, WebsiteButton — Service CTAs",
        "CountUp & CountStateSection — Animated statistics counters",
    ]
    for comp in components:
        story.append(Paragraph(f"• {comp}", styles["bullet"]))

    story.append(Spacer(1, 0.5 * cm))
    story.append(Paragraph("4.4 API & Backend Integration", styles["h2"]))
    api_items = [
        "<b>BlogAPI.ts</b> — Fetches blog posts from Rankraze CMS/backend",
        "<b>JobAPI.ts / JobsAPI.ts</b> — Career listings and job detail fetching with caching",
        "<b>ContactFormAPI.jsx</b> — Contact form submission handler",
        "<b>baseAPI.ts</b> — Shared API configuration and base URL management",
        "<b>upload/route.ts</b> — File upload API endpoint (Vercel Blob integration)",
        "<b>jobs-cache.ts</b> — Server-side job data caching layer",
        "<b>getLatestBlogs.ts</b> — Blog fetching utility for homepage/latest blogs widget",
    ]
    for item in api_items:
        story.append(Paragraph(f"• {item}", styles["bullet"]))

    story.append(PageBreak())

    # --- Infrastructure ---
    story.append(Paragraph("5. Infrastructure & DevOps", styles["h1"]))
    story.append(section_divider())

    infra_items = [
        (
            "Docker Containerization",
            "Dockerfile configured for production builds with Node.js environment, "
            "optimized for Next.js standalone output.",
        ),
        (
            "Jenkins CI/CD Pipeline",
            "Jenkinsfile defining automated build, test, and deployment stages "
            "for continuous integration.",
        ),
        (
            "Environment Configuration",
            ".env.local management for API URLs, domain settings, and environment-specific variables.",
        ),
        (
            "Sitemap & SEO",
            "Automated sitemap generation via next-sitemap (postbuild hook), "
            "robots.txt, and dynamic sitemap.ts for programmatic URL management.",
        ),
        (
            "Codacy Integration",
            "Code quality monitoring with .codacy/codacy.yaml and CLI scripts.",
        ),
        (
            "Domain Migration Scripts",
            "replace-rankraze-domain.mjs — Automated domain string replacement across codebase; "
            "patch-us-service-metadata.mjs — US-specific SEO metadata patching for service pages.",
        ),
    ]
    for title, desc in infra_items:
        story.append(Paragraph(f"<b>{title}:</b> {desc}", styles["bullet"]))

    story.append(Spacer(1, 0.5 * cm))
    story.append(Paragraph("5.1 Domain Migration Timeline", styles["h2"]))
    domain_data = [
        ["Stage", "Domain", "Date", "Scope"],
        ["Original", "rankraze.com (India)", "Pre-May 2026", "Source website"],
        ["Intermediate", "rankraze.uk", "May 20, 2026", "15 files updated"],
        ["Production", "rankraze.us", "May 20, 2026", "14 files updated — Final"],
    ]
    story.append(make_table(domain_data, [3 * cm, 4 * cm, 3 * cm, 6 * cm], styles))

    story.append(PageBreak())

    # --- Key Achievements ---
    story.append(Paragraph("6. Key Achievements — May 2026", styles["h1"]))
    story.append(section_divider())

    achievements = [
        (
            "Complete Website Launch",
            "Delivered a production-ready Next.js website with 1,027 files and 61,000+ lines "
            "of code in a single initial commit.",
        ),
        (
            "US Market Localization",
            "Successfully repositioned the entire website from India (Chennai/Texas hybrid) "
            "to a US-focused market presence with localized service pages, metadata, and navigation.",
        ),
        (
            "40+ Service Pages",
            "Built comprehensive service landing pages across 7 business categories "
            "with SEO-optimized content, CTAs, and contact forms.",
        ),
        (
            "Repository Optimization",
            "Removed nearly 10,000 lines of legacy WordPress HTML exports, reducing "
            "repository size and improving build times.",
        ),
        (
            "Automated Tooling",
            "Created domain replacement and metadata patching scripts for efficient "
            "multi-region deployments.",
        ),
        (
            "Production Domain Live",
            "Successfully migrated to rankraze.us as the production domain with "
            "full sitemap, API, and component alignment.",
        ),
        (
            "CI/CD Ready",
            "Established Docker + Jenkins pipeline for automated builds and deployments.",
        ),
        (
            "Rich Media Assets",
            "Organized and deployed hundreds of optimized WebP images, brand logos, "
            "portfolio screenshots, social media samples, and video content.",
        ),
    ]
    for i, (title, desc) in enumerate(achievements, 1):
        story.append(Paragraph(f"<b>6.{i} {title}</b>", styles["h2"]))
        story.append(Paragraph(desc, styles["body"]))

    story.append(PageBreak())

    # --- Work Statistics ---
    story.append(Paragraph("7. Work Statistics", styles["h1"]))
    story.append(section_divider())

    stats_data = [
        ["Category", "Count / Detail"],
        ["Total Git Commits", "6"],
        ["Commits on May 19", "4 commits"],
        ["Commits on May 20", "2 commits"],
        ["Files Added (Initial Push)", "1,027"],
        ["Lines Added (Initial Push)", "61,144"],
        ["Files Changed (Cleanup Update)", "246"],
        ["Lines Removed (Cleanup Update)", "9,797"],
        ["Files Changed (US Localization)", "79"],
        ["Service Page Routes", "40+"],
        ["UI Components Created", "50+"],
        ["API Endpoints", "6"],
        ["Public Image Assets", "500+"],
        ["Video Assets", "3 (AR, VR, VR Development)"],
        ["Brand Logo Partners", "25+"],
        ["Case Study Pages", "4"],
        ["Location Landing Pages", "3 (Bangalore, Delhi, Mumbai)"],
        ["Legal/Policy Pages", "3"],
        ["Client Dedicated Pages", "6+"],
    ]
    story.append(make_table(stats_data, [6 * cm, 10 * cm], styles))

    story.append(Spacer(1, 0.5 * cm))
    story.append(Paragraph("7.1 Code Distribution by Area", styles["h2"]))
    distribution_data = [
        ["Area", "Approx. Files", "Description"],
        ["Service Pages", "~45", "AI, Marketing, Web, Software, Video, XR, Branding"],
        ["UI Components", "~50", "Navigation, Forms, Sliders, Sections, Buttons"],
        ["Public Assets", "~800", "Images, videos, logos, icons, uploads"],
        ["API Layer", "~8", "Blog, Jobs, Contact, Upload, Cache"],
        ["Configuration", "~15", "Next.js, Tailwind, ESLint, Docker, Jenkins"],
        ["Pages (Non-Service)", "~25", "Home, Blog, Careers, Contact, Legal, Portfolio"],
    ]
    story.append(make_table(distribution_data, [4 * cm, 3 * cm, 9 * cm], styles))

    story.append(PageBreak())

    # --- Conclusion ---
    story.append(Paragraph("8. Conclusion & Next Steps", styles["h1"]))
    story.append(section_divider())
    story.append(
        Paragraph(
            "The May 2026 development cycle successfully established the Rankraze US-market website "
            "as a fully functional, production-deployed Next.js application. The work encompassed "
            "complete codebase initialization, aggressive US market localization, legacy content cleanup, "
            "and final domain migration to <b>rankraze.us</b>.",
            styles["body"],
        )
    )
    story.append(
        Paragraph(
            "All six commits were authored by <b>Rajachellan</b> and represent a concentrated "
            "two-day sprint (May 19–20) that delivered enterprise-grade website infrastructure "
            "comparable to months of typical development work.",
            styles["body"],
        )
    )

    story.append(Paragraph("Recommended Next Steps", styles["h2"]))
    next_steps = [
        "Continue adding new US-targeted service pages (LMS Software, Property Management Software).",
        "Expand blog content and SEO optimization for US search markets.",
        "Monitor Vercel Analytics and Speed Insights for performance tuning.",
        "Implement A/B testing on lead capture forms for conversion optimization.",
        "Regular sitemap and metadata updates as new pages are added.",
        "Ongoing Navigation menu updates to reflect new service offerings.",
    ]
    for step in next_steps:
        story.append(Paragraph(f"• {step}", styles["bullet"]))

    story.append(Spacer(1, 1.5 * cm))
    story.append(section_divider())
    story.append(
        Paragraph(
            "<i>This report was automatically generated from Git commit history "
            "and project codebase analysis for the period May 1 – May 31, 2026.</i>",
            styles["small"],
        )
    )
    story.append(
        Paragraph(
            "Rankraze Technologies Private Limited | rankraze.us",
            ParagraphStyle(
                "Footer",
                parent=styles["small"],
                fontSize=10,
                textColor=PRIMARY,
                fontName="Helvetica-Bold",
            ),
        )
    )

    doc.build(story)
    print(f"Report generated: {OUTPUT_PATH}")


if __name__ == "__main__":
    import os

    os.makedirs("reports", exist_ok=True)
    build_report()
