"use client";

import { useRef, useState, useEffect } from "react";

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[10px] tracking-widest font-bold uppercase py-1 px-3 bg-[#f0ede6] dark:bg-[#2a2a2c] border border-[#d4c5ab] dark:border-[#504532] text-[#6b5e44] dark:text-[#9c8f78]">
      {label}
    </span>
  );
}

function IconExternal({ cls }: { cls?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={cls ?? "w-4 h-4"} fill="currentColor">
      <path d="M10 6v2H5v11h11v-5h2v7H3V6h7zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z" />
    </svg>
  );
}

export interface ProjectCardProps {
  iframeUrl: string;
  iframeTitle: string;
  label: string;
  projectTitle: string;
  description: string;
  tags: string[];
  viewUrl: string;
  descriptionSide?: "left" | "right";
}

export function ProjectCard({
  iframeUrl,
  iframeTitle,
  label,
  projectTitle,
  description,
  tags,
  viewUrl,
  descriptionSide = "right",
}: ProjectCardProps) {
  const iframeContainerRef = useRef<HTMLDivElement>(null);
  const [iframeScale, setIframeScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      if (iframeContainerRef.current) {
        const containerWidth = iframeContainerRef.current.offsetWidth;
        setIframeScale(containerWidth / 1440);
      }
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  const isDescLeft = descriptionSide === "left";
  return (
    <div className="group flex flex-col xl:flex-row gap-6 xl:gap-8 items-stretch">
      <div
        ref={iframeContainerRef}
        className={`xl:basis-[62%] overflow-hidden bg-[#1a1a1c] dark:bg-[#0a0a0a] w-full ${
          isDescLeft ? "order-2 xl:order-2" : "order-1 xl:order-1"
        }`}
        style={{ height: `${900 * iframeScale}px` }}
      >
        <iframe
          src={iframeUrl}
          title={iframeTitle}
          loading="lazy"
          scrolling="no"
          className={`w-[1440px] h-[900px] border-0 pointer-events-none origin-top-left aspect-[4/5]`}
          style={{ scale: iframeScale }}
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
      <div
        className={`xl:basis-[38%] bg-[#fdfbf7] dark:bg-[#1f1f21] flex flex-col justify-center p-8 md:p-10 shadow-xl dark:shadow-none ${
          isDescLeft ? "order-1 xl:order-1" : "order-2 xl:order-2"
        }`}
      >
        <span className="font-headline text-xs tracking-widest text-[#cc9900] dark:text-[#FFBF00] mb-4">
          {label}
        </span>
        <h4 className="font-headline text-3xl font-bold mb-5 text-[#1a1a1c] dark:text-[#e4e2e4]">
          {projectTitle}
        </h4>
        <p className="text-[#6b5e44] dark:text-[#9c8f78] mb-8 font-light leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>
        <a
          href={viewUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 font-headline text-sm font-bold tracking-widest uppercase text-[#1a1a1c] dark:text-[#e4e2e4] group-hover:text-[#cc9900] dark:group-hover:text-[#FFBF00] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9900] dark:focus-visible:ring-[#FFBF00]"
        >
          VIEW_SITE
          <IconExternal />
        </a>
      </div>
    </div>
  );
}
