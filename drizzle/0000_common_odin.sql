CREATE TABLE `notes` (
	`id` char(36) PRIMARY KEY NOT NULL,
	`content` text,
	`completed` boolean DEFAULT false,
	`created_at` timestamp DEFAULT (now()),
	`user_id` char(36));
--> statement-breakpoint
CREATE TABLE `users` (
	`id` char(36) PRIMARY KEY NOT NULL,
	`clerk_id` varchar(255));
