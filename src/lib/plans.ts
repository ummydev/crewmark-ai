// What each plan gets (MC-359). On Free, the pictures, videos and Markdown files an agent sends stay on its computer
// and the Work tab reads them from there through the realtime Worker (MC-287), while that computer is on. On Pro,
// the computer uploads them to Crewmark's storage (Cloudflare R2) as they're sent, up to an allowance a month, and
// they open straight from there: faster, and with the computer off. Past the allowance they go back to the Worker
// until the month turns.
//
// Nobody can buy Pro yet: an organization is put on it by hand (organizations.plan) until Stripe is added. One whose
// owner's email is in PRO_EMAILS (comma-separated, on the server) is on Pro whatever its plan says (MC-369).

export type Plan = "free" | "pro";

const GB = 1024 ** 3;

export const PLANS: Record<Plan, { name: string; workFileBytes: number }> = {
  free: { name: "Free", workFileBytes: 0 },
  // 2 GB for now (MC-369, Alex 2026-11-12; was 10 GB).
  pro: { name: "Pro", workFileBytes: 2 * GB },
};

export function planOf(value: string | null | undefined): Plan {
  return value === "pro" ? "pro" : "free";
}

/** The types of file an agent sends that Pro keeps: pictures, videos and Markdown, as the CLI names them. */
export const WORK_FILE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/gif",
  "image/webp",
  "video/mp4",
  "video/quicktime",
  "video/webm",
  "text/markdown",
];

/** The most one file can be: what the attachments table's size holds, well under R2's 5 GB for one upload. */
export const MAX_WORK_FILE_BYTES = 2 * GB - 1;

/** When the month that counts began: the first of it, in UTC. */
export function monthStart(now = new Date()) {
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), 1));
}

/** When the allowance starts again. */
export function nextMonthStart(now = new Date()) {
  return new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1));
}

/** "1.2 GB", "340 MB". */
export function formatBytes(bytes: number) {
  if (bytes >= GB) return `${(bytes / GB).toFixed(bytes >= 10 * GB ? 0 : 1).replace(/\.0$/, "")} GB`;
  const MB = 1024 ** 2;
  if (bytes >= MB) return `${Math.round(bytes / MB)} MB`;
  return `${Math.ceil(bytes / 1024)} KB`;
}

/** An organization's plan and how much of this month's allowance it used, for its members to see. */
export interface WorkFileStorage {
  plan: Plan;
  limit: number;
  used: number;
  /** When the allowance starts again, ISO. */
  resetsAt: string;
}
