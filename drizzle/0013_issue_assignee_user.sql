ALTER TABLE "issues" ADD COLUMN "assignee_user_id" text;--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_assignee_user_id_users_id_fk" FOREIGN KEY ("assignee_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "issues_assignee_user_id_index" ON "issues" USING btree ("assignee_user_id");--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_single_assignee" CHECK ("issues"."assignee_id" is null or "issues"."assignee_user_id" is null);