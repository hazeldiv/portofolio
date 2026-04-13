"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { TypeAnimation } from "react-type-animation";
import { SideLink } from "./components/SideLink";
import { ProjectCard } from "./components/ProjectCard";
import {
  IconSun,
  IconMoon,
  IconMenu,
  IconClose,
  IconArrowUp,
  IconArrowNE,
  IconGrid,
  IconLayers,
  IconMail,
  IconOutward,
} from "./components/icons";

const navSections = [
  { id: "home", label: "HOME", href: "#home", icon: <IconArrowNE /> },
  { id: "work", label: "WORKS", href: "#work", icon: <IconGrid /> },
  { id: "skills", label: "SKILLS", href: "#skills", icon: <IconLayers /> },
  { id: "contact", label: "CONTACT", href: "#contact", icon: <IconMail /> },
];

const footerLinks = [
  { label: "HOME", href: "#home" },
  { label: "WORKS", href: "#work" },
  { label: "SKILLS", href: "#skills" },
];

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9900] dark:focus-visible:ring-[#FFBF00] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#131315]";

const projects = [
  {
    title: "Pilar08.org",
    url: "https://pilar08.org",
    iframeTitle: "Pilar08.org live preview",
    description:
      "A centralized platform for architectural resources and community engagement. Built with performance and minimal design at its core.",
    tags: ["NextJS", "PostgreSQL"],
  },
  {
    title: "HCloud",
    url: "https://HCloud.my.id/",
    iframeTitle: "HCloud live preview",
    description:
      "A self-hosted personal cloud drive for managing files, backups, and documents from anywhere. Built as a private alternative to Google Drive, tailored to my own workflow and home storage needs.",
    tags: ["NextJS", "Golang", "PostgreSQL"],
  },
  {
    title: "inkplex",
    url: "https://inkplex.vercel.app/",
    iframeTitle: "inkplex live preview",
    description:
      "An interactive AI-powered storytelling platform. Integrate your preferred AI API to dynamically generate and guide branching narratives in real-time.",
    tags: ["NextJS"],
  },
  {
    title: "The Checklisted",
    url: "https://the-checklisted.vercel.app/",
    iframeTitle: "The Checklisted live preview",
    description:
      "A lightweight, user-friendly to do web app for creating tasks and checklists. Quickly add and edit tasks, check items off as you complete them, and export your lists to Excel for backup or sharing. Designed for simple, persistent workflows and fast task management.",
    tags: ["NextJS"],
  },
  {
    title: "Fitness Goal Planner",
    url: "https://fitness-goal-planner.vercel.app/",
    iframeTitle: "Fitness Goal Planner live preview",
    description:
      "Personalized workout architecture. A full-stack application focused on algorithmic goal setting and progress visualization.",
    tags: ["NextJS"],
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Section tracking
      const scrollY = window.scrollY + window.innerHeight * 0.25;
      let currentSection = navSections[0].id;
      for (const { id } of navSections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) {
          currentSection = id;
        }
      }
      setActiveSection(currentSection);

      // Project tracking (only while in work section)
      const workEl = document.getElementById("work");
      if (workEl) {
        const mid = window.scrollY + window.innerHeight * 0.5;
        if (
          mid >= workEl.offsetTop &&
          mid <= workEl.offsetTop + workEl.offsetHeight
        ) {
          let currentProject = 0;
          for (let i = 0; i < projects.length; i++) {
            const el = document.getElementById(`project-${i}`);
            if (el && el.offsetTop <= mid) {
              currentProject = i;
            }
          }
          setActiveProject(currentProject);
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToProject = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  const currentStudyTime = Math.ceil(
    (new Date().getTime() - new Date("2024-09-01").getTime()) /
      (86400000 * 365),
  );
  let studyTitle = `CS Student / 0${currentStudyTime} Year`;
  if (currentStudyTime > 4) studyTitle = "CS Graduate";
  const scrollToTop = () => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-[#fdfbf7]/90 dark:bg-[#131315]/90 backdrop-blur-md flex justify-between items-center px-6 md:px-12 py-3 sm:py-5 border-b border-[#ede9e0] dark:border-[#1f1f21]">
        <a
          className={`text-lg sm:text-xl font-bold tracking-tighter text-[#cc9900] dark:text-[#FFBF00] font-headline ${focusRingClass}`}
          href="#home"
        >
          HAZEL DIV ALDEN
        </a>

        <div className="hidden md:flex gap-10 items-center">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={s.href}
              aria-current={activeSection === s.id ? "page" : undefined}
              className={`font-headline uppercase tracking-widest text-sm font-bold transition-colors ${
                activeSection === s.id
                  ? "text-[#cc9900] dark:text-[#FFBF00] hover:opacity-80"
                  : "text-[#6b5e44] dark:text-[#D4C5AB] hover:text-[#cc9900] dark:hover:text-[#FFBF00]"
              } ${focusRingClass}`}
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {mounted ? (
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`flex items-center gap-2 px-4 py-2 border border-[#d4c5ab] dark:border-[#504532] text-[#6b5e44] dark:text-[#D4C5AB] hover:border-[#cc9900] dark:hover:border-[#FFBF00] hover:text-[#cc9900] dark:hover:text-[#FFBF00] transition-colors font-headline text-xs tracking-widest uppercase ${focusRingClass}`}
              aria-label="Toggle theme"
            >
              {theme !== "dark" ? (
                <>
                  <IconMoon />
                  DARK
                </>
              ) : (
                <>
                  <IconSun />
                  LIGHT
                </>
              )}
            </button>
          ) : (
            <div className="w-[94px] h-[34px]" />
          )}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden text-[#cc9900] dark:text-[#FFBF00] ${focusRingClass}`}
            aria-label="Toggle menu"
          >
            {menuOpen ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="fixed top-[73px] left-0 right-0 z-40 bg-[#fdfbf7] dark:bg-[#131315] border-b border-[#d4c5ab] dark:border-[#504532] px-8 py-6 flex flex-col gap-6 md:hidden">
          {navSections.map((s) => (
            <a
              key={s.id}
              href={s.href}
              aria-current={activeSection === s.id ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
              className={`font-headline uppercase tracking-widest text-sm text-[#6b5e44] dark:text-[#D4C5AB] hover:text-[#cc9900] dark:hover:text-[#FFBF00] transition-colors ${focusRingClass}`}
            >
              {s.label}
            </a>
          ))}
        </div>
      )}

      <aside className="hidden md:flex fixed right-0 top-0 h-screen w-20 flex-col items-center justify-around py-24 z-40 bg-[#f0ede6] dark:bg-[#0B0B0C] border-l border-[#ede9e0] dark:border-[#1f1f21]">
        <div className="flex flex-col gap-14">
          {navSections.map((s) => (
            <SideLink
              key={s.id}
              href={s.href}
              label={s.label}
              icon={s.icon}
              active={activeSection === s.id}
            />
          ))}
        </div>
      </aside>

      {/* Floating project dot navigator — visible only while in WORKS section */}
      <div
        className={`hidden md:flex fixed right-28 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-4 transition-all duration-500 ${
          activeSection === "work"
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {projects.map((p, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => scrollToProject(`project-${i}`)}
            aria-label={`Go to project: ${p.title}`}
            className={`transition-all duration-300 rounded-full ${
              activeProject === i
                ? "w-2 h-2 bg-[#cc9900] dark:bg-[#FFBF00]"
                : "w-2 h-2 bg-[#d4c5ab] dark:bg-[#504532] hover:bg-[#cc9900] dark:hover:bg-[#FFBF00]"
            } ${focusRingClass}`}
          />
        ))}
      </div>

      <main className="md:pr-20">
        <section
          id="home"
          className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-24 pt-20 bg-[#fdfbf7] dark:bg-[#131315]"
        >
          <div className="max-w-7xl w-full">
            <div className="flex flex-wrap items-baseline gap-4 mb-10">
              <span className="font-headline max-lg:w-full text-xs md:text-sm tracking-[0.4em] text-[#6b5e44] dark:text-[#9c8f78] uppercase min-h-[20px]">
                <TypeAnimation
                  sequence={[
                    "FULL-STACK DEVELOPER",
                    3000,
                    "SOFTWARE ENGINEER",
                    3000,
                    "TECH ENTHUSIAST",
                    3000,
                  ]}
                  wrapper="span"
                  speed={20}
                  repeat={Infinity}
                />
              </span>
              <span className="h-px w-24 bg-[#d4c5ab] dark:bg-[#504532] self-center max-lg:hidden" />
              <span className="font-headline text-xs md:text-sm tracking-[0.4em] text-[#6b5e44] dark:text-[#9c8f78] uppercase">
                {studyTitle}
              </span>
            </div>

            <h1 className="font-headline text-[3.5rem] sm:text-[5rem] md:text-[7rem] 2xl:text-[9rem] leading-none font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4] mb-6">
              HAZEL DIV
              <br />
              <span className="text-[#cc9900] dark:text-[#FFBF00]">ALDEN.</span>
            </h1>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
              <div className="xl:col-start-7 xl:col-span-6">
                <p className="text-[1rem] md:text-xl text-[#6b5e44] dark:text-[#9c8f78] font-light leading-relaxed mb-10 text-justify w-[90%]">
                  Hello, I'm Hazel Div Alden. I design and build full-stack web
                  applications with clean architecture, strong performance, and
                  polished interfaces. I help teams turn ideas into reliable
                  software through pragmatic engineering and thoughtful design.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#work"
                    className={`bg-[#cc9900] dark:bg-[#FFBF00] text-[#402d00] px-5 sm:px-10 py-4 font-headline font-bold text-sm tracking-widest uppercase transition-all active:scale-95 hover:bg-[#b38600] dark:hover:bg-[#e6a800] ${focusRingClass}`}
                  >
                    VIEW WORKS
                  </a>
                  <a
                    className={`border border-[#d4c5ab] dark:border-[#504532] text-[#1a1a1c] dark:text-[#e4e2e4] px-5 sm:px-10 py-4 font-headline font-bold text-sm tracking-widest uppercase transition-all hover:bg-[#f0ede6] dark:hover:bg-[#2a2a2c] active:scale-95 ${focusRingClass}`}
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RESUME
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="work"
          className="min-h-screen py-32 px-6 md:px-24 bg-[#f4f1ea] dark:bg-[#0e0e10]"
        >
          <div className="flex justify-between items-end mb-24">
            <div>
              <h2 className="font-headline text-xs tracking-[0.5em] text-[#cc9900] dark:text-[#FFBF00] uppercase mb-4">
                Selected Works
              </h2>
              <h3 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter text-[#1a1a1c] dark:text-[#e4e2e4]">
                PROJECTS
              </h3>
            </div>
          </div>

          <div className="space-y-40">
            {projects.map((p, i) => (
              <div key={`project-${i}`} id={`project-${i}`}>
                <ProjectCard
                  iframeUrl={p.url}
                  iframeTitle={p.url}
                  label={`0${i + 1} / WORKS`}
                  projectTitle={p.title}
                  description={p.description}
                  tags={p.tags}
                  viewUrl={p.url}
                  descriptionSide={i % 2 === 0 ? "right" : "left"}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="py-32 min-h-screen px-6 md:px-24 bg-[#fdfbf7] dark:bg-[#131315]"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <h2 className="font-headline text-xs tracking-[0.5em] text-[#cc9900] dark:text-[#FFBF00] uppercase mb-4">
                The Stack
              </h2>
              <h3 className="font-headline text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none text-[#1a1a1c] dark:text-[#e4e2e4]">
                ENGINEERING
                <br />
                ARSENAL
              </h3>
              <p className="text-[#6b5e44] dark:text-[#9c8f78] font-light leading-relaxed">
                A curated collection of technologies utilized to build robust
                digital infrastructures. My approach prioritizes type‑safety,
                modularity, and clean architectural patterns.
              </p>
            </div>

            <div className="md:col-start-6 md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {(
                [
                  {
                    title: "Foundations",
                    accent: "border-[#cc9900] dark:border-[#FFBF00]",
                    items: [
                      ["Next.js", "01"],
                      ["React.js", "02"],
                      ["TypeScript", "03"],
                      ["Tailwind CSS", "04"],
                    ],
                  },
                  {
                    title: "Backend Structure",
                    accent: "border-[#d4c5ab] dark:border-[#504532]",
                    items: [
                      [".NET Core", "05"],
                      ["Laravel", "06"],
                      ["Node.js", "07"],
                      ["PHP", "08"],
                    ],
                  },
                  {
                    title: "Storage & Logic",
                    accent: "border-[#d4c5ab] dark:border-[#504532]",
                    items: [
                      ["MySQL", "09"],
                      ["PostgreSQL", "10"],
                      ["Entity Framework", "11"],
                    ],
                  },
                  {
                    title: "Design Philosophy",
                    accent: "border-[#d4c5ab] dark:border-[#504532]",
                    items: [
                      ["Figma", "12"],
                      ["Adobe Suite", "13"],
                      ["UI/UX Arch", "14"],
                    ],
                  },
                ] as {
                  title: string;
                  accent: string;
                  items: [string, string][];
                }[]
              ).map(({ title, accent, items }) => (
                <div
                  key={title}
                  className={`p-8 bg-[#f4f1ea] dark:bg-[#1b1b1d] border-l-4 ${accent}`}
                >
                  <h4 className="font-headline text-xs tracking-widest text-[#6b5e44] dark:text-[#9c8f78] uppercase mb-6">
                    {title}
                  </h4>
                  <ul className="space-y-4 font-headline text-xl font-medium text-[#1a1a1c] dark:text-[#e4e2e4]">
                    {items.map(([name, num]) => (
                      <li
                        key={name}
                        className="flex justify-between items-center"
                      >
                        {name}
                        <span className="text-xs text-[#9c8f78] opacity-40">
                          {num}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer
          id="contact"
          className="min-h-screen bg-[#f4f1ea] dark:bg-[#0e0e10] py-32 px-6 md:px-24"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
            <div className="md:w-1/2">
              <h2 className="font-headline text-xs tracking-[0.5em] text-[#cc9900] dark:text-[#FFBF00] uppercase mb-8">
                Get In Touch
              </h2>
              <h3 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter mb-12 text-[#1a1a1c] dark:text-[#e4e2e4] leading-none">
                LET&apos;S BUILD
                <br />
                THE FUTURE.
              </h3>
              <p className="text-xl text-[#6b5e44] dark:text-[#9c8f78] font-light mb-12 max-w-md leading-relaxed">
                Currently open to freelance collaborations and internship
                opportunities within high-performance development teams.
              </p>
              <a
                href="mailto:hazeldiv8@gmail.com"
                className="group inline-flex items-center gap-6 font-headline text-xl md:text-3xl font-bold border-b-2 border-[#cc9900] dark:border-[#FFBF00] pb-2 transition-all hover:gap-10 text-[#1a1a1c] dark:text-[#e4e2e4]"
              >
                hazeldiv8@gmail.com
                <IconOutward cls="w-7 h-7 fill-[#cc9900] dark:fill-[#FFBF00]" />
              </a>
            </div>

            <div className="md:w-1/3 flex flex-col gap-16">
              <div className="grid grid-cols-2 gap-10">
                <div>
                  <h4 className="font-headline text-[10px] tracking-widest text-[#6b5e44] dark:text-[#9c8f78] uppercase mb-6">
                    Social
                  </h4>
                  <ul className="space-y-4 font-headline text-sm font-bold tracking-widest uppercase">
                    {[
                      { label: "GitHub", href: "https://github.com/hazeldiv" },
                      {
                        label: "LinkedIn",
                        href: "https://www.linkedin.com/in/hazel-div-alden-5018a3259/",
                      },
                      {
                        label: "Instagram",
                        href: "https://www.instagram.com/hazelalden_/",
                      },
                    ].map((s) => (
                      <li key={s.label}>
                        <a
                          href={s.href}
                          className={`text-[#6b5e44] dark:text-[#D4C5AB] hover:text-[#cc9900] dark:hover:text-[#FFBF00] transition-colors ${focusRingClass}`}
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-headline text-[10px] tracking-widest text-[#6b5e44] dark:text-[#9c8f78] uppercase mb-6">
                    Location
                  </h4>
                  <p className="font-headline text-sm font-bold tracking-widest uppercase text-[#1a1a1c] dark:text-[#e4e2e4]">
                    Indonesia
                  </p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <div className="font-headline text-[12px] uppercase tracking-widest text-[#cc9900] dark:text-[#FFBF00] font-bold">
                  HAZEL DIV ALDEN
                </div>
                <div className="font-body text-[12px] uppercase tracking-widest text-[#6b5e44] dark:text-[#D4C5AB]">
                  ©2026 HAZEL DIV ALDEN
                </div>
                <div className="flex gap-8 mt-2">
                  {footerLinks.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      className={`font-body text-[12px] uppercase tracking-widest text-[#6b5e44] dark:text-[#D4C5AB] hover:text-[#cc9900] dark:hover:text-[#FFBF00] transition-colors ${focusRingClass}`}
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>

      <div
        className={`fixed bottom-10 left-10 z-50 transition-all duration-300 ${
          activeSection === "home"
            ? "opacity-0 pointer-events-none translate-y-4"
            : "opacity-100 pointer-events-auto translate-y-0"
        }`}
      >
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className={`w-12 h-12 flex items-center justify-center hover:scale-110 transition-transform shadow-lg bg-gradient-to-br from-[#cc9900] to-[#e6cc80] dark:from-[#FFBF00] dark:to-[#FFE2AB] ${focusRingClass}`}
        >
          <IconArrowUp cls="w-5 h-5 fill-[#402d00]" />
        </button>
      </div>
    </>
  );
}
