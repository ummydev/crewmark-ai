CREATE TABLE "direct_messages" (
	"id" bigint PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "direct_messages_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 9223372036854775807 START WITH 1 CACHE 1),
	"organization_id" text NOT NULL,
	"thread_id" text NOT NULL,
	"from_employee" boolean NOT NULL,
	"body" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "direct_threads" (
	"id" text PRIMARY KEY NOT NULL,
	"organization_id" text NOT NULL,
	"user_id" text NOT NULL,
	"employee_id" text NOT NULL,
	"last_message_at" timestamp with time zone DEFAULT now() NOT NULL,
	"user_read_id" bigint DEFAULT 0 NOT NULL,
	"employee_read_id" bigint DEFAULT 0 NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "direct_messages" ADD CONSTRAINT "direct_messages_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "direct_messages" ADD CONSTRAINT "direct_messages_thread_id_direct_threads_id_fk" FOREIGN KEY ("thread_id") REFERENCES "public"."direct_threads"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "direct_threads" ADD CONSTRAINT "direct_threads_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "direct_threads" ADD CONSTRAINT "direct_threads_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "direct_threads" ADD CONSTRAINT "direct_threads_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "direct_messages_thread_id_id_index" ON "direct_messages" USING btree ("thread_id","id");--> statement-breakpoint
CREATE UNIQUE INDEX "direct_threads_user_id_employee_id_index" ON "direct_threads" USING btree ("user_id","employee_id");--> statement-breakpoint
CREATE INDEX "direct_threads_organization_id_index" ON "direct_threads" USING btree ("organization_id");--> statement-breakpoint
CREATE INDEX "direct_threads_employee_id_index" ON "direct_threads" USING btree ("employee_id");