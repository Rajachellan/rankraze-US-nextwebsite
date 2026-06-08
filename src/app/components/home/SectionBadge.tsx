"use client";

import { motion } from "motion/react";
import { fadeUp, easeTransition, viewportOnce } from "./motion";

export default function SectionBadge({ label }: { label: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={easeTransition}
      className="inline-flex items-center gap-2 bg-white dark:bg-[rgba(60,186,153,0.08)] border-[1.5px] border-[#3cba99] text-[#0f6e56] dark:text-[#3CBA99] font-['Sora'] text-[11px] font-bold tracking-[0.08em] uppercase px-4 py-2 rounded-full shadow-[0_0_0_4px_rgba(60,186,153,0.07)] leading-none"
    >
      <span className="w-[7px] h-[7px] bg-[#3cba99] rounded-full flex-shrink-0 animate-pulse" />
      {label}
    </motion.div>
  );
}
