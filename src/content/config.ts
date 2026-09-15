// src/content/config.ts
import { z, defineCollection } from "astro:content";
import { colorMap } from "../utils/constants";

const colorKeys = Object.keys(colorMap) as [keyof typeof colorMap];

const projectCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        detail: z.string(),
        color: z.enum(colorKeys),
        funding: z.object({
            agency: z.string(),
            award: z.string().optional(),
            link: z.string().url().optional(),
        }).optional(),
    }),
});

const publicationCollection = defineCollection({
    schema: z.object({
        label: z.string(),
        title: z.string(),
        detail: z.string(),
        color: z.enum(colorKeys),
        link: z.string().url().optional(),
    }),
});

const peopleCollection = defineCollection({
    schema: z.object({
        name: z.string(),
        position: z.string(),
        role: z.string(),
        image: z.string().optional(),
        website: z.string().url().optional(),
    }),
});

const sectionsCollection = defineCollection({
    schema: z.object({
        title: z.string(), // optional if not needed in frontmatter
    }),
});

export const collections = {
    projects: projectCollection,
    publications: publicationCollection,
    people: peopleCollection,
    sections: sectionsCollection, // allows /sections/*.md with markdown content
};
