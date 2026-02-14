import { ImageResponse } from "next/og";
import { getProjectBySlug } from "@/lib/content";

export const alt = "Project by Dhruval Dhameliya";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let title = "Project";
  let description = "";
  let tech: string[] = [];

  try {
    const { frontmatter } = await getProjectBySlug(slug);
    title = frontmatter.title;
    description = frontmatter.description;
    tech = frontmatter.tech.slice(0, 5);
  } catch {
    // fallback to defaults
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          background:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#a78bfa",
              letterSpacing: "0.05em",
              textTransform: "uppercase" as const,
            }}
          >
            Project
          </div>
          <div
            style={{
              fontSize: 52,
              fontWeight: 700,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
              lineHeight: 1.2,
              maxWidth: "1000px",
            }}
          >
            {title}
          </div>
          {description && (
            <div
              style={{
                fontSize: 24,
                color: "#94a3b8",
                lineHeight: 1.4,
                maxWidth: "900px",
              }}
            >
              {description.length > 120
                ? description.slice(0, 120) + "..."
                : description}
            </div>
          )}
          {tech.length > 0 && (
            <div style={{ display: "flex", gap: "12px", marginTop: "8px" }}>
              {tech.map((t) => (
                <div
                  key={t}
                  style={{
                    fontSize: 18,
                    color: "#a78bfa",
                    background: "rgba(167, 139, 250, 0.15)",
                    padding: "6px 16px",
                    borderRadius: "20px",
                  }}
                >
                  {t}
                </div>
              ))}
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 24,
              color: "#94a3b8",
            }}
          >
            Dhruval Dhameliya
          </div>
          <div
            style={{
              fontSize: 20,
              color: "#64748b",
            }}
          >
            dhruvaldhameliya.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
