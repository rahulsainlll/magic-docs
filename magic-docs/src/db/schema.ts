import { pgTable , text } from "drizzle-orm/pg-core";

export const docsTable = pgTable("docs" , {
  id: text("id").primaryKey().default('uuid_generate_v4()'),
  title: text('title').notNull(),
  description: text('description'),
  author: text('author').notNull(),

})