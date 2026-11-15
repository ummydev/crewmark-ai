CREATE TABLE "issue_subscriptions" (
	"id" text PRIMARY KEY NOT NULL,
	"organization_id" text NOT NULL,
	"issue_id" text NOT NULL,
	"user_id" text,
	"employee_id" text,
	"notified_at" timestamp with time zone,
	"read_at" timestamp with time zone,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "issue_subscriptions_one_subscriber" CHECK (("issue_subscriptions"."user_id" is null) <> ("issue_subscriptions"."employee_id" is null))
);
--> statement-breakpoint
ALTER TABLE "issue_subscriptions" ADD CONSTRAINT "issue_subscriptions_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issue_subscriptions" ADD CONSTRAINT "issue_subscriptions_issue_id_issues_id_fk" FOREIGN KEY ("issue_id") REFERENCES "public"."issues"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issue_subscriptions" ADD CONSTRAINT "issue_subscriptions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issue_subscriptions" ADD CONSTRAINT "issue_subscriptions_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "issue_subscriptions_issue_id_user_id_index" ON "issue_subscriptions" USING btree ("issue_id","user_id");--> statement-breakpoint
CREATE UNIQUE INDEX "issue_subscriptions_issue_id_employee_id_index" ON "issue_subscriptions" USING btree ("issue_id","employee_id");--> statement-breakpoint
CREATE INDEX "issue_subscriptions_user_id_notified_at_index" ON "issue_subscriptions" USING btree ("user_id","notified_at");--> statement-breakpoint
CREATE INDEX "issue_subscriptions_employee_id_index" ON "issue_subscriptions" USING btree ("employee_id");--> statement-breakpoint
-- Issues already there: their creator, assignee and everyone who commented, as if the list had always been kept.
-- People only while they are members of the organization. Nothing starts out unread.
INSERT INTO "issue_subscriptions" ("id", "organization_id", "issue_id", "user_id", "employee_id")
SELECT gen_random_uuid()::text, s."organization_id", s."issue_id", s."user_id", s."employee_id"
FROM (
  SELECT "organization_id", "id" AS "issue_id", "created_by_user_id" AS "user_id", NULL::text AS "employee_id" FROM "issues"
  UNION SELECT "organization_id", "id", "assignee_user_id", NULL FROM "issues"
  UNION SELECT "organization_id", "id", NULL, "created_by_employee_id" FROM "issues"
  UNION SELECT "organization_id", "id", NULL, "assignee_id" FROM "issues"
  UNION SELECT "organization_id", "issue_id", "user_id", NULL FROM "issue_activity" WHERE "kind" = 'comment'
  UNION SELECT "organization_id", "issue_id", NULL, "employee_id" FROM "issue_activity" WHERE "kind" = 'comment'
) s
WHERE (s."user_id" IS NULL) <> (s."employee_id" IS NULL)
  AND (s."user_id" IS NULL OR EXISTS (
    SELECT 1 FROM "members" m WHERE m."organization_id" = s."organization_id" AND m."user_id" = s."user_id"
  ));
