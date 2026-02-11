import { defineCollection, z } from 'astro:content';

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
				})
			)
			.optional(),
		link: z.string(),
		thumbnail: z.string().optional(),
		github: z.string(),
		tags: z.array(z.string()),
		img_alt: z.string().optional(),
	}),
});

const servicesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		image: z.string().optional(),
		icon: z.string().optional(),
		tags: z.array(z.string()).default([]),
		order: z.number().optional(),
	}),
});

export const collections = {
	projects: projectsCollection,
	services: servicesCollection,
};
