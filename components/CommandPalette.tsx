"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface Command {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  icon: React.ReactNode;
  action: () => void;
  category: string;
}

const NAV_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const LINK_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const COPY_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeLinecap="round"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round"/>
  </svg>
);
const MAIL_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round"/>
    <polyline points="22,6 12,13 2,6" strokeLinecap="round"/>
  </svg>
);

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const commands: Command[] = [
    {
      id: "home",
      label: "Go to Home",
      description: "Scroll to top",
      icon: NAV_ICON,
      action: () => window.scrollTo({ top: 0, behavior: "smooth" }),
      category: "Navigation",
    },
    {
      id: "about",
      label: "Go to About",
      description: "Learn about me",
      icon: NAV_ICON,
      action: () => scrollTo("about"),
      category: "Navigation",
    },
    {
      id: "skills",
      label: "Go to Tech Stack",
      description: "Tools & technologies",
      icon: NAV_ICON,
      action: () => scrollTo("skills"),
      category: "Navigation",
    },
    {
      id: "experience",
      label: "Go to Experience",
      description: "Journey & milestones",
      icon: NAV_ICON,
      action: () => scrollTo("experience"),
      category: "Navigation",
    },
    {
      id: "github",
      label: "Go to GitHub Projects",
      description: "Live repos from GitHub",
      icon: NAV_ICON,
      action: () => scrollTo("github"),
      category: "Navigation",
    },
    {
      id: "projects",
      label: "Go to Projects",
      description: "Featured work",
      icon: NAV_ICON,
      action: () => scrollTo("projects"),
      category: "Navigation",
    },
    {
      id: "blog",
      label: "Go to Blog",
      description: "Writing & articles",
      icon: NAV_ICON,
      action: () => scrollTo("blog"),
      category: "Navigation",
    },
    {
      id: "contact",
      label: "Go to Contact",
      description: "Get in touch",
      icon: NAV_ICON,
      action: () => scrollTo("contact"),
      category: "Navigation",
    },
    {
      id: "github-profile",
      label: "Open GitHub Profile",
      description: "github.com/dhiyaulhaq",
      icon: LINK_ICON,
      action: () => window.open("https://github.com/dhiyaulhaq", "_blank"),
      category: "Links",
    },
    {
      id: "linkedin",
      label: "Open LinkedIn",
      description: "linkedin.com/in/dhiyaulhaq",
      icon: LINK_ICON,
      action: () =>
        window.open("https://linkedin.com/in/dhiyaulhaq", "_blank"),
      category: "Links",
    },
    {
      id: "copy-email",
      label: "Copy Email Address",
      description: "dhiyaulhaq@email.com",
      shortcut: "⌘C",
      icon: COPY_ICON,
      action: () => {
        navigator.clipboard.writeText("dhiyaulhaq@email.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      },
      category: "Actions",
    },
    {
      id: "send-email",
      label: "Send Email",
      description: "Open email client",
      icon: MAIL_ICON,
      action: () =>
        (window.location.href = "mailto:dhiyaulhaq@email.com"),
      category: "Actions",
    },
    {
      id: "download-cv",
      label: "Download CV",
      description: "Get my resume",
      icon: (
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" strokeLinecap="round"/>
          <polyline points="7 10 12 15 17 10" strokeLinecap="round"/>
          <line x1="12" y1="15" x2="12" y2="3" strokeLinecap="round"/>
        </svg>
      ),
      action: () => window.open("/cv.pdf", "_blank"),
      category: "Actions",
    },
  ];

  const filtered = commands.filter(
    (c) =>
      !query ||
      c.label.toLowerCase().includes(query.toLowerCase()) ||
      c.description?.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  const grouped = filtered.reduce<Record<string, Command[]>>((acc, cmd) => {
    (acc[cmd.category] ??= []).push(cmd);
    return acc;
  }, {});

  const flatFiltered = Object.values(grouped).flat();

  const handleOpen = useCallback(() => {
    setOpen(true);
    setQuery("");
    setSelected(0);
    setTimeout(() => inputRef.current?.focus(), 50);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
    setQuery("");
  }, []);

  const runSelected = useCallback(() => {
    flatFiltered[selected]?.action();
    handleClose();
  }, [flatFiltered, selected, handleClose]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        open ? handleClose() : handleOpen();
      }
      if (!open) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "ArrowDown")
        setSelected((s) => Math.min(s + 1, flatFiltered.length - 1));
      if (e.key === "ArrowUp") setSelected((s) => Math.max(s - 1, 0));
      if (e.key === "Enter") runSelected();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, flatFiltered.length, handleClose, handleOpen, runSelected]);

  useEffect(() => {
    setSelected(0);
  }, [query]);

  if (!open) return null;

  let flatIdx = 0;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9000,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        paddingTop: "15vh",
      }}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(3, 5, 10, 0.8)",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Modal */}
      <div
        style={{
          position: "relative",
          width: "min(580px, 92vw)",
          background: "#0a0f1a",
          border: "1px solid #00d9ff30",
          borderRadius: 16,
          overflow: "hidden",
          boxShadow: "0 32px 80px #000000e0, 0 0 0 1px #00d9ff15",
          animation: "paletteIn 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "16px 20px",
            borderBottom: "1px solid #162033",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#567088"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" strokeLinecap="round" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search..."
            style={{
              flex: 1,
              background: "none",
              border: "none",
              outline: "none",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
              color: "#e8f4ff",
              letterSpacing: "0.02em",
            }}
          />
          {copied && (
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "#00ff88",
                padding: "2px 8px",
                background: "#00ff8815",
                borderRadius: 4,
              }}
            >
              Copied!
            </span>
          )}
          <kbd
            style={{
              padding: "3px 8px",
              background: "#0d1422",
              border: "1px solid #162033",
              borderRadius: 5,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#567088",
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div style={{ maxHeight: 360, overflowY: "auto", padding: "8px" }}>
          {Object.entries(grouped).map(([category, cmds]) => (
            <div key={category}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#2a3a4a",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  padding: "8px 12px 4px",
                }}
              >
                {category}
              </div>
              {cmds.map((cmd) => {
                const idx = flatIdx++;
                const isSelected = idx === selected;
                return (
                  <button
                    key={cmd.id}
                    onClick={() => {
                      cmd.action();
                      handleClose();
                    }}
                    onMouseEnter={() => setSelected(idx)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 12px",
                      background: isSelected ? "#00d9ff10" : "transparent",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      transition: "background 0.12s ease",
                      textAlign: "left",
                    }}
                  >
                    <div
                      style={{
                        width: 28,
                        height: 28,
                        borderRadius: 7,
                        background: isSelected ? "#00d9ff15" : "#0d1422",
                        border: `1px solid ${isSelected ? "#00d9ff30" : "#162033"}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: isSelected ? "#00d9ff" : "#567088",
                        flexShrink: 0,
                        transition: "all 0.12s ease",
                      }}
                    >
                      {cmd.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 13.5,
                          fontWeight: 500,
                          color: isSelected ? "#e8f4ff" : "#c8d8e8",
                          transition: "color 0.12s ease",
                        }}
                      >
                        {cmd.label}
                      </div>
                      {cmd.description && (
                        <div
                          style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: 11,
                            color: "#567088",
                            marginTop: 1,
                          }}
                        >
                          {cmd.description}
                        </div>
                      )}
                    </div>
                    {isSelected && (
                      <kbd
                        style={{
                          padding: "2px 8px",
                          background: "#0d1422",
                          border: "1px solid #162033",
                          borderRadius: 4,
                          fontFamily: "var(--font-mono)",
                          fontSize: 10,
                          color: "#567088",
                          flexShrink: 0,
                        }}
                      >
                        ↵
                      </kbd>
                    )}
                  </button>
                );
              })}
            </div>
          ))}

          {flatFiltered.length === 0 && (
            <div
              style={{
                padding: "32px",
                textAlign: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "#567088",
              }}
            >
              No results for &ldquo;{query}&rdquo;
            </div>
          )}
        </div>

        {/* Footer */}
        <div
          style={{
            padding: "10px 20px",
            borderTop: "1px solid #162033",
            display: "flex",
            gap: 16,
            alignItems: "center",
          }}
        >
          {[
            { key: "↑↓", label: "navigate" },
            { key: "↵", label: "select" },
            { key: "Esc", label: "close" },
          ].map((k) => (
            <div
              key={k.key}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
              }}
            >
              <kbd
                style={{
                  padding: "2px 7px",
                  background: "#0d1422",
                  border: "1px solid #162033",
                  borderRadius: 4,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#567088",
                }}
              >
                {k.key}
              </kbd>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#2a3a4a",
                }}
              >
                {k.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes paletteIn {
          from { opacity: 0; transform: scale(0.96) translateY(-8px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
}
