import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: z.object({
    inProgress: z.boolean(),
    title: z.string(),
    description: z.string(),
    what: z.string(),
    features: z.array(z.string()),
    planned: z.array(z.string()),
    technologies: z.array(z.string()),
    screenshots: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string(),
          label: z.string(),
        }),
      )
      .optional(),
    link: z.string(),
    thumbnail: z.string().optional(),
    banner: z.string().optional(),
    github: z.string(),
    tags: z.array(z.string()),
    img_alt: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    shortTitle: z.string(),
    order: z.number(),
    icon: z.string().optional(),
    summary: z.string(),
    tags: z.array(z.string()).default([]),
	  featured: z.boolean().default(false),
	  what: z.string(),
	  focus: z.array(z.string()).default([]),
	  typicalWork: z.array(z.string()).default([]),
	  deliverables: z.array(z.string()).default([]),
	  href: z.string(),
thumbnail: z.string().optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
  services: servicesCollection,
};
