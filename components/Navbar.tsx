"use client";

import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About",      href: "#about" },
  { label: "Skills",     href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "GitHub",     href: "#github" },
  { label: "Blog",       href: "#blog" },
  { label: "Contact",    href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const ids = navLinks.map(l => l.href.replace("#", ""));
      const cur = ids.find(id => {
        const el = document.getElementById(id);
        if (!el) return false;
        const r = el.getBoundingClientRect();
        return r.top <= 120 && r.bottom >= 120;
      });
      setActive(cur ?? "");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all .3s ease",
        background: scrolled || menuOpen ? "var(--nav-bg)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--nav-border)" : "1px solid transparent",
      }}>
        <nav style={{
          maxWidth: 1140, margin: "0 auto", padding: "14px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a href="#" style={{
            fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 20,
            letterSpacing: "-0.02em", color: "var(--text-secondary)",
            textDecoration: "none", display: "flex", alignItems: "center", gap: 4, zIndex: 60,
          }}>
            <span style={{ color: "var(--cyan)" }}>M</span>meldhy
            <span style={{
              padding: "2px 8px", background: "var(--cyan-ghost)",
              border: "1px solid var(--border-glow)", borderRadius: 4,
              fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--cyan)",
              letterSpacing: "0.08em",
            }}>.dev</span>
          </a>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{ color: active === link.href.replace("#", "") ? "var(--cyan)" : undefined }}
              >
                {link.label}
              </a>
            ))}

            {/* Cmd+K hint */}
            <button
              onClick={() => window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true, bubbles: true }))}
              title="Open command palette (⌘K)"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "6px 12px",
                background: "var(--card)", border: "1px solid var(--border)",
                borderRadius: 7, cursor: "pointer", transition: "all .2s ease",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border-glow)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round"/>
              </svg>
              <kbd style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-muted)", letterSpacing: ".04em" }}>⌘K</kbd>
            </button>

            <ThemeToggle />

            <a
              href="#contact"
              style={{
                padding: "8px 18px",
                background: "var(--cyan-ghost)", border: "1px solid var(--border-glow)",
                borderRadius: 6, fontFamily: "var(--font-mono)", fontSize: 12,
                color: "var(--cyan)", textDecoration: "none", transition: "all .2s",
                letterSpacing: "0.06em",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--cyan-ghost)"; (e.currentTarget as HTMLElement).style.opacity = "0.8"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
            >
              hire_me()
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="hamburger-btn"
            style={{ display: "none", flexDirection: "column", gap: 5, background: "none", border: "none", cursor: "pointer", padding: 4, zIndex: 60 }}
          >
            {[0, 1, 2].map(i => (
              <span key={i} style={{
                display: "block", width: 22, height: 2,
                background: menuOpen ? "var(--cyan)" : "var(--text-secondary)",
                borderRadius: 2, transition: "all .3s ease",
                transform: menuOpen
                  ? (i === 0 ? "rotate(45deg) translate(5px,5px)" : i === 2 ? "rotate(-45deg) translate(5px,-5px)" : "none")
                  : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }} />
            ))}
          </button>
        </nav>

        {/* Mobile drawer */}
        <div style={{
          maxHeight: menuOpen ? "520px" : "0px",
          overflow: "hidden", transition: "max-height .4s cubic-bezier(.16,1,.3,1)",
          borderTop: menuOpen ? "1px solid var(--border)" : "1px solid transparent",
        }}>
          <div style={{ padding: "16px 24px 28px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                style={{
                  padding: "12px 16px",
                  fontFamily: "var(--font-mono)", fontSize: 13,
                  color: active === link.href.replace("#", "") ? "var(--cyan)" : "var(--text-secondary)",
                  textDecoration: "none", borderRadius: 8,
                  background: active === link.href.replace("#", "") ? "var(--cyan-ghost)" : "transparent",
                  display: "flex", alignItems: "center", gap: 12,
                  transition: "all .2s ease",
                  transitionDelay: `${i * 35}ms`,
                  transform: menuOpen ? "translateX(0)" : "translateX(-16px)",
                  opacity: menuOpen ? 1 : 0,
                }}
              >
                <span style={{ color: "var(--text-faint)", fontSize: 11 }}>0{i + 1}</span>
                {link.label}
              </a>
            ))}
            <div style={{ marginTop: 12, display: "flex", gap: 10, alignItems: "center" }}>
              <ThemeToggle />
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                style={{
                  flex: 1, padding: "11px 20px",
                  background: "var(--cyan-ghost)", border: "1px solid var(--border-glow)",
                  borderRadius: 8, fontFamily: "var(--font-mono)", fontSize: 12,
                  color: "var(--cyan)", textDecoration: "none", textAlign: "center",
                }}
              >
                hire_me()
              </a>
            </div>
          </div>
        </div>
      </header>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}