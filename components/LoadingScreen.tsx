"use client";

import { useEffect, useState } from "react";

const bootLines = [
  { text: "INITIALIZING SYSTEM...", delay: 0 },
  { text: "LOADING MODULES: [cybersecurity] [webdev]", delay: 320 },
  { text: "CHECKING DEPENDENCIES... OK", delay: 620 },
  { text: "MOUNTING PORTFOLIO v1.0.0", delay: 920 },
  { text: "ACCESS GRANTED ✓", delay: 1200, accent: true },
];

export default function LoadingScreen() {
  const [lines, setLines] = useState<number[]>([]);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Show each line with staggered delays
    bootLines.forEach((line, i) => {
      setTimeout(() => {
        setLines((prev) => [...prev, i]);
      }, 400 + line.delay);
    });

    // Animate progress bar
    const progressTimer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(progressTimer);
          return 100;
        }
        return p + 1.2;
      });
    }, 18);

    // Start exit animation
    const exitTimer = setTimeout(() => {
      setExiting(true);
      setTimeout(() => setHidden(true), 700);
    }, 2400);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#03050a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.7s ease, transform 0.7s ease",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.04)" : "scale(1)",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(#00d9ff08 1px, transparent 1px), linear-gradient(90deg, #00d9ff08 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Center logo */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          marginBottom: 48,
        }}
      >
        {/* Pulse ring */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 100,
            height: 100,
            borderRadius: "50%",
            border: "1px solid #00d9ff30",
            animation: "pulseRing 2s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 130,
            height: 130,
            borderRadius: "50%",
            border: "1px solid #00d9ff15",
            animation: "pulseRing 2s ease-in-out infinite 0.5s",
          }}
        />

        {/* Logo circle */}
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            background: "#0a0f1a",
            border: "2px solid #00d9ff50",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 30px #00d9ff20",
            margin: "0 auto 24px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: 28,
              color: "#00d9ff",
            }}
          >
            D
          </span>
        </div>

        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: 20,
            color: "#e8f4ff",
            letterSpacing: "-0.01em",
            marginBottom: 6,
          }}
        >
          Dhiya Ulhaq Prima Yuga
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "#567088",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
          }}
        >
          Portfolio System
        </div>
      </div>

      {/* Terminal output */}
      <div
        style={{
          width: "min(420px, 90vw)",
          background: "#0a0f1a",
          border: "1px solid #162033",
          borderRadius: 10,
          padding: "16px 20px",
          marginBottom: 24,
          minHeight: 120,
        }}
      >
        {bootLines.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11.5,
              lineHeight: 2,
              opacity: lines.includes(i) ? 1 : 0,
              transform: lines.includes(i) ? "translateY(0)" : "translateY(6px)",
              transition: "all 0.3s ease",
              color: line.accent ? "#00ff88" : "#567088",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {lines.includes(i) && (
              <span style={{ color: "#00d9ff", opacity: 0.5 }}>›</span>
            )}
            {line.text}
          </div>
        ))}
      </div>

      {/* Progress bar */}
      <div
        style={{
          width: "min(420px, 90vw)",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: 8,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#567088",
              letterSpacing: "0.08em",
            }}
          >
            LOADING
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#00d9ff",
            }}
          >
            {Math.min(100, Math.round(progress))}%
          </span>
        </div>
        <div
          style={{
            height: 3,
            background: "#162033",
            borderRadius: 99,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${Math.min(100, progress)}%`,
              background: "linear-gradient(90deg, #00d9ff, #00ff88)",
              borderRadius: 99,
              boxShadow: "0 0 8px #00d9ff60",
              transition: "width 0.1s linear",
            }}
          />
        </div>
      </div>

      <style>{`
        @keyframes pulseRing {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
          50% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
