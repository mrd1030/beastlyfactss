CREATE TABLE `medication_plans` (
	`id` text PRIMARY KEY NOT NULL,
	`pet_id` text NOT NULL,
	`task_id` text NOT NULL,
	`medication_name` text NOT NULL,
	`dosage` text NOT NULL,
	`instructions` text,
	`stock_remaining` integer,
	`low_stock_threshold` integer,
	`created_at` text NOT NULL,
	`last_given_at` text,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `food_inventory_items` (
	`id` text PRIMARY KEY NOT NULL,
	`pet_id` text NOT NULL,
	`name` text NOT NULL,
	`quantity` integer DEFAULT 0 NOT NULL,
	`unit` text DEFAULT 'servings' NOT NULL,
	`low_stock_threshold` integer DEFAULT 0 NOT NULL,
	`notes` text,
	`updated_at` text NOT NULL,
	`last_used_at` text,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `pet_records` (
	`id` text PRIMARY KEY NOT NULL,
	`pet_id` text NOT NULL,
	`title` text NOT NULL,
	`record_type` text DEFAULT 'note' NOT NULL,
	`note` text,
	`photo_uri` text,
	`created_at` text NOT NULL,
	FOREIGN KEY (`pet_id`) REFERENCES `pets`(`id`) ON UPDATE no action ON DELETE cascade
);
