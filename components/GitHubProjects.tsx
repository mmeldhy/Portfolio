import { getGitHubData, mapContribColor, timeAgo } from "@/lib/github";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME ?? "dhiyaulhaq";

const LANG_COLORS: Record<string, string> = {
  Python: "#3572A5", TypeScript: "#3178c6", JavaScript: "#f1e05a",
  "Jupyter Notebook": "#DA5B0B", HTML: "#e34c26", CSS: "#563d7c",
  Shell: "#89e051", Go: "#00ADD8", Rust: "#dea584",
};

export default async function GitHubProjects() {
  const data = await getGitHubData(GITHUB_USERNAME);

  if (!data) {
    return (
      <div style={{
        padding: "48px 24px", textAlign: "center",
        background: "#0a0f1a", border: "1px solid #162033", borderRadius: 14,
      }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#567088", marginBottom: 8 }}>
          // GitHub integration not configured
        </div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#2a3a4a" }}>
          Set GITHUB_TOKEN in .env.local to enable live data
        </div>
      </div>
    );
  }

  const { pinnedItems, contributionsCollection, followers, repositories } = data;
  const calendar = contributionsCollection.contributionCalendar;
  const weeks = calendar.weeks.slice(-26);

  return (
    <div>
      {/* Stats */}
      <div style={{ display: "flex", gap: 12, marginBottom: 32, flexWrap: "wrap" }}>
        {[
          { label: "Total Contributions", value: calendar.totalContributions.toLocaleString(), color: "#00d9ff" },
          { label: "Public Repos",        value: repositories.totalCount,                      color: "#00ff88" },
          { label: "Followers",           value: followers.totalCount,                          color: "#a78bfa" },
          { label: "Pinned Projects",     value: pinnedItems.nodes.length,                      color: "#facc15" },
        ].map((s) => (
          <div key={s.label} style={{
            flex: "1 1 140px", padding: "16px 20px",
            background: "#0a0f1a", border: "1px solid #162033",
            borderRadius: 10, textAlign: "center",
          }}>
            <div style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: 24, color: s.color, lineHeight: 1, marginBottom: 6,
            }}>
              {s.value}
            </div>
            <div style={{
              fontFamily: "var(--font-mono)", fontSize: 10,
              color: "#567088", letterSpacing: "0.06em", textTransform: "uppercase",
            }}>
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Contribution Heatmap */}
      <div style={{
        padding: "24px", background: "#0a0f1a",
        border: "1px solid #162033", borderRadius: 14,
        marginBottom: 32, overflowX: "auto",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between",
          alignItems: "center", marginBottom: 16,
        }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#567088", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            // Contribution Activity — Last 6 Months
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 13, color: "#00d9ff" }}>
            {calendar.totalContributions.toLocaleString()} contributions
          </div>
        </div>

        <div style={{ display: "flex", gap: 3, alignItems: "flex-end" }}>
          {weeks.map((week, wi) => (
            <div key={wi} style={{ display: "flex", flexDirection: "column", gap: 3 }}>
              {week.contributionDays.map((day) => (
                <div
                  key={day.date}
                  title={`${day.date}: ${day.contributionCount} contributions`}
                  className="contrib-cell"
                  style={{
                    width: 12, height: 12, borderRadius: 2,
                    background: mapContribColor(day.contributionCount),
                    flexShrink: 0,
                  }}
                />
              ))}
            </div>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 12, justifyContent: "flex-end" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#567088" }}>Less</span>
          {[0, 2, 5, 9, 12].map((n) => (
            <div key={n} style={{ width: 11, height: 11, borderRadius: 2, background: mapContribColor(n) }} />
          ))}
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#567088" }}>More</span>
        </div>
      </div>

      {/* Pinned Repos */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 16 }}>
        {pinnedItems.nodes.map((repo) => {
          const langColor = repo.primaryLanguage?.color ?? LANG_COLORS[repo.primaryLanguage?.name ?? ""] ?? "#567088";
          const topics = repo.repositoryTopics.nodes.slice(0, 4).map((n) => n.topic.name);

          return (
            <a key={repo.id} href={repo.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
              <div className="repo-card">
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: 2,
                  background: `linear-gradient(90deg, transparent, ${langColor}60, transparent)`,
                }} />

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#567088" strokeWidth="1.5">
                      <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#e8f4ff" }}>
                      {repo.name}
                    </span>
                  </div>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2a3a4a" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round"/>
                  </svg>
                </div>

                <p style={{ fontFamily: "var(--font-sans)", fontSize: 13.5, lineHeight: 1.65, color: "#6a7f95", flex: 1, margin: 0 }}>
                  {repo.description ?? "No description provided."}
                </p>

                {topics.length > 0 && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
                    {topics.map((t) => (
                      <span key={t} style={{
                        padding: "2px 9px", background: "#00d9ff10",
                        border: "1px solid #00d9ff20", borderRadius: 99,
                        fontFamily: "var(--font-mono)", fontSize: 10, color: "#00d9ff",
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 12, borderTop: "1px solid #162033" }}>
                  {repo.primaryLanguage && (
                    <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
                      <div style={{ width: 10, height: 10, borderRadius: "50%", background: langColor, boxShadow: `0 0 5px ${langColor}60` }} />
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#7a8fa5" }}>
                        {repo.primaryLanguage.name}
                      </span>
                    </div>
                  )}
                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#7a8fa5" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{repo.stargazerCount}</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "#7a8fa5" }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/>
                      <path d="M18 15V9a3 3 0 00-3-3H9" strokeLinecap="round"/>
                      <path d="M6 9v6" strokeLinecap="round"/>
                    </svg>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>{repo.forkCount}</span>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "#2a3a4a", marginLeft: "auto" }}>
                    {timeAgo(repo.updatedAt)}
                  </span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      <div style={{ textAlign: "center", marginTop: 28 }}>
        <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" className="repo-viewall">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"/>
          </svg>
          View all repositories on GitHub ↗
        </a>
      </div>
    </div>
  );
}