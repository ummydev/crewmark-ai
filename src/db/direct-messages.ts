import "server-only";

import { and, asc, desc, eq, gt, inArray, lt, sql } from "drizzle-orm";

import { db } from "@/db";
import { agentEvents, directMessages, directThreads, employees, members, users } from "@/db/schema";
import { pushMessages, pushToDaemons } from "@/lib/realtime";
import type { DirectMessage, DirectThread } from "@/lib/types";
import { NotFoundError, text } from "@/lib/validate";

// Direct conversations between a person and a digital employee (MC-169). The employee writes there only what the
// person needs to see, so it reads like a chat rather than the agent's working notes. There's one conversation per
// person and employee (a unique index), made when the first message is sent. A message from the person reaches the
// employee's agent at once, even while it's working (an urgent agent event); one from the employee shows in the
// dashboard's Messages, pushed to the person's open tabs. Callers check who's asking.

/** The two sides of a conversation. */
export type Pair = { userId: string; employeeId: string };
export type Side = "user" | "employee";

/** How many messages one read returns at most, the latest ones. */
const PAGE = 100;

/** How much of a message an agent is told; it reads the rest with `crewmark dm show`. */
const PREVIEW = 1500;

function toMessage(row: typeof directMessages.$inferSelect): DirectMessage {
  return { id: row.id, fromEmployee: row.fromEmployee, body: row.body, createdAt: row.createdAt.toISOString() };
}

/** Throws unless the person is a member of the organization and the employee is one of its employees. */
async function assertPair(organizationId: string, { userId, employeeId }: Pair) {
  const [[member], [employee]] = await Promise.all([
    db
      .select({ id: members.userId })
      .from(members)
      .where(and(eq(members.organizationId, organizationId), eq(members.userId, userId))),
    db
      .select({ id: employees.id })
      .from(employees)
      .where(and(eq(employees.organizationId, organizationId), eq(employees.id, employeeId))),
  ]);
  if (!member || !employee) throw new NotFoundError("Not found in this organization");
}

/** The pair's conversation, or null before their first message. */
async function findThread(organizationId: string, { userId, employeeId }: Pair) {
  const [thread] = await db
    .select()
    .from(directThreads)
    .where(
      and(
        eq(directThreads.organizationId, organizationId),
        eq(directThreads.userId, userId),
        eq(directThreads.employeeId, employeeId),
      ),
    );
  return thread ?? null;
}

/** Sends a message from one side of the pair to the other, starting their conversation if it's the first. */
export async function sendDirectMessage(
  organizationId: string,
  pair: Pair,
  from: Side,
  body: unknown,
): Promise<DirectMessage> {
  const markdown = text(body, "body", { required: true }).trim();
  await assertPair(organizationId, pair);
  const message = await db.transaction(async (tx) => {
    // The one conversation between them: made by whichever message comes first.
    await tx
      .insert(directThreads)
      .values({ organizationId, userId: pair.userId, employeeId: pair.employeeId })
      .onConflictDoNothing({ target: [directThreads.userId, directThreads.employeeId] });
    const [thread] = await tx
      .select({ id: directThreads.id })
      .from(directThreads)
      .where(and(eq(directThreads.userId, pair.userId), eq(directThreads.employeeId, pair.employeeId)))
      .for("update");
    const [row] = await tx
      .insert(directMessages)
      .values({ organizationId, threadId: thread.id, fromEmployee: from === "employee", body: markdown })
      .returning();
    // Whoever writes has seen the conversation up to their own message.
    await tx
      .update(directThreads)
      .set({ lastMessageAt: row.createdAt, ...(from === "user" ? { userReadId: row.id } : { employeeReadId: row.id }) })
      .where(eq(directThreads.id, thread.id));
    return row;
  });
  if (from === "user") await notifyEmployee(organizationId, pair, markdown);
  // The person's tabs show it: the employee's message, or their own sent from another tab or the CLI.
  pushMessages(organizationId);
  return toMessage(message);
}

/** Tells the employee's agent what the person wrote, at once, and how to answer. */
async function notifyEmployee(organizationId: string, { userId, employeeId }: Pair, body: string) {
  const [user] = await db.select({ name: users.name, username: users.username }).from(users).where(eq(users.id, userId));
  const name = user?.name || user?.username || "Someone";
  const preview = body.length > PREVIEW ? `${body.slice(0, PREVIEW)}…` : body;
  const message =
    `${name} sent you a direct message:\n\n${preview.replace(/^/gm, "> ")}\n\n` +
    `Answer with \`crewmark dm send --to "${name}" "<your reply>"\`: they read your direct messages, not this ` +
    `conversation. \`crewmark dm show "${name}"\` shows the whole thread.`;
  await db.insert(agentEvents).values({ organizationId, employeeId, type: "direct_message", message });
  pushToDaemons(organizationId, [employeeId], "events");
}

/**
 * The pair's latest messages, oldest first (before: only those before that id, for older pages), and marks them read
 * for `reader`. An empty list before their first message.
 */
export async function readDirectMessages(
  organizationId: string,
  pair: Pair,
  reader: Side,
  { before, markRead = true }: { before?: number; markRead?: boolean } = {},
): Promise<{ messages: DirectMessage[]; hasMore: boolean }> {
  await assertPair(organizationId, pair);
  const thread = await findThread(organizationId, pair);
  if (!thread) return { messages: [], hasMore: false };
  const rows = await db
    .select()
    .from(directMessages)
    .where(and(eq(directMessages.threadId, thread.id), before ? lt(directMessages.id, before) : undefined))
    .orderBy(desc(directMessages.id))
    .limit(PAGE + 1);
  const hasMore = rows.length > PAGE;
  const messages = rows.slice(0, PAGE).reverse().map(toMessage);
  const latest = messages.at(-1)?.id ?? 0;
  const read = reader === "user" ? thread.userReadId : thread.employeeReadId;
  if (markRead && !before && latest > read) {
    await db
      .update(directThreads)
      .set(reader === "user" ? { userReadId: latest } : { employeeReadId: latest })
      .where(eq(directThreads.id, thread.id));
    // The person's other tabs drop the unread count too.
    if (reader === "user") pushMessages(organizationId);
  }
  return { messages, hasMore };
}

/** The latest message of a conversation, and how many from the other side `reader` hasn't seen. */
function summary(reader: Side) {
  // Spelled out with table names: in a subquery Drizzle leaves columns unqualified, and "id" would be the message's.
  const read = reader === "user" ? "direct_threads.user_read_id" : "direct_threads.employee_read_id";
  const fromOther = reader === "user" ? "m.from_employee" : "not m.from_employee";
  return {
    unread: sql
      .raw(`(select count(*) from direct_messages m where m.thread_id = direct_threads.id and ${fromOther} and m.id > ${read})`)
      .mapWith(Number),
    lastId: sql.raw("(select max(m.id) from direct_messages m where m.thread_id = direct_threads.id)").mapWith(Number),
  };
}

async function lastMessages(ids: (number | null)[]) {
  const wanted = ids.filter((id): id is number => !!id);
  if (wanted.length === 0) return new Map<number, DirectMessage>();
  const rows = await db
    .select()
    .from(directMessages)
    .where(inArray(directMessages.id, wanted));
  return new Map(rows.map((row) => [row.id, toMessage(row)]));
}

/** The person's conversations in the organization, newest first. */
export async function directThreadsOfUser(organizationId: string, userId: string): Promise<DirectThread[]> {
  const rows = await db
    .select({ id: directThreads.id, employeeId: directThreads.employeeId, lastMessageAt: directThreads.lastMessageAt, ...summary("user") })
    .from(directThreads)
    .where(and(eq(directThreads.organizationId, organizationId), eq(directThreads.userId, userId)))
    .orderBy(desc(directThreads.lastMessageAt));
  const last = await lastMessages(rows.map((r) => r.lastId));
  return rows.map((r) => ({
    id: r.id,
    employeeId: r.employeeId,
    last: (r.lastId && last.get(r.lastId)) || null,
    unread: r.unread,
    lastMessageAt: r.lastMessageAt.toISOString(),
  }));
}

/** How many messages from employees the person hasn't seen, across their conversations in the organization. */
export async function unreadDirectMessages(organizationId: string, userId: string): Promise<number> {
  const [row] = await db
    .select({ count: sql<number>`count(*)`.mapWith(Number) })
    .from(directMessages)
    .innerJoin(directThreads, eq(directThreads.id, directMessages.threadId))
    .where(
      and(
        eq(directThreads.organizationId, organizationId),
        eq(directThreads.userId, userId),
        eq(directMessages.fromEmployee, true),
        gt(directMessages.id, directThreads.userReadId),
      ),
    );
  return row?.count ?? 0;
}

/** The employee's conversations with people, newest first, with what's unread for the employee. */
export async function directThreadsOfEmployee(organizationId: string, employeeId: string) {
  const rows = await db
    .select({ userId: directThreads.userId, lastMessageAt: directThreads.lastMessageAt, ...summary("employee") })
    .from(directThreads)
    .where(and(eq(directThreads.organizationId, organizationId), eq(directThreads.employeeId, employeeId)))
    .orderBy(desc(directThreads.lastMessageAt), asc(directThreads.createdAt));
  const last = await lastMessages(rows.map((r) => r.lastId));
  return rows.map((r) => ({
    userId: r.userId,
    last: (r.lastId && last.get(r.lastId)) || null,
    unread: r.unread,
    lastMessageAt: r.lastMessageAt.toISOString(),
  }));
}
