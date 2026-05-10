"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 120);
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
      id="about"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          left: -200,
          top: "50%",
          transform: "translateY(-50%)",
          width: 500,
          height: 500,
          background: "radial-gradient(circle, #00d9ff08, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div className="reveal" style={{ marginBottom: 64 }}>
          <div className="section-label">01 — About Me</div>
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
            Building where security
            <br />
            <span className="gradient-text">meets innovation.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "start",
          }}
        >
          {/* Left: Text */}
          <div>
            <p
              className="reveal"
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "#7a8fa5",
                marginBottom: 24,
              }}
            >
              Halo! Saya{" "}
              <span style={{ color: "#e8f4ff", fontWeight: 500 }}>
                Dhiya Ulhaq Prima Yuga
              </span>
              , mahasiswa Teknik Informatika semester 6 di{" "}
              <span style={{ color: "#00d9ff" }}>Universitas Siliwangi</span>{" "}
              yang memiliki minat besar di bidang keamanan siber dan
              pengembangan web modern.
            </p>
            <p
              className="reveal"
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "#7a8fa5",
                marginBottom: 24,
              }}
            >
              Saya berfokus pada{" "}
              <span style={{ color: "#e8f4ff" }}>
                analisis keamanan jaringan
              </span>
              , khususnya inspeksi trafik jaringan, deteksi ancaman
              menggunakan machine learning, serta implementasi alat-alat
              keamanan seperti{" "}
              <span style={{ color: "#00ff88" }}>Wireshark</span> dan{" "}
              <span style={{ color: "#00ff88" }}>Snort</span>.
            </p>
            <p
              className="reveal"
              style={{
                fontSize: 16,
                lineHeight: 1.85,
                color: "#7a8fa5",
                marginBottom: 40,
              }}
            >
              Di sisi lain, saya juga aktif membangun aplikasi web fullstack
              menggunakan{" "}
              <span style={{ color: "#00d9ff" }}>Next.js</span>,{" "}
              <span style={{ color: "#00d9ff" }}>Python</span>, dan{" "}
              <span style={{ color: "#00d9ff" }}>MongoDB</span>. Saya percaya
              bahwa developer yang baik adalah developer yang peduli terhadap
              keamanan sejak baris kode pertama.
            </p>

            {/* Education */}
            <div className="reveal">
              <div
                style={{
                  padding: "20px 24px",
                  background: "#0a0f1a",
                  border: "1px solid #162033",
                  borderRadius: 12,
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    background: "#00d9ff15",
                    border: "1px solid #00d9ff30",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00d9ff" strokeWidth="2" strokeLinecap="round">
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                    <path d="M6 12v5c3 3 9 3 12 0v-5" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: "#e8f4ff",
                      marginBottom: 4,
                    }}
                  >
                    S1 Teknik Informatika
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 12,
                      color: "#00d9ff",
                      marginBottom: 4,
                    }}
                  >
                    Universitas Siliwangi
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#567088",
                    }}
                  >
                    2022 – Sekarang · Semester 6
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Stats + Focus areas */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Stats grid */}
            <div
              className="reveal"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {[
                { value: "6th", label: "Semester", icon: "📚" },
                { value: "3+", label: "Projects Built", icon: "🛠️" },
                { value: "7", label: "Tech Skills", icon: "⚡" },
                { value: "∞", label: "Lines of Code", icon: "🖥️" },
              ].map((stat) => (
                <div key={stat.label} className="stat-card">
                  <div style={{ fontSize: 22, marginBottom: 8 }}>
                    {stat.icon}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 800,
                      fontSize: 30,
                      color: "#00d9ff",
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#567088",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Focus areas */}
            <div className="reveal">
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#567088",
                  letterSpacing: "0.1em",
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                // Focus Areas
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {[
                  {
                    label: "Network Security & Threat Detection",
                    pct: 85,
                    color: "#00d9ff",
                  },
                  {
                    label: "Fullstack Web Development",
                    pct: 80,
                    color: "#00ff88",
                  },
                  {
                    label: "Machine Learning for Security",
                    pct: 70,
                    color: "#a78bfa",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 12,
                          color: "#c8d8e8",
                        }}
                      >
                        {item.label}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          color: item.color,
                        }}
                      >
                        {item.pct}%
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
                          width: `${item.pct}%`,
                          background: `linear-gradient(90deg, ${item.color}, ${item.color}80)`,
                          borderRadius: 99,
                          transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Interest tags */}
            <div className="reveal">
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#567088",
                  letterSpacing: "0.1em",
                  marginBottom: 12,
                  textTransform: "uppercase",
                }}
              >
                // Interests
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Network Security",
                  "Malware Analysis",
                  "Web Development",
                  "IoT Security",
                  "Machine Learning",
                  "Open Source",
                  "CTF Challenges",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      background: "#0a0f1a",
                      border: "1px solid #162033",
                      borderRadius: 6,
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#7a8fa5",
                      transition: "all 0.2s ease",
                      cursor: "default",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
