import { Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Experience from "@/components/Experience";
import GitHubProjects from "@/components/GitHubProjects";
import WakatimeWidget from "@/components/WakatimeWidget";
import Projects from "@/components/Projects";
import BlogSection from "@/components/BlogSection";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import LoadingScreen from "@/components/LoadingScreen";
import ParticleCanvas from "@/components/ParticleCanvas";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "dhiyaulhaq";

function SectionDivider() {
  return <div style={{ height: 1, background: "linear-gradient(90deg, transparent, #162033 30%, #162033 70%, transparent)", margin: "0 24px" }} />;
}

function GitHubSkeleton() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16 }}>
      {[1,2,3].map(i => (
        <div key={i} style={{ height: 200, background: "#0a0f1a", border: "1px solid #162033", borderRadius: 14, animation: "pulse 2s ease infinite" }} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ParticleCanvas />
      <div className="scanlines" aria-hidden="true" />

      <main style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Hero />

        <SectionDivider />
        <About />

        <SectionDivider />
        <TechStack />

        <SectionDivider />
        <Experience />

        {/* ── GitHub Live Projects ── */}
        <SectionDivider />
        <section id="github" style={{ padding: "120px 0", background: "#080c14", position: "relative" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            <div style={{ marginBottom: 52 }}>
              <div className="section-label">05 — GitHub</div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#e8f4ff", margin: 0 }}>
                  Open source &<br /><span className="gradient-text">live activity.</span>
                </h2>
                <div style={{ padding: "8px 16px", background: "#00ff8808", border: "1px solid #00ff8825", borderRadius: 8, display: "flex", alignItems: "center", gap: 7 }}>
                  <div style={{ width: 7, height: 7, borderRadius: "50%", background: "#00ff88", boxShadow: "0 0 6px #00ff88", animation: "pulse-glow 2s ease infinite" }} />
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#00ff88", letterSpacing: "0.08em" }}>
                    LIVE · github.com/{GITHUB_USERNAME}
                  </span>
                </div>
              </div>
            </div>

            <Suspense fallback={<GitHubSkeleton />}>
              <GitHubProjects />
            </Suspense>
          </div>
        </section>

        {/* ── Wakatime + Projects ── */}
        <SectionDivider />
        <section id="projects" style={{ padding: "120px 0" }}>
          <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
            <div className="section-label">06 — Activity & Projects</div>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.02em", lineHeight: 1.1, color: "#e8f4ff", marginBottom: 48 }}>
              Code &amp; <span className="gradient-text">highlights.</span>
            </h2>

            {/* Wakatime widget */}
            <div style={{ marginBottom: 48 }}>
              <WakatimeWidget />
            </div>

            {/* Featured manual projects */}
            <div style={{ marginTop: 16 }}>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#567088", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 24 }}>
                // Featured Research & Projects
              </div>
              <Projects />
            </div>
          </div>
        </section>

        <SectionDivider />
        <BlogSection />

        <Contact />
      </main>

      <BackToTop />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.5} }
      `}</style>
    </>
  );
}
