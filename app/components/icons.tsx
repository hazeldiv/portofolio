import type { ReactNode } from "react";

type IconProps = {
  cls?: string;
};

function Svg({
  cls,
  viewBox = "0 0 24 24",
  children,
}: IconProps & { viewBox?: string; children: ReactNode }) {
  return (
    <svg
      viewBox={viewBox}
      className={cls}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      {children}
    </svg>
  );
}

export function IconSun({ cls = "w-4 h-4" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM11 1h2v3h-2V1zm0 19h2v3h-2v-3zM3.515 4.929l1.414-1.414L7.05 5.636 5.636 7.05 3.515 4.93zM16.95 18.364l1.414-1.414 2.121 2.121-1.414 1.414-2.121-2.121zm2.121-14.85l1.414 1.415-2.121 2.121-1.414-1.414 2.121-2.121zM5.636 16.95l1.414 1.414-2.121 2.121-1.414-1.414 2.121-2.121zM23 11v2h-3v-2h3zM4 11v2H1v-2h3z" />
    </Svg>
  );
}

export function IconMoon({ cls = "w-4 h-4" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M10 7a7 7 0 0 0 12 4.9v.1c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2h.1A6.979 6.979 0 0 0 10 7zm-6 5a8 8 0 0 0 15.062 3.762A9 9 0 0 1 8.238 4.938 7.999 7.999 0 0 0 4 12z" />
    </Svg>
  );
}

export function IconMenu({ cls = "w-6 h-6" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
    </Svg>
  );
}

export function IconClose({ cls = "w-6 h-6" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </Svg>
  );
}

export function IconArrowUp({ cls = "w-5 h-5" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z" />
    </Svg>
  );
}

export function IconArrowNE({ cls = "w-6 h-6" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z" />
    </Svg>
  );
}

export function IconGrid({ cls = "w-6 h-6" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z" />
    </Svg>
  );
}

export function IconLayers({ cls = "w-6 h-6" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z" />
    </Svg>
  );
}

export function IconMail({ cls = "w-6 h-6" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </Svg>
  );
}

export function IconOutward({ cls = "w-8 h-8" }: IconProps) {
  return (
    <Svg cls={cls}>
      <path d="M19 19H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2v7zM14 3v2h3.586l-9.293 9.293 1.414 1.414L19 6.414V10h2V3h-7z" />
    </Svg>
  );
}
