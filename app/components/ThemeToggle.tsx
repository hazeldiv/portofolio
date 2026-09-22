"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import { IconMoon, IconSun } from "./icons";

const focusRingClass =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#cc9900] dark:focus-visible:ring-[#FFBF00] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#131315]";

const emptySubscribe = () => () => {};
const getClientSnapshot = () => true;
const getServerSnapshot = () => false;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!mounted) return <div className="w-[94px] h-[34px]" />;

  return (
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
  );
}
