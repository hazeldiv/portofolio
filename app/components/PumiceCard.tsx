"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { IconArrowNE } from "./icons";

export interface PumiceCardProps {
  label: string;
  descriptionSide?: "left" | "right";
}

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9900] dark:focus-visible:ring-[#FFBF00] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#131315]";

function TerminalRow({
  prefix,
  children,
}: {
  prefix?: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-3">
      <span className="shrink-0 text-[#cc9900] dark:text-[#FFBF00]">
        {prefix ?? "\u00A0"}
      </span>
      <span className="min-w-0">{children}</span>
    </div>
  );
}

export function PumiceCard({
  label,
  descriptionSide = "right",
}: PumiceCardProps) {
  const isDescLeft = descriptionSide === "left";

  return (
    <div className="flex flex-col xl:flex-row gap-6 xl:gap-8 items-stretch">
      <Link
        href="/pumice"
        className={`group relative flex min-h-[320px] w-full flex-col overflow-hidden bg-[#1a1a1c] transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] dark:bg-[#0a0a0a] sm:min-h-[360px] xl:basis-[62%] ${
          isDescLeft ? "xl:order-2" : "xl:order-1"
        } ${focusRingClass}`}
      >
        <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-headline text-[10px] tracking-[0.3em] uppercase text-[#9c8f78]">
            pumice — local inference
          </span>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-2.5 p-5 font-mono text-[11px] leading-relaxed text-[#c9c4bb] md:p-7 md:text-[13px]">
          <TerminalRow prefix="$">
            <span className="text-white">npm i -g @h4zel/pumice</span>
          </TerminalRow>
          <TerminalRow prefix="$">
            <span className="text-white">pumice</span>
          </TerminalRow>

          <div className="my-1 h-px w-full bg-white/10" />

          <div className="grid grid-cols-[4.5rem_1fr] gap-x-4 gap-y-2 text-[#9c8f78]">
            <span className="uppercase tracking-widest">device</span>
            <span>AMD RX 580 · vulkan 1.1 · 8 GB</span>
            <span className="uppercase tracking-widest">model</span>
            <span>Qwen3.5-2B · int4 · 1.6 GB</span>
            <span className="uppercase tracking-widest">speed</span>
            <span className="text-[#cc9900] dark:text-[#FFBF00]">
              45.2 tok/s
            </span>
          </div>

          <div className="my-1 h-px w-full bg-white/10" />

          <TerminalRow prefix=">">
            <span className="text-white">write a haiku about the gpu</span>
          </TerminalRow>
          <p className="pl-6 text-[#c9c4bb]">
            silicon embers —<br />
            a thousand cores hold their breath
            <br />
            one token exhales
            <span className="ml-1 inline-block h-3 w-1.5 animate-cursor-blink bg-[#cc9900] align-middle dark:bg-[#FFBF00]" />
          </p>
        </div>

        <span className="pointer-events-none absolute bottom-5 right-5 flex items-center gap-2 bg-[#cc9900] px-3 py-2 font-headline text-[10px] font-bold uppercase tracking-widest text-[#402d00] opacity-0 transition-all duration-300 group-hover:opacity-100 dark:bg-[#FFBF00]">
          Read more
          <IconArrowNE cls="w-3 h-3" />
        </span>
      </Link>

      <div
        className={`xl:basis-[38%] bg-[#fdfbf7] dark:bg-[#1f1f21] flex flex-col justify-center p-8 md:p-10 shadow-xl dark:shadow-none order-2 ${
          isDescLeft ? "xl:order-1" : "xl:order-2"
        }`}
      >
        <span className="font-headline text-xs tracking-widest text-[#cc9900] dark:text-[#FFBF00] mb-4">
          {label}
        </span>
        <h4 className="font-headline text-3xl font-bold mb-5 text-[#1a1a1c] dark:text-[#e4e2e4]">
          Pumice
        </h4>
        <p className="text-[#6b5e44] dark:text-[#9c8f78] mb-8 font-light leading-relaxed">
          A Vulkan-based LLM inference engine written from scratch in C and GLSL
          compute shaders — no PyTorch, no CUDA, no llama.cpp. It runs Qwen3.5
          and Qwen3.6 MoE checkpoints locally with per-layer quantization and
          expert offloading.
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {["C", "GLSL", "Vulkan", "Node.js"].map((t) => (
            <span
              key={t}
              className="text-[10px] tracking-widest font-bold uppercase py-1 px-3 bg-[#f0ede6] dark:bg-[#2a2a2c] border border-[#d4c5ab] dark:border-[#504532] text-[#6b5e44] dark:text-[#9c8f78]"
            >
              {t}
            </span>
          ))}
        </div>
        <Link
          href="/pumice"
          className={`inline-flex items-center gap-3 font-headline text-sm font-bold tracking-widest uppercase text-[#1a1a1c] dark:text-[#e4e2e4] hover:text-[#cc9900] dark:hover:text-[#FFBF00] transition-colors duration-300 ${focusRingClass}`}
        >
          READ MORE
          <IconArrowNE cls="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
