CREATE TYPE "public"."agent_runtime" AS ENUM('claude-code', 'codex');--> statement-breakpoint
CREATE TYPE "public"."employee_status" AS ENUM('working', 'idle', 'paused');--> statement-breakpoint
CREATE TYPE "public"."issue_priority" AS ENUM('urgent', 'high', 'medium', 'low', 'none');--> statement-breakpoint
CREATE TYPE "public"."issue_status" AS ENUM('backlog', 'todo', 'in_progress', 'in_review', 'done');--> statement-breakpoint
CREATE TABLE "employee_projects" (
	"employee_id" text NOT NULL,
	"project_id" text NOT NULL,
	CONSTRAINT "employee_projects_employee_id_project_id_pk" PRIMARY KEY("employee_id","project_id")
);
--> statement-breakpoint
CREATE TABLE "employees" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"role" text DEFAULT '' NOT NULL,
	"runtime" "agent_runtime" DEFAULT 'claude-code' NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"kpi" text DEFAULT '' NOT NULL,
	"status" "employee_status" DEFAULT 'idle' NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "issues" (
	"id" text PRIMARY KEY NOT NULL,
	"number" integer GENERATED ALWAYS AS IDENTITY (sequence name "issues_number_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" text NOT NULL,
	"description" text DEFAULT '' NOT NULL,
	"status" "issue_status" DEFAULT 'todo' NOT NULL,
	"priority" "issue_priority" DEFAULT 'medium' NOT NULL,
	"position" double precision NOT NULL,
	"assignee_id" text,
	"project_id" text,
	"creator_id" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "issues_number_unique" UNIQUE("number")
);
--> statement-breakpoint
CREATE TABLE "members" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "employee_projects" ADD CONSTRAINT "employee_projects_employee_id_employees_id_fk" FOREIGN KEY ("employee_id") REFERENCES "public"."employees"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "employee_projects" ADD CONSTRAINT "employee_projects_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_assignee_id_employees_id_fk" FOREIGN KEY ("assignee_id") REFERENCES "public"."employees"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "issues" ADD CONSTRAINT "issues_project_id_projects_id_fk" FOREIGN KEY ("project_id") REFERENCES "public"."projects"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "employee_projects_project_id_index" ON "employee_projects" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "issues_project_id_index" ON "issues" USING btree ("project_id");--> statement-breakpoint
CREATE INDEX "issues_assignee_id_index" ON "issues" USING btree ("assignee_id");--> statement-breakpoint
CREATE INDEX "issues_position_index" ON "issues" USING btree ("position");