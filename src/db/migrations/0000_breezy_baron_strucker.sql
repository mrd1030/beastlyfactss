CREATE TABLE `cached_entries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`source_id` text NOT NULL,
	`title` text NOT NULL,
	`excerpt` text,
	`body` text,
	`category` text,
	`image_url` text,
	`cached_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `cached_entries_source_id_unique` ON `cached_entries` (`source_id`);--> statement-breakpoint
CREATE TABLE `care_tasks` (
	`id` text PRIMARY KEY NOT NULL,
	`pet_id` text NOT NULL,
	`task_type` text NOT NULL,
	`interval_days` integer NOT NULL,
	`next_due_date` text NOT NULL,
	`last_completed_date` text,
	`label` text,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `daily_fact_log` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`entry_id` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `daily_fact_log_date_unique` ON `daily_fact_log` (`date`);--> statement-breakpoint
CREATE TABLE `discovered_species` (
	`entry_id` text PRIMARY KEY NOT NULL,
	`discovered` integer DEFAULT false NOT NULL,
	`unlock_method` text,
	`unlocked_at` text,
	`rarity_tier` text,
	`artwork_url` text
);
--> statement-breakpoint
CREATE TABLE `favorites` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`entry_id` text NOT NULL,
	`added_at` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `favorites_entry_id_unique` ON `favorites` (`entry_id`);--> statement-breakpoint
CREATE TABLE `husbandry_log_entries` (
	`id` text PRIMARY KEY NOT NULL,
	`pet_id` text NOT NULL,
	`note` text NOT NULL,
	`timestamp` text NOT NULL,
	`photo_uri` text,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `pets` (
	`id` text PRIMARY KEY NOT NULL,
	`nickname` text NOT NULL,
	`photo_uri` text,
	`linked_entry_id` text,
	`acquired_date` text,
	`created_at` text NOT NULL
);
--> statement-breakpoint
CREATE TABLE `streak_state` (
	`id` integer PRIMARY KEY DEFAULT 1 NOT NULL,
	`current_streak` integer DEFAULT 0 NOT NULL,
	`longest_streak` integer DEFAULT 0 NOT NULL,
	`last_active_date` text
);
