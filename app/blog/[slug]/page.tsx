import { getPostBySlug, getAllPosts } from "@/lib/blog";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Dhiya Ulhaq`,
    description: post.excerpt,
  };
}

/** Convert plain markdown to safe HTML (no external deps) */
function markdownToHtml(md: string): string {
  return md
    .replace(/^### (.+)$/gm, "<h3>$1</h3>")
    .replace(/^## (.+)$/gm, "<h2>$1</h2>")
    .replace(/^# (.+)$/gm, "<h1>$1</h1>")
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/```[\w]*\n([\s\S]*?)```/g, "<pre><code>$1</code></pre>")
    .replace(/^\- (.+)$/gm, "<li>$1</li>")
    .replace(/(<li>[\s\S]*?<\/li>)/g, "<ul>$1</ul>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
    .replace(/\n\n/g, "</p><p>")
    .replace(/^(?!<[hupca])/gm, "")
    .replace(/^<\/p><p>(<h[1-3]>)/gm, "$1")
    .trim();
}

function formatDate(dateStr: string) {
  try {
    return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(dateStr));
  } catch { return dateStr; }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const html = markdownToHtml(post.content);

  return (
    <div style={{ minHeight: "100vh", background: "#05070b", paddingTop: 80 }}>
      {/* Back nav */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 24px 0" }}>
        <Link href="/#blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-mono)", fontSize: 12, color: "#567088", textDecoration: "none", transition: "color .2s" }}
          onMouseEnter={e => ((e.target as HTMLElement).style.color = "#00d9ff")}
          onMouseLeave={e => ((e.target as HTMLElement).style.color = "#567088")}
        >
          ← Back to Portfolio
        </Link>
      </div>

      {/* Article */}
      <article style={{ maxWidth: 760, margin: "0 auto", padding: "40px 24px 100px" }}>
        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 20 }}>
          {post.tags.map(tag => (
            <span key={tag} style={{ padding: "2px 10px", background: "#00d9ff10", border: "1px solid #00d9ff25", borderRadius: 99, fontFamily: "var(--font-mono)", fontSize: 11, color: "#00d9ff" }}>
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(26px,4vw,44px)", letterSpacing: "-0.02em", lineHeight: 1.15, color: "#e8f4ff", marginBottom: 18 }}>
          {post.title}
        </h1>

        {/* Meta */}
        <div style={{ display: "flex", gap: 20, marginBottom: 48, paddingBottom: 24, borderBottom: "1px solid #162033" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#567088" }}>{formatDate(post.date)}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#567088" }}>· {post.readTime} min read</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "#567088" }}>· Dhiya Ulhaq</span>
        </div>

        {/* Content */}
        <div
          style={{ lineHeight: 1.85 }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      {/* Prose styles */}
      <style>{`
        article h1, article h2, article h3 {
          font-family: var(--font-display);
          font-weight: 700;
          color: #e8f4ff;
          margin: 36px 0 14px;
          letter-spacing: -0.02em;
          line-height: 1.2;
        }
        article h1 { font-size: 30px; }
        article h2 { font-size: 24px; padding-top: 12px; border-top: 1px solid #162033; }
        article h3 { font-size: 18px; color: #00d9ff; }
        article p { font-size: 16px; color: #7a8fa5; margin: 0 0 18px; }
        article strong { color: #c8d8e8; font-weight: 600; }
        article em { color: #a78bfa; font-style: italic; }
        article a { color: #00d9ff; text-decoration: underline; text-decoration-color: #00d9ff40; }
        article a:hover { text-decoration-color: #00d9ff; }
        article code {
          font-family: var(--font-mono);
          font-size: 13px;
          background: #0d1422;
          border: 1px solid #162033;
          border-radius: 5px;
          padding: 1px 7px;
          color: #00ff88;
        }
        article pre {
          background: #0a0f1a;
          border: 1px solid #162033;
          border-radius: 10px;
          padding: 20px 22px;
          overflow-x: auto;
          margin: 20px 0;
        }
        article pre code {
          background: none;
          border: none;
          padding: 0;
          font-size: 13px;
          color: #c8d8e8;
          line-height: 1.8;
        }
        article ul { padding-left: 0; margin: 0 0 18px; list-style: none; }
        article ul ul { margin: 0; }
        article li { position: relative; padding-left: 20px; font-size: 15px; color: #7a8fa5; margin-bottom: 8px; }
        article li::before { content: "›"; position: absolute; left: 0; color: #00d9ff; font-family: var(--font-mono); }
      `}</style>
    </div>
  );
}
