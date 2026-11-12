CREATE TABLE "users" (
	"id" text PRIMARY KEY NOT NULL,
	"username" text NOT NULL,
	"email" text NOT NULL,
	"profile_image" text,
	CONSTRAINT "users_username_unique" UNIQUE("username"),
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
-- Carry members over as users. Members had no email, so each gets a placeholder to replace later.
INSERT INTO "users" ("id", "username", "email")
SELECT "id", lower("name"), lower("name") || '@example.com' FROM "members";--> statement-breakpoint
ALTER TABLE "issues" ADD COLUMN "created_by_user_id" text;--> statement-breakpoint
ALTER TABLE "issues" ADD COLUMN "created_by_employee_id" text;--> statement-breakpoint
-- creator_id held either a member id or an employee id; split it into the matching column.
UPDATE "issues" SET "created_by_employee_id" = "creator_id"
WHERE "creator_id" IN (SELECT "id" FROM "employees");--> statement-breakpoint
UPDATE "issues" SET "created_by_user_id" = "creator_id"
WHERE "creator_id" IN (SELECT "id" FROM "users");--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_created_by_user_id_users_id_fk" FOREIGN KEY ("created_by_user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_created_by_employee_id_employees_id_fk" FOREIGN KEY ("created_by_employee_id") REFERENCES "public"."employees"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issues" DROP COLUMN "creator_id";--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_single_creator" CHECK ("issues"."created_by_user_id" is null or "issues"."created_by_employee_id" is null);--> statement-breakpoint
ALTER TABLE "members" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "members" CASCADE;
