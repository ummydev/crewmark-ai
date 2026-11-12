import "server-only";

import { and, eq } from "drizzle-orm";

import { db } from "@/db";
import { found } from "@/db/issues";
import { toProject } from "@/db/queries";
import { projects } from "@/db/schema";
import { PROJECT_EMOJIS, type Project } from "@/lib/types";
import { oneOf, text } from "@/lib/validate";

// Writing projects, shared by the dashboard's Server Functions and the CLI's API. Callers check that whoever asks
// belongs to the organization; these only touch that organization's rows.

export type ProjectPatch = Partial<Omit<Project, "id">>;

export async function insertProject(organizationId: string, name: unknown, emoji: unknown): Promise<Project> {
  const [row] = await db
    .insert(projects)
    .values({
      organizationId,
      name: text(name, "name", { required: true }).trim(),
      emoji: oneOf(emoji, PROJECT_EMOJIS, "emoji"),
    })
    .returning();
  return toProject(row);
}

export async function saveProject(organizationId: string, id: string, patch: ProjectPatch): Promise<void> {
  const values: Partial<typeof projects.$inferInsert> = {};
  if ("name" in patch) values.name = text(patch.name, "name", { required: true }).trim();
  if ("emoji" in patch) values.emoji = oneOf(patch.emoji, PROJECT_EMOJIS, "emoji");
  if (Object.keys(values).length === 0) return;
  found(
    await db
      .update(projects)
      .set(values)
      .where(and(eq(projects.id, text(id, "id", { required: true })), eq(projects.organizationId, organizationId)))
      .returning({ id: projects.id }),
  );
}
