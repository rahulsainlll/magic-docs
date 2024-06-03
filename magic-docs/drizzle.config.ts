
import { defineConfig } from "drizzle-kit";
export default {
  dialect: "postgresql", // "mysql" | "sqlite" | "postgresql"
  schema: "./src/db/schema.ts",
  dbCredentials: {
    url: process.env.DATABASE_URL,
  }
  
} 