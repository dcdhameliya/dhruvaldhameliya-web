import { ImageResponse } from "next/og";

export const alt = "Dhruval Dhameliya — Software Engineer, Android at Meta";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "60px 80px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              fontSize: 28,
              color: "#94a3b8",
              letterSpacing: "-0.02em",
            }}
          >
            dhruvaldhameliya.com
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              letterSpacing: "-0.03em",
              background: "linear-gradient(90deg, #60a5fa, #a78bfa, #f472b6)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Dhruval Dhameliya
          </div>
          <div
            style={{
              fontSize: 32,
              color: "#e2e8f0",
              lineHeight: 1.4,
              maxWidth: "800px",
            }}
          >
            Software Engineer, Android at Meta
          </div>
          <div
            style={{
              fontSize: 22,
              color: "#94a3b8",
              marginTop: "8px",
            }}
          >
            Android · iOS · Mobile Architecture · System Design
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
