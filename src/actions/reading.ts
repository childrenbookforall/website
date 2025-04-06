import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import {db, ReadingConfirmations} from 'astro:db'

const phoneRegex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`);

export const reading = {
    addConfirmation: defineAction({
        accept: 'form',
        input: z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string().regex(phoneRegex),
          readingDate: z.coerce.date(),
          contribution: z.number(),
        }),
        handler: async (input) => {
          const confirmation = {
            name: input.name,
            email: input.email,
            phone: input.phone,
            contribution: input.contribution,
            readingDate: input.readingDate,
          }
          const updatedConfirmation = await db
            .insert(ReadingConfirmations)
            .values(confirmation)
            .returning();
          //Send a calendar invite to the gmail for the event
    
          return updatedConfirmation;
        },
      }),
}