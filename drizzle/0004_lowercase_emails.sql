-- Lowercase existing addresses first. If two users differ only in case this fails on users_email_unique: merge
-- them by hand, then rerun.
UPDATE "users" SET "email" = lower("email") WHERE "email" <> lower("email");--> statement-breakpoint
ALTER TABLE "users" ADD CONSTRAINT "users_email_lowercase" CHECK ("users"."email" = lower("users"."email"));
