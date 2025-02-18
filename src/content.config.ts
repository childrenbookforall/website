import { glob } from "astro/loaders";
import { z, defineCollection} from "astro:content";

const pastReadings = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/past-readings/" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        time: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        facilitators: z.array(z.string()),
        location: z.string(),
        bookCover: z.object({
            url: z.string(),
            alt: z.string()
          })
    })
});

const communityMembers = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/our-stories/" }),
    schema: z.object({
        name: z.string(),
        description: z.string(),
        location: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
          })
    })
});

export const collections = {pastReadings, communityMembers}