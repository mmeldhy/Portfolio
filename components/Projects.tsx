"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    id: "01",
    title: "Malware Detection Analysis",
    subtitle: "Network Traffic Security Research",
    description:
      "Riset deteksi malware menggunakan teknik JA4+ Fingerprinting pada trafik terenkripsi TLS/SSL. Mengimplementasikan model XGBoost untuk klasifikasi trafik berbahaya dengan akurasi tinggi pada dataset trafik jaringan nyata.",
    tags: [
      { label: "Cybersecurity", color: "cyan" },
      { label: "Python", color: "green" },
      { label: "Machine Learning", color: "purple" },
      { label: "XGBoost", color: "orange" },
    ],
    highlights: [
      "JA4+ TLS Fingerprinting",
      "XGBoost Classifier",
      "Encrypted Traffic Analysis",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    accentColor: "#00d9ff",
    status: "Research",
  },
  {
    id: "02",
    title: "IoT Traffic Investigation",
    subtitle: "Network Monitoring & Analysis",
    description:
      "Rancang bangun sistem pemantauan dan analisis trafik jaringan IoT secara real-time menggunakan Wireshark dan Snort. Sistem dapat mengidentifikasi pola anomali komunikasi perangkat IoT dan memberikan alert keamanan.",
    tags: [
      { label: "Networking", color: "cyan" },
      { label: "Wireshark", color: "green" },
      { label: "IoT", color: "orange" },
      { label: "Snort", color: "purple" },
    ],
    highlights: [
      "Real-time Monitoring",
      "Anomaly Detection",
      "Snort IDS Integration",
    ],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <circle cx="12" cy="12" r="2"/>
        <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49m11.31-2.82a10 10 0 010 14.14m-14.14 0a10 10 0 010-14.14" strokeLinecap="round"/>
      </svg>
    ),
    accentColor: "#00ff88",
    status: "Completed",
  },
  {
    id: "03",
    title: "Personal Portfolio",
    subtitle: "Fullstack Web Application",
    description:
      "Website portofolio fullstack responsif yang dibangun dengan Next.js 15 App Router, Tailwind CSS v4, dan TypeScript. Menampilkan desain dark-mode modern dengan animasi CSS murni dan performa tinggi.",
    tags: [
      { label: "Next.js", color: "cyan" },
      { label: "Tailwind CSS", color: "green" },
      { label: "TypeScript", color: "purple" },
    ],
    highlights: ["App Router Architecture", "Dark Mode UI", "CSS Animations"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
        <polyline points="16 18 22 12 16 6" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" strokeLinecap="round" strokeLinejoin="round"/>
        <line x1="12" y1="2" x2="12" y2="22" strokeLinecap="round"/>
      </svg>
    ),
    accentColor: "#a78bfa",
    status: "Live",
  },
];

const tagStyles: Record<string, { bg: string; text: string; border: string }> = {
  cyan: { bg: "#00d9ff15", text: "#00d9ff", border: "#00d9ff30" },
  green: { bg: "#00ff8815", text: "#00ff88", border: "#00ff8830" },
  purple: { bg: "#a78bfa15", text: "#a78bfa", border: "#a78bfa30" },
  orange: { bg: "#fb923c15", text: "#fb923c", border: "#fb923c30" },
};

const statusStyles: Record<string, { bg: string; color: string; dot: string }> = {
  Research: { bg: "#a78bfa10", color: "#a78bfa", dot: "#a78bfa" },
  Completed: { bg: "#00ff8810", color: "#00ff88", dot: "#00ff88" },
  Live: { bg: "#00d9ff10", color: "#00d9ff", dot: "#00d9ff" },
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 150);
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
      id="projects"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decoration */}
      <div
        style={{
          position: "absolute",
          right: -150,
          bottom: -150,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #a78bfa08, transparent 70%)",
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
            <div className="section-label">03 — Projects</div>
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
              Work that
              <br />
              <span className="gradient-text">speaks for itself.</span>
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
            Beberapa proyek yang telah saya kerjakan — dari riset keamanan
            hingga produk web.
          </p>
        </div>

        {/* Project Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 20,
          }}
        >
          {projects.map((project, i) => (
            <div
              key={project.id}
              className="reveal project-card"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              {/* Card top bar */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: 20,
                }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${project.accentColor}15`,
                    border: `1px solid ${project.accentColor}30`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: project.accentColor,
                  }}
                >
                  {project.icon}
                </div>

                {/* Status + ID */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-end",
                    gap: 6,
                  }}
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 5,
                      padding: "3px 10px",
                      background: statusStyles[project.status].bg,
                      borderRadius: 99,
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: statusStyles[project.status].color,
                    }}
                  >
                    <span
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: "50%",
                        background: statusStyles[project.status].dot,
                        boxShadow: `0 0 4px ${statusStyles[project.status].dot}`,
                      }}
                    />
                    {project.status}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 22,
                      fontWeight: 700,
                      color: "#162033",
                    }}
                  >
                    {project.id}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#e8f4ff",
                  marginBottom: 4,
                  letterSpacing: "-0.01em",
                }}
              >
                {project.title}
              </h3>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: project.accentColor,
                  marginBottom: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                {project.subtitle}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: 1,
                  background: `linear-gradient(90deg, ${project.accentColor}30, transparent)`,
                  marginBottom: 16,
                }}
              />

              {/* Description */}
              <p
                style={{
                  fontSize: 14,
                  lineHeight: 1.75,
                  color: "#7a8fa5",
                  marginBottom: 20,
                  flex: 1,
                }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <div style={{ marginBottom: 20 }}>
                {project.highlights.map((h) => (
                  <div
                    key={h}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      marginBottom: 6,
                    }}
                  >
                    <span
                      style={{
                        width: 4,
                        height: 4,
                        borderRadius: "50%",
                        background: project.accentColor,
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: "#7a8fa5",
                      }}
                    >
                      {h}
                    </span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tags.map((tag) => {
                  const s = tagStyles[tag.color];
                  return (
                    <span
                      key={tag.label}
                      style={{
                        padding: "3px 10px",
                        background: s.bg,
                        border: `1px solid ${s.border}`,
                        borderRadius: 99,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: s.text,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tag.label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal"
          style={{
            marginTop: 48,
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              color: "#567088",
              marginBottom: 20,
            }}
          >
            Tertarik berkolaborasi? Mari berdiskusi lebih lanjut.
          </p>
          <a href="#contact" className="btn-primary" style={{ display: "inline-flex" }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
}
