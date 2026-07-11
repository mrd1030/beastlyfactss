ALTER TABLE `husbandry_log_entries` ADD `title` text;
--> statement-breakpoint
ALTER TABLE `husbandry_log_entries` ADD `entry_type` text DEFAULT 'note' NOT NULL;
--> statement-breakpoint
ALTER TABLE `husbandry_log_entries` ADD `weight_grams` integer;
--> statement-breakpoint
ALTER TABLE `husbandry_log_entries` ADD `task_id` text;
