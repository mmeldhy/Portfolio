"use client";

import { useEffect, useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "dhiyaulhaqprimayuga@gmail.com",
    href: "mailto:dhiyaulhaqprimayuga@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#00d9ff",
    description: "Drop me a message anytime",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/dhiyaulhaqprimayuga",
    href: "https://linkedin.com/in/dhiyaulhaqprimayuga",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="2" y="9" width="4" height="12" strokeLinecap="round"/>
        <circle cx="4" cy="4" r="2" strokeLinecap="round"/>
      </svg>
    ),
    color: "#38bdf8",
    description: "Connect professionally",
  },
  {
    label: "GitHub",
    value: "github.com/memeldhy",
    href: "https://github.com/mmeldhy",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#e8f4ff",
    description: "See my code & repositories",
  },
];

export default function Contact() {
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
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        id="contact"
        ref={sectionRef}
        style={{
          padding: "120px 0 80px",
          background: "#080c14",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 600,
            height: 600,
            background: "radial-gradient(circle, #00d9ff06, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}
        >
          {/* Section header */}
          <div className="reveal" style={{ textAlign: "center", marginBottom: 64 }}>
            <div
              className="section-label"
              style={{ justifyContent: "center" }}
            >
              05 — Contact
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(36px, 5vw, 60px)",
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                color: "#e8f4ff",
                marginBottom: 20,
              }}
            >
              Let&apos;s build something
              <br />
              <span className="gradient-text">great together.</span>
            </h2>
            <p
              style={{
                fontSize: 16,
                color: "#7a8fa5",
                maxWidth: 480,
                margin: "0 auto",
                lineHeight: 1.75,
              }}
            >
              Saya sedang mencari kesempatan magang di bidang Cybersecurity
              atau Web Development. Jika kamu tertarik, jangan ragu untuk
              menghubungi saya!
            </p>
          </div>

          {/* Contact cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 16,
              maxWidth: 820,
              margin: "0 auto 60px",
            }}
          >
            {contactLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="reveal contact-link"
                style={{ textDecoration: "none", transitionDelay: `${i * 80}ms` }}
              >
                {/* Icon */}
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: `${link.color}12`,
                    border: `1px solid ${link.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: link.color,
                    flexShrink: 0,
                    transition: "all 0.25s ease",
                  }}
                >
                  {link.icon}
                </div>

                <div style={{ minWidth: 0, flex: 1 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#567088",
                      letterSpacing: "0.08em",
                      marginBottom: 3,
                      textTransform: "uppercase",
                    }}
                  >
                    {link.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-display)",
                      fontWeight: 600,
                      fontSize: 14,
                      color: "inherit",
                      marginBottom: 2,
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {link.value}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "#567088",
                    }}
                  >
                    {link.description}
                  </div>
                </div>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  width="14"
                  height="14"
                  style={{ flexShrink: 0, opacity: 0.4 }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>

          {/* Divider */}
          <div
            className="reveal"
            style={{
              height: 1,
              background: "linear-gradient(90deg, transparent, #162033, transparent)",
              maxWidth: 820,
              margin: "0 auto",
            }}
          />
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          background: "#080c14",
          padding: "32px 0",
          borderTop: "1px solid #0f1a27",
        }}
      >
        <div
          style={{
            maxWidth: 1140,
            margin: "0 auto",
            padding: "0 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: 16,
                color: "#c8d8e8",
              }}
            >
              <span style={{ color: "#00d9ff" }}>M</span>meldhy
            </span>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#567088",
                marginLeft: 16,
              }}
            >
              © {new Date().getFullYear()} · All rights reserved
            </span>
          </div>

          <div style={{ display: "flex", gap: 24 }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#567088",
                letterSpacing: "0.06em",
              }}
            >
              Built with{" "}
              <span style={{ color: "#00d9ff" }}>Next.js</span> +{" "}
              <span style={{ color: "#00ff88" }}>Tailwind CSS</span>
            </span>
          </div>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {[
              {
                href: "https://github.com/mmeldhy",
                label: "GitHub",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                ),
              },
              {
                href: "https://linkedin.com/in/dhiyaulhaqprimayuga",
                label: "LinkedIn",
                icon: (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="16" height="16">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="2" y="9" width="4" height="12" strokeLinecap="round"/>
                    <circle cx="4" cy="4" r="2" strokeLinecap="round"/>
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                style={{
                  width: 34,
                  height: 34,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "#162033";
                  el.style.color = "#567088";
                  el.style.background = "#0a0f1a";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
