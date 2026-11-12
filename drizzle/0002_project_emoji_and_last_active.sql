ALTER TABLE "employees" ADD COLUMN "last_active_at" timestamp with time zone;--> statement-breakpoint
ALTER TABLE "projects" ADD COLUMN "emoji" text DEFAULT '🚀' NOT NULL;--> statement-breakpoint
-- Give existing projects varied avatars (hashtext & 7 picks one of the first eight), then the demo ones.
UPDATE "projects" SET "emoji" = (ARRAY['🚀','📈','🎯','🧠','💡','🌱','🧩','🎨'])[1 + (hashtext("id") & 7)];--> statement-breakpoint
UPDATE "projects" SET "emoji" = '🚀' WHERE "id" = 'proj-1';--> statement-breakpoint
UPDATE "projects" SET "emoji" = '📈' WHERE "id" = 'proj-2';
