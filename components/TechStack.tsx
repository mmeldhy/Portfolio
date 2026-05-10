"use client";

import { useEffect, useRef } from "react";

const skills = [
  {
    name: "Wireshark",
    category: "Security",
    level: "Advanced",
    color: "#00d9ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M2 12h4l3-9 4 18 3-9h6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "Network Protocol Analyzer",
  },
  {
    name: "Snort",
    category: "Security",
    level: "Intermediate",
    color: "#f97316",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "Intrusion Detection System",
  },
  {
    name: "Next.js",
    category: "Frontend",
    level: "Advanced",
    color: "#e8f4ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <circle cx="12" cy="12" r="10"/>
        <path d="M8 12l4-6 4 6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 18l4-3" strokeLinecap="round"/>
      </svg>
    ),
    desc: "React Framework (App Router)",
  },
  {
    name: "Python",
    category: "Backend",
    level: "Advanced",
    color: "#facc15",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M12 2C6.48 2 4 4.48 4 7v2h8v1H4c-1.1 0-2 .9-2 2v3c0 2.21 1.79 4 4 4h2v-2c0-1.1.9-2 2-2h4c1.1 0 2-.9 2-2V7c0-2.21-1.79-4-4-4z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 22c5.52 0 8-2.48 8-5v-2h-8v-1h8c1.1 0 2-.9 2-2v-3c0-2.21-1.79-4-4-4h-2v2c0 1.1-.9 2-2 2H10c-1.1 0-2 .9-2 2v5c0 2.21 1.79 4 4 4z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    desc: "Scripting & ML Development",
  },
  {
    name: "MongoDB",
    category: "Database",
    level: "Intermediate",
    color: "#00ff88",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M12 2C7 2 4 7 4 12s3 10 8 10 8-5 8-10S17 2 12 2z" strokeLinecap="round"/>
        <path d="M12 6v12" strokeLinecap="round"/>
      </svg>
    ),
    desc: "NoSQL Database",
  },
  {
    name: "Docker",
    category: "DevOps",
    level: "Intermediate",
    color: "#38bdf8",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M22 12.5c-.2-1.6-1.5-2.5-2.5-2.5h-1v-2h-3v-2H13V4h-3v4H7v2H4c-1 0-2.5 1-2.5 2.5C1.5 15 3 17 5 17h14c2 0 3.5-2 3-4.5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 17v3" strokeLinecap="round"/>
        <path d="M19 17v3" strokeLinecap="round"/>
      </svg>
    ),
    desc: "Container Platform",
  },
  {
    name: "Git",
    category: "Tools",
    level: "Advanced",
    color: "#fb7185",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <circle cx="18" cy="18" r="3"/>
        <circle cx="6" cy="6" r="3"/>
        <circle cx="6" cy="18" r="3"/>
        <path d="M18 15V9a3 3 0 00-3-3H9" strokeLinecap="round"/>
        <path d="M6 9v6" strokeLinecap="round"/>
      </svg>
    ),
    desc: "Version Control System",
  },
];

const levelColor: Record<string, string> = {
  Advanced: "#00ff88",
  Intermediate: "#facc15",
  Beginner: "#fb923c",
};

const categoryColors: Record<string, string> = {
  Security: "#00d9ff",
  Frontend: "#e8f4ff",
  Backend: "#facc15",
  Database: "#00ff88",
  DevOps: "#38bdf8",
  Tools: "#fb7185",
};

export default function TechStack() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 80);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "#080c14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Right orb */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "30%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, #00ff8808, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div
          className="reveal"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 56,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div className="section-label">02 — Tech Stack</div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(32px, 4vw, 52px)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                color: "#e8f4ff",
              }}
            >
              Tools of the
              <br />
              <span className="gradient-text">trade.</span>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "#567088",
              maxWidth: 280,
              lineHeight: 1.8,
              textAlign: "right",
            }}
          >
            Alat dan teknologi yang saya gunakan sehari-hari untuk membangun
            dan mengamankan sistem.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {skills.map((skill, i) => (
            <div
              key={skill.name}
              className="reveal skill-badge"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 10,
                  background: `${skill.color}15`,
                  border: `1px solid ${skill.color}30`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: skill.color,
                  flexShrink: 0,
                }}
              >
                {skill.icon}
              </div>

              {/* Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 4,
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#e8f4ff",
                    }}
                  >
                    {skill.name}
                  </span>
                  <span
                    style={{
                      padding: "1px 7px",
                      background: `${categoryColors[skill.category]}15`,
                      border: `1px solid ${categoryColors[skill.category]}30`,
                      borderRadius: 4,
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: categoryColors[skill.category],
                      letterSpacing: "0.04em",
                    }}
                  >
                    {skill.category}
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#567088",
                    marginBottom: 8,
                  }}
                >
                  {skill.desc}
                </div>
                {/* Level bar */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  <div
                    style={{
                      flex: 1,
                      height: 3,
                      background: "#162033",
                      borderRadius: 99,
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        height: "100%",
                        width:
                          skill.level === "Advanced"
                            ? "85%"
                            : skill.level === "Intermediate"
                            ? "65%"
                            : "40%",
                        background: `linear-gradient(90deg, ${levelColor[skill.level]}, ${levelColor[skill.level]}80)`,
                        borderRadius: 99,
                      }}
                    />
                  </div>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 10,
                      color: levelColor[skill.level],
                      flexShrink: 0,
                    }}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Also familiar with */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            padding: "24px 28px",
            background: "#0a0f1a",
            border: "1px solid #162033",
            borderRadius: 12,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "#567088",
              marginRight: 16,
              letterSpacing: "0.08em",
            }}
          >
            Also familiar with:
          </span>
          {[
            "Tailwind CSS",
            "React",
            "Express.js",
            "Linux",
            "Nmap",
            "Metasploit",
            "XGBoost",
            "JA4+ Fingerprinting",
            "PostgreSQL",
          ].map((item) => (
            <span
              key={item}
              style={{
                display: "inline-flex",
                margin: "4px 4px",
                padding: "4px 12px",
                background: "#0d1422",
                border: "1px solid #162033",
                borderRadius: 6,
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#7a8fa5",
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
