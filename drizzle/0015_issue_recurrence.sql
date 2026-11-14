ALTER TABLE "issues" ADD COLUMN "recurrence" text;--> statement-breakpoint
ALTER TABLE "issues" ADD COLUMN "next_recur_at" timestamp with time zone;--> statement-breakpoint
CREATE INDEX "issues_organization_id_next_recur_at_index" ON "issues" USING btree ("organization_id","next_recur_at");