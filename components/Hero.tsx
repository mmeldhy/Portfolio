"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const target = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
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
      <div className="orb orb-cyan" style={{ width: 600, height: 600, top: -200, right: -200, opacity: 0.6 }} />
      <div className="orb orb-green" style={{ width: 400, height: 400, bottom: -100, left: -100, opacity: 0.4 }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px", width: "100%", position: "relative", zIndex: 1 }}>

        {/* ── TOP: Name + Photo row ── */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 48,
            marginBottom: 48,
            flexWrap: "wrap",
          }}
        >
          {/* Left: Text block */}
          <div style={{ flex: 1, minWidth: 280 }}>

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
                className="animate-pulse-glow"
                style={{
                  width: 7, height: 7, borderRadius: "50%",
                  background: "#00ff88", boxShadow: "0 0 6px #00ff88",
                  display: "inline-block",
                }}
              />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#00ff88", letterSpacing: "0.08em" }}>
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
              <span style={{ display: "block", fontSize: "clamp(40px, 6vw, 80px)", color: "#e8f4ff" }}>
                Dhiya Ulhaq
              </span>
              <span className="gradient-text" style={{ display: "block", fontSize: "clamp(40px, 6vw, 80px)" }}>
                Prima Yuga
              </span>
            </h1>

            {/* Typewriter */}
            <div style={{ height: 36, marginBottom: 24, opacity: visible ? 1 : 0, transition: "opacity 0.6s ease 0.5s" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(14px, 1.8vw, 18px)", color: "#567088" }}>{"> "}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(14px, 1.8vw, 18px)", color: "#00d9ff" }}>{displayed}</span>
              <span className="animate-blink" style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(14px, 1.8vw, 18px)", color: "#00d9ff", marginLeft: 2 }}>▋</span>
            </div>

            {/* Description */}
            <p
              style={{
                fontSize: 16, lineHeight: 1.75, color: "#7a8fa5", maxWidth: 520, marginBottom: 36,
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
                display: "flex", gap: 14, flexWrap: "wrap",
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
              <a href="/cv.pdf" download className="btn-secondary">
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
                display: "flex", gap: 32, marginTop: 52,
                paddingTop: 36, borderTop: "1px solid #162033",
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
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 28, color: "#00d9ff", lineHeight: 1 }}>{stat.value}</div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#567088", marginTop: 4, letterSpacing: "0.08em" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Profile Photo ── */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              flexShrink: 0,
            }}
          >
            {/* Hexagon photo frame */}
            <div style={{ position: "relative", width: 220, height: 220 }}>
              {/* Animated outer ring */}
              <div style={{
                position: "absolute",
                inset: -8,
                borderRadius: "50%",
                background: "conic-gradient(from 0deg, #00d9ff, #00ff88, #a78bfa, #00d9ff)",
                animation: "spin 4s linear infinite",
                zIndex: 0,
              }} />
              {/* White gap ring */}
              <div style={{
                position: "absolute",
                inset: -3,
                borderRadius: "50%",
                background: "#05070b",
                zIndex: 1,
              }} />
              {/* Static glow ring */}
              <div style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                boxShadow: "0 0 40px #00d9ff30, 0 0 80px #00d9ff15",
                zIndex: 2,
              }} />
              {/* Photo */}
              <div style={{
                position: "relative",
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                overflow: "hidden",
                zIndex: 3,
                border: "2px solid #00d9ff30",
              }}>
                <Image
                  src="/avatar.jpg"
                  alt="Dhiya Ulhaq Prima Yuga"
                  fill
                  style={{ objectFit: "cover", objectPosition: "center top" }}
                  priority
                />
              </div>

              {/* Status indicator dot */}
              <div style={{
                position: "absolute",
                bottom: 12,
                right: 12,
                width: 20,
                height: 20,
                borderRadius: "50%",
                background: "#00ff88",
                border: "3px solid #05070b",
                boxShadow: "0 0 10px #00ff88",
                zIndex: 4,
                animation: "pulse-glow 2s ease-in-out infinite",
              }} />
            </div>

            {/* Name badge below photo */}
            <div style={{
              padding: "8px 20px",
              background: "#0a0f1a",
              border: "1px solid #162033",
              borderRadius: 99,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 5px #00ff88" }} />
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#567088", letterSpacing: "0.06em" }}>
                @mmeldhy · Tasikmalaya, ID
              </span>
            </div>

            {/* Social quick links */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                {
                  href: "https://github.com/mmeldhy",
                  label: "GitHub",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
                {
                  href: "https://linkedin.com/in/dhiyaulhaqprimayuga",
                  label: "LinkedIn",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="2" y="9" width="4" height="12" strokeLinecap="round"/>
                      <circle cx="4" cy="4" r="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  href: "mailto:dhiyaulhaqprimayuga@gmail.com",
                  label: "Email",
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "#0a0f1a",
                    border: "1px solid #162033",
                    borderRadius: 8,
                    color: "#567088",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#00d9ff40";
                    el.style.color = "#00d9ff";
                    el.style.background = "#00d9ff10";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#162033";
                    el.style.color = "#567088";
                    el.style.background = "#0a0f1a";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── BOTTOM: Terminal widget (full width) ── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.7s",
            maxWidth: 560,
          }}
        >
          <div style={{
            background: "#0a0f1a",
            border: "1px solid #162033",
            borderRadius: 14,
            overflow: "hidden",
            boxShadow: "0 16px 40px #000000a0, 0 0 0 1px #00d9ff08",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "10px 16px", background: "#0d1422", borderBottom: "1px solid #162033" }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#ff5f57" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#febc2e" }} />
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#28c840" }} />
              <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 11, color: "#567088" }}>whoami.sh</span>
            </div>
            <div style={{ padding: "16px 20px 20px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 24px" }}>
              {[
                { prompt: "$ ", cmd: "whoami", out: "dhiya_ulhaq_prima_yuga" },
                { prompt: "$ ", cmd: "cat focus.md", out: "Network Security & ML / Fullstack Dev", outColor: "#00ff88" },
                { prompt: "$ ", cmd: "echo $STATUS", out: "→ Open to Internship" },
                { prompt: "$ ", cmd: "ls skills/", out: "cybersecurity/ webdev/ ml/" },
              ].map((line, i) => (
                <div key={i} style={{ fontFamily: "var(--font-mono)", fontSize: 12, lineHeight: 2 }}>
                  <span style={{ color: "#00ff88" }}>{line.prompt}</span>
                  <span style={{ color: "#c8d8e8" }}>{line.cmd}</span>
                  <br />
                  <span style={{ color: line.outColor ?? "#567088" }}>{line.out}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
        display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
        opacity: visible ? 0.5 : 0, transition: "opacity 0.6s ease 1.2s",
      }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#567088", letterSpacing: "0.12em" }}>SCROLL</span>
        <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, #00d9ff, transparent)" }} />
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
          .hero-photo-col { order: -1; margin-bottom: 24px; }
        }
      `}</style>
    </section>
  );
}