CREATE TABLE "devices" (
	"id" text PRIMARY KEY NOT NULL,
	"organization_id" text NOT NULL,
	"machine_id" text NOT NULL,
	"user_id" text,
	"hostname" text DEFAULT '' NOT NULL,
	"platform" text DEFAULT '' NOT NULL,
	"agents" jsonb DEFAULT '[]'::jsonb NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"last_seen_at" timestamp with time zone
);
--> statement-breakpoint
ALTER TABLE "agent_connections" ADD COLUMN "device_id" text;--> statement-breakpoint
ALTER TABLE "cli_keys" ADD COLUMN "device_id" text;--> statement-breakpoint
ALTER TABLE "cli_logins" ADD COLUMN "machine_id" text;--> statement-breakpoint
ALTER TABLE "devices" ADD CONSTRAINT "devices_organization_id_organizations_id_fk" FOREIGN KEY ("organization_id") REFERENCES "public"."organizations"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "devices" ADD CONSTRAINT "devices_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE UNIQUE INDEX "devices_organization_id_machine_id_index" ON "devices" USING btree ("organization_id","machine_id");--> statement-breakpoint
CREATE INDEX "devices_user_id_index" ON "devices" USING btree ("user_id");--> statement-breakpoint
ALTER TABLE "agent_connections" ADD CONSTRAINT "agent_connections_device_id_devices_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."devices"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "cli_keys" ADD CONSTRAINT "cli_keys_device_id_devices_id_fk" FOREIGN KEY ("device_id") REFERENCES "public"."devices"("id") ON DELETE set null ON UPDATE no action;