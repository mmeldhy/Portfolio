import { getAllPosts } from "@/lib/blog";
import Link from "next/link";

const TAG_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Cybersecurity: { bg: "#00d9ff10", text: "#00d9ff",  border: "#00d9ff25" },
  Network:       { bg: "#00d9ff10", text: "#00d9ff",  border: "#00d9ff25" },
  Python:        { bg: "#facc1510", text: "#facc15",  border: "#facc1525" },
  "Next.js":     { bg: "#e8f4ff10", text: "#c8d8e8",  border: "#e8f4ff20" },
  "Tailwind CSS":{ bg: "#38bdf810", text: "#38bdf8",  border: "#38bdf825" },
  TypeScript:    { bg: "#3178c610", text: "#6ba4e8",  border: "#3178c625" },
  IoT:           { bg: "#fb923c10", text: "#fb923c",  border: "#fb923c25" },
  Wireshark:     { bg: "#00ff8810", text: "#00ff88",  border: "#00ff8825" },
  Snort:         { bg: "#00ff8810", text: "#00ff88",  border: "#00ff8825" },
  TLS:           { bg: "#00d9ff10", text: "#00d9ff",  border: "#00d9ff25" },
  ML:            { bg: "#a78bfa10", text: "#a78bfa",  border: "#a78bfa25" },
};
const DEFAULT_TAG = { bg: "#56708810", text: "#567088", border: "#56708825" };

function formatDate(dateStr: string) {
  try {
    return new Intl.DateTimeFormat("id-ID", {
      day: "numeric", month: "long", year: "numeric",
    }).format(new Date(dateStr));
  } catch { return dateStr; }
}

export default function BlogSection() {
  const posts = getAllPosts();

  return (
    <section id="blog" style={{ padding: "120px 0", position: "relative", overflow: "hidden" }}>
      <div style={{
        position: "absolute", left: "50%", top: 0, transform: "translateX(-50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, #a78bfa06, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div style={{ maxWidth: 1140, margin: "0 auto", padding: "0 24px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 20,
        }}>
          <div>
            <div className="section-label">06 — Writing</div>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(30px,4vw,50px)", letterSpacing: "-0.02em",
              lineHeight: 1.1, color: "#e8f4ff",
            }}>
              Thoughts &amp; <span className="gradient-text">research.</span>
            </h2>
          </div>
          <Link href="/blog" className="blog-viewall-btn">All posts ↗</Link>
        </div>

        {posts.length === 0 ? (
          <div style={{
            padding: "48px", textAlign: "center",
            background: "#0a0f1a", border: "1px solid #162033", borderRadius: 14,
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#567088" }}>
              // No blog posts yet — add .md files to /content/blog/
            </div>
          </div>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 18,
          }}>
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article className="blog-card">
                  <div style={{
                    position: "absolute", top: 0, left: 0, right: 0, height: 2,
                    background: "linear-gradient(90deg, transparent, #a78bfa, transparent)",
                    opacity: 0.6,
                  }} />

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#2a3a4a", letterSpacing: "0.08em" }}>
                      POST_{String(i + 1).padStart(2, "0")}
                    </span>
                    <div style={{
                      display: "flex", alignItems: "center", gap: 4,
                      padding: "3px 9px", background: "#a78bfa10",
                      border: "1px solid #a78bfa25", borderRadius: 99,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14" strokeLinecap="round"/>
                      </svg>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#a78bfa" }}>
                        {post.readTime} min read
                      </span>
                    </div>
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: 17, color: "#e8f4ff",
                    lineHeight: 1.35, letterSpacing: "-0.01em", margin: 0,
                  }}>
                    {post.title}
                  </h3>

                  <p style={{
                    fontFamily: "var(--font-sans)", fontSize: 13.5,
                    lineHeight: 1.7, color: "#6a7f95", margin: 0, flex: 1,
                  }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {post.tags.map((tag) => {
                      const s = TAG_COLORS[tag] ?? DEFAULT_TAG;
                      return (
                        <span key={tag} style={{
                          padding: "2px 9px", background: s.bg,
                          border: `1px solid ${s.border}`, borderRadius: 99,
                          fontFamily: "var(--font-mono)", fontSize: 10, color: s.text,
                        }}>
                          {tag}
                        </span>
                      );
                    })}
                  </div>

                  <div style={{
                    display: "flex", justifyContent: "space-between",
                    alignItems: "center", paddingTop: 12, borderTop: "1px solid #162033",
                  }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#567088" }}>
                      {formatDate(post.date)}
                    </span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#a78bfa" }}>
                      Read →
                    </span>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}