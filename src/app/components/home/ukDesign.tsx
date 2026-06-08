"use client";

import { motion, type Variants } from "motion/react";
import SectionBadge from "./SectionBadge";
import { fadeUp, viewportOnce, easeTransition } from "./motion";

type SectionShellProps = {
  children: React.ReactNode;
  variant?: "white" | "mint";
  className?: string;
  glow?: boolean;
  dotGrid?: boolean;
};

export function SectionShell({
  children,
  variant = "white",
  className = "",
  glow = true,
  dotGrid = false,
}: SectionShellProps) {
  const bg =
    variant === "mint"
      ? "bg-[#f4fcf9] dark:bg-[#050d1a]"
      : "bg-white dark:bg-[var(--prim-dark-bg)]";

  return (
    <section
      className={`relative overflow-hidden px-5 sm:px-8 md:px-12 lg:px-10 py-20 md:py-28 font-['DM_Sans',sans-serif] border-t border-[#f0f9f6] dark:border-white/5 ${bg} ${className}`}
    >
      {dotGrid && (
        <div
          className="absolute inset-0 pointer-events-none opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(60,186,153,0.14) 1.5px, transparent 1.5px)",
            backgroundSize: "36px 36px",
          }}
        />
      )}
      {glow && (
        <>
          <div className="absolute -top-36 -right-36 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.08)_0%,transparent_60%)] pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-[380px] h-[380px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.05)_0%,transparent_60%)] pointer-events-none" />
        </>
      )}
      <div className="max-w-[1120px] mx-auto relative z-10">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  badge: string;
  title: React.ReactNode;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-14 md:mb-16 ${centered ? "text-center max-w-[780px] mx-auto" : "max-w-3xl"}`}
    >
      <SectionBadge label={badge} />
      <motion.h2
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ ...easeTransition, delay: 0.1 }}
        className="mt-6 font-['Sora'] text-3xl md:text-[2.5rem] font-extrabold text-[#0a2218] dark:text-[#E2EEFF] leading-[1.16] tracking-[-0.032em]"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          transition={{ ...easeTransition, delay: 0.18 }}
          className={`mt-5 text-[15.5px] text-[#3a5550] dark:text-[#94B4D4] leading-[1.82] ${centered ? "max-w-[700px] mx-auto" : ""}`}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        transition={{ ...easeTransition, delay: 0.22 }}
        className={`mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#3cba99] via-[#5fe0c2] to-[#3cba99] ${centered ? "mx-auto" : ""}`}
      />
    </div>
  );
}

export function ShimmerStyles() {
  return (
    <style>{`
      @keyframes ukShimmer {
        0%   { background-position: 100% 0 }
        100% { background-position: -100% 0 }
      }
    `}</style>
  );
}

type HoverCardProps = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
};

export function HoverCard({ children, className = "", variants = fadeUp }: HoverCardProps) {
  return (
    <motion.div
      variants={variants}
      transition={easeTransition}
      className={`group relative bg-white dark:bg-[#0A1628] border-[1.5px] border-[#c8ede4] dark:border-[rgba(255,255,255,0.08)] rounded-[20px] overflow-hidden transition-[box-shadow,border-color,transform] duration-[280ms] ease-[cubic-bezier(0.22,0.61,0.36,1)] hover:-translate-y-1.5 hover:shadow-[0_20px_48px_rgba(60,186,153,0.16)] hover:border-[#3cba99] ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] overflow-hidden rounded-t-[20px]">
        <div className="w-full h-full bg-gradient-to-r from-[#3cba99] via-[#9ae3cc] to-[#3cba99] [background-size:200%_100%] animate-[ukShimmer_3s_linear_infinite]" />
      </div>
      <div className="absolute -bottom-16 -right-16 w-[180px] h-[180px] rounded-full bg-[radial-gradient(circle,rgba(60,186,153,0.09)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[280ms] pointer-events-none" />
      {children}
    </motion.div>
  );
}

export function TagPill({ label }: { label: string }) {
  return (
    <span className="text-[11.5px] font-semibold text-[#0f6e56] dark:text-[#3CBA99] bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.08)] border border-[rgba(60,186,153,0.28)] rounded-full px-3 py-1 transition-all duration-[180ms] group-hover:bg-[rgba(60,186,153,0.12)] group-hover:border-[rgba(60,186,153,0.4)]">
      {label}
    </span>
  );
}

export function IconBox({
  children,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const sizes = {
    sm: "w-10 h-10 rounded-[12px]",
    md: "w-[52px] h-[52px] rounded-[14px]",
    lg: "w-14 h-14 rounded-2xl",
  };

  return (
    <div
      className={`relative z-10 ${sizes[size]} bg-[#edf9f6] dark:bg-[rgba(60,186,153,0.1)] border-[1.5px] border-[#c8ede4] dark:border-[rgba(60,186,153,0.2)] flex items-center justify-center transition-all duration-[250ms] group-hover:bg-[#3cba99] group-hover:border-[#3cba99] group-hover:scale-110 group-hover:-rotate-[4deg] ${className}`}
    >
      {children}
    </div>
  );
}

const SERVICE_GRADIENT =
  "bg-gradient-to-br from-[#5fe0c2] via-[#3cba99] to-[#1a7a62]";

const WHY_GRADIENTS = [
  "bg-gradient-to-br from-[#7ee8d8] to-[#3cba99]",
  "bg-gradient-to-br from-[#5fe0c2] to-[#2ea882]",
  "bg-gradient-to-br from-[#3cba99] to-[#0f6e56]",
  "bg-gradient-to-br from-[#2ea882] to-[#113B5C]",
];

export function GradientIconBox({
  children,
  gradient,
  gradientIndex,
  size = "md",
  className = "",
}: {
  children: React.ReactNode;
  gradient?: string;
  gradientIndex?: number;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const resolvedGradient =
    gradient ??
    (gradientIndex !== undefined
      ? WHY_GRADIENTS[gradientIndex % WHY_GRADIENTS.length]
      : SERVICE_GRADIENT);
  const sizes = {
    sm: "w-11 h-11 rounded-[14px]",
    md: "w-[52px] h-[52px] rounded-[16px]",
    lg: "w-[52px] h-[52px] rounded-[16px]",
  };

  return (
    <div
      className={`${sizes[size]} ${resolvedGradient} flex items-center justify-center shadow-[0_8px_20px_rgba(60,186,153,0.25)] ${className}`}
    >
      {children}
    </div>
  );
}

export function UkServiceCard({
  children,
  className = "",
  variants = fadeUp,
}: HoverCardProps) {
  return (
    <motion.div
      variants={variants}
      transition={easeTransition}
      className={`group relative bg-white dark:bg-[#0A1628] border border-[#e8f2ef] dark:border-white/10 rounded-[24px] p-8 overflow-hidden shadow-[0_4px_24px_rgba(15,40,30,0.06)] hover:shadow-[0_12px_40px_rgba(60,186,153,0.12)] hover:border-[#c8ede4] transition-all duration-300 ${className}`}
    >
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[radial-gradient(circle,rgba(94,224,194,0.22)_0%,transparent_68%)] pointer-events-none" />
      {children}
    </motion.div>
  );
}

type UkWhyCardProps = {
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; className?: string }>;
  title: string;
  desc: string;
  gradientIndex?: number;
  className?: string;
  variants?: Variants;
};

export function UkWhyCard({
  icon: Icon,
  title,
  desc,
  gradientIndex = 0,
  className = "",
  variants = fadeUp,
}: UkWhyCardProps) {
  const gradient = WHY_GRADIENTS[gradientIndex % WHY_GRADIENTS.length];

  return (
    <motion.div
      variants={variants}
      transition={easeTransition}
      className={`bg-white dark:bg-[#0A1628] border border-[#e8f2ef] dark:border-white/10 rounded-[24px] px-7 py-9 text-center shadow-[0_4px_24px_rgba(15,40,30,0.06)] hover:shadow-[0_12px_40px_rgba(60,186,153,0.1)] transition-all duration-300 ${className}`}
    >
      <div className="flex justify-center mb-6">
        <GradientIconBox gradient={gradient} size="lg">
          <Icon size={22} strokeWidth={2} className="text-white" />
        </GradientIconBox>
      </div>
      <h3 className="font-['Sora'] text-[17px] font-bold text-[#0a2218] dark:text-[#E2EEFF] mb-3 leading-[1.3]">
        {title}
      </h3>
      <p className="text-[14px] text-[#5a6b66] dark:text-[#94B4D4] leading-[1.72]">
        {desc}
      </p>
    </motion.div>
  );
}
