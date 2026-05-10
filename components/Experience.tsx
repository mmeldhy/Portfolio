"use client";

import { useEffect, useRef } from "react";

const experiences = [
  {
    type: "organization",
    title: "Kepala Divisi Keamanan Jaringan",
    organization: "UKM Teknologi & Informatika — Unsil",
    period: "2023 – Sekarang",
    description:
      "Memimpin divisi keamanan jaringan, menyelenggarakan workshop ethical hacking, dan membimbing anggota dalam penggunaan alat-alat keamanan seperti Wireshark, Nmap, dan Metasploit.",
    tags: ["Leadership", "Cybersecurity", "Mentoring"],
    color: "#00d9ff",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="9" cy="7" r="4" strokeLinecap="round"/>
        <path d="M23 21v-2a4 4 0 00-3-3.87" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M16 3.13a4 4 0 010 7.75" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "project",
    title: "Peneliti — Malware Detection Research",
    organization: "Lab Keamanan Jaringan — Teknik Informatika Unsil",
    period: "2024 – 2025",
    description:
      "Melakukan penelitian deteksi malware menggunakan JA4+ Fingerprinting dan XGBoost pada dataset trafik jaringan terenkripsi. Hasil penelitian dipresentasikan dalam seminar internal.",
    tags: ["Research", "Python", "Machine Learning"],
    color: "#a78bfa",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "achievement",
    title: "Peserta — CTF Competition",
    organization: "National Cyber Competition",
    period: "2024",
    description:
      "Berpartisipasi dalam kompetisi Capture the Flag (CTF) tingkat nasional, fokus pada kategori Network Forensics dan Web Exploitation.",
    tags: ["CTF", "Forensics", "Web Exploit"],
    color: "#00ff88",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <circle cx="12" cy="8" r="6" strokeLinecap="round"/>
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "education",
    title: "S1 Teknik Informatika",
    organization: "Universitas Siliwangi — Tasikmalaya",
    period: "2022 – Sekarang",
    description:
      "Menempuh pendidikan S1 Teknik Informatika dengan fokus pada keamanan jaringan dan rekayasa perangkat lunak. Aktif dalam berbagai kegiatan akademik dan organisasi kemahasiswaan.",
    tags: ["GPA: 3.7+", "Semester 6", "Informatika"],
    color: "#facc15",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6 12v5c3 3 9 3 12 0v-5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "project",
    title: "Developer — IoT Network Monitor",
    organization: "Proyek Mata Kuliah Keamanan Jaringan",
    period: "2023",
    description:
      "Membangun sistem monitoring trafik IoT real-time dengan Wireshark dan Snort sebagai proyek akhir mata kuliah. Mendapat nilai A dan dipilih sebagai proyek terbaik angkatan.",
    tags: ["IoT", "Wireshark", "Best Project"],
    color: "#00ff88",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
        <circle cx="12" cy="12" r="2" strokeLinecap="round"/>
        <path d="M16.24 7.76a6 6 0 010 8.49m-8.48-.01a6 6 0 010-8.49" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const typeColors: Record<string, string> = {
  organization: "#00d9ff",
  project: "#a78bfa",
  achievement: "#00ff88",
  education: "#facc15",
};

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el, i) => {
              setTimeout(() => el.classList.add("visible"), i * 100);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      style={{
        padding: "120px 0",
        background: "#080c14",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Decorative orbs */}
      <div
        style={{
          position: "absolute",
          right: -100,
          top: "20%",
          width: 350,
          height: 350,
          background: "radial-gradient(circle, #a78bfa08, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: -50,
          bottom: "20%",
          width: 300,
          height: 300,
          background: "radial-gradient(circle, #00d9ff06, transparent 70%)",
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
            marginBottom: 64,
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <div className="section-label">04 — Experience</div>
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
              Journey &amp;
              <br />
              <span className="gradient-text">milestones.</span>
            </h2>
          </div>
          {/* Legend */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
            }}
          >
            {Object.entries(typeColors).map(([type, color]) => (
              <div
                key={type}
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
                    background: color,
                    boxShadow: `0 0 5px ${color}60`,
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#567088",
                    letterSpacing: "0.06em",
                    textTransform: "capitalize",
                  }}
                >
                  {type}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 20,
              top: 0,
              bottom: 0,
              width: 1,
              background: "linear-gradient(to bottom, #00d9ff30, #162033, transparent)",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 0,
            }}
          >
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="reveal"
                style={{
                  display: "flex",
                  gap: 32,
                  paddingLeft: 8,
                  paddingBottom: 36,
                  transitionDelay: `${i * 100}ms`,
                }}
              >
                {/* Timeline node */}
                <div
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 0,
                    marginTop: 2,
                    zIndex: 1,
                  }}
                >
                  {/* Dot */}
                  <div
                    style={{
                      width: 24,
                      height: 24,
                      borderRadius: "50%",
                      background: "#0a0f1a",
                      border: `2px solid ${exp.color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: exp.color,
                      boxShadow: `0 0 12px ${exp.color}30`,
                      flexShrink: 0,
                    }}
                  >
                    <div
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: exp.color,
                      }}
                    />
                  </div>
                </div>

                {/* Content card */}
                <div
                  style={{
                    flex: 1,
                    padding: "22px 26px",
                    background: "#0a0f1a",
                    border: "1px solid #162033",
                    borderRadius: 14,
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = `${exp.color}25`;
                    el.style.background = "#0d1422";
                    el.style.boxShadow = `0 8px 32px ${exp.color}08`;
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "#162033";
                    el.style.background = "#0a0f1a";
                    el.style.boxShadow = "none";
                  }}
                >
                  {/* Top accent line */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 2,
                      background: `linear-gradient(90deg, ${exp.color}50, transparent)`,
                    }}
                  />

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      flexWrap: "wrap",
                      gap: 12,
                      marginBottom: 10,
                    }}
                  >
                    {/* Title + org */}
                    <div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 10,
                          marginBottom: 5,
                        }}
                      >
                        <div
                          style={{
                            width: 32,
                            height: 32,
                            borderRadius: 8,
                            background: `${exp.color}15`,
                            border: `1px solid ${exp.color}30`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: exp.color,
                            flexShrink: 0,
                          }}
                        >
                          {exp.icon}
                        </div>
                        <h3
                          style={{
                            fontFamily: "var(--font-display)",
                            fontWeight: 700,
                            fontSize: 16,
                            color: "#e8f4ff",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {exp.title}
                        </h3>
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 11,
                          color: exp.color,
                          letterSpacing: "0.04em",
                          paddingLeft: 42,
                        }}
                      >
                        {exp.organization}
                      </div>
                    </div>

                    {/* Period */}
                    <div
                      style={{
                        padding: "4px 12px",
                        background: `${exp.color}10`,
                        border: `1px solid ${exp.color}25`,
                        borderRadius: 6,
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: exp.color,
                        flexShrink: 0,
                        letterSpacing: "0.04em",
                      }}
                    >
                      {exp.period}
                    </div>
                  </div>

                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.75,
                      color: "#7a8fa5",
                      marginBottom: 16,
                      paddingLeft: 42,
                    }}
                  >
                    {exp.description}
                  </p>

                  {/* Tags */}
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: 6,
                      paddingLeft: 42,
                    }}
                  >
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        style={{
                          padding: "2px 10px",
                          background: "#0d1422",
                          border: "1px solid #1e2d3d",
                          borderRadius: 5,
                          fontFamily: "var(--font-mono)",
                          fontSize: 10.5,
                          color: "#567088",
                          letterSpacing: "0.04em",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
