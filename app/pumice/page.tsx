import type { Metadata } from "next";
import { PumiceView } from "../components/PumiceView";

export const metadata: Metadata = {
  title: "Pumice — Hazel Div Alden",
  description:
    "A Vulkan-based LLM inference engine written from scratch in C and GLSL compute shaders.",
};

export default function PumicePage() {
  return <PumiceView />;
}
