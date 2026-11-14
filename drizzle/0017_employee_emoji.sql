ALTER TABLE "employees" ADD COLUMN "emoji" text DEFAULT '🐵' NOT NULL;--> statement-breakpoint
-- Employees already there: in each organization, in the order they were added, the next emoji of EMPLOYEE_EMOJIS.
UPDATE "employees" SET "emoji" = (ARRAY[
  '🐵', '🦉', '🐼', '🦄', '🐸', '🐳', '🦁', '🐧',
  '🐨', '🐯', '🐝', '🦋', '🐢', '🐬', '🦔', '🐰',
  '🐻', '🐱', '🐶', '🦜', '🦦', '🦩', '🐲', '🦕',
  '🐞', '🦭', '🐹', '🐮', '🐷', '🐺', '🦒', '🐿️'
])[(n.rank - 1) % 32 + 1]
FROM (
  SELECT "id", row_number() OVER (PARTITION BY "organization_id" ORDER BY "created_at", "id") AS rank FROM "employees"
) n
WHERE "employees"."id" = n."id";
