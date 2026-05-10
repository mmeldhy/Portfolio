"use client";

import { useEffect, useState } from "react";

const roles = [
  "Cybersecurity Enthusiast",
  "Fullstack Web Developer",
  "Network Analyst",
  "ML Researcher",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // Entrance animation
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // Typewriter effect
  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => {
        setDisplayed(target.slice(0, displayed.length + 1));
      }, 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <section
      id="home"
      className="bg-grid bg-noise"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        paddingTop: 80,
      }}
    >
      {/* Decorative Orbs */}
      <div
        className="orb orb-cyan"
        style={{
          width: 600,
          height: 600,
          top: -200,
          right: -200,
          opacity: 0.6,
        }}
      />
      <div
        className="orb orb-green"
        style={{
          width: 400,
          height: 400,
          bottom: -100,
          left: -100,
          opacity: 0.4,
        }}
      />

      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 24px",
          width: "100%",
          position: "relative",
          zIndex: 1,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 48,
          }}
        >
          {/* Left Content */}
          <div>
            {/* Status badge */}
            <div
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                background: "#00ff8808",
                border: "1px solid #00ff8830",
                borderRadius: 99,
                marginBottom: 28,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  background: "#00ff88",
                  boxShadow: "0 0 6px #00ff88",
                  display: "inline-block",
                }}
                className="animate-pulse-glow"
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  color: "#00ff88",
                  letterSpacing: "0.08em",
                }}
              >
                Open to Internship Opportunities
              </span>
            </div>

            {/* Main Name */}
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                lineHeight: 1.0,
                letterSpacing: "-0.03em",
                marginBottom: 12,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(32px)",
                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "clamp(40px, 6vw, 80px)",
                  color: "#e8f4ff",
                }}
              >
                Dhiya Ulhaq
              </span>
              <span
                className="gradient-text"
                style={{
                  display: "block",
                  fontSize: "clamp(40px, 6vw, 80px)",
                }}
              >
                Prima Yuga
              </span>
            </h1>

            {/* Typewriter subtitle */}
            <div
              style={{
                height: 36,
                marginBottom: 24,
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.5s",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  color: "#567088",
                }}
              >
                {"> "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  color: "#00d9ff",
                }}
              >
                {displayed}
              </span>
              <span
                className="animate-blink"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "clamp(14px, 1.8vw, 18px)",
                  color: "#00d9ff",
                  marginLeft: 2,
                }}
              >
                ▋
              </span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.75,
                color: "#7a8fa5",
                maxWidth: 520,
                marginBottom: 36,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
              }}
            >
              Mahasiswa Teknik Informatika semester 6 di{" "}
              <span style={{ color: "#c8d8e8" }}>Universitas Siliwangi</span>{" "}
              yang berfokus pada{" "}
              <span style={{ color: "#00d9ff" }}>keamanan jaringan</span> dan{" "}
              <span style={{ color: "#00ff88" }}>pengembangan web modern</span>.
            </p>

            {/* CTA Buttons */}
            <div
              style={{
                display: "flex",
                gap: 14,
                flexWrap: "wrap",
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.65s",
              }}
            >
              <a href="#contact" className="btn-primary">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 011 1.18 2 2 0 012.96 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91A16 16 0 0015.1 16.9l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                </svg>
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download
                className="btn-secondary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Quick stats */}
            <div
              style={{
                display: "flex",
                gap: 32,
                marginTop: 52,
                paddingTop: 36,
                borderTop: "1px solid #162033",
                opacity: visible ? 1 : 0,
                transition: "opacity 0.6s ease 0.9s",
              }}
            >
              {[
                { value: "6th", label: "Semester" },
                { value: "3+", label: "Projects" },
                { value: "7", label: "Tech Skills" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 28,
                      color: "#00d9ff",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#567088",
                      marginTop: 4,
                      letterSpacing: "0.08em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Decorative terminal window */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s",
            }}
            className="animate-float"
          >
            <div
              style={{
                width: 320,
                background: "#0a0f1a",
                border: "1px solid #162033",
                borderRadius: 14,
                overflow: "hidden",
                boxShadow: "0 32px 80px #000000a0, 0 0 0 1px #00d9ff10",
              }}
            >
              {/* Window chrome */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "12px 16px",
                  background: "#0d1422",
                  borderBottom: "1px solid #162033",
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
                <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
                <span
                  style={{
                    marginLeft: "auto",
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#567088",
                  }}
                >
                  whoami.sh
                </span>
              </div>

              {/* Terminal content */}
              <div style={{ padding: "20px 20px 24px" }}>
                {[
                  { prompt: "$ ", cmd: "whoami", color: "#00d9ff" },
                  { out: "dhiya_ulhaq_prima_yuga" },
                  { prompt: "$ ", cmd: "cat status.txt", color: "#00d9ff" },
                  { out: "→ 6th semester student" },
                  { out: "→ Universitas Siliwangi" },
                  { prompt: "$ ", cmd: "ls skills/", color: "#00d9ff" },
                  { out: "cybersecurity/  webdev/" },
                  { prompt: "$ ", cmd: "cat focus.md", color: "#00d9ff" },
                  { out: "Network Security & ML", color: "#00ff88" },
                  { out: "Fullstack Development", color: "#00ff88" },
                  { prompt: "$ ", cmd: "_", color: "#00d9ff", cursor: true },
                ].map((line, i) => (
                  <div
                    key={i}
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      lineHeight: 1.8,
                      color: line.color ?? "#567088",
                    }}
                  >
                    {line.prompt && (
                      <span style={{ color: "#00ff88" }}>{line.prompt}</span>
                    )}
                    {line.cmd && (
                      <span style={{ color: "#c8d8e8" }}>{line.cmd}</span>
                    )}
                    {line.out && <span>{line.out}</span>}
                    {line.cursor && (
                      <span className="animate-blink" style={{ color: "#00d9ff" }}>
                        ▋
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          opacity: visible ? 0.5 : 0,
          transition: "opacity 0.6s ease 1.2s",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            color: "#567088",
            letterSpacing: "0.12em",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "linear-gradient(to bottom, #00d9ff, transparent)",
          }}
        />
      </div>
    </section>
  );
}
