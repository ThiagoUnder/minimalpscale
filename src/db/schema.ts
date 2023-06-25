import { mysqlTable, char, varchar, text, tinyint, timestamp, boolean } from "drizzle-orm/mysql-core";

export const notes = mysqlTable("notes", {
  id: char("id", { length: 36 }).primaryKey(),
  content: text("content"),
  completed: boolean("completed").default(false),
  lastModified: timestamp("created_at").defaultNow(),
  user_id: char("user_id", { length: 36 }),
});

export const users = mysqlTable("users", {
  id: char("id", { length: 36 }).primaryKey(),
  clerk_id: varchar("clerk_id", { length: 255 }),
});
