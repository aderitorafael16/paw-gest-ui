DO $$ BEGIN
 CREATE TYPE "InstituteType" AS ENUM('primary', 'secundary', 'faculty', 'university', 'formationCenter');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "sessions" (
	"session_token" text PRIMARY KEY NOT NULL,
	"user_id" uuid NOT NULL,
	"expires" timestamp NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "verification_tokens" (
	"identifier" text NOT NULL,
	"token" text NOT NULL,
	"expires" timestamp NOT NULL,
	CONSTRAINT "verification_tokens_identifier_token_pk" PRIMARY KEY("identifier","token")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"institute_name" text,
	"type" "InstituteType" NOT NULL,
	"address" text NOT NULL,
	"phone_number" text NOT NULL,
	"website_url" text NOT NULL,
	"email" text NOT NULL,
	"email_verified" timestamp,
	"image" text,
	"password" text,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "accounts" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"user_id" uuid NOT NULL,
	"type" text NOT NULL,
	"provider" text NOT NULL,
	"provider_account_id" text NOT NULL,
	"scope" text,
	"access_token" text,
	"expires_at" integer,
	"id_token" text,
	"refresh_token" text,
	"session_state" text,
	"token_type" text
);
--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "verification_tokens_token_index" ON "verification_tokens" ("token");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "users_email_index" ON "users" ("email");--> statement-breakpoint
CREATE UNIQUE INDEX IF NOT EXISTS "accounts_provider_provider_account_id_index" ON "accounts" ("provider","provider_account_id");--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "sessions" ADD CONSTRAINT "sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE cascade ON UPDATE cascade;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
