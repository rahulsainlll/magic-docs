import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const docsTable = pgTable("docs", {
  id: text("id").primaryKey().default("uuid_generate_v4()"),
  title: text("title").notNull(),
  description: text("description"),
  author: text("author").notNull(),
  content: text("content").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Docs = typeof docsTable.$inferSelect;
