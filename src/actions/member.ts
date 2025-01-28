import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import {db, Members, eq} from 'astro:db'

const phoneRegex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`);

export const member = {
    addMember: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string(),
            email: z.string().email(),
            phone: z.string().transform(value=> value.replaceAll(" ", "")).pipe(z.string().regex(phoneRegex))
        }),
        handler: async (input) => {
            const member = {
                name: input.name,
                email: input.email,
                phone: input.phone,
            }
            
            const addedMember = await db
                .insert(Members)
                .values(member)
                .returning();

            return addedMember;
        },
    }),
    updateMember: defineAction({
        accept: 'form',
        input: z.object({
            place: z.string().nullable(),
            message: z.string().nullable(),
            about: z.string().nullable(),
            connection: z.string().nullable(),
            email: z.string().email()
        }),
        handler: async (input) => {
            const memberUpdate = {
                place: input.place,
                message: input.message,
                about: input.about,
                connection: input.connection
            }
            const addedMember = await db
                .update(Members)
                .set(memberUpdate)
                .where(eq(Members.email, input.email))
                .returning();
            //Send a calendar invite to the gmail for the event

            return addedMember;
        },
    }),
}