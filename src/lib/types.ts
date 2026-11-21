/** "needs_action" (MC-263): waiting for a person to do something, e.g. grant a permission or give information. */
export type IssueStatus = "backlog" | "todo" | "in_progress" | "needs_action" | "done";

export type IssuePriority = "urgent" | "high" | "medium" | "low" | "none";

/**
 * The coding agents, besides Claude Code and Codex, that Crewmark reaches through acpx (MC-417): an employee in one is
 * a session of it the crewmark daemon keeps. Kept in step with acpAgents in cli/acp.go.
 */
export const ACP_AGENTS = [
  { value: "opencode", label: "OpenCode" },
  { value: "deepseek-harness", label: "DeepSeek Harness" },
  { value: "gemini", label: "Gemini CLI" },
  { value: "cursor", label: "Cursor" },
  { value: "copilot", label: "GitHub Copilot" },
  { value: "kimi", label: "Kimi Code" },
  { value: "qwen", label: "Qwen Code" },
  { value: "goose", label: "Goose" },
  { value: "kilocode", label: "Kilo Code" },
  { value: "droid", label: "Factory Droid" },
  { value: "devin", label: "Devin" },
  { value: "grok-build", label: "Grok Build" },
  { value: "iflow", label: "iFlow" },
  { value: "junie", label: "Junie" },
  { value: "kiro", label: "Kiro" },
  { value: "qoder", label: "Qoder" },
  { value: "trae", label: "Trae" },
  { value: "openclaw", label: "OpenClaw" },
  { value: "pi", label: "Pi" },
  { value: "ante", label: "Ante" },
  { value: "antigravity", label: "Google Antigravity" },
  { value: "fast-agent", label: "fast-agent" },
  { value: "fx", label: "fx" },
  { value: "mcode", label: "MCode" },
  { value: "mux", label: "Mux" },
  { value: "octomind", label: "Octomind" },
  { value: "pool", label: "Poolside" },
  { value: "zeroclaw", label: "ZeroClaw" },
] as const;
export type AcpAgent = (typeof ACP_AGENTS)[number]["value"];

export type AgentRuntime = "claude-code" | "codex" | AcpAgent | "other";

/** Whether an employee's agent is one Crewmark reaches through acpx. */
export function isAcpRuntime(runtime: string | null | undefined): runtime is AcpAgent {
  return ACP_AGENTS.some((a) => a.value === runtime);
}

export type EmployeeStatus = "working" | "idle" | "paused";

export interface Employee {
  id: string;
  name: string;
  /** Its avatar, shown on a light grey circle; one of EMPLOYEE_EMOJIS. */
  emoji: string;
  /** Free-text job title, e.g. "SEO Specialist". */
  role: string;
  /** What its agent runs in, as the agent reported when it connected; null until one connects. */
  runtime: AgentRuntime | null;
  description: string;
  /** Free-text KPIs handed to the agent, e.g. "Grow Google Search Console impressions to 100k / month". */
  kpi: string;
  status: EmployeeStatus;
  /** Projects this employee works on. */
  projectIds: string[];
  /** ISO timestamp of the agent's last run; null until it has run. */
  lastActiveAt: string | null;
  /** When it was archived (MC-305); null while it isn't. */
  archivedAt: string | null;
  /** How its conversation runs when Crewmark resumes it (MC-313); null for Claude Code's own settings. */
  agentSettings: AgentSettings | null;
  /** When Crewmark wakes its agent up to keep working; null until someone sets it up, which means off. */
  heartbeat: Heartbeat | null;
}

/**
 * How an employee's Claude Code conversation runs when the daemon resumes it in the background (MC-313): what's unset
 * is left to Claude Code (or the Claude app, for a conversation it has open). Its main folder isn't here: a
 * conversation belongs to the folder it started in.
 */
export interface AgentSettings {
  model?: AgentModel;
  effort?: AgentEffort;
  permissionMode?: AgentPermissionMode;
  /** Folders besides its own it may use (claude --add-dir), absolute paths on its computer. */
  addDirs?: string[];
}

export const AGENT_MODELS = {
  "claude-opus-5-5": "Opus 5.5",
  "claude-sonnet-5-5": "Sonnet 5.5",
  "claude-haiku-5-5": "Haiku 5.5",
  "claude-fable-5-1": "Fable 5.1",
} as const;
export type AgentModel = keyof typeof AGENT_MODELS;
/** How a conversation runs, as its computer reports (MC-319, MC-380): ids as Claude Code has them. */
export interface AppRun {
  model?: string;
  effort?: string;
  /** Read from the conversation's latest request: what it actually ran with last (MC-353, MC-380). */
  last?: boolean;
  /**
   * It's one of the Claude app's: messages go into the app, which runs it as it has it, so what's picked in Messages
   * applies only when Crewmark resumes it in the background (MC-380).
   */
  inApp?: boolean;
}

/** A model's name for people: "Opus 5.5" for claude-opus-5-5, whichever model the app names. */
export function modelName(id: string) {
  if (id in AGENT_MODELS) return AGENT_MODELS[id as AgentModel];
  const match = /^claude-([a-z]+)-(\d+)(?:-(\d+))?/.exec(id);
  if (!match) return id;
  const [, family, major, minor] = match;
  return `${family[0].toUpperCase()}${family.slice(1)} ${major}${minor ? `.${minor}` : ""}`;
}

export const AGENT_EFFORTS = ["low", "medium", "high", "xhigh", "max"] as const;
export type AgentEffort = (typeof AGENT_EFFORTS)[number];
/** Only those that work with nobody there to answer: a background run can't ask for permission. */
export const AGENT_PERMISSION_MODES = {
  auto: "Auto",
  acceptEdits: "Edit files only",
  plan: "Read only",
} as const;
export type AgentPermissionMode = keyof typeof AGENT_PERMISSION_MODES;
/** At most this many extra folders. */
export const MAX_ADD_DIRS = 10;

/**
 * Waking an employee's agent on a schedule: during its working hours, the crewmark CLI on the agent's computer
 * sends the prompt to its conversation every intervalMinutes, so it picks its work back up without anyone asking.
 */
export interface Heartbeat {
  enabled: boolean;
  /** Working hours, "HH:MM" in timeZone. An end before the start runs past midnight. */
  start: string;
  end: string;
  /** IANA time zone, e.g. "Asia/Shanghai". */
  timeZone: string;
  weekdaysOnly: boolean;
  intervalMinutes: number;
  /** What the agent is told each time; "" means the default prompt in `language` (see defaultHeartbeatPrompt). */
  prompt: string;
  /** The language of whoever set the heartbeat up, from their browser, e.g. "zh-CN"; picks the default prompt's. */
  language?: string;
}

/** The default heartbeat prompt in each language the site speaks (see i18n/routing.ts). */
export const DEFAULT_HEARTBEAT_PROMPTS = {
  en:
    "Use the crewmark CLI to check whether there are issues you should work on. If there aren't any, work out on " +
    "your own what to build next, add it to the backlog, and wait for the user to approve it before doing it.",
  zh: "用 crewmark CLI 看看还有没有你该做的 issue，如果没有的话，自主发现下一步应该做的功能加入 backlog，等用户批准后执行。",
  "zh-TW":
    "用 crewmark CLI 看看還有沒有你該做的 issue，如果沒有的話，自主發現下一步應該做的功能加入 backlog，等使用者核准後執行。",
  ja:
    "crewmark CLI で、取り組むべき issue が残っていないか確認してください。なければ、次に作るべき機能を自分で見つけて " +
    "backlog に追加し、ユーザーの承認を待ってから実行してください。",
  ko:
    "crewmark CLI로 해야 할 issue가 남아 있는지 확인하세요. 없다면 다음에 만들 기능을 스스로 찾아 backlog에 추가하고, " +
    "사용자가 승인하면 실행하세요.",
  es:
    "Usa la CLI de crewmark para ver si te quedan issues por hacer. Si no hay ninguno, descubre por tu cuenta qué " +
    "conviene construir después, añádelo al backlog y espera a que el usuario lo apruebe antes de hacerlo.",
  "pt-BR":
    "Use a CLI do crewmark para ver se ainda há issues para você fazer. Se não houver, descubra por conta própria o " +
    "que construir em seguida, adicione ao backlog e espere o usuário aprovar antes de executar.",
  fr:
    "Utilise la CLI crewmark pour voir s'il te reste des issues à traiter. S'il n'y en a pas, trouve par toi-même ce " +
    "qu'il faut construire ensuite, ajoute-le au backlog et attends que l'utilisateur l'approuve avant de le faire.",
  de:
    "Prüfe mit der crewmark-CLI, ob noch Issues für dich offen sind. Falls nicht, finde selbst heraus, was als " +
    "Nächstes gebaut werden sollte, leg es im Backlog an und warte, bis der Nutzer es freigibt, bevor du es umsetzt.",
} as const;

/** The default heartbeat prompt for a language tag like "zh-CN" or "pt-PT"; English for the ones the site lacks. */
export function defaultHeartbeatPrompt(language?: string): string {
  const tag = (language ?? "").toLowerCase();
  if (tag.startsWith("zh")) {
    return DEFAULT_HEARTBEAT_PROMPTS[/-(tw|hk|mo|hant)\b/.test(tag) ? "zh-TW" : "zh"];
  }
  if (tag.startsWith("pt")) return DEFAULT_HEARTBEAT_PROMPTS["pt-BR"];
  const base = tag.split("-")[0];
  return base in DEFAULT_HEARTBEAT_PROMPTS
    ? DEFAULT_HEARTBEAT_PROMPTS[base as keyof typeof DEFAULT_HEARTBEAT_PROMPTS]
    : DEFAULT_HEARTBEAT_PROMPTS.en;
}

export const HEARTBEAT_LIMITS = { minMinutes: 15, maxMinutes: 24 * 60, promptLength: 2000 };

/** Interval choices offered in the form; any whole number of minutes within HEARTBEAT_LIMITS also works. */
export const HEARTBEAT_INTERVALS = [15, 30, 60, 120, 240];

/** A new heartbeat: off, weekdays 9 to 6 in the given zone, hourly, with the default prompt in the given language. */
export function defaultHeartbeat(timeZone: string, language: string): Heartbeat {
  return {
    enabled: false,
    start: "09:00",
    end: "18:00",
    timeZone,
    weekdaysOnly: true,
    intervalMinutes: 60,
    prompt: "",
    language,
  };
}

export interface Project {
  id: string;
  name: string;
  /** The project's avatar, one of PROJECT_EMOJIS. */
  emoji: string;
}

/** A person with an account on Crewmark. */
export interface User {
  id: string;
  username: string;
  /** Full name from the Google account; "" when unknown. */
  name: string;
  email: string;
  /** Avatar URL. */
  profileImage: string | null;
}

/** A team on Crewmark; the dashboard shows one at a time, at /org/<slug>. */
export interface Organization {
  id: string;
  name: string;
  slug: string;
}

export type MemberRole = "owner" | "admin" | "member";

export const MEMBER_ROLES: { value: MemberRole; label: string }[] = [
  { value: "owner", label: "Owner" },
  { value: "admin", label: "Admin" },
  { value: "member", label: "Member" },
];

/** Owners and admins manage members and invitations; members work on projects, employees and issues. */
export function canManageMembers(role: string) {
  return role === "owner" || role === "admin";
}

export interface Member {
  id: string;
  role: MemberRole;
  user: User;
}

/** A computer where the crewmark CLI acts for the signed-in person, after `crewmark login`. */
export interface CliLogin {
  id: string;
  hostname: string;
  platform: string;
  createdAt: string;
  lastUsedAt: string | null;
}

/** An AI agent working as an employee from someone's computer, connected through the crewmark CLI. */
export interface AgentConnection {
  runtime: AgentRuntime | null;
  /** The agent's conversation that is the employee; null until the CLI reports it. */
  sessionId: string | null;
  hostname: string;
  /** Where the conversation runs. */
  workdir: string;
  /** ISO timestamps. */
  connectedAt: string;
  lastUsedAt: string | null;
}

/**
 * A computer of the person's that Crewmark can start an employee on (MC-292): its crewmark daemon is connected while
 * it's online, and the employee works in one of the folders employees already work in there.
 */
export interface Device {
  id: string;
  hostname: string;
  platform: string;
  /** The agents Crewmark can start an employee in there: Claude Code and those reached through acpx. */
  agents: ("claude-code" | AcpAgent)[];
  online: boolean;
  lastSeenAt: string | null;
  /** Folders employees worked in there, latest first. */
  folders: string[];
}

/** An invitation nobody has answered yet. */
export interface PendingInvitation {
  id: string;
  email: string;
  role: MemberRole;
  /** ISO timestamp. */
  expiresAt: string;
}

export interface Issue {
  id: string;
  key: string;
  title: string;
  /** Markdown. */
  description: string;
  status: IssueStatus;
  priority: IssuePriority;
  /** Who works on it: a digital employee's id or a person's (ids are unique across both). */
  assigneeId: string | null;
  projectId: string | null;
  /** Board order across all columns; lower comes first. */
  position: number;
  /** Set when a person filed the issue. */
  createdByUserId: string | null;
  /** Set when a digital employee filed the issue itself. */
  createdByEmployeeId: string | null;
  /** ISO timestamp. */
  createdAt: string;
  /** When it last changed: a field other than its place on the board, or a new comment (MC-263). */
  updatedAt: string;
  /** When it repeats, as iCalendar text (see lib/recurrence.ts); null for a one-off issue. */
  recurrence: string | null;
  /** ISO timestamp of when the schedule next comes round; null when it doesn't repeat. */
  nextRecurAt: string | null;
}

/** A message in a direct conversation between a person and an employee (MC-169). */
export interface DirectMessage {
  /** Counts up, so it orders the messages. */
  id: number;
  /** Written by the employee; else by the person. */
  fromEmployee: boolean;
  /** Markdown. */
  body: string;
  /** ISO timestamp. */
  createdAt: string;
}

/** The signed-in person's conversation with an employee, as the Messages list shows it. */
export interface DirectThread {
  id: string;
  employeeId: string;
  /** The latest message, or null before the first. */
  last: DirectMessage | null;
  /** Messages from the employee the person hasn't seen yet. */
  unread: number;
  /** ISO timestamp of the latest message. */
  lastMessageAt: string;
}

/** The issue properties whose changes show in its Activity. */
export const TRACKED_ISSUE_PROPERTIES = ["status", "priority", "assignee", "project", "repeat"] as const;
/**
 * What an Activity entry is: a comment, a change to a tracked property, or "recurred": Crewmark's own entry when the
 * schedule came round, with the status before and after (Done to Todo when it reopened the issue; unchanged when the
 * issue was still open and its employee was reminded).
 */
export type IssueActivityKind = "comment" | (typeof TRACKED_ISSUE_PROPERTIES)[number] | "recurred";

/** One entry in an issue's Activity: a comment, or a change to one of its tracked properties. */
export interface IssueActivity {
  /** Counts up, so it orders the entries. */
  id: number;
  issueId: string;
  kind: IssueActivityKind;
  /** Who did it, a person or a digital employee; both null once they're deleted. */
  userId: string | null;
  employeeId: string | null;
  /** A comment's text, in Markdown; "" for changes. */
  body: string;
  /** A change's value before and after: a status, a priority, an employee's or a project's id, or null for none. */
  from: string | null;
  to: string | null;
  /** ISO timestamp. */
  createdAt: string;
}

/** An issue in the signed-in person's Inbox (MC-200): one they follow, on which someone else did something. */
export interface InboxItem {
  issueId: string;
  /** The issue as it is now, for issues filed since the page loaded. */
  key: string;
  title: string;
  status: IssueStatus;
  /** ISO timestamp of when someone else last commented on or changed it. */
  notifiedAt: string;
  /** They haven't opened the issue since. */
  unread: boolean;
  /** What someone other than them did last; null when they were only assigned it as it was filed. */
  latest: IssueActivity | null;
}

export const ISSUE_STATUSES: { value: IssueStatus; label: string }[] = [
  { value: "backlog", label: "Backlog" },
  { value: "todo", label: "Todo" },
  { value: "in_progress", label: "In Progress" },
  { value: "needs_action", label: "Needs action" },
  { value: "done", label: "Done" },
];

export const ISSUE_PRIORITIES: { value: IssuePriority; label: string }[] = [
  { value: "urgent", label: "Urgent" },
  { value: "high", label: "High" },
  { value: "medium", label: "Medium" },
  { value: "low", label: "Low" },
  { value: "none", label: "No priority" },
];

/**
 * Replies in employees' work (MC-280): how many the signed-in person hasn't seen, and when each employee last replied
 * (ISO), by employee id.
 */
export interface WorkReplies {
  unread: Record<string, number>;
  repliedAt: Record<string, string>;
  /** The conversations the person pinned (MC-310): when each was pinned (ISO), by employee id. */
  pinned?: Record<string, string>;
}

/** The images that can be pasted into descriptions and comments, and the largest one. */
export const IMAGE_TYPES = ["image/png", "image/jpeg", "image/gif", "image/webp"];
export const MAX_IMAGE_BYTES = 10 * 1024 * 1024;

/** Where to upload a pasted image, and the link to put in the Markdown once it's there. */
export interface ImageUpload {
  /** /api/attachments/<id> */
  url: string;
  /** PUT the file here with these headers. */
  upload: { url: string; headers: Record<string, string> };
}

export const AGENT_RUNTIMES: { value: AgentRuntime; label: string }[] = [
  { value: "claude-code", label: "Claude Code" },
  { value: "codex", label: "Codex" },
  ...ACP_AGENTS,
  // Any other agent, which Crewmark can't send messages to.
  { value: "other", label: "Other" },
];

export const EMPLOYEE_STATUSES: Record<EmployeeStatus, string> = {
  working: "Working",
  idle: "Idle",
  paused: "Paused",
};

/** Quick picks shown under the role field of the "new employee" form. */
export const ROLE_SUGGESTIONS = [
  "Software Engineer",
  "Growth Marketer",
  "SEO Specialist",
  "Content Writer",
  "Product Manager",
  "Data Analyst",
  "Customer Support",
  "Designer",
];

/** Emoji a project can wear as its avatar; picked from a grid, so keep it a multiple of eight. */
export const PROJECT_EMOJIS = [
  "🚀", "📈", "🎯", "🧠", "💡", "🌱", "🧩", "🎨",
  "🛠️", "🔍", "📣", "✨", "📦", "🧪", "🌍", "📝",
  "💬", "⚡", "🔥", "🏆", "📊", "🧭", "🛰️", "🪴",
  "🌊", "🍀", "🦊", "🐙", "🎬", "📚", "💰", "🤖",
];

/**
 * One turn of an employee's conversation, as its daemon reads it from the agent's transcript (MC-186, cli/worklog.go):
 * what started it, what came in along the way, the steps it took and the reply it ended with.
 */
export interface WorkTurn {
  /** The agent's own number for the turn. */
  index: number;
  at: string;
  /** "human" (a person in the conversation), "peer" (another session: Crewmark's notices), "heartbeat", "task" (a
   * background task finished), "compact" (the conversation was summarised to go on) or "other". */
  origin: string;
  prompt: string;
  asides?: { origin: string; text: string; at: string }[];
  /** The last steps; stepCount counts them all. */
  steps: WorkStep[];
  stepCount: number;
  reply: string;
  repliedAt?: string;
  /** Whether the agent ended the turn, rather than still being at it (or having been stopped). */
  done: boolean;
  /** Pictures and videos the agent sent the person in the turn (MC-287), in the order it sent them. */
  files?: WorkFile[];
}

/**
 * A file the agent sent the person (Claude Code's SendUserFile). It stays on the employee's computer: the Work tab
 * reads it from there through the realtime Worker while that computer is on (MC-287).
 */
export interface WorkFile {
  /** What the Worker asks the employee's computer for it by. */
  id: string;
  name: string;
  /** "image" and "video" show, "markdown" opens as a page (MC-359); "file" is any other kind, only its name shows. */
  kind: "image" | "video" | "markdown" | "file";
  caption?: string;
  at: string;
  size?: number;
  /** Why it can't show: "missing" (no longer on that computer) or "unsupported". */
  problem?: "missing" | "unsupported";
  /**
   * On Pro (MC-359): the attachment the employee's computer uploaded it as, which opens from Crewmark's storage at
   * /api/attachments/<id>, with the computer on or off.
   */
  stored?: string;
}

/** A file the agent sent, as the media panel lists it (MC-318), with how a message about it names it for the agent. */
export interface ListedFile extends WorkFile {
  /** Its path in the conversation's folder, or just its name when it's elsewhere. */
  path: string;
}

export interface WorkStep {
  /** "text" for something it wrote along the way, "tool" for a tool it used. */
  kind: "text" | "tool";
  tool?: string;
  summary: string;
  result?: string;
  error?: boolean;
}

/**
 * Emoji an employee can wear as its avatar: creatures, so employees read apart from projects' objects. Picked from a
 * grid, so keep it a multiple of eight; a new employee gets the first one nobody in its organization wears yet.
 */
export const EMPLOYEE_EMOJIS = [
  "🐵", "🦉", "🐼", "🦄", "🐸", "🐳", "🦁", "🐧",
  "🐨", "🐯", "🐝", "🦋", "🐢", "🐬", "🦔", "🐰",
  "🐻", "🐱", "🐶", "🦜", "🦦", "🦩", "🐲", "🦕",
  "🐞", "🦭", "🐹", "🐮", "🐷", "🐺", "🦒", "🐿️",
];

export function runtimeLabel(runtime: AgentRuntime | null) {
  if (!runtime) return "Not connected";
  return AGENT_RUNTIMES.find((r) => r.value === runtime)?.label ?? runtime;
}
