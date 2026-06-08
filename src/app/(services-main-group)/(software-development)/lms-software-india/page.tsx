import Link from "next/link";
import type { Metadata } from "next";
import ContactForm from "@/app/components/UI/AllServicePageContactForm";
import { LmsHero } from "./LmsHero";
import { LmsUseCasesShowcase } from "./LmsUseCasesShowcase";
import {
  BookOpen,
  Users,
  ClipboardCheck,
  BarChart3,
  Award,
  Smartphone,
  LayoutDashboard,
  Shield,
  Puzzle,
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";

const LEAD_FORM =
  "https://crm.skalelit.com/lead-form/1f920a2abc3394d259281285252cbb52?styled=1&with_logo=1";

const LMS_PAGE_URL = "https://rankraze.us/lms-software-india";

export const metadata: Metadata = {
  title: "LMS Software India | Learning Management System with Free Trial",
  description:
    "Launch online training with RankRaze LMS Software. Create courses, manage learners, track progress, conduct assessments, use mobile app access, and start with a 1-month free trial.",
  keywords: [
    "LMS software",
    "learning management system LMS software",
    "LMS software India",
    "best LMS software",
    "corporate LMS software",
    "LMS software for schools",
    "LMS software for small business",
    "LMS education software",
    "online training platform",
    "employee training LMS",
  ],
  alternates: {
    canonical: LMS_PAGE_URL,
  },
  openGraph: {
    title: "LMS Software India | Learning Management System with Free Trial | Rankraze",
    description:
      "Create courses, manage learners, conduct assessments, and track reports from one LMS—with web access and Play Store mobile app support.",
    url: LMS_PAGE_URL,
    siteName: "Rankraze",
    images: [
      {
        url: "/upload/software-develop1.webp",
        width: 826,
        height: 590,
        alt: "RankRaze LMS learning management software",
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

const WHY_CHOOSE = [
  {
    title: "1 Month Free Trial",
    body:
      "Try the LMS software before making a long-term decision. Explore the dashboard, course creation, learner management, assessments, reports, and mobile app experience.",
  },
  {
    title: "Mobile App Access",
    body:
      "Learners can access courses through mobile app support—convenient for students, employees, and remote teams.",
  },
  {
    title: "Suitable for Education and Business",
    body:
      "RankRaze LMS fits schools, training institutes, coaching centres, small businesses, startups, and corporate teams.",
  },
  {
    title: "Built with Essential LMS Features",
    body:
      "Course management, learner management, assessments, progress tracking, reports, certificates, and admin controls—without unnecessary complexity.",
  },
];

const FEATURES = [
  {
    icon: BookOpen,
    title: "Course Creation & Management",
    body:
      "Structured courses with modules, lessons, videos, documents, quizzes, assignments, and learning materials—with a clear learning path.",
    bestFor: "Schools, employee training, customer education, coaching, product training, and skill programmes.",
  },
  {
    icon: Users,
    title: "Learner Management",
    body:
      "Add, manage, group, and monitor learners from one dashboard. Assign courses to individuals, batches, departments, classes, or teams.",
  },
  {
    icon: ClipboardCheck,
    title: "Assessments, Quizzes & Tests",
    body:
      "Measure understanding with quizzes, assignments, and exams—for internal training, certification, onboarding checks, compliance, and student evaluation.",
  },
  {
    icon: BarChart3,
    title: "Progress Tracking & Reports",
    body:
      "Track completion, test scores, activity, attendance, and outcomes—so admins can act on real data for business training or institution reporting.",
  },
  {
    icon: Award,
    title: "Certificates & Completion Records",
    body:
      "Issue certificates after successful completion—for institutes, online academies, employee programmes, and skill-based learning.",
  },
  {
    icon: Smartphone,
    title: "Mobile Learning Access",
    body:
      "Train on mobile devices—important for students, professionals, remote teams, and field staff who prefer mobile-first access.",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboard",
    body:
      "Courses, learners, performance, reports, and activity in one place—no juggling disconnected tools for everyday learning ops.",
  },
  {
    icon: Shield,
    title: "Secure User Access",
    body:
      "Roles and permissions for admins, trainers, teachers, managers, and learners—all on the same platform with appropriate access.",
  },
];

const STEPS = [
  {
    n: "1",
    title: "Set Up Your LMS",
    desc: "Create your account, configure your organisation, add users, and set up the platform for your goals.",
  },
  {
    n: "2",
    title: "Add Courses & Materials",
    desc: "Upload lessons, videos, documents, notes, assignments, quizzes, and resources.",
  },
  {
    n: "3",
    title: "Assign Learners",
    desc: "Add students, employees, teams, or batches and assign the right courses to the right users.",
  },
  {
    n: "4",
    title: "Track Learning Progress",
    desc: "Monitor completion, scores, engagement, and activity from the admin dashboard.",
  },
  {
    n: "5",
    title: "Improve Training Results",
    desc: "Use reports to refine content and programmes over time based on learner performance.",
  },
];

const BENEFITS = [
  {
    title: "Better Learning Organisation",
    desc: "All courses, materials, users, and reports stay in one place.",
  },
  {
    title: "Reduced Manual Work",
    desc: "Assign courses, track progress, and manage learners with less constant follow-up.",
  },
  {
    title: "Improved Learner Engagement",
    desc: "Structured modules, assessments, progress visibility, and certificates keep learners invested.",
  },
  {
    title: "Clear Performance Reports",
    desc: "See who finished training, who scored well, and who needs extra support.",
  },
  {
    title: "Scalable Training Delivery",
    desc: "Train dozens or thousands with a more systematic process.",
  },
  {
    title: "Mobile-Friendly Learning",
    desc: "Learners reach content wherever they are—with mobile app support alongside the web experience.",
  },
];

const COMPARISON_ROWS: { need: string; traditional: string; lms: string }[] = [
  { need: "Course delivery", traditional: "Manual sessions and files", lms: "Structured online courses" },
  { need: "Learner tracking", traditional: "Spreadsheets and follow-ups", lms: "Dashboard-based progress tracking" },
  { need: "Assessments", traditional: "Manual tests", lms: "Online quizzes and assessments" },
  { need: "Certificates", traditional: "Manual creation", lms: "Completion-based certificate support" },
  { need: "Reporting", traditional: "Time-consuming", lms: "Automated learner reports" },
  { need: "Mobile access", traditional: "Limited", lms: "Mobile app support" },
  { need: "Scalability", traditional: "Difficult", lms: "Suitable for growing teams and batches" },
];

const FAQ = [
  {
    q: "What is LMS software?",
    a: "LMS software is used to create, deliver, manage, and track online learning or training programmes. It helps organisations manage courses, learners, assessments, reports, and certificates in one platform.",
  },
  {
    q: "What is the most commonly used LMS?",
    a: "Popular platforms include Moodle, Google Classroom, Canvas, Blackboard, TalentLMS, Zoho Learn, and ProProfs LMS. The right choice depends on your use case, budget, learners, features, and support needs.",
  },
  {
    q: "What is an LMS example?",
    a: "A school uploading lessons for students, or a company assigning onboarding modules to employees—learners complete modules and tests while admins monitor progress.",
  },
  {
    q: "Is LMS software free?",
    a: "Some platforms offer free tiers or trials. RankRaze LMS Software includes a 1-month free trial so you can evaluate the platform before a full rollout.",
  },
  {
    q: "Which is the best LMS software in India?",
    a: "The best LMS depends on your needs—education teams often prioritise coursework and grading; businesses focus on onboarding, compliance, certificates, and reports. RankRaze LMS supports education, small business training, corporate use, and custom requirements.",
  },
  {
    q: "Can I download LMS software?",
    a: "Some solutions require installation; many are web-first. RankRaze LMS runs in the browser and supports mobile learning via Play Store access.",
  },
  {
    q: "Is RankRaze LMS useful for students?",
    a: "Yes. Structured courses, materials, assessments, progress tracking, and mobile access make it suitable as LMS software for students.",
  },
  {
    q: "Can small businesses use LMS software?",
    a: "Yes—onboarding, product training, customer education, and internal knowledge gain structure with less repetitive live training.",
  },
  {
    q: "What features should I look for in LMS software?",
    a: "Prioritise course creation, learner management, assessments, progress tracking, reports, certificates, mobile access, role-based controls, and a strong admin dashboard.",
  },
  {
    q: "Does RankRaze provide custom LMS software solutions?",
    a: "Yes. As a digital marketing and software development company, Rankraze can plan LMS implementations around education workflows, training structure, and scalability.",
  },
];

const SCHEMA = {
  softwareApp: {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "RankRaze LMS Software",
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, Android",
    description:
      "Learning management system for schools, training institutes, small businesses, and corporate teams—with courses, assessments, reports, certificates, and mobile app access.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      description: "1-month free trial",
    },
    provider: {
      "@type": "Organization",
      name: "Rankraze",
      url: "https://rankraze.us",
    },
  },
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rankraze",
    url: "https://rankraze.us",
    description:
      "Digital marketing and software development company offering LMS software, custom learning solutions, and platform implementation support.",
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
        name: "LMS Software India",
        item: LMS_PAGE_URL,
      },
    ],
  },
};

export default function LmsSoftwareIndiaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.softwareApp) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(SCHEMA.breadcrumbs) }} />

      <LmsHero leadFormUrl={LEAD_FORM} trustedLogos={TRUSTED_LOGOS} />

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
            <h2 className="text-2xl md:text-3xl font-semibold dark:text-gray-200">Book LMS Demo</h2>
            <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed">
              Get an LMS Demo Walkthrough—share your details and our team will show course creation, learner
              management, assessments, reporting, and the mobile learner experience for your institute or company.
            </p>
            <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-2">
              {["1-month trial to validate fit", "No obligation consult", "Support on business days"].map((line) => (
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

      <section className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl rounded-2xl border border-orange-100 dark:border-orange-900/40 bg-orange-50/60 dark:bg-orange-950/20 p-6 md:p-8">
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Training Is Hard to Manage Without the Right LMS
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            Manual training often means missed sessions, repeated explanations, poor completion tracking,
            fragmented content, and low visibility—RankRaze LMS brings planning, delivery, assessments, and
            reporting together.
          </p>
        </div>
      </section>

      <section id="overview" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl flex flex-col gap-8">
          <div>
            <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200 mb-4">
              A Learning Management System Built for Real Training Needs
            </h2>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
              Choosing LMS software isn&apos;t only about uploading lessons. A capable LMS helps you plan
              training, create structured courses, manage users, test understanding, track completion, and improve
              learning outcomes.
            </p>
            <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base">
              RankRaze LMS Software is designed for organisations that want a practical, scalable learning management
              system without unnecessary friction—whether you train students, employees, franchises, sales teams,
              onboarding batches, or customers. Create courses and lessons, upload materials, assign modules, run tests,
              monitor progress, generate reports, and let learners reach content on web and mobile app.
            </p>
          </div>
          <div className="rounded-2xl border border-[var(--primary-green)]/30 bg-teal-50/80 dark:bg-teal-950/25 p-6 md:p-8">
            <p className="text-base md:text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Need LMS software that your learners can actually use?
            </p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
              Start with RankRaze LMS and test the platform with a 1-month free trial before full implementation.
            </p>
            <Link
              href={LEAD_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center capitalize text-sm text-white px-6 py-2.5 rounded-lg bg-[var(--primary-green)] hover:opacity-95"
            >
              Start Your Free LMS Trial
            </Link>
          </div>
        </div>
      </section>

      <section id="what-is" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-7xl">
          <h2 className="text-3xl xl:text-[38px] font-semibold dark:text-gray-200 mb-4">What is LMS Software?</h2>
          <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-4">
            LMS software, or Learning Management System software, is a digital platform used to create, deliver,
            manage, and track online learning programmes. Instead of scattered files, chat threads, spreadsheets, and
            manual follow-ups, an LMS keeps everything organised. Admins create courses, enrol learners, assign
            lessons, run assessments, track completion, and view reports—for learners it is one place for lessons,
            videos, notes, tests, certificates, and progress.
          </p>
          <div className="mt-8 p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80">
            <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-2">Simple example</p>
            <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              If a company trains 200 employees on product knowledge, HR policies, compliance, or sales skills, an LMS
              helps upload content, assign it to employees, test understanding, and see who finished—without chasing
              status in spreadsheets.
            </p>
          </div>
        </div>
      </section>

      <section id="why" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
          Why Choose RankRaze LMS Software?
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-10 text-sm md:text-base">
          Rankraze builds digital experiences for growth—not just backend systems. Our LMS combines usability,
          learner engagement, and practical rollout support. It has already been used internally by Rankraze and
          selected clients, so product decisions reflect real admin, trainer, and learner needs.
        </p>
        <div className="w-full max-w-7xl grid sm:grid-cols-2 gap-6">
          {WHY_CHOOSE.map((item) => (
            <article
              key={item.title}
              className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80"
            >
              <div className="flex items-start gap-3 mb-3">
                <Sparkles className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" strokeWidth={1.75} />
                <h3 className="text-lg font-semibold dark:text-gray-100">{item.title}</h3>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="features" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
          LMS Software Features That Help You Manage Learning Better
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          Everything you expect from modern learning management—with clarity for admins and learners.
        </p>
        <div className="w-full max-w-7xl grid md:grid-cols-2 gap-6">
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="flex gap-4 p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#161B22]/80"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-[#EFF6FF] dark:bg-blue-950/40 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[var(--primary-blue)]" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-semibold dark:text-gray-100 mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-2">{f.body}</p>
                  {f.bestFor ? (
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      <span className="font-medium text-gray-700 dark:text-gray-300">Best for:</span> {f.bestFor}
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
        <div className="w-full max-w-7xl mt-8 flex flex-col sm:flex-row gap-4 p-6 rounded-xl border border-dashed border-[var(--primary-green)]/50 bg-teal-50/40 dark:bg-teal-950/15 items-start">
          <Puzzle className="w-8 h-8 text-[var(--primary-green)] shrink-0" />
          <div>
            <h3 className="font-semibold dark:text-gray-100 mb-2">Custom LMS Software Solutions</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Every organisation has different training workflows. RankRaze can tailor LMS implementations around your
              business requirements, education structure, rollout plan, and future scale.
            </p>
          </div>
        </div>
      </section>

      <LmsUseCasesShowcase leadFormUrl={LEAD_FORM} />

      <section id="benefits" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
          Why Businesses and Institutions Need LMS Software Today
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-6 text-sm md:text-base">
          Learning expectations have shifted—students and employees expect flexible access, while organisations need
          faster onboarding, better reporting, and less manual coordination.
        </p>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-3xl mx-auto mb-12 text-sm md:text-base">
          LMS software centralises delivery, tracking, and improvement in one scalable platform instead of improvised
          training stacks.
        </p>
        <h3 className="text-xl font-semibold dark:text-gray-100 mb-8">Key Benefits of LMS Software</h3>
        <div className="w-full max-w-7xl grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b) => (
            <article
              key={b.title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#161B22]"
            >
              <h4 className="font-semibold dark:text-gray-100 mb-2">{b.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{b.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="comparison" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-10">
          RankRaze LMS vs Traditional Training Methods
        </h2>
        <div className="w-full max-w-7xl overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full min-w-[600px] text-sm text-left">
            <thead>
              <tr className="bg-gray-50 dark:bg-[#161B22] border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Training Need</th>
                <th className="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Traditional Method</th>
                <th className="px-4 py-3 font-semibold text-[var(--primary-green)]">RankRaze LMS Software</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map((row) => (
                <tr
                  key={row.need}
                  className="border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-[#0B0E11]/50"
                >
                  <td className="px-4 py-3 font-medium text-gray-900 dark:text-gray-100">{row.need}</td>
                  <td className="px-4 py-3 text-gray-600 dark:text-gray-400">{row.traditional}</td>
                  <td className="px-4 py-3 text-gray-800 dark:text-gray-200">{row.lms}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section id="how" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-4">
          How RankRaze LMS Software Works
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 max-w-2xl mx-auto mb-12 text-sm md:text-base">
          A straightforward path from setup to measurable improvement—without overwhelming your admins.
        </p>
        <div className="w-full max-w-7xl grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map((s) => (
            <div key={s.n} className="text-center px-2">
              <div className="w-14 h-14 rounded-full border-2 border-[var(--primary-green)] text-[var(--primary-green)] font-bold text-xl flex items-center justify-center mx-auto mb-4 bg-white dark:bg-[#161B22]">
                {s.n}
              </div>
              <h3 className="font-semibold text-base dark:text-gray-100 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quick-answers" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-gray-200 mb-10">Quick Answers</h2>
        <div className="w-full max-w-7xl grid md:grid-cols-3 gap-6">
          <article className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161B22]/60">
            <h3 className="font-semibold dark:text-gray-100 mb-2">What is RankRaze LMS Software?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              A learning management system for schools, training institutes, small businesses, and corporate teams—
              covering courses, learners, assessments, progress, reports, and web plus mobile learner access.
            </p>
          </article>
          <article className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161B22]/60">
            <h3 className="font-semibold dark:text-gray-100 mb-2">Who is RankRaze LMS Best For?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Organisations needing practical LMS software for online courses, employee training, student programmes,
              onboarding, assessments, and performance tracking—including custom LMS engagements.
            </p>
          </article>
          <article className="p-6 rounded-xl border border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-[#161B22]/60">
            <h3 className="font-semibold dark:text-gray-100 mb-2">Does RankRaze LMS Offer a Free Trial?</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Yes—a 1-month free trial lets schools, startups, corporates, and institutes validate RankRaze LMS before
              a full rollout.
            </p>
          </article>
        </div>
      </section>

      <section id="best-choice" className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24">
        <div className="w-full max-w-3xl">
          <h2 className="text-3xl xl:text-[38px] font-semibold text-center dark:text-gray-200 mb-6">
            What Makes RankRaze One of the Best LMS Software Choices?
          </h2>
          <p className="text-gray-500 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-8 text-center">
            The strongest LMS blends essential features with day-to-day clarity for admins and learners—without burying your team in unnecessary complexity.
          </p>
          <ul className="space-y-3 text-sm md:text-base text-gray-700 dark:text-gray-300">
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              A learning management system with practical core features—not feature bloat
            </li>
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              LMS software in India with free trial access to validate rollout
            </li>
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              LMS software for schools, institutes, coaching, and academy programmes
            </li>
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              Corporate LMS software built for onboarding, HR, compliance, and sales readiness
            </li>
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              Small business LMS software that replaces scattered manuals and improvised training
            </li>
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              Mobile-app-based learner access where your audience expects it
            </li>
            <li className="flex gap-2">
              <Check className="w-5 h-5 text-[var(--primary-green)] shrink-0 mt-0.5" />
              Custom LMS software backed by Rankraze&apos;s software development team when you need it
            </li>
          </ul>
        </div>
      </section>

      <section
        id="trial"
        className="w-full grid place-items-center mt-20 px-4 md:px-6 lg:px-10 scroll-mt-24 mb-10 py-14 rounded-2xl max-w-7xl mx-auto bg-linear-to-br from-[var(--primary-green)] to-[var(--primary-blue)] text-white"
      >
        <div className="text-center max-w-3xl px-4">
          <h2 className="text-2xl md:text-4xl font-semibold mb-4">Start with a 1 Month Free Trial</h2>
          <p className="text-white/90 text-sm md:text-base leading-relaxed mb-8">
            Choosing LMS software is a meaningful decision—you need clarity on ease of use for your team,
            usefulness for learners, and fit for training goals. Use the trial to explore course creation,
            learner controls, assessments, reports, mobile access, and the admin dashboard before you commit.
          </p>
          <p className="text-lg md:text-xl font-medium mb-6">Ready to launch your online learning platform?</p>
          <p className="text-white/95 text-sm md:text-base mb-8">
            Try RankRaze LMS Software with a 1-month free trial—or book a live walkthrough today.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href={LEAD_FORM}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-[#0f766e] px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-100"
            >
              Start Free Trial
            </Link>
            <Link
              href="#book-demo"
              className="inline-flex items-center border-2 border-white px-6 py-2.5 rounded-lg text-sm font-semibold text-white hover:bg-white/10"
            >
              Book LMS Demo
            </Link>
          </div>
          <p className="mt-6 text-xs md:text-sm text-white/80">Implementation guidance • Training support • Ongoing LMS partnership</p>
        </div>
      </section>

      <section className="w-full grid place-items-center mt-12 px-4 md:px-6 lg:px-10">
        <h2 className="text-2xl font-semibold text-center dark:text-gray-200 mb-6">Explore more from Rankraze</h2>
        <ul className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 text-sm">
          {[
            { href: "/software-development", label: "Software development services" },
            { href: "/blogs", label: "Learning & tech insights" },
            { href: "/contact-us", label: "Contact our team" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="inline-flex items-center gap-1 text-[var(--primary-green)] dark:text-teal-300 hover:underline"
              >
                {l.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="faq" className="w-full grid place-items-center mt-14 px-4 md:px-6 lg:px-10 pb-16 scroll-mt-24">
        <h2 className="text-3xl font-semibold text-center dark:text-gray-200 mb-8">LMS Software FAQs</h2>
        <div className="w-full max-w-3xl space-y-3">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group border border-gray-200 dark:border-gray-700 rounded-lg bg-white dark:bg-[#161B22] px-4 py-3 open:shadow-sm"
            >
              <summary className="cursor-pointer font-medium text-gray-900 dark:text-gray-100 list-none flex justify-between items-center gap-2 [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span className="text-[var(--primary-green)] text-lg group-open:rotate-45 motion-safe:transition-transform motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 leading-relaxed pb-1">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
