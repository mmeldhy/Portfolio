"use client";

import { useEffect, useState } from "react";

// Replace with your Wakatime username
const WAKATIME_USERNAME = process.env.NEXT_PUBLIC_WAKATIME_USERNAME ?? "memeldhy";

interface WakaStats {
  totalHours: number;
  dailyAvg: string;
  languages: { name: string; percent: number; color: string }[];
  editors: { name: string; percent: number }[];
  streak: number;
}

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Markdown: "#083fa1",
  JSON: "#292929",
  Bash: "#89e051",
  Other: "#567088",
};

// Mock data fallback — replace with real Wakatime API when username is set
const MOCK: WakaStats = {
  totalHours: 847,
  dailyAvg: "6h 12m",
  streak: 42,
  languages: [
    { name: "Python", percent: 38, color: "#3572A5" },
    { name: "TypeScript", percent: 28, color: "#3178c6" },
    { name: "JavaScript", percent: 16, color: "#f1e05a" },
    { name: "HTML/CSS", percent: 12, color: "#e34c26" },
    { name: "Other", percent: 6, color: "#567088" },
  ],
  editors: [
    { name: "VS Code", percent: 85 },
    { name: "Neovim", percent: 15 },
  ],
};

export default function WakatimeWidget() {
  const [stats, setStats] = useState<WakaStats>(MOCK);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Wakatime public stats API (requires public profile enabled)
    // Docs: https://wakatime.com/developers#stats
    const fetchStats = async () => {
      if (!WAKATIME_USERNAME || WAKATIME_USERNAME === "memeldhy") {
        // Using mock data — set NEXT_PUBLIC_WAKATIME_USERNAME to enable
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(
          `https://wakatime.com/api/v1/users/${WAKATIME_USERNAME}/stats/last_30_days`
        );
        if (!res.ok) return;
        const json = await res.json();
        const d = json.data;

        setStats({
          totalHours: Math.round(d.total_seconds / 3600),
          dailyAvg: d.human_readable_daily_average_including_other_language,
          streak: d.best_day?.total_seconds
            ? Math.round(d.best_day.total_seconds / 3600)
            : 0,
          languages: (d.languages ?? []).slice(0, 5).map(
            (l: { name: string; percent: number }) => ({
              name: l.name,
              percent: Math.round(l.percent),
              color: LANG_COLORS[l.name] ?? "#567088",
            })
          ),
          editors: (d.editors ?? []).slice(0, 3).map(
            (e: { name: string; percent: number }) => ({
              name: e.name,
              percent: Math.round(e.percent),
            })
          ),
        });
      } catch {
        // silently fall back to mock
      } finally {
        setLoading(false);
      }
    };
    fetchStats();
  }, []);

  return (
    <div
      style={{
        padding: "28px 32px",
        background: "#0a0f1a",
        border: "1px solid #162033",
        borderRadius: 14,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
        }}
      />

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: 24,
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 4,
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#a78bfa"
              strokeWidth="1.5"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 700,
                fontSize: 16,
                color: "#e8f4ff",
              }}
            >
              Coding Activity
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "#567088",
                padding: "2px 8px",
                background: "#0d1422",
                border: "1px solid #162033",
                borderRadius: 4,
              }}
            >
              via Wakatime
            </span>
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#567088",
            }}
          >
            Last 30 days · {loading ? "Loading..." : "Live data"}
          </div>
        </div>

        {/* Big stat */}
        <div style={{ textAlign: "right" }}>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 32,
              color: "#a78bfa",
              lineHeight: 1,
            }}
          >
            {stats.totalHours}h
          </div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#567088",
              marginTop: 3,
              letterSpacing: "0.06em",
            }}
          >
            TOTAL CODED
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        {/* Languages */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#567088",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            // Languages
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {stats.languages.map((lang) => (
              <div key={lang.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: 5,
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: lang.color,
                        boxShadow: `0 0 4px ${lang.color}60`,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "#c8d8e8",
                      }}
                    >
                      {lang.name}
                    </span>
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#567088",
                    }}
                  >
                    {lang.percent}%
                  </span>
                </div>
                <div
                  style={{
                    height: 4,
                    background: "#162033",
                    borderRadius: 99,
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      width: `${lang.percent}%`,
                      background: `linear-gradient(90deg, ${lang.color}, ${lang.color}80)`,
                      borderRadius: 99,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Stats */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "#567088",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              // Daily Avg
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 22,
                color: "#00d9ff",
              }}
            >
              {stats.dailyAvg}
            </div>
          </div>

          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                color: "#567088",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              // Editors
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {stats.editors.map((ed) => (
                <div
                  key={ed.name}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "#c8d8e8",
                    }}
                  >
                    {ed.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#00ff88",
                    }}
                  >
                    {ed.percent}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://wakatime.com/@${WAKATIME_USERNAME}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginTop: "auto",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#567088",
              textDecoration: "none",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.color = "#a78bfa")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.color = "#567088")
            }
          >
            View full stats on Wakatime ↗
          </a>
        </div>
      </div>
    </div>
  );
}
