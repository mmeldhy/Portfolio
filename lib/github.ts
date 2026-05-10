export interface Repository {
  id: string;
  name: string;
  description: string | null;
  url: string;
  stargazerCount: number;
  forkCount: number;
  primaryLanguage: { name: string; color: string } | null;
  repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
  updatedAt: string;
  homepageUrl: string | null;
  isArchived: boolean;
}

export interface ContributionDay {
  date: string;
  contributionCount: number;
  color: string;
}

export interface GitHubUser {
  login: string;
  name: string;
  bio: string | null;
  avatarUrl: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  repositories: { totalCount: number };
  pinnedItems: { nodes: Repository[] };
  contributionsCollection: {
    contributionCalendar: {
      totalContributions: number;
      weeks: Array<{ contributionDays: ContributionDay[] }>;
    };
  };
}

const GRAPHQL_URL = "https://api.github.com/graphql";

const PINNED_REPOS_QUERY = (username: string) => `
  query {
    user(login: "${username}") {
      login
      name
      bio
      avatarUrl
      followers { totalCount }
      following { totalCount }
      repositories(privacy: PUBLIC) { totalCount }
      pinnedItems(first: 6, types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            stargazerCount
            forkCount
            isArchived
            homepageUrl
            primaryLanguage { name color }
            repositoryTopics(first: 6) {
              nodes { topic { name } }
            }
            updatedAt
          }
        }
      }
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              date
              contributionCount
              color
            }
          }
        }
      }
    }
  }
`;

export async function getGitHubData(
  username: string
): Promise<GitHubUser | null> {
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    console.warn("⚠️  GITHUB_TOKEN not set — GitHub section will be hidden.");
    return null;
  }

  try {
    const res = await fetch(GRAPHQL_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: PINNED_REPOS_QUERY(username) }),
      next: { revalidate: 3600 }, // ISR: refresh every 1 hour
    });

    if (!res.ok) {
      console.error("GitHub API error:", res.status, res.statusText);
      return null;
    }

    const json = await res.json();

    if (json.errors) {
      console.error("GitHub GraphQL errors:", json.errors);
      return null;
    }

    return json.data?.user ?? null;
  } catch (err) {
    console.error("Failed to fetch GitHub data:", err);
    return null;
  }
}

/** Map GitHub's contribution green → portfolio's cyan palette */
export function mapContribColor(count: number): string {
  if (count === 0) return "#0d1422";
  if (count <= 2) return "#00d9ff18";
  if (count <= 5) return "#00d9ff40";
  if (count <= 9) return "#00d9ff70";
  return "#00d9ff";
}

/** Format relative time (e.g. "3 days ago") */
export function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86_400_000);
  if (days === 0) return "today";
  if (days === 1) return "yesterday";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}
