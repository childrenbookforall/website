import { glob } from "astro/loaders";
import { z, defineCollection} from "astro:content";

const pastReadings = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/past-readings/" }),
    schema: z.object({
        title: z.string(),
        date: z.date(),
        formattedDate: z.string(),
        time: z.string(),
        tags: z.array(z.string()),
        description: z.string(),
        facilitators: z.array(z.string()),
        location: z.string(),
        bookCover: z.object({
            url: z.string(),
            alt: z.string()
          }),
        author: z.object({
            name: z.string(),
            url: z.string(),
            alt: z.string() 
        })
    })
});

const communityMembers = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md, mdx}', base: "./src/our-stories/" }),
    schema: z.object({
        name: z.string(),
        work: z.string(),
        description: z.string(),
        location: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
          }),
        date: z.string(),
        order: z.number()
    })
});

const activities = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/activities/" }),
    schema: z.object({
        title: z.string(),
        startDate: z.date(),
        lastUpdatedDate: z.date(),
        description: z.string(),
        location: z.string(),
        owner: z.object({
            name: z.string(),
            image: z.string()
        }),
        image: z.object({
            url: z.string(),
            alt: z.string()
          }),
    })
})

const sg_dsc = defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: "./src/sg-dsc/" }),
    schema: z.object({
    
    })
})

export const collections = {pastReadings, communityMembers, activities, sg_dsc}