CREATE TABLE "work_unread" (
	"organization_id" text NOT NULL,
	"user_id" text NOT NULL,
	"employee_id" text NOT NULL,
	"count" integer DEFAULT 0 NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "work_unread_user_id_employee_id_pk" PRIMARY KEY("user_id","employee_id")
);
--> statement-breakpoint
ALTER TABLE "employees" ADD COLUMN "last_reply_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "work_unread" ADD CONSTRAINT "work_unread_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "work_unread" ADD CONSTRAINT "work_unread_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "work_unread" ADD CONSTRAINT "work_unread_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "work_unread_employee_id_index" ON "work_unread" USING btree ("employee_id");--> statement-breakpoint
CREATE INDEX "work_unread_organization_id_index" ON "work_unread" USING btree ("organization_id");