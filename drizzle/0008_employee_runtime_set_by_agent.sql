ALTER TABLE "employees" ALTER COLUMN "runtime" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "employees" ALTER COLUMN "runtime" DROP NOT NULL;--> statement-breakpoint
-- The runtime was picked by hand when making an employee. From now on it is what the employee's agent reports when
-- it connects, so keep it only for employees with a live agent and take that agent's value.
UPDATE "employees" SET "runtime" = (
  SELECT "runtime" FROM "agent_connections"
  WHERE "agent_connections"."employee_id" = "employees"."id" AND "agent_connections"."revoked_at" IS NULL
  ORDER BY "agent_connections"."created_at" DESC
  LIMIT 1
);
