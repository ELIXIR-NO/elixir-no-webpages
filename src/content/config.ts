import { defineCollection, z } from 'astro:content';

const organisationCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		tags: z.array(z.string()).optional(),
		address: z
			.string()
			.transform(str => new Date(str))
			.optional(),
		map: z.string().optional(),
	}),
});
const newsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.string().optional(),
		img: z.string().optional(),
	}),
});

const servicesCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		img: z.string().optional(),
	}),
});

const projectsCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		img: z.string().optional(),
	}),
});

export const collections = {
	organisation: organisationCollection,
	news: newsCollection,
	services: servicesCollection,
	projects: projectsCollection,
};
