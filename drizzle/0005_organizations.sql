CREATE TABLE "invitations" (
	"id" text PRIMARY KEY NOT NULL,
	"organization_id" text NOT NULL,
	"email" text NOT NULL,
	"role" text,
	"status" text DEFAULT 'pending' NOT NULL,
	"expires_at" timestamp with time zone NOT NULL,
	"inviter_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "members" (
	"id" text PRIMARY KEY NOT NULL,
	"organization_id" text NOT NULL,
	"user_id" text NOT NULL,
	"role" text DEFAULT 'member' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "organizations" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"slug" text NOT NULL,
	"logo" text,
	"metadata" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "organizations_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
ALTER TABLE "issues" DROP CONSTRAINT "issues_number_unique";--> statement-breakpoint
ALTER TABLE "issues" ALTER COLUMN "number" DROP IDENTITY;--> statement-breakpoint
-- Until now everyone who signed in shared one set of projects, employees and issues. Move them into an
-- organization named Crewmark, with every existing user as an owner, as they all had full access. A database
-- without data gets no organization.
INSERT INTO "organizations" ("id", "name", "slug")
SELECT gen_random_uuid()::text, 'Crewmark', 'crewmark'
WHERE EXISTS (SELECT 1 FROM "projects") OR EXISTS (SELECT 1 FROM "employees") OR EXISTS (SELECT 1 FROM "issues");--> statement-breakpoint
INSERT INTO "members" ("id", "organization_id", "user_id", "role")
SELECT gen_random_uuid()::text, o."id", u."id", 'owner' FROM "organizations" o CROSS JOIN "users" u WHERE o."slug" = 'crewmark';--> statement-breakpoint
ALTER TABLE "employees" ADD COLUMN "organization_id" text;--> statement-breakpoint
ALTER TABLE "issues" ADD COLUMN "organization_id" text;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "organization_id" text;--> statement-breakpoint
UPDATE "employees" SET "organization_id" = (SELECT "id" FROM "organizations" WHERE "slug" = 'crewmark');--> statement-breakpoint
UPDATE "issues" SET "organization_id" = (SELECT "id" FROM "organizations" WHERE "slug" = 'crewmark');--> statement-breakpoint
UPDATE "projects" SET "organization_id" = (SELECT "id" FROM "organizations" WHERE "slug" = 'crewmark');--> statement-breakpoint
ALTER TABLE "employees" ALTER COLUMN "organization_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "issues" ALTER COLUMN "organization_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "projects" ALTER COLUMN "organization_id" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "sessions" ADD COLUMN "active_organization_id" text;--> statement-breakpoint
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "invitations" ADD CONSTRAINT "invitations_inviter_id_users_id_fk" FOREIGN KEY ("inviter_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "members" ADD CONSTRAINT "members_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "invitations_organization_id_index" ON "invitations" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "invitations_email_index" ON "invitations" USING btree ("email");--> statement-breakpoint
CREATE UNIQUE INDEX "members_organization_id_user_id_index" ON "members" USING btree ("organization_id","user_id");--> statement-breakpoint
CREATE INDEX "members_user_id_index" ON "members" USING btree ("user_id");--> statement-breakpoint
ALTER TABLE "employees" ADD CONSTRAINT "employees_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "projects" ADD CONSTRAINT "projects_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_active_organization_id_organizations_id_fk" FOREIGN KEY ("active_organization_id") REFERENCES "public"."organizations"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "employees_organization_id_index" ON "employees" USING btree ("organization_id");--> statement-breakpoint
CREATE UNIQUE INDEX "issues_organization_id_number_index" ON "issues" USING btree ("organization_id","number");--> statement-breakpoint
CREATE INDEX "projects_organization_id_index" ON "projects" USING btree ("organization_id");