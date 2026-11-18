-- MC-263: when each issue last changed, so the board can show the latest first.
ALTER TABLE "issues" ADD COLUMN "updated_at" timestamp with time zone DEFAULT now() NOT NULL;--> statement-breakpoint
-- Issues already there: changed last when their latest Activity (a change or a comment) happened, else when filed.
UPDATE "issues" SET "updated_at" = greatest("issues"."created_at", coalesce(a."at", "issues"."created_at"))
FROM (SELECT "issue_id", max("created_at") AS "at" FROM "issue_activity" GROUP BY "issue_id") a
WHERE a."issue_id" = "issues"."id";--> statement-breakpoint
UPDATE "issues" SET "updated_at" = "created_at"
WHERE NOT EXISTS (SELECT 1 FROM "issue_activity" WHERE "issue_activity"."issue_id" = "issues"."id");
