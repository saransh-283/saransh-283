import { defineCollection, z } from "astro:content";

export const collections = {
  projects: defineCollection({
    schema: z.object({
      title: z.string(),
      summary: z.string(),
      cover: z.string(),
        stack: z.array(z.string()),
        why: z.string(),
        problem: z.string(),
        works: z.array(z.string()),
        missing: z.array(z.string())
    })
  })
};
