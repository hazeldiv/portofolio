"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ThemeToggle } from "./ThemeToggle";
import { IconArrowNE } from "./icons";

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9900] dark:focus-visible:ring-[#FFBF00] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#131315]";

const installCommand = "npm i -g @h4zel/pumice";

const stats = [
  {
    value: "3",
    label: "Models supported",
    detail: "Qwen3.5 2B · 9B · Qwen3.6 35B-A3B MoE",
  },
  {
    value: "2",
    label: "GPUs validated",
    detail: "AMD RX 580 8 GB · NVIDIA RTX 4060",
  },
  {
    value: "3",
    label: "Quant formats",
    detail: "FP16 · INT8 · INT4, per layer",
  },
  {
    value: "0",
    label: "ML frameworks",
    detail: "No PyTorch, no CUDA, no llama.cpp",
  },
];

const features = [
  {
    title: "Hybrid attention",
    body: "Gated delta-net and full-attention layers implemented to match the reference, with runtime-generalized GQA head mapping and partial RoPE.",
  },
  {
    title: "Per-layer quantization",
    body: "Every layer picks its own FP16, INT8, or INT4 mix, with 32 to 256 element Q4 blocks. The web UI edits the mix before a load.",
  },
  {
    title: "MoE expert offloading",
    body: "Routed experts are split between VRAM and host RAM pools, so the 35B-A3B model runs on an 8 GB card at around 10.7 tok/s.",
  },
  {
    title: "Chunked prefill + KV cache",
    body: "Prompts are processed in 512-token chunks, and a tiered KV block cache spans VRAM, host RAM, and disk, so multi-turn chats resume instead of re-prefilling.",
  },
  {
    title: "On-GPU sampler",
    body: "Temperature, top-k, top-p, min-p, and repetition penalty run in a compute shader. Greedy decoding uses an on-device argmax.",
  },
  {
    title: "Agent-ready API",
    body: "The same server exposes a /v1 API with streaming, tool calls, reasoning, and usage. Point an agent harness at it and the model auto-loads on the first request.",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/hazeldiv/pumice" },
  { label: "npm", href: "https://www.npmjs.com/package/@h4zel/pumice" },
];

const runtimeLines = [
  ["ui", "http://127.0.0.1:8787"],
  ["models", "scan a folder, pick a checkpoint"],
  ["quant", "fp16 / int8 / int4, per layer"],
  ["api", "/v1 · streaming · tool calls"],
  ["cache", "kv resume, no re-prefill"],
];

export function PumiceView() {
  const [copied, setCopied] = useState(false);

  const copyInstall = () => {
    navigator.clipboard
      ?.writeText(installCommand)
      .then(() => {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {});
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] dark:bg-[#131315]">
      <header className="fixed top-0 z-50 w-full border-b border-[#ede9e0] bg-[#fdfbf7]/90 backdrop-blur-md dark:border-[#1f1f21] dark:bg-[#131315]/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 sm:py-5 md:px-12">
          <Link
            href="/#work"
            aria-label="Back to portfolio"
            className={`group flex items-center gap-3 ${focusRingClass}`}
          >
            <span className="text-[#cc9900] transition-transform duration-300 group-hover:-translate-x-1 dark:text-[#FFBF00]">
              ←
            </span>
            <span className="font-headline text-lg font-bold tracking-tighter text-[#cc9900] dark:text-[#FFBF00] sm:text-xl">
              HAZEL DIV ALDEN
            </span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      <main>
        <section className="px-6 pt-32 pb-20 md:px-24 md:pt-44">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <div className="flex flex-wrap items-center gap-4">
                <span className="font-headline text-xs tracking-[0.4em] uppercase text-[#cc9900] dark:text-[#FFBF00]">
                  01 / Project
                </span>
                <span className="h-px w-16 bg-[#d4c5ab] dark:bg-[#504532]" />
                <span className="font-headline text-xs tracking-[0.4em] uppercase text-[#6b5e44] dark:text-[#9c8f78]">
                  Vulkan · C · GLSL
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-8 font-headline text-[3.5rem] leading-none font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4] sm:text-[5rem] md:text-[7rem] 2xl:text-[9rem]">
                PUMICE
                <span className="text-[#cc9900] dark:text-[#FFBF00]">.</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-8 max-w-3xl text-lg font-light leading-relaxed text-[#6b5e44] dark:text-[#9c8f78] md:text-xl">
                A Vulkan-based LLM inference engine written from scratch in C
                and GLSL compute shaders. It runs Qwen3.5 and Qwen3.6 MoE
                checkpoints locally on consumer GPUs — no PyTorch, no CUDA, no
                llama.cpp.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex max-w-xl items-center gap-4 border border-[#d4c5ab] bg-[#f4f1ea] px-5 py-4 dark:border-[#504532] dark:bg-[#1b1b1d]">
                <span className="font-mono text-xs text-[#9c8f78] md:text-sm">
                  $
                </span>
                <code className="min-w-0 flex-1 truncate font-mono text-xs text-[#1a1a1c] dark:text-[#e4e2e4] md:text-sm">
                  {installCommand}
                </code>
                <button
                  onClick={copyInstall}
                  className={`shrink-0 border border-[#d4c5ab] px-3 py-1.5 font-headline text-[10px] font-bold tracking-widest uppercase text-[#6b5e44] transition-colors hover:border-[#cc9900] hover:text-[#cc9900] dark:border-[#504532] dark:text-[#D4C5AB] dark:hover:border-[#FFBF00] dark:hover:text-[#FFBF00] ${focusRingClass}`}
                >
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <div className="mt-10 flex flex-wrap gap-4">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-3 border border-[#d4c5ab] px-6 py-3 font-headline text-xs font-bold tracking-widest uppercase text-[#1a1a1c] transition-all hover:border-[#cc9900] hover:text-[#cc9900] dark:border-[#504532] dark:text-[#e4e2e4] dark:hover:border-[#FFBF00] dark:hover:text-[#FFBF00] ${focusRingClass}`}
                  >
                    {l.label}
                    <IconArrowNE cls="w-4 h-4" />
                  </a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-y border-[#ede9e0] bg-[#f4f1ea] px-6 py-20 dark:border-[#1f1f21] dark:bg-[#0e0e10] md:px-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <div className="border-l-4 border-[#cc9900] pl-6 dark:border-[#FFBF00]">
                  <div className="font-headline text-5xl font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4] md:text-6xl">
                    {s.value}
                  </div>
                  <div className="mt-3 font-headline text-xs tracking-widest uppercase text-[#6b5e44] dark:text-[#9c8f78]">
                    {s.label}
                  </div>
                  <div className="mt-2 text-sm font-light leading-relaxed text-[#6b5e44] dark:text-[#9c8f78]">
                    {s.detail}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="px-6 py-28 md:px-24">
          <div className="mx-auto max-w-7xl">
            <Reveal>
              <h2 className="font-headline text-xs tracking-[0.5em] uppercase text-[#cc9900] dark:text-[#FFBF00]">
                Under the hood
              </h2>
              <h3 className="mt-4 font-headline text-4xl font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4] md:text-6xl">
                BUILT FROM THE METAL UP
              </h3>
            </Reveal>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map((f, i) => (
                <Reveal key={f.title} delay={i * 80}>
                  <div className="h-full border-l-4 border-[#d4c5ab] bg-[#f4f1ea] p-8 shadow-md transition-all duration-300 hover:scale-[1.02] hover:border-[#cc9900] hover:shadow-xl dark:border-[#504532] dark:bg-[#1b1b1d] dark:hover:border-[#FFBF00]">
                    <h4 className="font-headline text-lg font-bold tracking-tight text-[#1a1a1c] dark:text-[#e4e2e4]">
                      {f.title}
                    </h4>
                    <p className="mt-4 font-light leading-relaxed text-[#6b5e44] dark:text-[#9c8f78]">
                      {f.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[#ede9e0] px-6 py-28 dark:border-[#1f1f21] md:px-24">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <Reveal>
              <h2 className="font-headline text-xs tracking-[0.5em] uppercase text-[#cc9900] dark:text-[#FFBF00]">
                Ships with a web UI
              </h2>
              <h3 className="mt-4 font-headline text-4xl font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4] md:text-5xl">
                LOCAL, PRIVATE, SELF-HOSTED
              </h3>
              <p className="mt-6 font-light leading-relaxed text-[#6b5e44] dark:text-[#9c8f78]">
                The npm package bundles a prebuilt engine binary and a local
                React interface: a model loader with validation, a per-layer
                quantization editor, sampling controls, and a streaming chat
                playground. The UI opens automatically at 127.0.0.1:8787.
              </p>
            </Reveal>

            <Reveal delay={120}>
              <div className="overflow-hidden border border-[#d4c5ab] bg-[#1a1a1c] dark:border-[#504532] dark:bg-[#0a0a0a]">
                <div className="flex items-center gap-2 border-b border-white/10 px-5 py-3.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
                  <span className="ml-3 font-headline text-[10px] tracking-[0.3em] uppercase text-[#9c8f78]">
                    pumice — server
                  </span>
                </div>
                <div className="flex flex-col gap-3 p-6 font-mono text-xs leading-relaxed text-[#c9c4bb] md:text-[13px]">
                  <div className="flex gap-3">
                    <span className="text-[#cc9900] dark:text-[#FFBF00]">
                      $
                    </span>
                    <span className="text-white">pumice</span>
                  </div>
                  {runtimeLines.map(([key, value]) => (
                    <div
                      key={key}
                      className="grid grid-cols-[4.5rem_1fr] gap-x-4 text-[#9c8f78]"
                    >
                      <span className="uppercase tracking-widest">{key}</span>
                      <span>{value}</span>
                    </div>
                  ))}
                  <div className="flex gap-3">
                    <span className="text-[#cc9900] dark:text-[#FFBF00]">
                      &gt;
                    </span>
                    <span className="text-white">
                      explain the kv cache in one line
                      <span className="ml-1 inline-block h-3 w-1.5 animate-cursor-blink bg-[#cc9900] align-middle dark:bg-[#FFBF00]" />
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="border-t border-[#ede9e0] bg-[#f4f1ea] px-6 py-28 dark:border-[#1f1f21] dark:bg-[#0e0e10] md:px-24">
          <Reveal>
            <div className="mx-auto max-w-7xl">
              <h3 className="font-headline text-5xl font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4] md:text-8xl">
                RUN IT
                <br />
                LOCALLY.
              </h3>
              <p className="mt-8 max-w-xl text-lg font-light leading-relaxed text-[#6b5e44] dark:text-[#9c8f78]">
                Windows x64, Node.js 18+, and a Vulkan-capable GPU with a
                current driver. Install it globally and run it from a folder
                with your models.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://www.npmjs.com/package/@h4zel/pumice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-sweep bg-[#cc9900] px-5 py-4 font-headline text-sm font-bold tracking-widest uppercase text-[#402d00] transition-all hover:bg-[#b38600] active:scale-95 dark:bg-[#FFBF00] dark:hover:bg-[#e6a800] sm:px-10 ${focusRingClass}`}
                >
                  Get the package
                </a>
                <Link
                  href="/#work"
                  className={`btn-sweep border border-[#d4c5ab] px-5 py-4 font-headline text-sm font-bold tracking-widest uppercase text-[#1a1a1c] transition-all hover:bg-[#f0ede6] active:scale-95 dark:border-[#504532] dark:text-[#e4e2e4] dark:hover:bg-[#2a2a2c] sm:px-10 ${focusRingClass}`}
                >
                  Back to portfolio
                </Link>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-[#ede9e0] px-6 py-10 dark:border-[#1f1f21] md:px-24">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <span className="font-headline text-[12px] font-bold uppercase tracking-widest text-[#cc9900] dark:text-[#FFBF00]">
            HAZEL DIV ALDEN
          </span>
          <span className="font-body text-[12px] uppercase tracking-widest text-[#6b5e44] dark:text-[#D4C5AB]">
            ©2026 HAZEL DIV ALDEN
          </span>
        </div>
      </footer>
    </div>
  );
}
