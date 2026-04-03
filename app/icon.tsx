import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 22,
        background: "#131315", // Uses the dark theme background color
        color: "#cc9900", // Signature gold color
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        borderRadius: "6px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      H
    </div>,
    {
      ...size,
    },
  );
}
