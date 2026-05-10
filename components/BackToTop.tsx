"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);
      setVisible(scrollTop > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const radius = 20;
  const circ = 2 * Math.PI * radius;
  const stroke = circ - (progress / 100) * circ;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      style={{
        position: "fixed",
        bottom: 32,
        right: 32,
        width: 52,
        height: 52,
        borderRadius: "50%",
        background: "#0a0f1a",
        border: "none",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        pointerEvents: visible ? "all" : "none",
        zIndex: 100,
        boxShadow: "0 4px 24px #000000a0",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#0d1422";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px #000000a0, 0 0 16px #00d9ff20";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "#0a0f1a";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px #000000a0";
      }}
    >
      {/* Progress ring SVG */}
      <svg
        width="52"
        height="52"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform: "rotate(-90deg)",
        }}
      >
        {/* Track */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="#162033"
          strokeWidth="2"
        />
        {/* Progress */}
        <circle
          cx="26"
          cy="26"
          r={radius}
          fill="none"
          stroke="#00d9ff"
          strokeWidth="2"
          strokeDasharray={circ}
          strokeDashoffset={stroke}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.2s ease" }}
        />
      </svg>

      {/* Arrow icon */}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00d9ff"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ position: "relative", zIndex: 1 }}
      >
        <polyline points="18 15 12 9 6 15" />
      </svg>
    </button>
  );
}
