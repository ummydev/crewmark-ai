-- MC-263: "In Review" becomes "Needs action" (an issue waiting for a person to act). Renaming the value keeps every
-- issue in it; drizzle-kit would recreate the type, which fails on the issues that have it.
ALTER TYPE "public"."issue_status" RENAME VALUE 'in_review' TO 'needs_action';--> statement-breakpoint
-- Their Activity names the new value too, so old status changes still show its label.
UPDATE "issue_activity" SET "from_value" = 'needs_action' WHERE "kind" IN ('status', 'recurred') AND "from_value" = 'in_review';--> statement-breakpoint
UPDATE "issue_activity" SET "to_value" = 'needs_action' WHERE "kind" IN ('status', 'recurred') AND "to_value" = 'in_review';
