CREATE TABLE `todos` (
	`id` varchar(36) NOT NULL DEFAULT UUID(),
	`user_id` varchar(36) NOT NULL,
	`title` varchar(500) NOT NULL,
	`description` varchar(1000),
	`completed` boolean DEFAULT false,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp DEFAULT (now()),
	CONSTRAINT `todos_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `todos` ADD CONSTRAINT `todos_user_id_user_id_fk` FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON DELETE cascade ON UPDATE no action;