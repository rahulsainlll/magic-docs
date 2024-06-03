import { faker } from "@faker-js/faker";
import { neon } from "@neondatabase/serverless";
// import { Index } from "@upstash/vector";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
// import { vectorize } from "../lib/vectorize"; 
import { docsTable } from "./schema";

dotenv.config();
 
// const index = new Index();

async function main() {
  const connector = neon(process.env.DATABASE_URL!);
  const db = drizzle(connector);

  const docs: (typeof docsTable.$inferInsert)[] = [];

  const docTitles = [
    "Introduction to TypeScript",
    "Advanced JavaScript Techniques",
    "Understanding React Hooks",
    "Building Scalable Node.js Applications",
    "Database Design Principles",
    "RESTful API Development",
    "GraphQL for Beginners",
    "Microservices Architecture",
    "Frontend Performance Optimization",
    "Backend Security Best Practices",
  ];

  docTitles.forEach((title, i) => {
    docs.push({
      id: faker.string.uuid(),
      title,
      description: faker.lorem.sentences(2),
      author: faker.person.fullName(),
      content: faker.lorem.paragraphs(5),
    });
  });

  docs.forEach(async (doc) => {
    await db.insert(docsTable).values(doc).onConflictDoNothing();

    // await index.upsert({
    //   id: doc.id!,
    //   vector: await vectorize(`${doc.title}: ${doc.description}`),
    //   metadata: {
    //     id: doc.id,
    //     title: doc.title,
    //     description: doc.description,
    //     author: doc.author,
    //     content: doc.content,
    //     createdAt: doc.createdAt,
    //     updatedAt: doc.updatedAt,
    //   },
    // });
  });
}

main();
