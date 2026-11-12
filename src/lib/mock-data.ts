import type { Employee, Issue, Organization, Project, User } from "@/lib/types";

// Demo data for scripts/seed.ts: one organization, owned by DEMO_USER, holding everything below.
export const DEMO_ORGANIZATION: Organization = { id: "org-1", name: "Crewmark", slug: "crewmark" };

// The person the demo issues are filed by. Signing in with Google creates real users next to it.
export const DEMO_USER: User = {
  id: "user-1",
  username: "alex",
  name: "Alex",
  email: "alex@example.com", // taste-skill-ignore: placeholder until the real address is set
  profileImage: null,
};

export const MOCK_USERS: User[] = [DEMO_USER];

export const MOCK_PROJECTS: Project[] = [
  { id: "proj-1", name: "Crewmark App", emoji: "🚀" },
  { id: "proj-2", name: "SEO Growth", emoji: "📈" },
];

// The seed has no agents connected and no heartbeats, so the employees carry neither.
export const MOCK_EMPLOYEES: Omit<Employee, "runtime" | "heartbeat">[] = [
  {
    id: "emp-1",
    name: "Ada",
    role: "Software Engineer",
    description: "Full-stack engineer working on the Crewmark web app.",
    status: "working",
    projectIds: ["proj-1"],
    kpi: "Merge 10 PRs per week (GitHub).",
    lastActiveAt: "2026-10-30T08:40:00Z",
  },
  {
    id: "emp-2",
    name: "Sage",
    role: "SEO Specialist",
    description: "Owns organic search: keyword research, on-page SEO and content briefs.",
    status: "idle",
    projectIds: ["proj-2"],
    kpi: "Google Search Console: 100k impressions and 3k organic clicks per month.",
    lastActiveAt: "2026-10-29T17:10:00Z",
  },
  {
    id: "emp-3",
    name: "Gus",
    role: "Growth Marketer",
    description: "Runs growth experiments on onboarding and referral loops.",
    status: "paused",
    projectIds: ["proj-1", "proj-2"],
    kpi: "500 weekly sign-ups (Google Analytics).",
    lastActiveAt: "2026-10-24T12:00:00Z",
  },
];

export const MOCK_ISSUES: Issue[] = [
  {
    id: "iss-1",
    key: "MC-1",
    title: "Set up authentication with email magic links",
    description: `Users should be able to sign in with a one-time link sent to their email.

## Acceptance criteria

- Sign-in page with a single email field
- Magic link expires after **15 minutes**
- Redirect to \`/issues\` after sign-in`,
    status: "in_progress",
    priority: "high",
    assigneeId: "emp-1",
    projectId: "proj-1",
    position: 1,
    createdByUserId: "user-1",
    createdByEmployeeId: null,
    createdAt: "2026-10-20T09:12:00Z",
  },
  {
    id: "iss-2",
    key: "MC-2",
    title: "Keyword research for “AI agent management”",
    description: `Find 20–30 keywords around *AI agent management* and *AI digital employees*.

For each keyword, record:

1. Monthly search volume
2. Keyword difficulty
3. Search intent`,
    status: "todo",
    priority: "medium",
    assigneeId: "emp-2",
    projectId: "proj-2",
    position: 2,
    createdByUserId: "user-1",
    createdByEmployeeId: null,
    createdAt: "2026-10-22T14:30:00Z",
  },
  {
    id: "iss-3",
    key: "MC-3",
    title: "Write landing page meta titles and descriptions",
    description: "Titles under 60 characters, descriptions under 155. Use the keywords from MC-2.",
    status: "in_review",
    priority: "low",
    assigneeId: "emp-2",
    projectId: "proj-2",
    position: 3,
    createdByUserId: null,
    createdByEmployeeId: "emp-2",
    createdAt: "2026-10-24T08:05:00Z",
  },
  {
    id: "iss-4",
    key: "MC-4",
    title: "A/B test onboarding checklist",
    description: "",
    status: "backlog",
    priority: "medium",
    assigneeId: "emp-3",
    projectId: "proj-1",
    position: 4,
    createdByUserId: "user-1",
    createdByEmployeeId: null,
    createdAt: "2026-10-25T16:45:00Z",
  },
  {
    id: "iss-5",
    key: "MC-5",
    title: "Design kanban drag-and-drop interactions",
    description: "",
    status: "done",
    priority: "urgent",
    assigneeId: "emp-1",
    projectId: "proj-1",
    position: 5,
    createdByUserId: "user-1",
    createdByEmployeeId: null,
    createdAt: "2026-10-18T11:00:00Z",
  },
  {
    id: "iss-6",
    key: "MC-6",
    title: "Connect Google Search Console API",
    description: "Needed so Sage can read impressions and clicks for its KPIs.",
    status: "backlog",
    priority: "high",
    assigneeId: null,
    projectId: "proj-2",
    position: 6,
    createdByUserId: null,
    createdByEmployeeId: "emp-2",
    createdAt: "2026-10-27T10:20:00Z",
  },
];
