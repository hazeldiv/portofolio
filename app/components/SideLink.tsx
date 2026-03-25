import type { ReactNode } from "react";

export function SideLink({
  href,
  label,
  icon,
  active,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  active?: boolean;
}) {
  return (
    <a
      href={href}
      aria-current={active ? "page" : undefined}
      className="group flex flex-col items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9900] dark:focus-visible:ring-[#FFBF00]"
    >
      <span
        className={`transition-opacity ${
          active
            ? "opacity-100 text-[#cc9900] dark:text-[#FFBF00]"
            : "opacity-40 group-hover:opacity-100 text-[#6b5e44] dark:text-[#D4C5AB]"
        }`}
      >
        {icon}
      </span>
      <span
        className={`font-headline text-[10px] tracking-[0.2em] font-medium transition-opacity ${
          active
            ? "opacity-100 text-[#cc9900] dark:text-[#FFBF00] font-bold"
            : "opacity-40 group-hover:opacity-100 text-[#6b5e44] dark:text-[#D4C5AB]"
        }`}
        style={{ writingMode: "vertical-rl" }}
      >
        {label}
      </span>
    </a>
  );
}
