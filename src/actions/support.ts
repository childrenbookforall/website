import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import {db, SGConfirmations} from 'astro:db'

const phoneRegex = new RegExp(`^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$`);

export const support = {
    addConfirmation: defineAction({
        accept: 'form',
        input: z.object({
          name: z.string(),
          email: z.string().email(),
          phone: z.string().regex(phoneRegex),
          startDate: z.coerce.date(),
          cost: z.number().gt(0),
          groupId: z.number()
        }),
        handler: async (input) => {
          const confirmation = {
            name: input.name,
            email: input.email,
            phone: input.phone,
            cost: input.cost,
            startDate: input.startDate,
            groupId: input.groupId
          }
          const updatedConfirmation = await db
            .insert(SGConfirmations)
            .values(confirmation)
            .returning();
    
          return updatedConfirmation;
        },
      }),
}