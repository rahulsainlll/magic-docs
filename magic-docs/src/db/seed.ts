import { faker } from "@faker-js/faker";
import { neon } from "@neondatabase/serverless";
 import { Index } from "@upstash/vector";
import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
//  import { vectorize } from '../lib/vectorize';
import { docsTable } from "./schema";

dotenv.config();
 
 const index = new Index();

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
  const docDescriptions = [
    "A comprehensive guide to getting started with TypeScript, a typed superset of JavaScript.",
    "Explore advanced concepts and techniques to write efficient and effective JavaScript code.",
    "Learn how to use React Hooks to manage state and lifecycle in functional components.",
    "Best practices and strategies for building scalable applications using Node.js.",
    "Key principles and best practices for designing robust and efficient databases.",
    "Step-by-step guide to developing RESTful APIs, including best practices and examples.",
    "An introduction to GraphQL, its core concepts, and how to get started with it.",
    "Understanding the principles of microservices and how to implement them in your architecture.",
    "Techniques and tools to optimize the performance of your frontend applications.",
    "Essential practices to ensure the security of your backend systems and data.",
  ];

  docTitles.forEach((title, i) => {
    docs.push({
      id: faker.string.uuid(),
      title,
      description: docDescriptions[i],
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
