// Seeds an empty database with the demo data from src/lib/mock-data.ts: one organization owned by the demo user.
// Usage: npm run db:seed (local database) or npm run db:seed:neon.
// Safe to re-run: tables that already have rows are skipped.

import { count } from "drizzle-orm";
import { drizzle } from "drizzle-orm/node-postgres";

import * as schema from "../src/db/schema";
import { loadDatabaseUrl } from "./db-env";
import {
  DEMO_ORGANIZATION,
  DEMO_USER,
  MOCK_EMPLOYEES,
  MOCK_ISSUES,
  MOCK_PROJECTS,
  MOCK_USERS,
} from "../src/lib/mock-data";

const db = drizzle({
  connection: loadDatabaseUrl(),
  schema,
  casing: "snake_case",
});

const organizationId = DEMO_ORGANIZATION.id;

async function isEmpty(
  table:
    | typeof schema.users
    | typeof schema.organizations
    | typeof schema.projects
    | typeof schema.employees
    | typeof schema.issues,
) {
  const [{ n }] = await db.select({ n: count() }).from(table);
  return n === 0;
}

async function main() {
  if (await isEmpty(schema.users)) {
    await db.insert(schema.users).values(MOCK_USERS);
    console.log(`users: inserted ${MOCK_USERS.length}`);
  } else console.log("users: already seeded");

  if (await isEmpty(schema.organizations)) {
    await db.insert(schema.organizations).values(DEMO_ORGANIZATION);
    await db.insert(schema.members).values({ organizationId, userId: DEMO_USER.id, role: "owner" });
    console.log(`organizations: inserted ${DEMO_ORGANIZATION.slug}, owned by ${DEMO_USER.username}`);
  } else console.log("organizations: already seeded");

  if (await isEmpty(schema.projects)) {
    await db.insert(schema.projects).values(MOCK_PROJECTS.map((p) => ({ ...p, organizationId })));
    console.log(`projects: inserted ${MOCK_PROJECTS.length}`);
  } else console.log("projects: already seeded");

  if (await isEmpty(schema.employees)) {
    await db.insert(schema.employees).values(
      MOCK_EMPLOYEES.map(({ projectIds, lastActiveAt, ...e }) => ({
        ...e,
        organizationId,
        lastActiveAt: lastActiveAt ? new Date(lastActiveAt) : null,
      })),
    );
    const links = MOCK_EMPLOYEES.flatMap((e) => e.projectIds.map((projectId) => ({ employeeId: e.id, projectId })));
    await db.insert(schema.employeeProjects).values(links);
    console.log(`employees: inserted ${MOCK_EMPLOYEES.length} (+${links.length} project links)`);
  } else console.log("employees: already seeded");

  if (await isEmpty(schema.issues)) {
    await db.insert(schema.issues).values(
      // The number comes from the mock key, so MC-3 stays MC-3.
      MOCK_ISSUES.map(({ key, createdAt, assigneeId, nextRecurAt, ...issue }) => ({
        ...issue,
        // The demo issues are all assigned to employees.
        assigneeEmployeeId: assigneeId,
        organizationId,
        number: Number(key.slice(3)),
        createdAt: new Date(createdAt),
        nextRecurAt: nextRecurAt ? new Date(nextRecurAt) : null,
      })),
    );
    console.log(`issues: inserted ${MOCK_ISSUES.length}`);
  } else console.log("issues: already seeded");

  await db.$client.end();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
