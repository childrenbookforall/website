import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { db, AwardRegistrations } from 'astro:db';

const phoneRegex = new RegExp(`^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$`);

export const award = {
    registerForAward: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            phone: z.string().transform(value => value.replaceAll(" ", "")).pipe(z.string().regex(phoneRegex))
        }),
        handler: async (input) => {
            const registration = {
                name: input.name,
                email: input.email,
                phone: input.phone,
            };

            const added = await db
                .insert(AwardRegistrations)
                .values(registration)
                .returning();

            return added;
        },
    }),
};
