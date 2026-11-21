ALTER TABLE "attachments" ADD COLUMN "source" text DEFAULT 'pasted' NOT NULL;--> statement-breakpoint
ALTER TABLE "organizations" ADD COLUMN "plan" text DEFAULT 'free' NOT NULL;--> statement-breakpoint
CREATE INDEX "attachments_organization_id_source_created_at_index" ON "attachments" USING btree ("organization_id","source","created_at");